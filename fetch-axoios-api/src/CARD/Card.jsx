import React from 'react'

const Card = () => {
  return (
    <div className='card'>
      <img src="https://upload.wikimedia.org/wikimedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png" alt="img" />
      <div>
        <h2>Title of the card</h2>
        <p>Caption text about the card</p>
        <h5>Author name</h5>
      </div>
    </div>
  )
}

export default Card
