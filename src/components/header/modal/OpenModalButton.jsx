import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const OpenModalButton = styled(motion.button)`
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  flex-direction: column;
  border-radius: 0.25rem;
  width: 100%;
  height: fit-content;
  white-space: nowrap;
  cursor: pointer;
  background: #f3f6f9;
  padding-right: 10rem;
  border-color: 1.5px;
  border-color: #e0e3e7;
`;
const animatedOpenButton = ({ children, handlClick }) => {
  return (
    <OpenModalButton
      onClick={handlClick}
      //   whileHover={{ scale: 1.1 }}
      //   whileTap={{ scale: 0.9 }}
    >
      {children}
    </OpenModalButton>
  );
};

export default animatedOpenButton;
