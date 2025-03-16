import React, { useState } from "react";
import { Box, Container, Grid, Button, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" }); // Field-specific errors
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error as user types
    }));
  };

  // Toggle password visibility
  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Validate input fields
  const validateFields = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const fieldErrors = validateFields();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    // Server-side validation
    try {
      const res = await axios.post(
        "https://renax-backend.onrender.com/user/loginUser",
        formData
      );
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      const apiError = err.response?.data?.Message || "An error occurred.";
      // Map server error to respective field
      if (apiError.includes("User Not Found")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email not registered.",
        }));
      } else if (apiError.includes("Invalid Password")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Incorrect password.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: apiError }));
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#222222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        maxWidth: "100%",
        padding: 0,
        margin: 0,
      }}
    >
      <Container maxWidth="sm" sx={{ padding: 0 }}>
        <Box
          sx={{
            backgroundColor: "#1b1b1b",
            borderRadius: "25px",
            overflow: "hidden",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#F5B754",
              padding: "25px 30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "Outfit",
                fontSize: "24px",
                fontWeight: "500",
                color: "#1b1b1b",
                textAlign: "center",
              }}
            >
              Login to Your Account
            </span>
          </Box>

          <Box sx={{ padding: "60px 40px" }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address*"
                    className="form-input"
                  />
                  {errors.email && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FF6B6B",
                        fontSize: "12px",
                        marginTop: "5px",
                        marginLeft: "15px",
                        fontFamily: "Outfit",
                      }}
                    >
                      {errors.email}
                    </Typography>
                  )}
                </Grid>

                {/* Password Field */}
                <Grid item xs={12}>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password*"
                      className={`form-input ${
                        errors.password ? "error-input" : ""
                      }`}
                      style={{
                        width: "100%",
                        paddingRight: "40px", // Leave space for the visibility toggle button
                      }}
                    />
                    <Button
                      onClick={handlePasswordVisibility}
                      sx={{
                        position: "absolute",
                        right: "10px",
                        background: "none",
                        minWidth: "auto",
                        padding: 0,
                        color: "#999",
                        "&:hover": {
                          background: "none",
                          color: "#F5B754",
                        },
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </Box>
                  {errors.password && (
                    <Typography
                      sx={{
                        color: "#FF6B6B",
                        fontSize: "12px",
                        marginTop: "5px",
                        marginLeft: "15px",
                        fontFamily: "Outfit",
                      }}
                    >
                      {errors.password}
                    </Typography>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#f5b754",
                      color: "#1b1b1b",
                      borderRadius: "25px",
                      width: "100%",
                      padding: "12px 0",
                      fontSize: "14px",
                      fontFamily: "Outfit",
                      fontWeight: "300",
                      textTransform: "capitalize",
                      marginTop: "25px",
                      transition: "all 0.5s ease",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      color: "#999",
                      marginTop: "20px",
                      fontFamily: "Outfit",
                    }}
                  >
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      style={{
                        color: "#F5B754",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      Sign Up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
