import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

function Products() {
  const products = useSelector(state => state.products);

  return (
    <>
      <Summer>🔥여름 추천템🔥</Summer>
      <ProductBox>
        {products?.map(product => {
          return (
            <>
              <Link to={`/products/${product.id}`}>
                <Product key={product.id}>
                  <h3>{product.name}</h3>
                  <span>{product.price}</span>
                </Product>
              </Link>
            </>
          );
        })}
      </ProductBox>
    </>
  );
}

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

export default Products;
