create table if not exists users (
  id SERIAL, 
  insert_dt timestamp(6) without time zone default(now() at time zone 'utc'),
  name varchar(20) not null unique
)