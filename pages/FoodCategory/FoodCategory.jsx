import { Text,View,FlatList,ActivityIndicator,TextInput } from 'react-native'
import {API_URL} from "@env"
import FoodCategoryCard from '../../components/FoodCategoryCard/FoodCategoryCard'
import useFetch from '../../hooks/useFetch/useFetch'
import { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'



function FoodCategory({navigation}) {
const {loading,data,error} = useFetch(API_URL)


if(error){
  return (<Text>{error}</Text>)
}

if(!loading){
  return (  <ActivityIndicator size="large" ></ActivityIndicator>
  )
}




function renderFoodCategory({item}){

const handleSelect = (strCategory) => {
  navigation.navigate("FoodsScreen",{strCategory})
}

  return(
    <FoodCategoryCard food={item} onSelect={()=>handleSelect(item.strCategory)} />
  )
 }

  return (
    <View>
      <FlatList data={data.categories} renderItem={renderFoodCategory} />
    </View>
    
  )
}

export default FoodCategory