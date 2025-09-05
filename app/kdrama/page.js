import Link from "next/link";

const dramas = [
  { id: "twinklingwatermelon", title: "Twinkling Watermelon", image: "/images/melon.jpg", tags:["Music","Youth"] },
  { id: "traumacode", title: "Trauma Code", image: "/images/trauma.jpg", tags:["Medical","Action"] },
  { id: "whenlifegivesyoutangerines", title: "When Life Gives You Tangerines", image: "/images/life.jpg", tags:["Romance","Slice of life"] },
  { id: "youthofmay", title: "Youth of May", image: "/images/youth.jpg", tags:["Melodrama"] },
  { id: "headoverheels", title: "Head Over Heels", image: "/images/heels.jpg", tags:["RomCom"] },
];

export default function KdramaList() {
  return (
    <div>
      <h2 className="section-title">KDrama</h2>
      <div className="grid">
        {dramas.map((d) => (
          <Link key={d.id} href={`/kdrama/${d.id}`}>
            <div className="card">
              <img className="thumb" src={d.image} alt={d.title} />
              <div className="card-body">
                <div className="card-title">{d.title}</div>
                <div>
                  {d.tags?.map((t) => (<span key={t} className="badge">{t}</span>))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
