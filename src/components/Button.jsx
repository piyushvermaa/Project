import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-gradient-to-r from-[#6A00F1] to-[#4c3390] shadow-sm hover:from-[#4c3390] hover:to-[#6A00F1] rounded-[10px] outline-none ${styles}`}
    style={{
      animation: "gradientAnimation infinite 5s ease-in-out",
    }}
  >
    View Concepts
  </button>
);

export default Button;

// Define keyframe animation within the same file
const styles = `
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

export { styles };
