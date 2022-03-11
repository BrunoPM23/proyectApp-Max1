import { Navbar } from "../components/ui/NavBar";
import {Routes,Route} from 'react-router-dom';

import { HomScreen } from "../components/general/HomScreen";

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
          
        <Routes>
          <Route path="/" element={<HomScreen />} />
          {/* <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<HeroScreen />} /> */}

        </Routes>

        </div>
    </>
  )
}
