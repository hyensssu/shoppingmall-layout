import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Main = () => {
  const products = useSelector(state => state.products);

  return (
    <>
      <Carousel>캐러셀</Carousel>

      <Summer>🔥여름 추천템🔥</Summer>
      <ProductBox>
        {products?.map(product => {
          return (
            <>
              <Product key={product.id}>
                <h3>{product.name}</h3>
                <span>{product.price}</span>
              </Product>
            </>
          );
        })}
        <Link to={'/products'}>더보기</Link>
      </ProductBox>
    </>
  );
};

const Carousel = styled.div`
  background-color: #2929e0;
  width: 100vw;
  height: 300px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Summer = styled.h2`
  padding: 50px;
  text-align: center;
`;

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product = styled.div`
  width: 200px;
  height: 200px;
  background-color: #c4c4cc;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

export default Main;
