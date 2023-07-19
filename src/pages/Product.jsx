import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

function Product() {
  const params = useParams();
  const products = useSelector(state => state.products);
  const [selected, setSelected] = useState();
  const [number, setNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const foundData = products.find(item => {
    return item.id === parseInt(params.id);
  });

  const selectedOption = e => {
    setSelected(e.target.value);
  };

  const calTotalPrice = () => {
    setTotalPrice(foundData.price * number);
  };

  const onPlusHandler = () => {
    setNumber(number + 1);
  };

  const addCartHandler = () => {
    return selected ? calTotalPrice() : alert('옵션을 선택하세요.');
  };

  const onMinusHandler = () => {
    setNumber(number - 1);
    if (number < 0) {
      return false;
    }
  };

  useEffect(() => {
    selected && calTotalPrice();
  }, [number]);

  console.log(foundData);
  return (
    <>
      <h1>상세페이지</h1>
      <ProductBox>
        <SelectedProduct>{foundData.name}</SelectedProduct>
        <AboutProdct>
          <span>가격 : {foundData.price}</span>
          <span>좋아요: {foundData.likes}</span>
          <h4>
            <select name="" id="" onChange={selectedOption}>
              <option value="">선택하세요</option>
              {foundData.options?.map(option => {
                return (
                  <>
                    <option value={option}>{option}</option>
                  </>
                );
              })}
            </select>
          </h4>
          <span>구매옵션:{selected}</span>
          <span>
            개수:{number} <button onClick={onPlusHandler}>+</button>
          </span>
          <span>총금액 : {totalPrice}</span>
          <button onClick={addCartHandler}>장바구니 추가</button>
        </AboutProdct>
      </ProductBox>

      <div>
        <h2>멋진 셔츠</h2>
        <p>가격 : {foundData.price}</p>
        <p>옵션 : {selected}</p>
        <p>
          개수: <button onClick={onMinusHandler}>-</button> {number}{' '}
          <button onClick={onPlusHandler}>+</button>{' '}
        </p>
        <span>총 비용 : {totalPrice}</span>
      </div>
    </>
  );
}

const ProductBox = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectedProduct = styled.div`
  width: 200px;
  height: 200px;
  background-color: #c4c4cc;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const AboutProdct = styled.div`
  width: 200px;
  height: 200px;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default Product;
