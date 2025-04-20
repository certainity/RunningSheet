import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';

export default function AddOfficer({ officers, setOfficers }) {
  const [form, setForm] = useState({
    name: '', sn: '', rank: '', grade: '', squad: '', team: '', imageUri: ''
  });

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.canceled) {
      setForm({ ...form, imageUri: result.assets[0].uri });
    }
  };

  const handleSubmit = () => {
    if (form.name.trim() === '') return;
    const newOfficer = { ...form, id: uuid.v4(), logs: [] };
    setOfficers([...officers, newOfficer]);
    setForm({ name: '', sn: '', rank: '', grade: '', squad: '', team: '', imageUri: '' });
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Add Officer</Text>
      {['name', 'sn', 'rank', 'grade', 'squad', 'team'].map((field) => (
        <TextInput
          key={field}
          placeholder={field.toUpperCase()}
          value={form[field]}
          onChangeText={(val) => setForm({ ...form, [field]: val })}
          style={{ borderWidth: 1, padding: 8, marginBottom: 10, borderRadius: 6 }}
        />
      ))}
      <Button title="Pick Profile Image" onPress={pickImage} />
      {form.imageUri !== '' && <Image source={{ uri: form.imageUri }} style={{ width: 100, height: 100, marginVertical: 10 }} />}
      <Button title="Save Officer" onPress={handleSubmit} />
    </ScrollView>
  );
}
