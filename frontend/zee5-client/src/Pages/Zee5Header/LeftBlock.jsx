import React, { Fragment } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const LeftBlock = () => {
  return (
    <Fragment>
      <div className="__leftSide">
        <div className="___logoBlock">
          <a href="#">
            <img src="ZEE5_logo.svg" alt="logo" />
          </a>
        </div>
        <div className="___leftMenuBlock">
          <ul>
            <li className="list-item">
              <a href="/">Home</a>
            </li>
            <li className="tvshowli" style={{ position: "relative" }}>
              <a href="/" className="list-item">
                Tv Shows
              </a>
              <div id="TvShows">
                <div>
                  <div className="leftTvShow">
                    <ul className="leftContent">
                      <li>
                        <a href="#">Top Kannada Shows</a>
                      </li>
                      <li>
                        <a href="#">Must Watch Kannada Shows</a>
                      </li>
                      <li>
                        <a href="#">Latest On Zee5</a>
                      </li>
                      <li>
                        <a href="#">Latest On Zee5 | Kannada</a>
                      </li>
                    </ul>
                  </div>
                  <div className="rightTvShow">
                    <div className="imgDiv">
                      <img src="./tvshow1.webp" alt="tvshow1" />
                      <img src="./tvshow2.webp" alt="tvshow2" />
                      <img src="./tvshow3.webp" alt="tvshow3" />
                      <img src="./tvshow4.webp" alt="tvshow4" />
                      <img src="./tvshow5.webp" alt="tvshow5" />
                      <img src="./tvshow6.webp" alt="tvshow6" />
                      <img src="./tvshow7.webp" alt="tvshow7" />
                      <img src="./tvshow8.webp" alt="tvshow8" />
                      <img src="./tvshow9.webp" alt="pic9" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-item">
              <a href="/">Movies</a>
            </li>
            <li className="list-item">
              <a href="/">Web Series</a>
            </li>
            <li className="list-item">
              <a href="/">News</a>
            </li>
            <li className="list-item">
              <a href="/">Premium</a>
            </li>
            <li className="list-item">
              <a href="/">Live Tv</a>
            </li>
            <li className="list-item">
              <a href="/">Music</a>
            </li>
            <li className="list-item">
              <a href="/">
                <BsFillGrid3X3GapFill />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default LeftBlock;
