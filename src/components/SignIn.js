import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app"; //firebase@9.0以上の場合はこれらしい
import { auth } from '../firebase';




function SignIn() {
    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider);

    }

  return (
    <div>
        <Button onClick={signInWithGoogle}>
            Googleでログインする
        </Button>


    </div>
  )
}

export default SignIn