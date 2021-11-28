import React from 'react'
import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import { RootReducerStore } from '../interrfaces/root/RootReducerStore'
import Home from './home'
import Messanger from './messanger'

const PublicRoute: React.FC = () => {
	const {isAuthorization} = useSelector((store: RootReducerStore) => store.app)
	
	const public_routes = [
		{path: '/', element: <Home />},
		{path: '*', element: <Home />},
	] 

	const [routesArray, setRoutesArray] = React.useState<any[]>(public_routes)

	const secret_routes = [
		{path: '/messanger', element: <Messanger />},
	]

	React.useEffect(() => {
		if (isAuthorization) setRoutesArray([...public_routes, ...secret_routes])
	}, [isAuthorization])
	
	const routes = useRoutes(routesArray)

	return routes
}

export default PublicRoute
