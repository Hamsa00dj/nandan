import React from 'react'

function PersonList(props) {
    return (
        <div>
          Person List Component  
          {props.data.splice()}
        </div>
    )
}

export default PersonList
