"use client";
import Image from "next/image";

export default function MemoriesPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Core Memories</h1>
      
      <Image
        src="/memories/memory1.jpg"
        alt="Memory 1"
        width={500} 
        height={300} 
        style={styles.image}
        priority
      />

      <button style={styles.button}>Click to see one more core memory</button>
      <button style={styles.skipButton}>Skip all of this</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f5c6d6",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  image: {
    borderRadius: "10px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  skipButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#ccc",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
