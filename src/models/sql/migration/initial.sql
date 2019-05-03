begin;
create extension if not exists pgcrypto;

create table if not exists public.clients (
    id UUID primary key default gen_random_uuid(),
    phoneNumber varchar(64) UNIQUE not null,
		firstname varchar(64) not null,
		surname varchar(64) not null
);

/* For testing purpose. :) */
TRUNCATE public.clients CASCADE;


insert into public.clients (phoneNumber, firstname, surname) values
	('+44076546546545', 'FName', 'LName');

/* testing end */
commit;