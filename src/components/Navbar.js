"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    router.push(`/kdrama/${q}`);
    setQuery("");
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link className="brand" href="/">CuteSy:p</Link>
        <Link className="nav-link" href="/">Home</Link>
        <Link className="nav-link" href="/kdrama">KDrama</Link>
        <Link className="nav-link" href="/actors">Actors</Link>
      </div>
      <form onSubmit={handleSearch} className="search">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari drakor… (mis. twinklingwatermelon)"
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}
