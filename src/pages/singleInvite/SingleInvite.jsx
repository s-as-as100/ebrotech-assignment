import React from 'react'
import SideBar from '../../layouts/SideBar/SideBar'
import Header from '../../layouts/Header/Header'
import "./SingleInvite.scss";
import HeaderTabs from '../../layouts/HeaderTabs/HeaderTabs';
const SingleInvite = () => {
  return (
    <div className='single-invite-container'>
      <SideBar/>

      <div className="single-invite-content">
        <Header/>
        <HeaderTabs/>
      </div>

    </div>
  )
}

export default SingleInvite
