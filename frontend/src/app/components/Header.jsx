"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // or a fallback loader
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "var(--navigation)" }}
      className="shadow mb-2"
    >
      <Toolbar className="relative flex flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center w-full max-w-7xl">
        <Typography
          variant="h6"
          style={{ color: "var(--text)" }}
          className="flex items-center whitespace-nowrap text-2xl"
        >
          Ecommerce
        </Typography>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="text-gray-600 md:mr-12 hover:text-blue-600">
              <Button
                component={Link}
                style={{ color: "var(--text)" }}
                href="/pricing"
              >
                Pricing
              </Button>
            </li>
            <li className="text-gray-600 md:mr-12 hover:text-blue-600">
              <Button
                component={Link}
                style={{ color: "var(--text)" }}
                href="/features"
              >
                Features
              </Button>
            </li>
            <li className="text-gray-600 md:mr-12 hover:text-blue-600">
              <Button
                component={Link}
                style={{ color: "var(--text)" }}
                href="/support"
              >
                Support
              </Button>
            </li>
            <li className="md:mr-12">
              <Button
                component={Link}
                href="/login"
                variant="contained"
                sx={{
                  color: "var(--text)",
                  transition: "all 0.3s",
                  backgroundColor: "var(--accent)",
                  "&:hover": {
                    backgroundColor: "var(--secondary)",
                  },
                }}
              >
                Login
              </Button>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
