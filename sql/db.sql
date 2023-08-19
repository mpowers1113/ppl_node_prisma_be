-- Database Setup File
\set ON_ERROR_STOP true
SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

-- Drop Tables
DROP TABLE IF EXISTS exercises;

-- ENUMS
CREATE TYPE muscle AS ENUM ('abdominals','hamstrings','adductors','quadriceps','biceps','shoulders','chest','middle back','calves','glutes','lower back','lats','triceps','traps','forearms','neck','abductors');
CREATE TYPE forceType AS ENUM ('pull','push','static');
CREATE TYPE levelType AS ENUM ('beginner','intermediate','expert');
CREATE TYPE mechanicType AS ENUM ('compound','isolation');
CREATE TYPE equipmentType AS ENUM ('body only','machine','other','foam roll','kettlebells','dumbbell','cable','barbell','bands','medicine ball','exercise ball','e-z curl bar');
CREATE TYPE categoryType AS ENUM ('strength','stretching','plyometrics','strongman','powerlifting','cardio','olympic weightlifting');

-- Create Exercises Table
CREATE TABLE exercises (
  id UUID,
  name Text NOT NULL,
  aliases Text[],
  primary_muscles muscle[],
  secondary_muscles muscle[],
  force forceType,
  level levelType NOT NULL,
  mechanic mechanicType,
  equipment equipmentType,
  category categoryType NOT NULL,
  instructions Text[],
  description Text,
  tips Text[],
  date_created timestamptz NOT NULL DEFAULT now(),
  date_updated timestamptz NOT NULL DEFAULT statement_timestamp(),
  PRIMARY KEY ("id"),
  UNIQUE ("name")
);
