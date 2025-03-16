import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { FiPhoneCall } from "react-icons/fi";
import NavLogo from "./images/nav-logo.png";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Cars", path: "/cars" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.reload(); // Refresh page after logout
  };

  return (
    <Box sx={{ position: "fixed", left: "0", width: "100%", zIndex: "999" }}>
      <AppBar
        sx={{
          width: "100%",
          height: "90px",
          padding: "10px 70px",
          position: "relative",
          backgroundColor: isScrolled ? "#222" : "transparent",
          boxShadow: isScrolled ? "0px 2px 10px rgba(0, 0, 0, 0.5)" : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
              <img src={NavLogo} alt="Logo" width={"100px"} />
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "#D4B26A" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <Link
                    to={page.path}
                    key={page.name}
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{ color: "#40250a", textTransform: "capitalize" }}
                      >
                        {page.name}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
                {/* Profile Link for Mobile */}
                {token && (
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{ color: "#40250a", textTransform: "capitalize" }}
                      >
                        Profile
                      </Typography>
                    </MenuItem>
                  </Link>
                )}
              </Menu>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
              }}
            >
              {pages.map((page) => (
                <Link
                  to={page.path}
                  key={page.name}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      textTransform: "capitalize",
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "13px",
                      "&:hover": {
                        color: "#f5b754",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
              {/* Profile Link for Desktop */}
              {token && (
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      textTransform: "capitalize",
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "13px",
                      "&:hover": {
                        color: "#f5b754",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Profile
                  </Button>
                </Link>
              )}
            </Box>

            {/* Phone Call & Auth Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                marginLeft: "8px",
                alignItems: "center",
              }}
            >
              {/* Authentication Buttons */}
              {!token ? (
                <>
                  <Link to="/signup">
                    <Button
                      sx={{
                        color: "white",
                        border: "1px solid #f5b754",
                        borderRadius: "20px",
                        textTransform: "capitalize",
                        fontSize: "13px",
                        ml: 2,
                        "&:hover": {
                          backgroundColor: "#f5b754",
                          color: "black",
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              ) : (
                <Button
                  onClick={handleLogout}
                  sx={{
                    color: "white",
                    border: "1px solid #f5b754",
                    borderRadius: "20px",
                    textTransform: "capitalize",
                    fontSize: "13px",
                    ml: 2,
                    "&:hover": { backgroundColor: "#f5b754", color: "black" },
                  }}
                >
                  Logout
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;