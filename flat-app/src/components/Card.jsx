import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Card.module.css"

const Card = ({id,type,flatNo,block,residents,image}) => {
    return (
        <div className={styles.container}>
         <Link to={`/flats/${id}`}>
         <img width="100%" height="50%" src={image} alt={`flatNo${flatNo}`} />
            <div>Type:- {type}</div>
            <div>Flat No:- {flatNo}</div>
            <div>Block:- {block}</div>
            <div>Total Members:- {residents?.length}</div>
         </Link>
        </div>
    )
}

export default Card
