import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Products from '../pages/Products';
import Product from '../pages/Product';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import { Link } from 'react-router-dom';
import Layout from '../common/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route
            path="/*"
            element={
              <>
                <div>없는 페이지입니다.</div>
                <Link to="/">홈으로 이동</Link>
              </>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
