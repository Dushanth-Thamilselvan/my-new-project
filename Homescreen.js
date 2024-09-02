import React from 'react';
import { StyleSheet, Text,font, View,StatusBar, Button,Image, FlatList,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';




const Stack = createStackNavigator();

const DATA = [
    { id: '1', title: 'Organization Name', image:require('./assets/image1.png') },
    { id: '2', title: 'Organization Name', image:require('./assets/image2.png') },
    { id: '3', title: 'Organization Name', image:require('./assets/image3.png') },
    { id: '4', title: 'Organization Name', image:require('./assets/image4.jpg') },
]
const Item = ({ title,image, onPress}) => (
    <View style={styles.item}>
        <View style={styles.img}></View>
        <Image source={image} style={styles.itemImage} /> 
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Interested</Text>
    </TouchableOpacity>
      
   </View>
)
const handlePress = (title) => {
  Alert.alert('Button Pressed', `You pressed ${title}`);
};

export default function HomeScreen() {

    
  return (

    <View style={styles.container}>
    <StatusBar hidden={true} />
      
      <Image
        source={require('./assets/logo1.png')} 
        style={styles.image}
      />
      <Image
        source={require('./assets/Finger.png')} 
        style={styles.image1}/>
       <View style={styles.container1} />  

       <FlatList
  data={DATA}
  renderItem={({ item }) => <Item title={item.title} image={item.image}
  onPress={() => handlePress(item.title)} />}
  keyExtractor={item => item.id}/>




    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:"#F3FEF2",   
    alignContent:"center",
  },
  container1:{
    width:500,
    height:90,
    backgroundColor:'#497446',
    position:"absolute",
    
 },

  image:{
    width:120,
    height:50,
    margin:15,
   position:"absolute",
    alignSelf:"flex-start",
    justifyContent:"space-evenly",
    flexDirection:"row",
    zIndex:1,
  },
  image1:{
    alignSelf:"flex-end",
    width:60,
    height:65 ,
    margin:15,
    zIndex:1,
    paddingLeft:50,
  },

  item: {
    borderRadius: 8,
    height:200,
    marginHorizontal:10,
    paddingTop:20,
    justifyContent:"flex-end",
    alignItems:"flex-start",
    marginTop:40,
    
  
},
itemImage: {
  width: '100%', 
  height: 175, 
  borderRadius: 8,
  marginBottom: 5,
},
title:{
fontSize:20,
 alignSelf:"baseline",
fontWeight:"bold",
justifyContent:"flex-start",
fontStyle:""

},
  
button: {
  backgroundColor: "black",
  borderRadius: 20,
  alignSelf:"flex-end",
  height:30,
  width:150,
  alignItems:"center",
  position:"absolute",
  justifyContent:"center", 

},
buttonText:{
  color:"white",
 
}
});
  
  
