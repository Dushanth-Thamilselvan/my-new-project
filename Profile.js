
import React from 'react';
import { View, Text,FlatList, Button, StyleSheet, Image } from 'react-native';


const DATA = [
  { id: '1', title: 'Promotions', image:require('./assets/promotions.png') },
  { id: '2', title: 'Help center', image:require('./assets/helpcenter.png') },
  { id: '3', title: 'Privacy', image:require('./assets/privacy.png') },
  { id: '4', title: 'Join community', image:require('./assets/community.png') },
  { id: '5', title: 'About', image:require('./assets/about.png') },
  
]

  const Profilescreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
       
       <Image
        source={require('./assets/pic.png')} 
        style={styles.pic}/>

       <Text style={styles.Text}>Charles Kevin</Text>
        <Text style={styles.text1}> Peterson</Text>

        

        <Image
        source={require('./assets/indicator.png')} 
        style={styles.indicator}/>

       

       <FlatList
       data={DATA}
       renderItem={({ item }) => <Item title={item.title} image={item.image}
       />}
       keyExtractor={item => item.id}/>

    </View>
  );
};
const Item = ({ title,image, onPress}) => (
  <View style={styles.item}>
  <View style={styles.img}></View>
  <Image source={image} style={styles.itemImage} /> 
  <Text style={styles.title}>{title}</Text>
</View>

)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#CBFFC7',
    
    
  },
  Text:{

    verticalAlign:"middle",
    fontSize:30,
    paddingLeft:10,
    alignContent:"center",
  },

  text1:{
    fontSize:30,
    paddingLeft:10,
  
  },
  pic:{
    alignSelf:"center",
    marginRight:20,
    marginTop:20,
   
  },
  indicator:{
    alignSelf:"center",
    marginTop:40,
  },

  item:{
    
    flexDirection:"row",
    alignItems:"center",
    padding:20,
    marginRight:"10"
  },

  title:{
    
    marginLeft:10,
    fontSize:20,
    
  }

});

export default Profilescreen;
