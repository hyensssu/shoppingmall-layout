import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
