import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterHome from '../Components/FooterHome'
import HeaderHome from '../Components/HeaderHome'

export default function HomeTemplate() {
  return (
    <div className=''>
        <HeaderHome/>
        <div style={{minHeight:650}}>
            <Outlet/>
        </div>
        <FooterHome/>
    </div>
  )
}
