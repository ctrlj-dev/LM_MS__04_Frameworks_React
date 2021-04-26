import React from "react";
import { Link, generatePath } from "react-router-dom";

export const HeaderLayout: React.FC = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Link to={generatePath(`/`)}>
                <img src="/src/library/logo/logo.png" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
