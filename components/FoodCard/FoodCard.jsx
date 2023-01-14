import React from 'react'
import { Text,View,Image,TouchableWithoutFeedback } from 'react-native'
import styles from "./FoodCard.style"


function FoodCard({foodCard,onFoodSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onFoodSelect}>
    <View style={styles.container} >
        <Image style={styles.image} source={{uri:foodCard.strMealThumb}} ></Image>
        <View style={styles.bodyContainer}>
       <Text style={styles.title} >{foodCard.strMeal}</Text>  
        </View>
       
    </View>
    </TouchableWithoutFeedback>
  )
}

export default FoodCard