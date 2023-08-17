import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Display from './Display'

const Data = () => {
    const [image, setImage] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(res => res.data.users)
            .then(data =>{
                console.log(data)
                setImage(data)
            });
    }, [])
    return (
        <>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {
            image.map((v)=>{
                return <Display image={v} />
            })
        }
        </div>
        </>
    )
}

export default Data