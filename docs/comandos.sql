CREATE EXTENSION IF NOT EXISTS "uuid-ossp;

CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    rule TEXT NOT NULL
    );

INSERT INTO users (id, name, email, password, rule)
    VALUES ('b09c4049-2fa4-40d0-95c7-2660e78cc51a', 'User', 'user@nextmail.com', '$2b$10$1R0SBAh2Dpbwxt2dB38UPOu81mwpxQT66un1QFzqPfFa6zccTGCk6', 'admin');

INSERT INTO users (id, name, email, password, rule)
    VALUES ('be646900-1b46-4d12-85fd-2085b74a74bc', Editor', 'editor@nextmail.com', '$2b$10$02ygFwcl13wEl7RevvqkNuwI0yq1bCh.sJxbjwvsr3amG9tr46tLe', 'editor'});

SELECT * FROM users ORDER BY name;

SELECT * FROM users WHERE id=${userId};

DELETE * FROM users WHERE id=${userId}

INSERT INTO users (name, email, password, rule)
    VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.rule}) 
    RETURNING id;

UPDATE user 
    set name = ${user.name}, email = ${user.email}, rule = ${user.rule})
    WHERE id=${user.id}
    RETURNING id, name, email, password, rule

UPDATE user 
    set password = ${hashedPassword}
    WHERE id=${user.id}

CREATE TABLE IF NOT EXISTS articles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    type TEXT NOT NULL,
    permalink TEXT NOT NULL UNIQUE,
    external_url TEXT,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    content_url TEXT,
    image_url TEXT NOT NULL,
    article_date TIMESTAMP NOT NULL DEFAULT now(),
    is_published BOOLEAN DEFAULT FALSE,
    has_no_content BOOLEAN DEFAULT FALSE,
    is_external_url_an_iframe BOOLEAN DEFAULT FALSE
    );