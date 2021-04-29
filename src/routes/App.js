import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from "../pages/Contact";


const App = () => {
    return (
			<BrowserRouter>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
			</BrowserRouter>
		);
}

export default App

