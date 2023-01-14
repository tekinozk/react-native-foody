import React from 'react'
import { View,Text,Image,FlatList,ActivityIndicator } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch';
import {FOOD_URL} from "@env"
import FoodCard from '../../components/FoodCard/FoodCard';


function Food({route,navigation}) {
const {strCategory} = route.params
const {data,loading,error} = useFetch(`${FOOD_URL}${strCategory}`)



if(error){
  return (<Text>{error}</Text>)
}

if(!loading){
  return (  <ActivityIndicator size="large" ></ActivityIndicator>
  )
}

function renderFood({item}){

function handleFoodSelect(idMeal)
{
  return(
navigation.navigate("DetailScreen",{idMeal}))
}

  return(
    <FoodCard onFoodSelect={() => handleFoodSelect(item.idMeal)} foodCard={item}/>
  )
}


  return (
    <FlatList data={data.meals} renderItem={renderFood} ></FlatList>
  )
}

export default Food