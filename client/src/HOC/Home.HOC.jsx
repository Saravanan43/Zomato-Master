import React from 'react'
import {Route} from 'react-router-dom';

import HomeLayout from '../Layout/Homepage.layout';
function HomeHOC({component:Component, ...rest}) { /*props from app.js rest-> exact and path component->main content */
  return (
    <>
    <Route
    {...rest}
    component={      /* component is a function*/ 
        (props) => (
            <HomeLayout>
                <Component {...props}/> {/* props has the main content */}
            </HomeLayout>
        )
    } 
    />
    </>
  )
}

export default HomeHOC;
