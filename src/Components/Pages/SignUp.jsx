import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogContent,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { PiXBold } from "react-icons/pi";

// Custom Styled Checkbox
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#999", // Default color
  "&.Mui-checked": {
    color: "#F5B754", // Checked color
  },
  "&:hover": {
    backgroundColor: "rgba(245, 183, 84, 0.1)", // Hover effect
  },
}));

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Toggle the password visibility
  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleTermsChange = (e) => {
    setIsTermsAccepted(e.target.checked);
    // Clear terms error when checkbox is checked
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      terms: "",
    }));
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    setShowTerms(true);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Client-side validation
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.password) errors.password = "Password is required";
    if (!isTermsAccepted)
      errors.terms = "Please accept the Terms and Conditions";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    // Show loading state (optional)
    setFieldErrors({});

    axios
      .post("https://renax-backend.onrender.com/user/createUser", formData)
      .then((res) => {
        if (res.data.status === "success") {
          setShowWelcome(true);
          // Clear form
          setFormData({
            name: "",
            phone: "",
            email: "",
            password: "",
          });
          setIsTermsAccepted(false);
          
          // Delay navigation to show welcome message
          setTimeout(() => {
            setShowWelcome(false);
            navigate("/login");
          }, 4000);
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const { error } = err.response.data;

          // Handle specific error messages from backend
          switch (error) {
            case "All fields are required":
              const emptyFields = {};
              Object.keys(formData).forEach((key) => {
                if (!formData[key]) {
                  emptyFields[key] = `${
                    key.charAt(0).toUpperCase() + key.slice(1)
                  } is required`;
                }
              });
              setFieldErrors(emptyFields);
              break;

            case "Invalid Email":
              setFieldErrors({ email: "Please enter a valid Gmail address" });
              break;

            case "User Already Exists":
              setFieldErrors({ email: "This email is already registered" });
              break;

            case "Password must be at least 8 characters long":
              setFieldErrors({
                password: "Password must be at least 8 characters long",
              });
              break;

            case "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character":
              setFieldErrors({
                password:
                  "Password must include: uppercase, lowercase, number, and special character",
              });
              break;

            case "Invalid Phone Number":
              setFieldErrors({
                phone: "Please enter a valid 10-digit phone number",
              });
              break;

            default:
              setFieldErrors({
                generic:
                  err.response.data.message || "An unexpected error occurred",
              });
          }
        }
      });
  };

  return (
    <>
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
            {/* Yellow Header */}
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
                Create Your Account
              </span>
            </Box>

            {/* Form Content */}
            <Box sx={{ padding: "60px 40px" }}>
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  {/* Name Field */}
                  <Grid item xs={12}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name*"
                      className={`form-input ${
                        fieldErrors.name ? "error-input" : ""
                      }`}
                    />
                    {fieldErrors.name && (
                      <Typography
                        sx={{
                          color: "#FF6B6B",
                          fontSize: "12px",
                          marginTop: "5px",
                          marginLeft: "15px",
                          fontFamily: "Outfit",
                        }}
                      >
                        {fieldErrors.name}
                      </Typography>
                    )}
                  </Grid>

                  {/* Email Field */}
                  <Grid item xs={12}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address*"
                      className={`form-input ${
                        fieldErrors.email ? "error-input" : ""
                      }`}
                    />
                    {fieldErrors.email && (
                      <Typography
                        sx={{
                          color: "#FF6B6B",
                          fontSize: "12px",
                          marginTop: "5px",
                          marginLeft: "15px",
                          fontFamily: "Outfit",
                        }}
                      >
                        {fieldErrors.email}
                      </Typography>
                    )}
                  </Grid>

                  {/* Phone Field */}
                  <Grid item xs={12}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number*"
                      className={`form-input ${
                        fieldErrors.phone ? "error-input" : ""
                      }`}
                    />
                    {fieldErrors.phone && (
                      <Typography
                        sx={{
                          color: "#FF6B6B",
                          fontSize: "12px",
                          marginTop: "5px",
                          marginLeft: "15px",
                          fontFamily: "Outfit",
                        }}
                      >
                        {fieldErrors.phone}
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
                          fieldErrors.password ? "error-input" : ""
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
                    {fieldErrors.password && (
                      <Typography
                        sx={{
                          color: "#FF6B6B",
                          fontSize: "12px",
                          marginTop: "5px",
                          marginLeft: "15px",
                          fontFamily: "Outfit",
                        }}
                      >
                        {fieldErrors.password}
                      </Typography>
                    )}
                  </Grid>

                  {/* Terms and Conditions */}
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <CustomCheckbox
                          checked={isTermsAccepted}
                          onChange={handleTermsChange}
                        />
                      }
                      label={
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#999",
                            fontFamily: "Outfit",
                          }}
                        >
                          I accept the{" "}
                          <span
                            onClick={handleTermsClick}
                            style={{
                              color: "#F5B754",
                              textDecoration: "none",
                              cursor: "pointer",
                            }}
                          >
                            Terms and Conditions
                          </span>
                        </Typography>
                      }
                    />
                    {fieldErrors.terms && (
                      <Typography
                        sx={{
                          color: "#FF6B6B",
                          fontSize: "12px",
                          marginTop: "5px",
                          marginLeft: "15px",
                          fontFamily: "Outfit",
                        }}
                      >
                        {fieldErrors.terms}
                      </Typography>
                    )}
                  </Grid>

                  {/* Submit Button */}
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
                        marginTop: "15px",
                        transition: "all 0.5s ease",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </Grid>

                  {/* Already Have an Account */}
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
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        style={{
                          color: "#F5B754",
                          textDecoration: "none",
                        }}
                      >
                        Log In
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Terms and Conditions Dialog */}
      <Dialog
        open={showTerms}
        onClose={() => setShowTerms(false)}
        fullWidth
        maxWidth="md"
        scroll="paper"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "25px",
            backgroundColor: "#222222",
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            backgroundColor: "#F5B754",
            padding: "25px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontSize: "24px",
              fontWeight: "600",
              color: "#1b1b1b",
            }}
          >
            Terms and Conditions
          </Typography>
          <Button
            onClick={() => setShowTerms(false)}
            sx={{
              color: "#1b1b1b",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <PiXBold size={25} />
          </Button>
        </Box>

        {/* Dialog Content */}
        <DialogContent sx={{ padding: "40px", color: "#fff" }}>
          {/* Existing Sections */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Outfit",
                fontWeight: "500",
                color: "#F5B754",
                mb: 2,
              }}
            >
              1. Account Registration
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Outfit",
                color: "#999",
                lineHeight: "1.8",
              }}
            >
              • You must provide accurate and complete information during
              registration
              <br />
              • You are responsible for maintaining the confidentiality of your
              account
              <br />• You must be at least 18 years old to create an account
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Outfit",
                fontWeight: "500",
                color: "#F5B754",
                mb: 2,
              }}
            >
              2. Rental Terms
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Outfit",
                color: "#999",
                lineHeight: "1.8",
              }}
            >
              • Valid driver's license required for all rentals
              <br />
              • Minimum age requirements apply for certain vehicle categories
              <br />
              • Security deposit may be required
              <br />• Full insurance coverage is mandatory
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Outfit",
                fontWeight: "500",
                color: "#F5B754",
                mb: 2,
              }}
            >
              3. Privacy Policy
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Outfit",
                color: "#999",
                lineHeight: "1.8",
              }}
            >
              • We collect and process your personal data in accordance with
              privacy laws
              <br />
              • Your information is used only for rental services and account
              management
              <br />• We implement security measures to protect your data
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Outfit",
                fontWeight: "500",
                color: "#F5B754",
                mb: 2,
              }}
            >
              4. Payment Terms
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Outfit",
                color: "#999",
                lineHeight: "1.8",
              }}
            >
              • Payment is required at the time of booking
              <br />
              • We accept major credit cards and approved payment methods
              <br />• Additional charges may apply for late returns or damages
            </Typography>
          </Box>

          {/* New Sections */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Outfit",
                fontWeight: "500",
                color: "#F5B754",
                mb: 2,
              }}
            >
              5. Cancellation Policy
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Outfit",
                color: "#999",
                lineHeight: "1.8",
              }}
            >
              • Cancellations made 48 hours before the rental period will
              receive a full refund
              <br />
              • Cancellations made within 48 hours of the rental period will
              incur a 20% fee
              <br />• No refunds for no-shows or cancellations after the rental
              period has started
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Outfit",
                fontWeight: "500",
                color: "#F5B754",
                mb: 2,
              }}
            >
              6. Vehicle Usage
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Outfit",
                color: "#999",
                lineHeight: "1.8",
              }}
            >
              • Vehicles must be used only for personal or business purposes as
              agreed
              <br />
              • Off-road use or racing is strictly prohibited
              <br />• Smoking or transporting pets in the vehicle is not allowed
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Outfit",
                fontWeight: "500",
                color: "#F5B754",
                mb: 2,
              }}
            >
              7. Damage and Liability
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Outfit",
                color: "#999",
                lineHeight: "1.8",
              }}
            >
              • You are responsible for any damage to the vehicle during the
              rental period
              <br />
              • Report any accidents or damages immediately to our support team
              <br />• Failure to report damages may result in additional charges
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Outfit",
                fontWeight: "500",
                color: "#F5B754",
                mb: 2,
              }}
            >
              8. Termination of Service
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Outfit",
                color: "#999",
                lineHeight: "1.8",
              }}
            >
              • We reserve the right to terminate your account for violations of
              these terms
              <br />
              • In case of termination, you will not be eligible for any refunds
              <br />• You may appeal termination by contacting our support team
            </Typography>
          </Box>

          {/* Accept Button */}
          <Button
            onClick={() => {
              setIsTermsAccepted(true);
              setShowTerms(false);
            }}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#f5b754",
              color: "#1b1b1b",
              borderRadius: "25px",
              padding: "12px",
              fontSize: "14px",
              fontFamily: "Outfit",
              fontWeight: "300",
              textTransform: "capitalize",
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            Accept & Continue
          </Button>
        </DialogContent>
      </Dialog>

      {/* Welcome Dialog */}
      <Dialog
        open={showWelcome}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "15px",
            backgroundColor: "#222222",
            maxWidth: "400px",
            margin: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            textAlign: "center",
            padding: "40px",
            color: "#fff",
          }}
        >
          <CheckCircleOutlineIcon
            sx={{
              fontSize: "60px",
              color: "#F5B754",
              marginBottom: "20px",
            }}
          />
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Outfit",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            Welcome, {formData?.name}!
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Outfit",
              color: "#999",
              marginBottom: "10px",
            }}
          >
            Your account has been created successfully.
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Outfit",
              color: "#F5B754",
            }}
          >
            Redirecting to login...
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SignUp;
