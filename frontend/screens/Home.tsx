import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation, officers }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Officer List</Text>
      <FlatList
        data={officers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('OfficerDetail', { officer: item })}
            style={{ marginBottom: 12, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, paddingBottom: 8 }}
          >
            {item.imageUri ? (
              <Image source={{ uri: item.imageUri }} style={{ width: 50, height: 50, marginRight: 12, borderRadius: 25 }} />
            ) : null}
            <View>
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Text style={{ color: 'gray' }}>SN: {item.sn}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
