import React, { ReactNode } from "react";
import { styled } from "@mui/material";

interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

// Defina o botão estilizado FORA do componente, sem usar theme
const CustomButton = styled("button")(() => ({
  background: "linear-gradient(to right,#fdd835, #00c853)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  gap: "10px",
  borderRadius: "8px",
  padding: "12px 14px",
  width: "100%",
  cursor: "pointer",
  fontWeight: "bold",
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

export default StyledButton;
