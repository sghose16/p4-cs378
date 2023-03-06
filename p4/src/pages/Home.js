
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';

 
 
const Home = () => {
    const navigate = useNavigate();

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/firebase.User
    //           const uid = user.uid;
    //           // ...
    //           console.log("uid", uid)
    //         } else {
    //           // User is signed out
    //           // ...
    //           console.log("user is logged out")
    //         }
    //       });
         
    // }, [])


    const handleSignUp = () => {               
        navigate("/signup");
    }

    const handleLogin= () => {               
        console.log("going to login")
        navigate("/login");
    }
   
    return(
        <>
             <div className="App">

                <p>
                    Welcome!
                </p>
                
                <div>
        			<button onClick={handleSignUp}>
                        Sign Up
                    </button>
        		</div>

                                
                <div>
        			<button onClick={handleLogin}>
                        Login
                    </button>
        		</div>

            </div>
        </>
    )
}
 
export default Home;