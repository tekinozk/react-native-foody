import React from 'react'
import { Text,View,Image,TouchableWithoutFeedback } from 'react-native'
import styles from './FoodCategoryCard.style'

function FoodCategoryCard({food,onSelect}) {

  return (
<TouchableWithoutFeedback onPress={onSelect} >
<View style={styles.container}>
    <Image style={styles.image} source={{uri:food.strCategoryThumb}}  ></Image>
    <View style={styles.bodyContainer} >
    <Text style={styles.title}>{food.strCategory}</Text>
    <Text style={styles.description}>{food.strCategoryDescription} </Text>
    </View>
   </View>
</TouchableWithoutFeedback>
  
  )
}

export default FoodCategoryCard