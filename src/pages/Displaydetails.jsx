import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./style.css"
const Displaydetails = () => {
    const params = useParams()
    const [image, setImage] = useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${params.id}`)
            .then(res => res.data)
            .then(data => {
                console.log(data)
                setImage(data)
            });
    }, [])
    return (
        <>
            <div className="cards">
                <div className="box">
                    <div className="img">
                        <img src={image.image} />
                    </div>
                    <h2><span>Taken on: {image.birthDate}</span></h2>
                    <p>{image.address?image.address.city:null}</p>
                    <p>
                        <h6>Share on: </h6>
                    </p>
                    <span>
                        <ul>
                            <li><a href="#"><i className="bi bi-facebook text-primary" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="bi bi-twitter text-primary" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="bi bi-instagram text-warning-emphasis" aria-hidden="true"></i></a></li>
                        </ul>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Displaydetails