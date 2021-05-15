import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./login.scss";

export const LoginForm: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users = [
      {
        id: 0,
        username: "admin",
        password: "test",
      },
      {
        id: 1,
        username: "ctrlj",
        password: "1234",
      },
      {
        id: 2,
        username: "lemon",
        password: "1111",
      },    
    ];

    const validation = (username, password) => {
      const user = users.find((user) => username === user.username); // Array por donde pasan todos los usuarios de la lista y comprueba que existe

      if (typeof user !== "undefined" && user.password === password) {
        // Chequeamos que el usuario existe y la contraseña coincide con el usuario -> accede a la web
        history.push("/list");
      } else {
        // Si el usuario no existe, lanza un mensaje...y muestra un listado de usuarios válidos la consola
        alert("User / password not valid, psst...admin/test...");
        //console.log("User List for login");
        //users.forEach((element) => console.log(element));
      }
    };

    validation(username, password);

  };

  const handleShowForm = () => {
    const form = document.getElementById("loginForm");
    const formRow = document.getElementById("loginFormRow");
    const MainHometitle = document.getElementById("MainHomeTitle");
    form.style.opacity = "1";
    formRow.style.opacity = "1";
    formRow.style.transform = "translateX(0)";
    formRow.style.transition = "400ms linear";
    MainHometitle.style.opacity = "0";

    window.addEventListener(
      "resize",
      function (event) {
        if (window.innerWidth < 1024) {
          MainHometitle.style.opacity = "1";
          formRow.style.transition = "0ms linear";
        } else {
          formRow.style.transform = "translateX(-1200px)";
        }
      },
      true
    );
  };

  return (
    <>
      <div className={`container ${classes.loginContainer}`}>
        <div className={`row`}>
          <div className={`col-12`}>
            <div className={classes.homeLogo}>
              <img src="./src/library/logo/logo.png" />
            </div>
            <h1 id="MainHomeTitle" className={classes.outlineText}>
              Organization finder on Github
            </h1>
            <button onClick={handleShowForm} className={classes.buttonSignIn}>
              sign in <span>🡢</span>
            </button>
            <form
              id="loginForm"
              className={classes.loginForm}
              onSubmit={handleNavigation}
            >
              <div
                id="loginFormRow"
                className={`row no-gutters ${classes.loginFormRow}`}
              >
                <div className="col-12">
                  <input
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="submit">sign in</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
