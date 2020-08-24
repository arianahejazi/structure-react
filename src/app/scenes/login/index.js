import React from 'react'
import MainLoginPage from './mainLoginPage'
import HeaderLandingPage from '../landingPage/headerLandingPage'
import FooterLandingPage from '../landingPage/footerLandingPage'

export default function LandingPage() {
    return (
        <>
        <HeaderLandingPage/>
        <MainLoginPage/>
        <FooterLandingPage/> 
        </>
    )
}
