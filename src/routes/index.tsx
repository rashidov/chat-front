import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './home'
import Messanger from './messanger'

const PublicRoute: React.FC = () => {
	const routes = useRoutes([
		{path: '/', element: <Home />},
		{path: '/messanger', element: <Messanger />}, // временно! должнен быть в приватных роутах
		{path: '*', element: <Home />},
	])

	return routes
}

export default PublicRoute
