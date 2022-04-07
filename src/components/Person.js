import React from 'react'

function Person(props) {
    return (
        <div>
           Person Component
      {/*  To generate an error in component  */}
           {props.data.slice()} 
        </div>
    )
}

export default Person
