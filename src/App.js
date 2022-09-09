import React from 'react';
import Layout from './layout';
import Banner from './components/banner';
import Folio_Container from './components/folio_container';

const App = () => {
  
  return(
    <>
    <Layout>
      <Banner />
      <Folio_Container />
    </Layout>
    </>
  )
}
export default App