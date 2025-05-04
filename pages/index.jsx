import React from 'react';
import Header from '../components/Header';
import IndexComponent from '../components/Index'; // Renaming to avoid conflict with file name
import '../app/app.css'; // Assuming app.css contains the necessary grid styles

function IndexPage() {
  return (
    <>
      <Header />
      <IndexComponent />
    </>
  );
}

export default IndexPage;
