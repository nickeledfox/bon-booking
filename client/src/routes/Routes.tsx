import { Routes, Route } from 'react-router-dom';

import { HomePage, HotelsPage, HotelPage, PageNotFound } from '../pages';

const RoutesList = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hotels' element={<HotelsPage />} />
        <Route path='/hotels/:id' element={<HotelPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default RoutesList;
