import React from "react";
import { FiMenu } from "react-icons/fi";
import { RiAddBoxFill } from "react-icons/ri";
import { IoPlayForward } from "react-icons/io5";
import { GiTireIronCross } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flooting-menu">
      <ul>
        <li onClick={() => setOpen(!open)}>
          <FiMenu />
        </li>
        <li className="mt-5">
          <Link className="Link" to="PurchaseUnit">
            <FaWallet />
          </Link>
        </li>
        <li>
          <Link className="Link" to="AddRemoveUnit">
            <RiAddBoxFill />
          </Link>
        </li>
        <li>
          <Link className="Link" to="attack">
            <IoPlayForward />
          </Link>
        </li>
      </ul>

      <div
        className="sidebar"
        style={{ right: open && "0px", display: open && "block" }}
      >
        <div className="header">
          <h1>Menu</h1>
          <h1 onClick={() => setOpen(!open)}>
            <GiTireIronCross />
          </h1>
        </div>

        {/* list of menu */}
        <ul className="sidebarUl">
          <li className="mt-5">
            <Link
              onClick={() => setOpen(!open)}
              className="Link"
              to="PurchaseUnit"
            >
              <p>
                <FaWallet /> <span>PURCHASE UNIT</span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(!open)}
              className="Link"
              to="AddRemoveUnit"
            >
              <p>
                <RiAddBoxFill /> <span>ADD/REMOVE UNIT</span>
              </p>
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(!open)} className="Link" to="attack">
              <p>
                <IoPlayForward /> <span>ATTACK</span>
              </p>
            </Link>
          </li>
        </ul>
        {/* list of menu */}
      </div>
    </div>
  );
}

export default Menu;
