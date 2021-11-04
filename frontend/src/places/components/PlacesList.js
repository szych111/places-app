import React from "react"

import Card from '../../shared/UIElements/Card'
import PlaceItem from "./PlaceItem"

import './PlaceList.css'

const PlacesList = props => {
    if (props.items.length === 0) {
        return (
            <div className='place-list center' >
            <Card>
                <h2>No places found. Maybe add one?</h2>
                <button>Share a place</button>
            </Card>
            </div>
        )
    }

    return (
        <ul className='place-list'>
            {props.items.map(place => 
            <PlaceItem 
            key={place.id} 
            image={place.imageUrl} 
            title={place.title} 
            description={place.description} 
            address={place.address} 
            creatorId={place.creator} 
            coordinates={place.location} />)}
        </ul>
    )
}

export default PlacesList