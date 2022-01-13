import React, { useEffect, useState } from "react";
import logo from "../assets/logo/MGS.ico";
import user from "../assets/github.png";
import MenuItem from "./MenuItem";

import "./sidemenu.css";
/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Home",
    exact: true,
    to: "/",
    iconClassName: "bi bi-house",
  },
  {
    name: "Tag Sync",
    exact: true,
    to: `/tag`,
    iconClassName: "bi bi-journal-check",
    subMenus: [
      { name: "Tag Crete", to: "/tag/tagcreate" },
      { name: "Tag View", to: "/tag/tagview" },
      { name: "Tag Update", to: "/tag/tagupdate" },
    ],
  },
  {
    name: "Repo Sync",
    exact: true,
    to: `/reposync`,
    iconClassName: "bi bi-journal-check",
    subMenus: [
      { name: "Repo Sync Create", to: "/reposync/repocreate" },
      { name: "Repo Sync View", to: "/reposync/repoview" },
      { name: "Repo Sync Update", to: "/reposync/repoupdate" },
    ],
  },
  {
    name: "Orgs",
    to: `/org`,
    iconClassName: "bi bi-globe2",
    subMenus: [
      { name: "Add Org", to: "/org/addorg" },
      { name: "Delete Org", to: "/org/deleteorg" },
    ],
  },
  {
    name: "Users",
    exact: true,
    to: `/users`,
    iconClassName: "bi bi-person-square",
    subMenus: [
      { name: "Add User", to: "/users/useradd" },
      { name: "Delete User", to: "/users/userdelete" },
    ],
  },
  {
    name: "Console Log",
    exact: true,
    to: `/console`,
    iconClassName: "bi bi-vector-pen",
  },
];

const SideMenu = ({ inactive, setInactive = () => {} }) => {
  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className="sidemeucontainer">
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
          <div className="logo">
            <img src={logo} alt="MGS" />
          </div>
          <div
            onClick={() => setInactive((prev) => !prev)}
            className="toggle-menu-btn"
          >
            {inactive ? (
              <i class="bi bi-arrow-right-square-fill"></i>
            ) : (
              <i class="bi bi-arrow-left-square-fill"></i>
            )}
          </div>
        </div>

        <div className="search-controller">
          <button className="search-btn">
            <i class="bi bi-search"></i>
          </button>

          <input type="text" placeholder="search" />
        </div>

        <div className="divider"></div>

        <div className="main-menu sidemenufont">
          <ul>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.to}
                subMenus={menuItem.subMenus || []}
                iconClassName={menuItem.iconClassName}
                onClick={(e) => {
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            ))}
          </ul>
        </div>

        <div className="side-menu-footer">
          <div className="avatar">
            <img src={user} alt="user" />
          </div>
          <div className="user-info">
            <h5>naveen kumar</h5>
            <p>naveen.hyd.19@gmail.com</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SideMenu;
