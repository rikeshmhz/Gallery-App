import React from 'react'
import { Link } from 'react-router-dom'

const Display = ({image}) => {
    return (
    <>
            
                <div className="col">
                    <div className="card shadow-sm">
                        <img src={image.image} height="100%" width="325" alt="" />
                        <div className="card-body">
                            <h6 className="card-text">Taken on: {image.birthDate}</h6>
                            <h6 className="card-text">Location: {image.address.city}</h6>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <Link to={`/detail/${image.id}`}><button type="button" className="btn btn-sm btn-outline-secondary">View</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </>
    )
}

            export default Display