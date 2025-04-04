"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MemoryPage() {
  const [index, setIndex] = useState(1);
  const router = useRouter();

  // Function to go to the next image
  const nextImage = () => {
    setIndex((prev) => (prev < 40 ? prev + 1 : 1)); // Cycle images
  };

  // Function to skip to final page
  const skipToFinal = () => {
    router.push("/final");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Core Memories</h1>
      <p style={styles.subtitle}>Memory {index}</p>

      {/* Displaying the image */}
      <div style={styles.imageWrapper}>
        <Image
          src={`/images/image${index}.jpg`} // Ensure images are in `public/images/`
          alt={`Memory ${index}`}
          width={500}
          height={300}
          style={styles.image}
          priority
          onError={(e) => console.log("Image failed to load:", e)} // Debugging
        />
      </div>

      {/* Buttons */}
      <button onClick={nextImage} style={styles.nextButton}>
        Click to see one more core memory
      </button>
      <button onClick={skipToFinal} style={styles.skipButton}>
        Skip all of this
      </button>
    </div>
  );
}

// Styling
const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#f5c2c2",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" },
  subtitle: { fontSize: "20px", fontWeight: "500", marginBottom: "20px" },
  imageWrapper: { width: "500px", height: "300px", overflow: "hidden" },
  image: { borderRadius: "10px", objectFit: "cover" },
  nextButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    border: "none",
    marginTop: "10px",
  },
  skipButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "gray",
    color: "white",
    borderRadius: "5px",
    border: "none",
    marginTop: "10px",
  },
};
