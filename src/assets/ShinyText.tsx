import React from "react";

const ShinyText = ({
  children,
  speedInMs = 5000,
  className = "",
  ...props
}) => {
  return (
    <>
      <style>
        {`
          @keyframes shine {
            0% {
              background-position: 200% center;
            }
            100% {
              background-position: -200% center;
            }
          }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "inline-block",
backgroundImage: "linear-gradient(90deg, #ffffff 35%,rgb(224, 241, 255) 50%, #ffffff 65%)",
          backgroundSize: "200% auto",
          color: "transparent",
            textShadow: "0 0 6px rgba(207, 245, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.4)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          animation: `shine ${speedInMs}ms linear infinite`,
        }}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default ShinyText;
