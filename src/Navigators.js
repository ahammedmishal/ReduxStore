import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CartScreen from './CartScreen'
import HeaderCartIcon from '../containers/HeaderCartIcon'
import RecipesScreen from './RecipesScreen'
const Stack = createStackNavigator()

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name='EATIZA'
         component={RecipesScreen} 
         options={{ 
          headerStyle: {
            backgroundColor: '#7CB236',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '600',
          },
           headerRight: props => <HeaderCartIcon {...props} />
         }}
        />
        <Stack.Screen 
          name='Cart'
          component={CartScreen}
          options={{
            headerStyle: {
              backgroundColor : '#7CB236'
            },
            headerTintColor: 'black',
          }}
          
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;

