import React from 'react';
import { Outlet } from 'react-router-dom';

const TrashLayout = () => {
  return (
    <div>
      {/* This Outlet will render the nested routes */}
      <Outlet />
    </div>
  );
};

export default TrashLayout;