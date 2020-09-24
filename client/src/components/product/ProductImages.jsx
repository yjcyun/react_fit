import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({product}) => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleOnClick = index => setImgIndex(index);

  return (
    <ImagesStyled>
      <div className='thumbnail'>
        {product.images.map((img, index) => (
          <img key={index} src={img} alt={product.name} onClick={() => handleOnClick(index)} />
        ))}
      </div>
      <div className='image-cover'>
        <img src={product.images[imgIndex]} alt={product.name} />
      </div>
    </ImagesStyled>
  )
}

const ImagesStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  .thumbnail{
    width: 80%;
    cursor: pointer;
  }
  .image-cover {
    position:relative;
  }
`

export default ProductImages