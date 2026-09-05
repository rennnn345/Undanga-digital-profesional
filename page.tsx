import Link from "next/link";

export default function Home() {
  return (
    <main className="landing">
      <div className="landing-card">
        <p className="eyebrow">WEDDING INVITATION CMS</p>
        <h1>Undangan digital profesional</h1>
        <p>Kelola nama, tanggal, lokasi, foto, musik, galeri, love story, RSVP, dan konten undangan dari satu halaman admin.</p>
        <div className="landing-actions">
          <Link href="/admin" className="btn primary">Masuk Admin</Link>
          <span>Contoh URL: /w/anisa-farhan</span>
        </div>
      </div>
    </main>
  );
}