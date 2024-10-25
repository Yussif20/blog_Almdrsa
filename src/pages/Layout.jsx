import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { DataContext } from '../DataContext';
import { useState } from 'react';
import { data } from '../data.js';

const Layout = () => {
  const [originalData] = useState(data);
  const [dataState, setDataState] = useState(data);
  const [category, setCategory] = useState();

  return (
    <DataContext.Provider
      value={{
        originalData,
        dataState,
        setDataState,
        category,
        setCategory,
      }}
    >
      <Header />
      <Outlet />
    </DataContext.Provider>
  );
};

export default Layout;
