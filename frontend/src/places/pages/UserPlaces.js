import React from "react"
import { useParams } from 'react-router-dom'

import PlacesList from "../components/PlacesList"

const DUMMY_PLACES = [
    {
        id: 'p1',
        creator: 'u1',
        title: 'Palac Kultury',
        description: 'small but tasteful',
        imageUrl: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2t5c2NyYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        address: 'plac Defilad 1, 00-901 Warszawa', 
        location: {
            lat: 52.2317759,
            lng: 21.0039068
        }
    },
    {
        id: 'p2',
        creator: 'u1',
        title: 'Palac Kultury',
        description: 'small but tasteful',
        imageUrl: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2t5c2NyYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        address: 'plac Defilad 1, 00-901 Warszawa', 
        location: {
            lat: 52.2317759,
            lng: 21.0039068
        }
    },
    {
        id: 'p3',
        creator: 'u3',
        title: 'Palac Kultury',
        description: 'small but tasteful',
        imageUrl: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2t5c2NyYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        address: 'plac Defilad 1, 00-901 Warszawa', 
        location: {
            lat: 52.2317759,
            lng: 21.0039068
        }
    }
]

const UserPlaces = () => {
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return (
        <PlacesList items={loadedPlaces}></PlacesList>
    )
}

export default UserPlaces