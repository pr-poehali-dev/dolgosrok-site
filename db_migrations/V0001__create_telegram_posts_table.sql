CREATE TABLE IF NOT EXISTS telegram_posts (
    id SERIAL PRIMARY KEY,
    message_id INTEGER NOT NULL UNIQUE,
    date TEXT NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    views TEXT NOT NULL,
    link TEXT NOT NULL,
    tag TEXT NOT NULL,
    timestamp INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_telegram_posts_timestamp ON telegram_posts(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_telegram_posts_message_id ON telegram_posts(message_id);