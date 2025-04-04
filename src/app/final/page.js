"use client";
import { useEffect, useRef } from "react";

export default function FinalPage() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => console.log("Autoplay blocked:", error));
    }
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>A Message for You...</h1>
      <p style={styles.subtitle}>Listen carefully ❤️</p>

      <audio ref={audioRef} controls style={styles.audio}>
        <source src="/voice-memo.m4a" type="audio/mp4" />
        <source src="/voice-memo.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <p style={styles.note}>
        If the audio doesn't play automatically, press the play button.
      </p>
    </div>
  );
}

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
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "500",
    marginBottom: "20px",
  },
  audio: {
    width: "80%",
    maxWidth: "400px",
    outline: "none",
    borderRadius: "10px",
  },
  note: {
    fontSize: "14px",
    marginTop: "10px",
    fontStyle: "italic",
  },
};
