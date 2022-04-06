import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {CocktailContext} from "./store/store";
import { useEffect, useState } from "react";

const pages = ["Mainpage", "Login", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {loginState, setLoginState, profilePicUrl} = useContext(CocktailContext);
  const {userName} = useContext(CocktailContext);

  console.log(userName);



  const loginClickHandler = () => {
    // ctx.loginState = "attempt";
    setLoginState("attempt")
  };

  useEffect(() => {
    
  console.log("ctx changed")
   
  }, [loginState])
  

  // console.log(ctx.loginState === "notLogged");


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

const [clickedButton, setclickedButton] = useState()

  const handleUserMenuChoice = (event) => {
    if (event.target.innerText === 'Logout') {setLoginState("notLogged") 
    setAnchorElUser(null);
  }
  }

  


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* <Link to="/">
                <MenuItem key={"1"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{"Main page"}</Typography>
                </MenuItem>
              </Link>
              <Link to="/Login">
                <MenuItem key={"2"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {"Login Page for now "}
                  </Typography>
                </MenuItem>
              </Link>
              <MenuItem key={"3"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{"3"}</Typography>
              </MenuItem> */}

              {pages.map((page, i) => (
                <Link to={`/${page}`} key={i}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, i) => (
              <Link to={`/${page}`} key={i}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
<div>{userName === undefined ? 'Login' : `Welcome ${userName}     ` }</div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={
                  loginState === "notLogged"
                    ? loginClickHandler
                    : handleOpenUserMenu
                }
                sx={{ p: 0 }}
              >
                <Avatar alt="Remy Sharp" src={profilePicUrl} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={setting} onClick={handleUserMenuChoice}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
