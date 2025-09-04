import Link from "next/link";

const topDramas = [
  { id: "twinklingwatermelon", title: "Twinkling Watermelon", image: "/images/melon.jpg" },
  { id: "traumacode", title: "Trauma Code", image: "/images/trauma.jpg" },
  { id: "whenlifegivesyoutangerines", title: "When Life Gives You Tangerines", image: "/images/life.jpg" },
];

export default function HomePage() {
  return (
    <div>
      <h2 className="section-title">Top 3 KDrama by Enji</h2>
      <div className="grid">
        {topDramas.map((d) => (
          <Link key={d.id} href={`/kdrama/${d.id}`}>
            <div className="card">
              <img className="thumb" src={d.image} alt={d.title} />
              <div className="card-body">
                <div className="card-title">{d.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
