import React, { Fragment, useContext } from "react";
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";
import { DropDownApi } from "./../../Components/ContentApis/DropDownApi";
import "./__navbar.style.css";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  let value = useContext(DropDownApi);
  // console.log(value);
  return (
    <Fragment>
      <section id="_zeeHeaderSection">
        <article className="_zeeHeaderBlock">
          <LeftBlock />
          <RightBlock />
          <aside>{value.state === true ? <DropDownMenu /> : ""}</aside>
          {/* <DropDownMenu /> */}
        </article>
      </section>
    </Fragment>
  );
};

export default Navbar;
