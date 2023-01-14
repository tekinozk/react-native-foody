import axios from 'axios'
import { React, useEffect, useState } from 'react'

function useFetch(url) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    const fetchData = async () => {

        try {
            const { data: foodCategoryData } = await axios(url)
            setData(foodCategoryData)
            setLoading(true)

        } catch (error) {
            setError(error.message)
        }


    }
    useEffect(() => {
        fetchData()
    }, [])



    return (
        { loading, data, error }
    )
}

export default useFetch