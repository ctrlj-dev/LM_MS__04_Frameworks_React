import React from "react";
import { Link, generatePath } from "react-router-dom";
import classes from "../library/styles/styles.scss"
export const HeaderLayout: React.FC = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <Link to={generatePath(`/`)}>
                <img src="/src/library/logo/logo.png" />{" "}
              </Link>
            </div>
            <div className={`col-6 ${classes.rickListButton}`}>
            <Link
                to={generatePath(`/rick-morty-list`)}>RICK & MORTY</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
