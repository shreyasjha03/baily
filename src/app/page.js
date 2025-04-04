"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hi Bhavyu!!</h1>
      <button onClick={() => router.push("/memories")} style={styles.button}>
        Click Here
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#f5c6d6",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1.2rem",
    cursor: "pointer",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "10px",
    marginTop: "20px",
    transition: "transform 0.3s ease-in-out",
  },
};
