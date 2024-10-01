import { Container, Typography, Link, Box, IconButton } from "@mui/material";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";
const Footer = ({}) => {
  return (
    <footer className="bg-gray-900 bottom-0 left-0 w-full py-4">
      <Container maxWidth="lg">
        <Box className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side */}
          <Box className="mb-4 md:mb-0">
            <Typography variant="h6" className="text-white mb-2">
              My Website
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              © {new Date().getFullYear()} My Website. All rights reserved.
            </Typography>
          </Box>

          {/* Center Links */}
          <Box className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <Link
              href="/"
              underline="none"
              className="text-gray-400 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              underline="none"
              className="text-gray-400 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              underline="none"
              className="text-gray-400 hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              underline="none"
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </Link>
          </Box>

          {/* Right Side - Social Icons */}
          <Box className="flex space-x-4">
            <IconButton
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
