
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./pagination";
import StripedBorder from "./stripedborder";
import User from "./User";
// import Photography from "./Photography";
import Posts from "./Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import Header from "./Header";

// import Counter from "./Counter";
// import Counter2 from "./Counter2";
// import Containerexample from "./containerexample";
// import Example from "./offcanvas";
// import Offcanvas from "./offcanvas";
// import StackVerticalExample from "./stackexample";
// import logo from './logo.svg';
// import './App.css';
// import FirstComponent from './components';
// import Article from './Assignment 1/assignment1';
// import State from './State';
// import According from './Assignment 1/according';
// import StateObject from './Assignment 1/StateObject';
// import Arraylist from './Assignment 1/Arraylist';
// import FromSubmit from './Assignment 1/FromSubmit';
// import ConditionalRender from './Assignment 1/ConditionalRender';
// import Assi1 from './Assignment 1/Assi1';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import Register from './Register';
// import Header from './Header';
// import Home from './Home';
// import { useEffect } from 'react';
// import { useTheme } from './ThemeProvider';
// import Assignment3 from './Assignment3';
// import BasicExample from './stackexample';


function App() {
  // const theme=useTheme();

  // useEffect(() =>{
  //     const body=document.querySelector("body");
  //     body.style.backgroundColor=theme.mode?"white":"black";
  //     body.style.color=theme.mode?"black":"white";
  // },[theme.mode]);

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route
      path="/" 
      element={  
        < PrivateRoute>
        <Home />
        </PrivateRoute>
        }
        ></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <Posts/> */}
    {/* <Photography/> */}
      {/* <User/> */}
   
      {/* <Counter/><br/><br/>
    <Counter2/> */}
      {/* <StackVerticalExample/> */}
      {/* <StripedBorder/> */}
      {/* <Example/> */}
      {/* <Pagination/> */}
      {/* <Containerexample/> */}
      {/* <BasicExample/> */}
      {/* <BrowserRouter>
      <Link to="/Home"></Link>
      <Link  to="/register">register</Link>
      <Header/>
      <Routes>  
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<Arraylist/>}></Route>
        <Route path='/State' element={<StateObject/>}></Route>
        <Route path='/con' element={<FromSubmit/>}></Route>
      </Routes>
    </BrowserRouter>
    <Assignment3/> */}
    </>
  );
}

export default App;
