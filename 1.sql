
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  name TEXT,
  age INTEGER,
  gender TEXT,
  class_level TEXT,
  academic_interests TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quiz_results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  answers TEXT,
  suggested_stream TEXT,
  score_arts INTEGER,
  score_science INTEGER,
  score_commerce INTEGER,
  score_vocational INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE colleges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  location TEXT,
  district TEXT,
  programs_offered TEXT,
  eligibility_criteria TEXT,
  cutoffs TEXT,
  facilities TEXT,
  contact_details TEXT,
  latitude REAL,
  longitude REAL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_colleges_location ON colleges(location);
CREATE INDEX idx_quiz_results_user_id ON quiz_results(user_id);
