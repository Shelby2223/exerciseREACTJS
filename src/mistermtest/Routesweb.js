import React from 'react';								
				
import Add from './Add';		
import Edit from './Edit';			

import Adminweb from './Adminweb';
export const Routesweb = [								
	{
		path: '/',
		element: <Adminweb/>,
		index: true
	},							
    {
		path: '/Add',
		element: <Add/>,
		index: false
	},
	{
		path: '/edit/:id',
		element: <Edit/>,
		index: false
	  }				
						
]					
								
							