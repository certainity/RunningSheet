import React from 'react';
import { View, Text } from 'react-native';

export default function OfficerProfile({ officer }) {
  if (!officer) {
    return (
      <View style={{ padding: 20 }}>
        <Text>No officer selected.</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{officer.name}'s Dashboard</Text>
      <Text>Coming soon: incident summary, leave stats, etc.</Text>
    </View>
  );
}
