import { Routes, Route } from 'react-router-dom';

import { HomePage, PropertiesPage, DetailsPage, PageNotFound } from '../pages';

const RoutesList = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/searchresults' element={<PropertiesPage />} />
        <Route path='/searchresults/:id' element={<DetailsPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default RoutesList;
