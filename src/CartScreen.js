import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from '../reducers/cartitems'

  function CartScreen() {
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()
  
    const removeItemFromCart = item =>
      dispatch({
        type: REMOVE_FROM_CART,
        payload: item
      })
    return (
      <View
        style={styles.mainConatiner}>
        {
        cartItems.length !== 0 ? (
          <FlatList style={styles.flatlistConatiner}
            data={cartItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                   <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.photoUrl }}/>
                </View>
                <View style={styles.bookItemMetaContainer}>
                  <Text style={styles.itemText} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.textTitle1}>{item.cuisine}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => removeItemFromCart(item)}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.noCartItem}>Your cart is empty :'(</Text>
          </View>
        )
        }
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    mainConatiner:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
      flatlistConatiner:{
        width:'95%',
        marginTop: 10
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    itemText: {
        fontSize: 19,
        fontWeight: 'bold',
        width:240,
        color:'#2e2e2e'
    },
    itemText1: {
        marginTop:8,
        fontSize: 14,
        fontWeight: 'bold',
        color:'#A1A1A1'
    },
    itemContainer: {
        width: '100%',
        padding: 5,
        backgroundColor: '#fff',
        elevation: 4,
        marginBottom: 10,
        flexDirection:'row',
        
    },
    bookItemContainer: {
      flexDirection: 'row',
      padding: 10
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
    bookItemMetaContainer: {
      padding: 5,
      paddingLeft: 10
    },
    textTitle: {
      fontSize: 22,
      fontWeight: '400'
    },
    textTitle1: {
      fontSize: 18,
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
      backgroundColor: '#FF6666',
      padding: 5,
      width:90,
      justifyContent:'center',
      alignItems:'center'
    },
    buttonText: {
      fontSize: 18,
      color: '#fff'
    },
    emptyCartContainer: {
      marginTop: 350,
      justifyContent: 'center',
      alignItems: 'center'
    },
    noCartItem: {
      fontSize: 24,
      color:'grey',
    }
  })

export default CartScreen