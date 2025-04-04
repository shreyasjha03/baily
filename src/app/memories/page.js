"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Memories() {
  const [index, setIndex] = useState(1);
  const router = useRouter();

  const nextImage = () => {
    setIndex((prev) => (prev < 40 ? prev + 1 : 1)); // Loop images
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Core Memories</h1>
      <p style={styles.subtitle}>Memory {index}</p>

      {/* Display Image */}
      <Image
        src={`/image${index}.jpg`} // Ensure your images are in public/
        alt={`Memory ${index}`}
        width={300}
        height={300}
        style={styles.image}
      />

      <button onClick={nextImage} style={styles.button}>
        Click to see one more core memory
      </button>
      <button onClick={() => router.push("/final")} style={styles.skipButton}>
        Skip all of this
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#f5c6d6",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  image: {
    borderRadius: "10px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "10px",
    marginTop: "10px",
  },
  skipButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    background: "gray",
    color: "white",
    border: "none",
    borderRadius: "10px",
    marginTop: "10px",
  },
};
