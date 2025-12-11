"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <h1>Portfolio</h1>

      <div className="navLink">
        <Link href={"/"} className="navigation">
          About
        </Link>
        <Link href={"/"} className="navigation">
          Projects
        </Link>
        <Link href={"/"} className="navigation">
          Skills
        </Link>
        <Link href={"/"} className="navigation">
          contact
        </Link>
      </div>
    </nav>
  );
}
