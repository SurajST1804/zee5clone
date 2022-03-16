import React, { Fragment, useState, useContext, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FaLanguage } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiVipCrownFill } from "react-icons/ri";
import { DropDownApi } from "./../../Components/ContentApis/DropDownApi";
import DropDownMenu from "./DropDownMenu";

const RightBlock = () => {
  let [state, setState] = useState("");
  let value = useContext(DropDownApi);
  let handleClick = (e) => {
    e.preventDefault();
    value.makeToggleIt();
    console.log(value);
  };
  useEffect(() => {
    let data = localStorage.getItem("login-token");
    setState(data);
    console.log(data);
  }, []);

  let handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("login-token");
    window.location.assign("/");
  };
  console.log(state);
  return (
    <Fragment>
      <aside className="__rightSide">
        <main>
          <div className="___menuSplitter">
            <span>
              <a href="/">
                <BiSearch />
              </a>
            </span>
          </div>
          <div className="___menuSplitter">
            <span>
              <a href="/">
                <FaLanguage />
              </a>
            </span>
          </div>
          <div className="___menuSplitter">
            <span>
              {state ? (
                <a href="/" onClick={handleLogout}>
                  Logout
                </a>
              ) : (
                <a href="/">Login</a>
              )}
            </span>
          </div>
          <div className="___menuSplitter">
            <span>
              <a href="/">
                <RiVipCrownFill />
                Buy Plan
              </a>
            </span>
          </div>
          <div className="___menuSplitter" onClick={handleClick}>
            <span>
              <a href="#">
                <GiHamburgerMenu style={{ position: "relative" }} />
              </a>
            </span>
          </div>
          {value.state ? <DropDownMenu /> : " "}
          {/* <DropDownMenu /> */}
        </main>
      </aside>
    </Fragment>
  );
};

export default RightBlock;
