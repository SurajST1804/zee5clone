import React, { Fragment, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import "./Dropdown.css";

const DropDownMenu = () => {
  let [explore, setExplore] = useState(false);
  let handleChange = e => {
    e.preventDefault();
    setExplore(!explore);
  };

  let [plans, setPlans] = useState(false);
  let handleChange1 = e => {
    e.preventDefault();
    setPlans(!plans);
  };
  let [settings, setSettings] = useState(false);
  let handleChange2 = e => {
    e.preventDefault();
    setSettings(!settings);
  };
  let [info, setInfo] = useState(false);
  let handleChange3 = e => {
    e.preventDefault();
    setInfo(!info);
  };
  return (
    <Fragment>
      <section className="DropDownMenu">
        <div className="barDropDown">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <div className="line"></div>
            <li>
              <a
                href="/"
                onClick={handleChange}
                className="explore"
                style={{ color: "hsla(0, 0%, 100%, 0.5)" }}
              >
                Explore
                <span>
                  {explore === true ? <BiChevronUp /> : <BiChevronDown />}
                </span>
              </a>
              <div
                className="exploreDropDown"
                style={
                  explore === true ? { display: "block" } : { display: "none" }
                }
              >
                <ul>
                  <li>
                    <a href="/">TV Shows</a>
                  </li>
                  <li>
                    <a href="/">Movies</a>
                  </li>
                  <li>
                    <a href="/">Web Series</a>
                  </li>
                  <li>
                    <a href="/">News</a>
                  </li>
                  <li>
                    <a href="/">Premium</a>
                  </li>
                  <li>
                    <a href="/">Live TV</a>
                  </li>
                  <li>
                    <a href="/">Music</a>
                  </li>
                  <li>
                    <a href="/">ZEEPLEX</a>
                  </li>
                  <li>
                    <a href="/">Play</a>
                  </li>
                  <li>
                    <a href="/">Article</a>
                  </li>
                  <li>
                    <a href="/">Learning</a>
                  </li>
                  <li>
                    <a href="/">Kids</a>
                  </li>
                  <li>
                    <a href="/">Videos</a>
                  </li>
                  <li>
                    <a href="/">Stories</a>
                  </li>
                  <li>
                    <a href="/">Channels</a>
                  </li>
                </ul>
              </div>
            </li>
            <div className="line"></div>
            <li>
              <a
                href="/"
                onClick={handleChange1}
                className="plans"
                style={{ color: "hsla(0, 0%, 100%, 0.5)" }}
              >
                Plans
                <span>
                  {plans === true ? <BiChevronUp /> : <BiChevronDown />}
                </span>
              </a>
              <div
                className="planDropDown"
                style={
                  plans === true ? { display: "none" } : { display: "block" }
                }
              >
                <ul>
                  <li>
                    <a href="/">Buy Plan</a>
                  </li>
                  <li>
                    <a href="/">Have a prepaid code ?</a>
                  </li>
                </ul>
              </div>
            </li>
            <div className="line"></div>
            <li>
              <a
                href="/"
                onClick={handleChange2}
                className="settings"
                style={{ color: "hsla(0, 0%, 100%, 0.5)" }}
        >
                Settings
                <span>
                  {settings === true ? <BiChevronUp /> : <BiChevronDown />}
                </span>
              </a>
              <div
                className="settingsDropDown"
                style={
                  settings === true
                    ? { display: "none" }
                    : { display: "display" }
                }
              >
                <ul>
                  <li>
                    <a href="/">Reset Setting To Default</a>
                  </li>
                </ul>
              </div>
            </li>

            <div className="line"></div>
            <li>
              <a
                href="/"
                onClick={handleChange3}
                className="info"
                style={{ color: "hsla(0, 0%, 100%, 0.5)" }}
              >
                Info
                <span>
                  {info === true ? <BiChevronUp /> : <BiChevronDown />}
                </span>
              </a>
              <div
                className="infoDropDown"
                style={
                  info === true ? { display: "block" } : { display: "none" }
                }
              >
                <ul>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Help Center</a>
                  </li>
                  <li>
                    <a href="/">Grievance Redressal</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </li>

            <div className="line"></div>
            <div id="version">Version 2.50.92</div>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default DropDownMenu;
