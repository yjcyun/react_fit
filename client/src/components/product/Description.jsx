import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const Description = ({ product }) => {
  const [id, setId] = useState('description');

  return (
    <ProductDesc>
      <div className='container'>
        <div className='tabs'>
          <li onClick={() => setId('description')} selected={id}><h3>Description</h3></li>
          <li onClick={() => setId('shipping')} selected={id}><h3>Shipping & Delivery</h3></li>
        </div>
        {id === 'description'
          ? <div className='description'>
            <div className='text'>
              <h4>PARTURIENT ADIPISCING</h4>
              <p>{product.description}</p>
            </div>
            <div className='img'>
              <img src={product.images[0]} alt={product.name} />
              <img src={product.images[1]} alt={product.name} />
            </div>
          </div>
          : <div className='shipping'>
            <div className='img'>
              <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600974174/ReactFitDB/victoria-kubiaki-t0Aio60jD4Q-unsplash_v0wr0r.jpg' alt='delivery' />
            </div>
            <div className='text'>
              <p>Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames. <br /><br />Consequat net Vestibulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames.Consequat netus.<br /><br />Scelerisque adipiscing bibendum sem vestibulum et in a a a purus lectus faucibus lobortis tincidunt purus lectus nisl class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam inceptos hac vestibulum amet elit</p>
            </div>
          </div>
        }
      </div>
    </ProductDesc>
  )
}

const ProductDesc = styled.section`
  background-color: var(--light-bg);
  .container {
    padding: 2rem;
  }
  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    li{
      margin: 0 1rem;
      cursor: pointer;
      padding-bottom: 0.5rem;
      /* FIXME: re-write useState */
      border-bottom: ${props=>props.selected ? '1px solid rgba(0,0,0,0.5)': '1px solid rgba(0,0,0,0.2)'};
    }
  }
  .description{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2.5rem;
    margin: 2.5rem 0;
    h4{
      margin-bottom: 1rem;
    }
    .img {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }
  .shipping{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
    margin: 2.5rem 0;
  }
`

export default Description
