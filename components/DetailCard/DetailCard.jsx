import {React,useState} from 'react'
import { Text,View,Image, Button, Linking } from 'react-native'
import styles from '../../components/DetailCard/DetailCard.style'

function DetailCard({detail}) {






  return (
<View style={styles.container}>
    <Image source={{uri:detail.strMealThumb}} style={styles.image}></Image>
    <Text style={styles.instruction}>{detail.strInstructions}</Text>
    <Button color="red" title='Watch on youtube' onPress={()=>Linking.openURL(detail.strYoutube)}></Button>
   </View>
  )
}

export default DetailCard