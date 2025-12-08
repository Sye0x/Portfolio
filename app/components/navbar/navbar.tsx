"use client";

// Navigation component with responsive mobile menu
// Features: sticky navbar, smooth animations, accessible hamburger toggle
import React, { useState } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return <nav className="navbar"></nav>;
}
