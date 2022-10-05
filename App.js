import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Stack, Button } from "@react-native-material/core";
import ItemList from './common/ItemList';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const handleAdd=()=>{
    // list.push(value);
    // setList(list)
    // console.log(list);
    // setValue("")
    setList([...list,value])
    setValue("")
  }

  const handleDelete=(index)=>{
      const a = list.filter(function(item,indexItem) {
        return indexItem !== index
    })
    setList(a)
    console.log(list);
  
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={{width:300, height:50, borderWidth:1, borderColor:"#ccc",paddingLeft:20}}
        placeholder="Nhap Mon hoc"
        onChangeText={(value) => setValue(value)}
        value={value}
      />
      <Button style={{margin:10}} title="ADD" onPress={handleAdd}/>
      <ScrollView style={{height:400, maxHeight:500}}> 
        {
          list.map((e,index)=>{
            // return <ItemList name={e}/>
            return (
              <View style={{backgroundColor:"green", width:350, marginTop:10, height:50,padding:10, display:"flex",flexDirection:"row", justifyContent:"space-between" }}>
              <View>
                <Text style={{fontSize:20, color:"#fff"}}>{e}</Text>
              </View>
              <Button style={{width:90}} title="DELETE" onPress={()=>handleDelete(index)} />
            </View>
            )
          })
        }
        {/* <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList /> */}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
