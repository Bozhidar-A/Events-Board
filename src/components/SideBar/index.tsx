// eslint-disable-next-line
import React from "react";
import "./style.scss";
import { Link, useHistory } from "react-router-dom";
import Firebase from "../../firebase";

interface SideBarProps {
  open: boolean;
  openSB: any;
  auth: any;
}

export default function SideBar({ open, openSB, auth }: SideBarProps) {
  let history = useHistory();

  let signOut = function () {
    Firebase.auth
      .signOut()
      .then(() => {
        auth(false);
        history.replace("/Events-Board/Login");
      })
      .catch(function (error) {
        // An error happened.
        alert(error.code);
        alert(error.message);
      });
  };

  return (
    <aside className={"sidebar " + open.toString()}>
      <ul>
        <li>
          <Link
            onClick={() => {
              openSB(false);
            }}
            to="/Events-Board"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              openSB(false);
            }}
            to="/Events-Board/Submit"
          >
            Submit
          </Link>
        </li>
        <li>
          <a
            onClick={() => {
              openSB(false);
              signOut();
            }}
          >
            Log off
          </a>
        </li>
      </ul>
    </aside>
  );
}
