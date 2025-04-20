import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const backendUrl = 'https://your-backend-url.up.railway.app'; // replace with actual

export default function OfficerProfile() {
  const [profile, setProfile] = useState({
    name: 'Ahmed Hussain',
    sn: '4489',
    rank: 'Inspector Of police',
    grade: '1',
    squad: 'B',
    team: '1'
  });

  const [stats, setStats] = useState({
    annual: 20,
    medical: 1,
    release: 1,
    late: 3
  });

  const [logType, setLogType] = useState('Late');
  const [logText, setLogText] = useState('');
  const [logDate, setLogDate] = useState('');
  const [logs, setLogs] = useState([]);

  const handleAddLog = () => {
    const newLog = { date: logDate, type: logType, detail: logText };
    setLogs([...logs, newLog]);
    setLogDate('');
    setLogText('');
  };

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Profile of Officers Page</Text>
      <Text>Name: {profile.name}</Text>
      <Text>SN: {profile.sn}</Text>
      <Text>Rank: {profile.rank}</Text>
      <Text>Grade: {profile.grade}</Text>
      <Text>Squad: {profile.squad}</Text>
      <Text>Team: {profile.team}</Text>

      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Stats</Text>
      <Text>Annual Leave: {stats.annual}</Text>
      <Text>Medical Leave: {stats.medical}</Text>
      <Text>Release: {stats.release}</Text>
      <Text>Duty Late: {stats.late}</Text>

      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Add Incident Log</Text>
      <TextInput
        placeholder="Date (e.g. 12/2/2025)"
        value={logDate}
        onChangeText={setLogDate}
        style={{ borderWidth: 1, marginBottom: 5 }}
      />
      <Picker
        selectedValue={logType}
        style={{ height: 40 }}
        onValueChange={(itemValue) => setLogType(itemValue)}
      >
        <Picker.Item label="Late" value="Late" />
        <Picker.Item label="Annual Leave" value="Annual Leave" />
        <Picker.Item label="Medical Leave" value="Medical Leave" />
        <Picker.Item label="Release" value="Release" />
      </Picker>
      <TextInput
        placeholder="Details of Incident"
        value={logText}
        onChangeText={setLogText}
        style={{ borderWidth: 1, marginBottom: 5 }}
      />
      <Button title="Add Log" onPress={handleAddLog} />

      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Incident Logs</Text>
      {logs.map((log, index) => (
        <Text key={index}>{log.date} | {log.type} | {log.detail}</Text>
      ))}
    </View>
  );
}
