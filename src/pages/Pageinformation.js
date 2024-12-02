import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "../styles/Postinformation.module.css"
import { useParams } from 'react-router-dom';


const Pageinformation = () => {
    const [postsData, setpostsData] = useState({});
    const [error, setErros] = useState();
    const {id} = useParams();

    useEffect(() =>{
        const gettingid = async () => {
            try {
                const { data } = await axios.get(`/post/${id}`)
                setpostsData(data)
                
            } catch (error) {
                setErros(error.message)
                
            }
        }
        gettingid();
    },[id])

  return (
    <div className='container d-flex justify-content-center'>
        <div className={styles.bigdiv}>
            <div className={styles.bookdiv}>
            <h2>{postsData.title}</h2>
            <p><strong>{postsData.username}</strong></p>
            <img src={postsData.image_post}
             alt={postsData.image_post}
             className={styles.pictures}/>
            <p>{postsData.description}</p>

            </div>
        </div>
        
    </div>
  )
}

export default Pageinformation