import { Route, Routes } from 'react-router-dom'
import { Details } from './pages/details/Details'

import { Home } from './pages/home/Home'
import { Search } from './pages/search/Search'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/detail:id" element={<Details />} />

           
            <Route path="/search" element={<Search />} />

        </Routes>
    )
}