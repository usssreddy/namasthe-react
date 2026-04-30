const Shimmer = () => {
    return (
      <div
        className="shimmer-cards"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="shimmer-card"
              style={{
                width: "200px",
                height: "300px",
                padding: "20px",
                margin: "20px",
                backgroundColor: "#f0f0f0",
                background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
              }}
            ></div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;