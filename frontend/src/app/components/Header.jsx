"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Link from 'next/link'

const Header = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // or a fallback loader
  return (
    <AppBar position="static" className="bg-gray-800 shadow-none">
        <Toolbar className="flex">
        <Typography variant="h6" className="text-white">
          Ecommerce
        </Typography>
        <div>
          <Button component={Link} className="text-white" href="/">
            Home
          </Button>
          <Button LinkComponent={Link} className="text-white" href="/about">
            About
          </Button>
          <Button LinkComponent={Link} className="text-white" href="/contact">
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
