"use client"; // Required for interactivity

import { useState } from "react";

export default function MemoriesPage() {
  const totalImages = 40;
  const [index, setIndex] = useState(1); // Start from image1.jpg

  const nextImage = () => {
    if (index < totalImages) {
      setIndex(index + 1);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Core Memories</h1>
      <div style={styles.imageWrapper}>
        <img
          src={`/images/image${index}.jpg`}
          alt={`Memory ${index}`}
          style={styles.image}
        />
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={nextImage} style={styles.button}>
          Click to see one more core memory
        </button>
        <a href="/final">
          <button style={styles.finalButton}>One last thing!</button>
        </a>
      </div>
    </div>
  );
}

// ✅ Styles (Enhanced Button Design)
const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#f5c2c2",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  imageWrapper: {
    width: "100%",
    maxWidth: "500px",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "10px",
    transition: "opacity 0.5s ease-in-out",
    objectFit: "contain",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "relative",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#d9534f",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  // 🎨 Fancy "One Last Thing!" Button
  finalButton: {
    padding: "12px 20px",
    background: "linear-gradient(90deg, #ff8a00, #e52e71)", // Gradient
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
};

// ✅ Button Hover Effects
styles.finalButton[":hover"] = {
  transform: "scale(1.05)",
  boxShadow: "0 0 10px rgba(255, 138, 0, 0.5)",
};
