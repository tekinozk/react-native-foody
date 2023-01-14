import React from 'react'
import { Text,FlatList,ActivityIndicator } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch'
import {DETAIL_URL} from "@env"
import DetailCard from "../../components/DetailCard/DetailCard"

function Detail({route}) {
 const {idMeal} =  route.params
 const {data,loading,error} = useFetch(`${DETAIL_URL}${idMeal}`)

 if(error){
  return (<Text>{error}</Text>)
}

if(!loading){
  return (  <ActivityIndicator size="large" ></ActivityIndicator>
  )
}

 function renderDetail({item}){
  return(
    <DetailCard detail={item} />
  )
}
  return (
   <FlatList data={data.meals} renderItem={renderDetail}/>
  )
}

export default Detail