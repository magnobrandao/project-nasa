import { Route, Routes } from 'react-router-dom'
import { Detail } from './pages/details/Detail'

import { Home } from './pages/home/Home'
import { Search } from './pages/search/Search'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/detail/:id" element={<Detail />} />


            <Route path="/search" element={<Search />} />

        </Routes>
    )
}