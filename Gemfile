source "https://rubygems.org"

# Core
gem "jekyll", "~> 3.9.3"
gem "webrick", "~> 1.8"      # needed for `jekyll serve` on Ruby 3
gem "rexml",   "~> 3.2"      # top-level (not a plugin)
gem "kramdown", "~> 2.4"
gem "kramdown-parser-gfm", "~> 1.1"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-archives", "~> 2.3"
  gem "jekyll-seo-tag", "~> 2.8"
end

# Windows tz data (update deprecated platform names)
gem "tzinfo-data", platforms: [:windows]

# Optional: fast watcher on Windows
gem "wdm", "~> 0.1.0", platforms: [:windows]
