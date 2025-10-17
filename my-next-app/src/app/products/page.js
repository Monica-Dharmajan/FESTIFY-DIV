export default function Products() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ margin: "50px 0", color: "red" }}>Grab your tickets soon!</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {["/anirudh.jpeg", "/chinmayi.jpg"].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="concert"
            style={{
              width: "90%",
              maxWidth: "400px",
              height: "auto",
              border: "5px solid red",
              borderRadius: "10px",
              boxShadow: "0px 0px 20px red",
            }}
          />
        ))}
      </div>
    </div>
  );
}