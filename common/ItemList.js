import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Stack, Button } from "@react-native-material/core";

export default function ItemList({name}) {
  return (
    <View style={{backgroundColor:"#ccc", width:350, marginTop:10, height:50,padding:10, display:"flex",flexDirection:"row", justifyContent:"space-between" }}>
      <View>
        <Text style={{fontSize:20}}>{name}</Text>
      </View>
      <Button style={{width:90}} title="DELETE" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:5,
  },
});
