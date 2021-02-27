import React from 'react'

const Card = ({title, author}) => {
    return (
        <div style={{background: "white", width: "92%", margin: "4%", padding: 5, paddingLeft: 14, paddingRight: 14, borderRadius: 14}}>
            <p style={{fontWeight: "bold", fontSize: 20, marginBottom: -5}}>{title}</p>
            <p style={{fontSize: 14}}>{author}</p>
        </div>
    )
}

export default Card
