import React from 'react'
import { Navigate } from 'react-router-dom'
import useStorage from './hooks/storage.hook';

 export default function PrivateRoute({ children }) {
   const {getItem} = useStorage();
   const profile = getItem ("profile");
   // const loggedIn = true;
   console.log('profile', profile)
    if(profile){
       return children
    } else {
        return <Navigate to="/login" />
    }
    }
 
 