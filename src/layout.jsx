import React from 'react';

const Layout = ({ children }) => {
  return (
    <main className="ml-[14%] md:ml-[8%] lg:ml-[16%] xl:ml-[14%] p-4 flex-1 overflow-auto">
      {children}
    </main>
  );
};

export default Layout;