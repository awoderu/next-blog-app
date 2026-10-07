"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";
import { signOut, useSession } from "next-auth/react";
import {Menu, X} from "lucide-react";

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

const Navbar = () => {
  const session = useSession();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          CrystalCorp
        </Link>
        <div className="flex items-center gap-5">
          <DarkModeToggle />
          <nav className="hidden md:block" aria-label="Main navigation">
            <div className={styles.links}>
              {links.map((link) => (
                <Link key={link.id} href={link.url} className={styles.link}>
                  {link.title}
                </Link>
              ))}
              {session.status === "authenticated" && (
                <button className={styles.logout} onClick={() => signOut()}>
                  Logout
                </button>
              )}
            </div>
          </nav>
          <button
            className="p-6 text-black hover:text-white md:hidden"
            onClick={() => setMobileMenuIsOpen((open) => !open)}
            type="button"
            aria-label={mobileMenuIsOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuIsOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuIsOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <nav
          id="mobile-navigation"
          className={`md:hidden bg-white border-slate-800 font-mono z-50 ${styles.mobileNav}`}
          aria-label="Mobile navigation"
        >
          <div className={styles.mobileNavInner}>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileMenuIsOpen(false)}
                className={`${styles.mobileLink} hover:text-[#53c28b]`}
              >
                {link.title}
              </Link>
            ))}
            {session.status === "authenticated" && (
              <button
                type="button"
                className={`${styles.mobileLink} hover:text-[#53c28b]`}
                onClick={() => signOut()}
              >
                Logout
              </button>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;