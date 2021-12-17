import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

function HeaderCartIcon() {
  const navigation = useNavigation()
  const cartItems = useSelector(state => state)

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={styles.button}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
      <Ionicons name='shopping-cart' size={30} color='white' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  },
  itemCountContainer: {
    position: 'absolute',
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: '#FF6565',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default HeaderCartIcon