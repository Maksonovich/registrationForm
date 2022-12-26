import useReducer from "./Store/Reducer/user";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Users from './Pages/Users.jsx';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "../src/App.css"

function App() {
  const store = createStore(useReducer)
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/Users' element={<Users/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;