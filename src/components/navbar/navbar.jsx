"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";


const Navbar = () => {

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];


  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        LAMAMIA
      </Link>
      <nav>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
          <li>
            <button className={styles.logout} onClick={() => {
              console.log("Logout clicked");
            }}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar