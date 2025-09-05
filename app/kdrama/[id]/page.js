const dramas = {
  twinklingwatermelon: {
    title: "Twinkling Watermelon",
    trailer: "https://www.youtube.com/embed/DqceSqn0hiA",
    link: "https://www.netflix.com/title/81677629"
  },
  traumacode: {
    title: "Trauma Code",
    trailer: "https://www.youtube.com/embed/pdDXO-dMjAc",
    link: "https://www.netflix.com/title/81677629"
  },
  whenlifegivesyoutangerines: {
    title: "When Life Gives You Tangerines",
    trailer: "https://www.youtube.com/embed/4ECAaQkNAbc",
    link: "https://www.netflix.com/title/81681535"
  },
youthofmay: {
  title: "Youth of May",
  trailer: "https://www.youtube.com/embed/NZPOPMnmBPw",
  link: "https://www.netflix.com/title/81473221"
},
headoverheels: {
  title: "Head Over Heels",
  trailer: "https://www.youtube.com/embed/NEyJtFI04eM",
  link: "https://www.netflix.com/"
}

  };

export default function KdramaDetail({ params }) {
  const drama = dramas[params.id];

  if (!drama) {
    return <p style={{padding:16}}>Drakor tidak ditemukan</p>;
  }

  return (
    <div className="detail">
      <h1 className="section-title">{drama.title}</h1>
      <iframe
        src={drama.trailer}
        title={drama.title}
        allowFullScreen
      />
      <div>
        <a className="cta" href={drama.link} target="_blank" rel="noopener noreferrer">
           Watch This!
        </a>
      </div>
    </div>
  );
}
