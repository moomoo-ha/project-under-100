-- Project Under 100: one private sync record per authenticated user.
-- Run this whole file in Supabase Dashboard → SQL Editor → New query.

create table if not exists public.fitness_states (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.fitness_states enable row level security;

drop policy if exists "Users can view only their own fitness state" on public.fitness_states;
create policy "Users can view only their own fitness state"
  on public.fitness_states for select
  using (auth.uid() = user_id);

drop policy if exists "Users can create only their own fitness state" on public.fitness_states;
create policy "Users can create only their own fitness state"
  on public.fitness_states for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update only their own fitness state" on public.fitness_states;
create policy "Users can update only their own fitness state"
  on public.fitness_states for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
