import React from 'react'
import { Route } from 'react-router';
import styles from './App.module.scss';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/admin/Admin';
import reducer from './reducers/reducer'
import Axios from 'axios';


function App() {

  const [state, dispatch] = React.useReducer(reducer, {
    goods: [],
    name: localStorage.getItem('name') || '',
    isAuth: localStorage.getItem('isAuth') ||  false
  })
 
  React.useEffect(()=>{
    Axios.get('http://localhost:8080/api/goods').then(item=>dispatch({
      type: 'GET_GOODS', payload: item.data
    }))
  },[state.goods.length])
 

  return (
    <div className={styles.wrapper}>
      <Header login={state.name} isAuth={state.isAuth} dispatch={dispatch}/>
      <div className={styles.bodyContent}>
        <Route path={'/Registration'} render={()=>(<Registration {...state} dispatch={dispatch} />)} exact/>
        <Route path={'/Login'} render={()=>(<Login {...state} dispatch={dispatch}/>)} exact/>
        <Route path={'/About'} render={()=>(<About />)} exact/>
        <Route path={'/Home'} render={()=>(<Home {...state} />)} exact/>
        <Route path={'/Admin'} render={()=>(<Admin {...state} dispatch={dispatch}/>)} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
