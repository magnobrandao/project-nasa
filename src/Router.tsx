import { Route, Routes } from 'react-router-dom'
import { Details } from './pages/details/Details'

import { Home } from './pages/home/Home'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail:id" element={<Details />} />
        </Routes>
    )
}