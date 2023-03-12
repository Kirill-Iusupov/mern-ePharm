import React, {useEffect} from 'react'
import "./MainPage.scss"
import axios from 'axios'


const MainPage = () => {

    const getItems = async() => {
        try {
            const response = await axios.get('/api/items',{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = response.data

            console.log(data)

            return data

            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getItems()
    }, [])

    return (
        <div>
            <h1>Main Page</h1>
            
        </div>
    );
}

export default MainPage
