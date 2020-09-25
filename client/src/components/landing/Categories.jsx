import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Categories = () => {
  return (
    <CategoriesStyled>
      <div className='intro'>
        <h1>welcome to React Fit & Co.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='categories container'>
        <Link to='/shop?category=women' className='img-container'>
          <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600914368/ReactFitDB/women-2-cover_pircqe.jpg' alt='women category' />
          <span>Women</span>
        </Link>
        <Link to='/shop?category=men' className='img-container'>
          <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600914367/ReactFitDB/men-2-cover_ldieq1.jpg' alt='men category' />
          <span>Men</span>
        </Link>
        <Link to='/shop?category=bags' className='img-container'>
          <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600914369/ReactFitDB/bag-3-cover_kslxra.jpg' alt='bag category' />
          <span>Bags</span>
        </Link>
        <Link to='/shop?category=shoes' className='img-container'>
          <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600914369/ReactFitDB/shoes-2-cover_s6ae0g.jpg' alt='shoes category' />
          <span>Shoes</span>
        </Link>
      </div>
    </CategoriesStyled>

  )
}

const CategoriesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem 0;
  .intro {
    text-align: center;
    margin: 1rem 0 3rem;
    h1 {
      text-transform: uppercase;
    }
    p{
      color: silver;
    }
  }
  .container {
      padding:0;
    }
  .categories {
    display: grid;
    grid-gap: 1.5rem;
   
    .img-container{
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
    .img-container img{
      transition: all 0.4s ease-in;
    }
    .img-container:hover img{
      transform: scale(1.1);
    }
    .img-container:nth-child(1){
      grid-area: women;
    }
    .img-container:nth-child(2){
      grid-area: men;
    }
    .img-container:nth-child(3){
      grid-area: bags;
    }
    .img-container:nth-child(4){
      grid-area: shoes;
    }
    grid-template-columns: none;
    grid-template-areas:
      'women women bags men men'
      'women women bags men men'
      'women women shoes men men'
      'women women shoes men men';
    span{
      position: absolute;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      background: var(--light-clr);
      padding: 0.5rem 1rem;
    }
  }
  @media(max-width: 996px){
    margin: 0 auto 5rem;
    .intro {
      margin: 3rem 0;
      h1{
        font-size: 1.3rem;
      }
    }
    .container {
      padding: 0;
    }  
  }
  @media (max-width: 768px){
    .categories{
      grid-template-areas:
        'women bags'
        'shoes men';
      grid-gap: 0.6rem;
      .img-container {
        height: 100%;
        img{
          height: 100%;
        }
      }
    }
  }
`

export default Categories
