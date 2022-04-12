import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Bill from "./pages/Bill";
import Analytics from "./pages/Analytics";
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/bill' element={<Bill />}></Route>
					<Route path='/view-report' element={<Analytics />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
