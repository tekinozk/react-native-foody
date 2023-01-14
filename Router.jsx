import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FoodCategory from "./pages/FoodCategory/FoodCategory"
import { NavigationContainer } from '@react-navigation/native'
import Food from "./pages/Foods/Food"
import Detail from "./pages/Detail/Detail"


const Stack = createNativeStackNavigator()

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title:"Foody",headerStyle:{backgroundColor:"#f5f5f5",}}} name='FoodCategoryScreen' component={FoodCategory} />
        <Stack.Screen    options={{title:"Foody",headerStyle:{backgroundColor:"#f5f5f5",}}} name='FoodsScreen' component={Food}/>
        <Stack.Screen  options={{title:"Foody",headerStyle:{backgroundColor:"#f5f5f5",}}} name='DetailScreen' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}

export default Router