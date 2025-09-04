export default function ActorsPage() {
  const actors = [
    { id: "cuyoung", name: "Cuyoung", role: "Lead Actor", image: "/images/cuyoung.jpg" },
    { id: "shineunsoo", name: "Shin Eunsoo", role: "Lead Actress", image: "/images/shineunsoo.jpg" },
  ];

  return (
    <div>
      <h2 className="section-title">Actor List</h2>
      <div className="actors">
        {actors.map((a) => (
          <div key={a.id} className="card actor-card">
            <img className="thumb" src={a.image} alt={a.name} />
            <div className="card-body">
              <div className="card-title">{a.name}</div>
              <div className="actor-sub">{a.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
