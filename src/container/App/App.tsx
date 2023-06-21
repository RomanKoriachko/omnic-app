import React from 'react'
import './App.scss'
import Main from '../Main/Main'
import { Route, Routes } from 'react-router-dom'
import LayoutComponent from '../../component/LayoutComponent/LayoutComponent'
import InstructionsPage from '../../pages/InstructionsPage/InstructionsPage'
import PackagePage from '../../pages/PackagePage/PackagePage'
import CellsPage from '../../pages/CellsPage/CellsPage'

function App() {
    // async function getData(link: string) {
    //     const response = await fetch(link)
    //     return response.json()
    // }

    // let deviceNumber
    // async function getDeviceNumber() {
    //     const posts = await getData(
    //         'https://dev.hub.omnic.solutions/api/2.0.0/public/device/34670a76-6022-4df5-ac1d-68f88589c904/'
    //     )
    //     console.log(posts.data.device)
    //     const posts2 = await getData(
    //         'https://dev.hub.omnic.solutions//api/2.0.0/public/orders/device/34670a76-6022-4df5-ac1d-68f88589c904/cells/statuses/?type=5'
    //     )
    //     console.log(posts2.data.cell_types)
    //     return posts
    // }
    // deviceNumber = getDeviceNumber()
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LayoutComponent />}>
                    <Route index element={<Main />} />
                    <Route
                        path="/instructions"
                        element={<InstructionsPage />}
                    />
                    <Route path="/package" element={<PackagePage />} />
                    <Route path="/available_cells" element={<CellsPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
