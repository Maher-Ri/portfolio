import React, { useState } from "react";

const ProjectsTabs = () => {
  const [activeTab, setActiveTab] = useState("react");

  const tabs = [
    { id: "react", label: "React Apps" },
    { id: "emailers", label: "Emailers" },
    { id: "banners", label: "Banners" },
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      {/* Tabs Navigation */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px 20px",
              margin: "0 10px",
              border: "none",
              borderRadius: "8px",
              background: activeTab === tab.id ? "#007bff" : "#e0e0e0",
              color: activeTab === tab.id ? "#fff" : "#333",
              cursor: "pointer",
              fontWeight: activeTab === tab.id ? "bold" : "normal",
              transition: "0.3s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div style={{ textAlign: "center" }}>
        {activeTab === "react" && (
          <div>
            <h2>React Projects</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "20px" }}>
              {[1, 2, 3, 4].map((id) => (
                <div
                  key={id}
                  style={{
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "15px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={`https://picsum.photos/400/200?random=${id}`}
                    alt={`React Project ${id}`}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                  <h3 style={{ margin: "10px 0" }}>React Project {id}</h3>
                  <p>Short description of the project, tech stack, and features.</p>
                  <a href="#" target="_blank" rel="noreferrer" style={{ color: "#007bff", fontWeight: "bold" }}>View Demo</a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "emailers" && (
          <div>
            <h2>Email Templates</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
              {[1, 2].map((id) => (
                <div key={id} style={{ width: "300px", textAlign: "center" }}>
                  <img
                    src={`https://via.placeholder.com/300x500?text=Email+${id}`}
                    alt={`Email Template ${id}`}
                    style={{ width: "100%", borderRadius: "8px", border: "1px solid #ccc" }}
                  />
                  <a href="#" target="_blank" rel="noreferrer" style={{ display: "block", marginTop: "10px", color: "#007bff" }}>
                    View Full Template
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "banners" && (
          <div>
            <h2>Animated Banners</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
              {[1, 2].map((id) => (
                <div key={id} style={{ width: "250px", background: "#fff", padding: "10px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                  <video autoPlay loop muted playsInline style={{ width: "100%", borderRadius: "8px" }}>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  </video>
                  <p style={{ marginTop: "10px" }}>Banner {id}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsTabs;
