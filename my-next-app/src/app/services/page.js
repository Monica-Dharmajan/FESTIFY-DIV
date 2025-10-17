export default function Services() {
  const services = [
    { title: "Ticket Booking", desc: "Book your concert tickets instantly." },
    { title: "VIP Passes", desc: "Get exclusive access to premium events." },
    { title: "Event Notifications", desc: "Never miss your favorite events." },
    { title: "Merchandise", desc: "Buy official merchandise online." },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ margin: "50px 0", color: "red" }}>Our Services</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {services.map((s, idx) => (
          <div
            key={idx}
            style={{
              border: "2px solid red",
              borderRadius: "10px",
              padding: "20px",
              width: "90%",
              maxWidth: "250px",
              boxShadow: "0px 0px 20px red",
              color: "white",
              backgroundColor: "#111",
            }}
          >
            <h3 style={{ color: "red" }}>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}