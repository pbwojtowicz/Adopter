/*import React, {useState, useEffect} from "react"
import SignUp from "./SignUp"
import { Container } from "react-bootstrap"
import SignIn from "./SignIn"
import app from "../firebase"

function Logowanie() {
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false);

  function clearInputs(){
    setEmail("");
    setPassword("");
  }
  function clearErrors(){setEmailError("");setPasswordError("");}
  
  function handleLogin(){
    clearErrors();
    app.auth.signInWithEmailAndPassword(email, password)
    .catch(err =>{
      switch(err.code){
        case "auth/invalig-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.massage);
          break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;

      }
    })
  }
  
  function handleSignup(){
    clearErrors();
    app
    .auth
    .createUserWithEmailAndPassword(email, password)
    .catch(err =>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.massage);
          break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;

      }
    })
  }
  function handleLogout(){
    app.auth.signOut();
  }

  function authListener(){
    app.auth.onAuthStateChanged((user)=>{
      if(user){
        clearInputs();
        setUser(user);
      } else { 
        setUser("");
      }
    })
  }
  useEffect(() =>{
    authListener();
  }, [])

  return (
    <Container>
     <SignIn/>
    </Container>
  )
}

export default Logowanie*/