import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate('/');
  };
  const onClickSignIn = () => {
    navigate('signIn');
  };

  const onClickSignUp = () => {
    navigate('signUp');
  };
  return (
    <>
      <Div>
        <h1 onClick={onClickLogo}>로고</h1>
        <div>
          <button onClick={onClickSignIn}>로그인</button>
          <button onClick={onClickSignUp}>회원가입</button>
        </div>
      </Div>
    </>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: black;
  color: white;
`;

export default Header;
