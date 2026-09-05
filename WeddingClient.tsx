 "use client";

import { useEffect, useState } from "react";

export default function WeddingClient({ wedding }: { wedding: any }) {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    document.title = `${wedding.bride_name} & ${wedding.groom_name} — Wedding`;
  }, [wedding]);

  function openInvitation() {
    setOpen(true);
    setTimeout(()=>document.getElementById("content")?.scrollIntoView({behavior:"smooth"}), 100);
  }

  return (
    <main className="wedding">
      <section className="cover">
        <div className="cover-floral floral-left">✿</div>
        <div className="cover-copy">
          <p className="eyebrow">THE WEDDING OF</p>
          <h1>{wedding.bride_name}</h1><span className="amp">&</span><h1>{wedding.groom_name}</h1>
          <p className="greeting">{wedding.greeting}</p>
          <button className="btn primary" onClick={openInvitation}>♥ Buka Undangan</button>
        </div>
        <div className="hero-photo" style={{backgroundImage:`url(${wedding.hero_image || "/placeholder.svg"})`}} />
      </section>

      {open && <div className="music-control">
        {wedding.music_url ? <audio id="music" src={wedding.music_url} loop autoPlay onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} /> : null}
        <button onClick={() => {
          const a = document.getElementById("music") as HTMLAudioElement | null;
          if (!a) return;
          a.paused ? a.play() : a.pause();
        }}>{playing ? "♫" : "♪"}</button>
      </div>}

      <div id="content">
        <section className="quote section">
          <p>{wedding.quote}</p><small>{wedding.quote_source}</small>
        </section>

        <section className="couple section">
          <div className="person"><img src={wedding.bride_image || "/placeholder.svg"} /><h2>{wedding.bride_name}</h2><p>Putri dari<br/>Bapak Nama Ayah & Ibu Nama Ibu</p></div>
          <div className="heart">♥</div>
          <div className="person"><img src={wedding.groom_image || "/placeholder.svg"} /><h2>{wedding.groom_name}</h2><p>Putra dari<br/>Bapak Nama Ayah & Ibu Nama Ibu</p></div>
        </section>

        <section className="countdown section">
          <p>Menuju Hari Bahagia</p>
          <h2>{new Date(wedding.wedding_date).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"})}</h2>
        </section>

        <section className="events section">
          <article><h2>Akad Nikah</h2><b>{wedding.akad_time} WIB</b><p>{wedding.venue_akad}<br/>{wedding.address_akad}</p>{wedding.map_url && <a href={wedding.map_url} target="_blank">Lihat Peta</a>}</article>
          <article><h2>Resepsi</h2><b>{wedding.reception_time} WIB</b><p>{wedding.venue_reception}<br/>{wedding.address_reception}</p>{wedding.map_url && <a href={wedding.map_url} target="_blank">Lihat Peta</a>}</article>
        </section>

        <section className="story section"><h2>Our Love Story</h2><div className="timeline">{(wedding.story || []).map((s:any,i:number)=><article key={i}><span>{s.date}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></section>

        <section className="gallery section"><h2>Galeri Kami</h2><div className="gallery-grid">{(wedding.gallery || []).map((url:string,i:number)=><img src={url} key={i} alt={`Galeri ${i+1}`}/>)}</div></section>

        <section className="closing section"><p>“</p><h3>{wedding.closing_text}</h3><p>{wedding.thank_you}</p><strong>{wedding.bride_name} & {wedding.groom_name}</strong></section>
      </div>
    </main>
  );
}