import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Pageinformation = () => {
    const [postsData, setpostsData] = useState({});
    const [erros, setErros] = useState();
    const {id} = useParams();

    useEffect(() =>{
        const gettingid = async () => {
            try {
                const { data } = await axios.get(`/post/${id}`)
                setpostsData(data)
                
            } catch (error) {
                setErros(erros)
                
            }
        }
        gettingid();
    },[id])

  return (
    <div className='container'>
        <div>
            <div>
            <h1>{postsData.title}</h1>

            </div>
        </div>
        
    </div>
  )
}

export default Pageinformation