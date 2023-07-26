import React from "react";

const Home = () => {
  const videoUrl =
    "https://player.vimeo.com/external/403833760.sd.mp4?s=309db6b4a56780b895f3150c561038edb10b5fe9&profile_id=164&oauth2_token_id=57447761";

  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        <video style={styles.video} autoPlay muted loop>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.videoOverlay}>
          <h1 style={{ ...styles.title, fontWeight: "bold" }}>Welcome to Hotel Guest Service</h1>
          <div style={styles.content}>
            <p style={styles.description}>
              At Hotel Guest Service, we are <span style={styles.colorBlue}>dedicated</span> to providing you with top-quality <span style={styles.colorGreen}>information</span> and <span style={styles.colorOrange}>services</span> to ensure your stay is <span style={styles.colorPurple}>extraordinary</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          &copy; {new Date().getFullYear()} Hotel Guest Service. All rights reserved @ Njeri Macharia.
        </p>
      </footer>
    </div>
  );
};

// CSS styles
const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // Align everything to the top
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },
  videoContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: "0",
    left: "0",
  },
  videoOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  title: {
    fontSize: "48px",
    marginBottom: "20px",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  description: {
    fontSize: "18px",
    maxWidth: "800px",
    marginBottom: "30px",
    lineHeight: "1.6",
    textAlign: "center",
  },
  content: {
    maxWidth: "800px",
    zIndex: 1,
  },
  footer: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    padding: "10px 0",
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    animation: "fadeIn 1s ease-in-out",
  },
  footerText: {
    color: "#555",
    fontSize: "14px",
    margin: "0",
    letterSpacing: "1px",
  },
  colorBlue: {
    color: "#3498db", // Nice blue color
  },
  colorGreen: {
    color: "#2ecc71", // Nice green color
  },
  colorOrange: {
    color: "#e67e22", // Nice orange color
  },
  colorPurple: {
    color: "#9b59b6", // Nice purple color
  },
};

export default Home;
