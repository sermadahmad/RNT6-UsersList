import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserCard = ({user}) => {
  const {image, name, bio} = user;
  return (
    <View style = {styles.box}>
      <Image source = {image} style = {styles.image} />
      <View style = {styles.textBox}>
        <Text style = {styles.name}>{name}</Text>
        <Text style = {styles.bio}>{bio}</Text>
      </View> 
    </View>
  );
};

export default UserCard;


const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    padding:5,
    margin:5,
    elevation:5,
    shadowColor:'black',
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.4,
    shadowRadius:5,
    borderRadius:10,
  },
  image: {
    width : 50,
    height : 50,
    borderRadius : 25,
    margin : 10,
  },
  textBox : {
    flex : 1,
    marginTop: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio : {
    color : '#666'
  },
});

