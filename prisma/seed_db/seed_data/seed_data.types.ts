export enum Muscle {
  abdominals = 'abdominals',
  hamstrings = 'hamstrings',
  calves = 'calves',
  shoulders = 'shoulders',
  adductors = 'adductors',
  glutes = 'glutes',
  quadriceps = 'quadriceps',
  biceps = 'biceps',
  forearms = 'forearms',
  abductors = 'abductors',
  triceps = 'triceps',
  chest = 'chest',
  lower_back = 'lower_back',
  traps = 'traps',
  middle_back = 'middle_back',
  lats = 'lats',
  neck = 'neck',
}

export enum Force {
  pull = 'pull',
  push = 'push',
  static = 'static',
}

export enum Level {
  beginner = 'beginner',
  intermediate = 'intermediate',
  expert = 'expert',
}

export enum Mechanic {
  compound = 'compound',
  isolation = 'isolation',
}

export enum Equipment {
  body = 'body_only',
  machine = 'machine',
  kettlebells = 'kettlebells',
  dumbbell = 'dumbbell',
  cable = 'cable',
  barbell = 'barbell',
  bands = 'bands',
  medicine_ball = 'medicine_ball',
  exercise_ball = 'exercise_ball',
  e_z_curl_bar = 'ez_curl_bar',
  foam_roll = 'foam_roll',
}

export enum Category {
  strength = 'strength',
  stretching = 'stretching',
  plyometrics = 'plyometrics',
  strongman = 'strongman',
  powerlifting = 'powerlifting',
  cardio = 'cardio',
  olympic_weightlifting = 'olympic_weightlifting',
  crossfit = 'crossfit',
  weighted_bodyweight = 'weighted_bodyweight',
  assisted_bodyweight = 'assisted_bodyweight',
}

export interface Exercise {
  name: string;
  aliases?: string[];
  primaryMuscles: Muscle[];
  secondaryMuscles: Muscle[];
  force?: Force;
  level: Level;
  mechanic?: Mechanic;
  equipment?: Equipment;
  category?: Category;
  instructions: string[];
  description?: string;
  tips?: string[];
}
