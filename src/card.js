import React from 'react'

function card(props) {
    return (
        <>
        <div onClick = {() => props.getdata(props.value.overview,props.value.poster_path,props.value.release_date,props.value.title)} className = 'cap'>
            <div className = 'img'>
            <img src={props.value.image} height = '100%' className="card-img-top" alt="..." />
            </div>
            <div className = 'det'>
                    <p>{props.value.title}</p>
                    <p>{props.value.price}</p>
            </div>
        </div>
        </>
    )
}

export default card
