import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-row py-8 px-4 gap-5">
        <Sidebar />
        <div>{children}</div>
      </div>
    </>
  );
}

export default Layout;
