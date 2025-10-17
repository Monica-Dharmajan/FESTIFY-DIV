export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ margin: "50px 0", color: "red" }}>
        Ready to lose yourself in the music ?
      </h2>
      <img
        src="/HOME.jpg"
        alt="Home"
        style={{
          maxWidth: "90%",
          height: "auto",
          border: "5px solid red",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px red",
        }}
      />
    </div>
  );
}