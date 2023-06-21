import React from 'react'
import Header from '../../container/Header/Header'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutComponent = (props: Props) => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default LayoutComponent
