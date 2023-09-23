import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./LoginSignUp.module.scss";
import chkUser from "@/pages/api/chk-user";
import { GlobalVariables } from "@/pages/_app";
import { useContext } from "react";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const LoginSignUp = ({ ClientData, setClientData, AvatarCollection }) => {
  const [LoginButtonText, setLoginButtonText] = useState("Login");
  const [SignUpButtonText, setSignUpButtonText] = useState("Sign Up");
  const [RegisterButtonText, setRegisterButtonText] = useState("Submit");
  const [isLogin, setIsLogin] = useState(true);

  const [LoginUsername, setLoginUsername] = useState("");
  const [LoginUsernameMessage, setLoginUsernameMessage] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [LoginPasswordMessage, setLoginPasswordMessage] = useState("");

  const [isStage1Complete, setIsStage1Complete] = useState(false);

  const [SignUpUsername, setSignUpUsername] = useState("");
  const [SignUpUsernameMessage, setSignUpUsernameMessage] = useState("");
  const [SignUpPassword, setSignUpPassword] = useState("");
  const [SignUpPasswordMessage, setSignUpPasswordMessage] = useState("");
  const [SignUpFirstName, setSignUpFirstName] = useState("");
  const [SignUpFirstNameMessage, setSignUpFirstNameMessage] = useState("");
  const [SignUpLastName, setSignUpLastName] = useState("");
  const [SignUpLastNameMessage, setSignUpLastNameMessage] = useState("");
  const [SignUpEmail, setSignUpEmail] = useState("");
  const [SignUpEmailMessage, setSignUpEmailMessage] = useState("");
  const [SelectedAvatarIndex, setSelectedAvatarIndex] = useState(0);
  const BackgroundImages = [
    "/wallpaper (3).jpg",
    "/wallpaper (6).jpg",
    "/wallpaper (8).jpg",
    "/wallpaper (10).jpg",
  ];
  const [CurrentBgIndex, setCurrentBgIndex] = useState(
    Math.floor(Math.random() * BackgroundImages.length)
  );

  useEffect(() => {
    const valid = () => {
      if (SignUpEmail.trim() === "") {
        setSignUpEmailMessage("");
        return 0;
      }
      if (validateEmail(SignUpEmail) === null)
        setSignUpEmailMessage("Please enter a valid email");
      else {
        setSignUpEmailMessage("");
      }
      console.log(validateEmail(SignUpEmail));
    };
    valid();
  }, [SignUpEmail]);

  const LoginFunc = async () => {
    if (LoginUsername.trim() === "") {
      setLoginUsernameMessage("Please enter a valid username");
      return 1;
    } else {
      setLoginUsernameMessage("");
    }
    if (LoginPassword.trim() === "") {
      setLoginPasswordMessage("Please enter a valid password");
      return 1;
    } else {
      setLoginPasswordMessage("");
    }

    setLoginButtonText("Please Wait");

    axios
      .post("/api/get-user", {
        username: LoginUsername,
        password: LoginPassword,
      })
      .then(function (response) {
        setClientData(response.data[0]);
        // console.log();
        setLoginUsernameMessage("");
        setLoginPasswordMessage("");
        // setLoginButtonText("Login");
      })
      .catch(function (error) {
        if (error.response.data.error === "Incorrect Password") {
          setLoginPasswordMessage("Invalid Password");
          setLoginUsernameMessage("");
        } else if (error.response.data.error === "This Username don't exist") {
          setLoginUsernameMessage("This Username does not exist");
          setLoginPasswordMessage("");
        } else {
          console.log({ error });
        }
        // setLoginButtonText("Login");
      })
      .finally(function () {
        setLoginButtonText("Login");
      });
  };

  const ChkUser = async () => {
    if (SignUpUsername.trim() === "") {
      setSignUpUsernameMessage("Please enter a valid username");
      return 1;
    } else {
      setSignUpUsernameMessage("");
    }
    if (SignUpPassword.trim() === "") {
      setSignUpPasswordMessage("Please enter a valid username");
      return 1;
    } else {
      setSignUpPasswordMessage("");
    }

    setSignUpButtonText("Please Wait...");
    axios
      .post("/api/chk-user", {
        username: SignUpUsername,
      })
      .then(function (response) {
        setIsStage1Complete(true);
        console.log({ response });
        return true;
      })
      .catch(function (error) {
        if (error.response.data.error === "Username already in use") {
          console.log("Username already in use");
          setSignUpUsernameMessage("Username already in use");
        } else {
          console.log({ error, username: SignUpUsername });
        }
        return false;
      })
      .finally(function () {
        setSignUpButtonText("Sign Up");
      });
  };

  const RegisterForm = async () => {
    if (SignUpFirstName.trim() === "") {
      setSignUpFirstNameMessage("Please enter a valid username");
      return 1;
    } else {
      setSignUpFirstNameMessage("");
    }
    if (SignUpLastName.trim() === "") {
      setSignUpLastNameMessage("Please enter a valid username");
      return 1;
    } else {
      setSignUpLastNameMessage("");
    }
    if (SignUpEmail.trim() === "") {
      setSignUpEmailMessage("Please enter a valid username");
      return 1;
    } else {
      setSignUpEmailMessage("");
    }
    if (SignUpEmailMessage.trim() !== "") {
      setSignUpEmailMessage("Please enter a valid email");
      return 1;
    }

    setRegisterButtonText("Please Wait...");

    axios
      .post("/api/add-user", {
        profile_image_index: SelectedAvatarIndex,
        username: SignUpUsername,
        password: SignUpPassword,
        first_name: SignUpFirstName,
        last_name: SignUpLastName,
        email: SignUpEmail,
        WatchList: [],
        RecentlyVisited: [],
      })
      .then(function (response) {
        setClientData({
          profile_image_index: SelectedAvatarIndex,
          username: SignUpUsername,
          password: SignUpPassword,
          first_name: SignUpFirstName,
          last_name: SignUpLastName,
          email: SignUpEmail,
          WatchList: [],
          RecentlyVisited: [],
        });
      })
      .catch(function (error) {
        console.log({ error });
      })
      .finally(function () {
        setRegisterButtonText("Submit");
      });
  };

  return (
    <div
      className={styles.LoginSignUp}
      style={{
        backgroundImage: `url("${BackgroundImages[CurrentBgIndex]}")`,
      }}
    >
      <div>
        {isLogin ? (
          <div>
            <h1>Login</h1>

            {/* <label>Username</label> */}
            <input
              type="text"
              placeholder="Username"
              value={LoginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            {LoginUsernameMessage.trim() !== "" && (
              <div className={styles.Message}>{LoginUsernameMessage}</div>
            )}
            <br />
            {/* <label>Password</label> */}
            <input
              type="password"
              placeholder="Password"
              value={LoginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            {LoginPasswordMessage.trim() !== "" && (
              <div className={styles.Message}>{LoginPasswordMessage}</div>
            )}
            <br />
            <button onClick={LoginFunc}>{LoginButtonText}</button>
            <br />
            <div className={styles.BottomMessage}>
              Don't have an Account?{" "}
              <span
                onClick={() => {
                  setIsLogin(false);
                }}
              >
                Sign Up
              </span>
            </div>
          </div>
        ) : (
          <div>
            {isStage1Complete ? (
              <>
                <h1>Register</h1>
                {/* <label>First Name</label> */}
                <input
                  type="text"
                  placeholder="First Name"
                  value={SignUpFirstName}
                  onChange={(e) => setSignUpFirstName(e.target.value)}
                />
                {SignUpFirstNameMessage.trim() !== "" && (
                  <div className={styles.Message}>{SignUpFirstNameMessage}</div>
                )}
                <br />
                {/* <label>Last Name</label> */}
                <input
                  type="text"
                  placeholder="Last Name"
                  value={SignUpLastName}
                  onChange={(e) => setSignUpLastName(e.target.value)}
                />
                {SignUpLastNameMessage.trim() !== "" && (
                  <div className={styles.Message}>{SignUpLastNameMessage}</div>
                )}
                <br />

                {/* <label>Email</label> */}
                <input
                  type="email"
                  placeholder="Email"
                  value={SignUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
                {SignUpEmailMessage.trim() !== "" && (
                  <div className={styles.Message}>{SignUpEmailMessage}</div>
                )}
                <br />
                <label>Select Your Avatar</label>
                <div className={styles.AvatarCollection}>
                  {AvatarCollection.map((item, index) => {
                    return (
                      <img
                        src={item}
                        alt="avatar"
                        className={
                          SelectedAvatarIndex === index
                            ? styles.SelectedAvatar
                            : ""
                        }
                        onClick={() => {
                          setSelectedAvatarIndex(index);
                        }}
                      />
                    );
                  })}
                </div>

                {/* <br /> */}
                <button onClick={RegisterForm}>{RegisterButtonText}</button>
              </>
            ) : (
              <>
                <h1>Sign Up</h1>

                {/* <label>Username</label> */}
                <input
                  type="text"
                  placeholder="Username"
                  value={SignUpUsername}
                  onChange={(e) => setSignUpUsername(e.target.value)}
                />
                {SignUpUsernameMessage.trim() !== "" && (
                  <div className={styles.Message}>{SignUpUsernameMessage}</div>
                )}
                <br />
                {/* <label>Password</label> */}
                <input
                  type="password"
                  placeholder="Password"
                  value={SignUpPassword}
                  onChange={(e) => {
                    setSignUpPassword(e.target.value);
                  }}
                />
                {SignUpPasswordMessage.trim() !== "" && (
                  <div className={styles.Message}>{SignUpPasswordMessage}</div>
                )}
                <br />
                <button onClick={ChkUser}>{SignUpButtonText}</button>
                <br />
                <div className={styles.BottomMessage}>
                  Already have an Account?{" "}
                  <span
                    onClick={() => {
                      setIsLogin(true);
                    }}
                  >
                    Log In
                  </span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
