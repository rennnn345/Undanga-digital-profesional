-- Jalankan di Supabase SQL Editor.
create extension if not exists "pgcrypto";

create table if not exists public.weddings (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade not null unique,
  slug text not null unique,
  groom_name text not null default 'Farhan Maulana',
  bride_name text not null default 'Anisa Putri',
  greeting text default 'Kepada Yth. Bapak/Ibu/Saudara/i',
  quote text default '',
  quote_source text default '',
  wedding_date date,
  akad_time text default '09:00',
  reception_time text default '11:00',
  venue_akad text default '',
  venue_reception text default '',
  address_akad text default '',
  address_reception text default '',
  map_url text default '',
  story jsonb default '[]'::jsonb,
  gallery jsonb default '[]'::jsonb,
  hero_image text default '',
  bride_image text default '',
  groom_image text default '',
  music_url text default '',
  closing_text text default '',
  thank_you text default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.weddings enable row level security;

drop policy if exists "Public can view weddings" on public.weddings;
create policy "Public can view weddings" on public.weddings for select using (true);

drop policy if exists "Owner can insert wedding" on public.weddings;
create policy "Owner can insert wedding" on public.weddings for insert with check (auth.uid() = owner_id);

drop policy if exists "Owner can update wedding" on public.weddings;
create policy "Owner can update wedding" on public.weddings for update using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

insert into storage.buckets (id, name, public)
values ('wedding-media','wedding-media',true)
on conflict (id) do nothing;

drop policy if exists "Public media read" on storage.objects;
create policy "Public media read" on storage.objects for select using (bucket_id = 'wedding-media');

drop policy if exists "Owner media upload" on storage.objects;
create policy "Owner media upload" on storage.objects for insert to authenticated
with check (bucket_id = 'wedding-media' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "Owner media update" on storage.objects;
create policy "Owner media update" on storage.objects for update to authenticated
using (bucket_id = 'wedding-media' and (storage.foldername(name))[1] = auth.uid()::text);
