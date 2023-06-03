// import React from "react";
// import Homepage from "./routerDemo/Homepage";
// import Home from "./routerDemo/Home";
// import About from "./routerDemo/About";
// import Topic from "./routerDemo/Topic";
// const routes = [
//     {
//         path: '/',
//         exact: true,
//         main: () => <Homepage />
//     },
//     {
//         path: '/Home',
//         exact: true,
//         main: () => <Home />
//     },
//     {
//         path: '/About',
//         exact: true,
//         main: () => <About />
//     }, 
//     {
//         path: '/Topic',
//         exact: true,
//         main: () => <Topic />
//     }

// ]

import React from 'react';								
								
import Add from './mistermtest/Add';		
import ProductList from './mistermtest/ProductList';					
							
								
const routes = [								
	{
		path: '/ProductList',
		exact: true,
		main: () => <ProductList/>
	},							
    {
		path: '/add',
		exact: false,
		main: () => <Add />
	}					
						
];								
								
								
export default routes;								