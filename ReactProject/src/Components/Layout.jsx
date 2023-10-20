import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import HeaderCom from './HeaderCom';

export default function Layout() {
  return (
    <>
      <HeaderCom />
      <Outlet />
      <Footer />
    </>
  );
}
