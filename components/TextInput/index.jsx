import { FormGroup, Input, InputLabel, Typography } from "@mui/material";
import React from "react";

const TextInput = ({ label, placeholder, handleChange, ...props }) => (
  <FormGroup sx={{ width: "100%", marginBottom: "24px" }}>
    <InputLabel>
      <Typography
        fontSize="14px"
        fontWeight={400}
        color="#2D3748"
        margin="5.5px"
      >
        {label}
      </Typography>
    </InputLabel>
    <Input
      placeholder={placeholder}
      onChange={handleChange}
      disableUnderline={true}
      sx={{
        border: "1px solid #E2E8F0",
        borderRadius: "15px",
        padding: "15.25px 20px",
        height: "50px",
        fontSize: "14px",
        color: "#2D3748",
        input: {
          "&::placeholder": {
            fontSize: "14px",
            fontWeight: 400,
            color: "#A0AEC0",
          },
        },
      }}
      {...props}
    />
  </FormGroup>
);

export default TextInput;
