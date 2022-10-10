import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Stack, Button } from "@react-native-material/core";
import ItemList from './common/ItemList';
import { useState,useEffect } from 'react';


export default function App() {
  const [value, setValue] = useState("");
  const [valueUpdate, setValueUpdate] = useState("")
  const [list, setList] = useState([]);
  const handleAdd=()=>{
    // console.log(valueUpdate);
    if(valueUpdate !== ""){
      // handleUpdateText(value)
      setList([].concat(list.map((x, index) => {
            return index == valueUpdate ? value : x;
           })))
      console.log("uopdate");
      setValueUpdate("")
    } else{
      setList([...list,value])
      setValue("")
    }
    // list.push(value);
    // setList(list)
    // console.log(list);
    // setValue("")
   
  }

  const handleDelete=(index)=>{
      const a = list.filter(function(item,indexItem) {
        return indexItem !== index
    })
    setList(a)
    console.log(list);
  }

  const handleUpdate=(index)=>{
    console.log(index);
    setValueUpdate(index)
    console.log(list[index]);
    // setValueUpdate(list[index])
  }
  useEffect(() => {
    // console.log(valueUpdate.name);
    setValue(list[valueUpdate])
  }, [valueUpdate])
  
  // const handleUpdateText = () => {
  //   console.log(valueUpdate);
  //   // setList([].concat(list.map((x, index) => {
  //   //   return index == valueUpdate.index ? value : x;
  //   //  })))
  //   // setValueUpdate(null)
  // }
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
              <Button style={{width:90}} title="UPDATE" onPress={()=>handleUpdate(index)} />
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
