# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is an Academic Pages Jekyll website template for personal and professional portfolio-oriented websites. It's designed to showcase academic work including publications, talks, teaching, and portfolio items.

## Development Commands

### Local Development
```bash
# Install Ruby dependencies
bundle install

# If permission issues occur, install gems locally:
bundle config set --local path 'vendor/bundle'
bundle install

# Start local development server
jekyll serve -l -H localhost
# Alternative with specific dependencies:
bundle exec jekyll serve -l -H localhost
```

### JavaScript Build Process
```bash
# Build minified JavaScript (uglifies and combines JS files)
npm run build:js

# Watch for JavaScript changes and auto-rebuild
npm run watch:js

# Direct uglify command
npm run uglify
```

### Docker Development
```bash
# Set permissions and start with Docker Compose
chmod -R 777 .
docker compose up
```

## Site Architecture

### Content Collections
The site uses Jekyll collections for organizing content:
- `_publications/` - Research papers and academic publications
- `_talks/` - Conference presentations and talks
- `_teaching/` - Teaching experience and courses
- `_portfolio/` - Portfolio projects
- `_posts/` - Blog posts
- `_pages/` - Static pages

### Key Configuration Files
- `_config.yml` - Main Jekyll configuration with site settings, author info, and collection definitions
- `Gemfile` - Ruby dependencies for Jekyll and GitHub Pages
- `package.json` - Node.js dependencies for JavaScript build process

### Layout System
- Uses Jekyll layouts in `_layouts/` directory
- Default layouts: `single`, `talk` for different content types
- Author profile sidebar configured in `_config.yml` author section

### Styling
- SASS files in `_sass/` directory
- Compressed CSS output for production
- Uses Minimal Mistakes theme as base

## Content Management

### Publication Categories
Defined in `_config.yml`:
- `books` - Books
- `manuscripts` - Journal Articles
- `conferences` - Conference Papers

### Automation
- GitHub Actions workflow in `.github/workflows/scrape_talks.yml` automatically processes talk locations using `talkmap.ipynb`
- Workflow runs when files in `talks/` or `talkmap.ipynb` are modified

### Markdown Generation
- `markdown_generator/` folder contains Jupyter notebooks and Python scripts for generating markdown files from TSV data
- Useful for bulk importing publications and talks

## Site Configuration
- Main site settings in `_config.yml` including URL, title, author information
- Author profile links (social media, academic profiles) configured in author section
- Analytics, comments, and social sharing options available but may need configuration

## File Structure
- `files/` - Upload directory for PDFs and other downloadable files
- `images/` - Image assets
- `assets/` - Compiled CSS, JavaScript, and other assets
- `talkmap.py` and `talkmap.ipynb` - Geographic visualization of talks/presentations
- 这个workspace的docker命令需要sudo，我有sudo权限，可以运行命令后等待我输入密码