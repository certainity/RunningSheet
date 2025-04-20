import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default function OfficerDetail({ route }) {
  const officer = route.params?.officer;

  if (!officer) return <Text style={{ padding: 20 }}>Officer not found.</Text>;

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{officer.name}'s Profile</Text>
      {officer.imageUri && (
        <Image source={{ uri: officer.imageUri }} style={{ width: 120, height: 120, borderRadius: 60, marginVertical: 10 }} />
      )}
      <Text>SN: {officer.sn}</Text>
      <Text>Rank: {officer.rank}</Text>
      <Text>Grade: {officer.grade}</Text>
      <Text>Squad: {officer.squad}</Text>
      <Text>Team: {officer.team}</Text>

      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Logs:</Text>
      {officer.logs.length === 0 ? (
        <Text>No logs added yet.</Text>
      ) : (
        officer.logs.map((log, index) => (
          <View key={index} style={{ marginTop: 10 }}>
            <Text>Date: {log.date}</Text>
            <Text>Type: {log.type}</Text>
            <Text>Details: {log.detail}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}
