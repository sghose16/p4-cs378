import '../App.css';

import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, database } from '../firebase';
import { ref, child, get, push, set } from "firebase/database";


 

const Success = (props) => {
    const [userUid, setUid] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [groceryList, setGroceryList] = useState([]);
    const [item, setItem] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        onAuthStateChanged(auth, (userCredential) => {
            if (userCredential) {
              //User is signed in
              const userUid = userCredential.uid;
              setUid(userUid);
              const userEmail = userCredential.email
              setUserEmail(userEmail);

              console.log("uid", userUid)

            } else {
              // User is signed out
              console.log("user is logged out")
            }
          });
    }, [])

    // Get user's grocery list
    get(child(ref(database), 'users/' + userUid + '/groceryItems')).then((snapshot) => {
      if (snapshot.exists()) {
        setGroceryList(Object.values(snapshot.val()));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.log(error);
    });

    //adding new item to grocery list
    const handleAddItem = async () => {
      try {
        const newItem = push(child(ref(database), 'users/' + auth.currentUser.uid + '/groceryItems'));
        set(newItem, item);
        setGroceryList([...groceryList, item]);
      } catch (error) {
        console.error(error);
      }
    };

    //log out of account
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {});
    }



  return (
    <>
        <div className="App">
          <p>
              Successful login by {userEmail}!
          </p>

          <h3>Add to your list:</h3>
          <input type="text" placeholder="Item" value={item} onChange={(e) => setItem(e.target.value)} />
          <button onClick={handleAddItem}>Add</button>
          <h2>Your Grocery List:</h2>

          {groceryList.length === 0 ? (<p>You have nothing in your list.</p>) :
            <ul class="myUL">
              {groceryList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          }
          <div>
              <button onClick={handleLogout}>
                  Logout
              </button>
          </div>
        </div>
    </>

  );
}

export default Success;