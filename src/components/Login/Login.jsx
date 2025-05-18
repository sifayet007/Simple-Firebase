import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const GoogleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const handlerGoogleLogin = () => {
    console.log(auth, GoogleProvider);

    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };
  const SingOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const singOutGitHubHandler = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={SingOutHandler}>Sign Out</button>
      ) : (
        <>
          <button onClick={handlerGoogleLogin}>
            <FcGoogle />
            Login with google
          </button>
          <button onClick={singOutGitHubHandler}>Login with gitHub</button>
        </>
      )}
      {user && (
        <div>
          <h1>{user.displayName}</h1>
          <p>{user.email}</p> <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
