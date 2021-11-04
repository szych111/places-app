import React from "react"

import UsersList from '../components/UsersList'



const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Joan Smith',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        places: 3
    }]

    return <UsersList items={USERS} />
}

export default Users