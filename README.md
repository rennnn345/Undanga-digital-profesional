# Undangan Digital Profesional — Anisa & Farhan

Starter website undangan digital dengan:
- URL publik: `/w/nama-mempelai`
- Admin login: `/admin`
- Supabase PostgreSQL untuk data online
- Supabase Storage untuk foto
- Edit nama, tanggal, lokasi, teks, foto, musik, love story
- Responsive mobile
- Struktur siap deploy ke Vercel

## 1. Buat database & storage
1. Buat project di Supabase.
2. Buka SQL Editor.
3. Jalankan seluruh isi `supabase.sql`.
4. Buat user admin di Authentication > Users > Add user.
5. Setelah login pertama, admin dapat mengelola data.

## 2. Jalankan lokal
```bash
npm install
cp .env.example .env.local
```
Isi `.env.local` dengan Project URL dan anon key dari Supabase, lalu:
```bash
npm run dev
```

## 3. Deploy
Push folder ini ke GitHub lalu import repository ke Vercel.
Tambahkan environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Setelah deploy:
- `https://domainkamu.com/admin` = halaman admin
- `https://domainkamu.com/w/anisa-farhan` = link undangan

## Catatan
Versi ini sengaja dibuat sebagai fondasi yang mudah dikembangkan. Untuk versi produksi penuh, tambahkan:
- RSVP/tamu & ucapan
- daftar hadiah / rekening
- QR check-in
- multiple wedding themes
- drag-and-drop gallery
- upload MP3 langsung
- countdown real-time
- SEO/Open Graph
- custom domain per pasangan
- role admin/superadmin
