import React from 'react'

function Card(props) {
    // var name = props.name
    // var email = props.email
    // var id = props.id
    // above in a shorter form using ES6 const
    const {name, email, id} = props
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card