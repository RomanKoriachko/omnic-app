import React from 'react'
import './App.scss'
import Main from '../Main/Main'
import { Route, Routes } from 'react-router-dom'
import LayoutComponent from '../../component/LayoutComponent/LayoutComponent'
import InstructionsPage from '../../pages/InstructionsPage/InstructionsPage'
import PackagePage from '../../pages/PackagePage/PackagePage'
import CellsPage from '../../pages/CellsPage/CellsPage'
import ConfirmationPage from '../../pages/ConfirmationPage/ConfirmationPage'
import ShopPage from '../../pages/ShopPage/ShopPage'

function App() {
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
                    <Route
                        path="/confirmation"
                        element={<ConfirmationPage />}
                    />
                    <Route path="/shop" element={<ShopPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
