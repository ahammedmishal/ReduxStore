
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,StatusBar
} from 'react-native';
import {useDispatch} from 'react-redux'
import { ADD_TO_CART } from '../reducers/cartitems';
import Icon from 'react-native-vector-icons/Ionicons'

const RecipesScreen = ({}) => {

  const dispatch = useDispatch()
  const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    getAllUsers();
    return () => {}
  }, []);

  getAllUsers = () => {
     fetch('https://api.sampleapis.com/recipes/recipes')
      .then((response) => response.json())
      .then((response) => {
        if(response.length > 0){
          setData(response) 
          console.log(response);
        }
        setIsloading(false)
        })
        .catch((error)=>{
          setIsloading(false)
          console.log('ERROR IS:',error);
      })
  }

  return (
    <View style={{justifyContent:'center',backgroundColor:'white'}}>
      <StatusBar
          backgroundColor="#7CB236"
          barStyle="light-content"
      />

      <View style={styles.container}>
      {
        isLoading ? 
        <View style={styles.mainConatiner}>
          <ActivityIndicator  size = {25} color= '#2289DC' animating= {isLoading} backgroundColor='white'/>
        </View> 
        :
        <FlatList style={styles.flatlistConatiner}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                   <View style={styles.imageContainer}>
                      <Image style={styles.image} source={{ uri: item.photoUrl ? item.photoUrl : null}}/>
                    </View>
                <View style={styles.bookItemMetaContainer}>
                  <Text style={styles.itemText} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.itemText1}>{item.cuisine}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => addItemToCart(item)}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Add</Text>
                      <Icon name='add' size={20} color='white'/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
      }
      </View>
    </View>
  );
};

export default RecipesScreen;

  const styles = StyleSheet.create({
    mainConatiner:{
        backgroundColor:'white',
        width:'100%'
    },
      flatlistConatiner:{
        width:'95%',
        marginTop: 10
    },
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee',
    },
      itemContainer: {
        width: '100%',
        padding: 5,
        backgroundColor: '#fff',
        elevation: 4,
        marginBottom: 10,
        flexDirection:'row',
    },
      bookItemMetaContainer: {
      padding: 5,
      paddingLeft: 10
    },
    imageContainer: {
        width:100,
        height:150,
    },
    image: {
        width: 90,
        height: 140 ,
        resizeMode:'contain'
    },
    itemText: {
      fontSize: 16,
        fontWeight: 'bold',
        width:240,
        color:'#2e2e2e'
    },
    itemText1: {
        fontSize: 14,
        fontWeight: '200',
        color:'#A1A1A1',
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        top: 110,
        left: 10,
    },
    button: {
        borderRadius: 20,
        backgroundColor: 'black',
        padding: 5,
        width:90,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    buttonText: {
      fontSize: 18,
      color: '#fff'
    },
  });


