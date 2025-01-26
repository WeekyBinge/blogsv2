import React, { useState, useEffect } from "react";

const PopupOnReload = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false);

  useEffect(() => {
    // Show the popup and trigger the animation
    setShowPopup(true);
    setTimeout(() => {
      setAnimatePopup(true);
    }, 50); // Small delay for the animation to apply
  }, []);

  const closePopup = () => {
    setAnimatePopup(false); // Trigger fade-out animation
    setTimeout(() => {
      setShowPopup(false); // Hide popup after animation completes
    }, 300); // Match the duration of the animation
  };

  return (
    <div>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(1, 1, 0.5, 0.8)",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            opacity: animatePopup ? 1 : 0,
            transition: "opacity 0.1s ease-in-out",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "10px 20px",
              maxWidth: "100%",
              textAlign: "center",
              boxShadow: "0 12px 8px rgba(0, 0, 0, 0.5)",
              transform: animatePopup ? "scale(1)" : "scale(0.8)",
              transition: "transform 0.1s ease-in-out",
            }}
          >
            <h2>Welcome!</h2>
            <p>
              Dive into my blogs, and learning journeys—all waiting for you in the navbar.
            </p>
            <button
              onClick={closePopup}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupOnReload;

