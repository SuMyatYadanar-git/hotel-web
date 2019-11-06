import React from 'react';
import "jquery/dist/jquery.js"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { MediaQueryProvider } from 'react-media-query-hoc'

import AppRoute from './AppRoute';

function App() {

  const customQueries = {
     
    mobile: 'screen and  (max-width:767px)',/* (max-width: 640px) */
    tablet: 'screen and (min-width:768px) and (max-width: 1024px)',
    desktop: 'screen and (min-width:1025px) and (min-width: 1441px)',
  }
  // window.onscroll = ()=> console.log(window.scrollY)

  return (
    <MediaQueryProvider queries={customQueries}>
      <AppRoute />
    </MediaQueryProvider>
  );
}

export default App;
