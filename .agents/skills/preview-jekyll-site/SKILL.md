---
name: preview-jekyll-site
description: Start and verify this repository's Jekyll site locally on Windows with Ubuntu WSL. Use after editing the homepage or when asked to open a local preview of this site.
---

# Preview this site locally

Run from the repository root. Read the repository's `README.md` section “Running locally” for the standard Jekyll workflow. Leave the preview server running so the user can inspect the page.

1. Check whether `http://127.0.0.1:4000/` already serves the latest edit. On Windows, use `Invoke-WebRequest -Uri 'http://127.0.0.1:4000/' -NoProxy`; `localhost` may resolve to IPv6 and a configured proxy may intercept the request. Reuse an up-to-date server. If it serves stale HTML, stop that Jekyll session and restart it; file watching on the Windows-mounted drive has failed to notice edits here.
2. If a compatible Ruby/Bundler environment is available, follow the README: `bundle check`, then `bundle exec jekyll serve -l -H localhost` (or `jekyll serve -l -H localhost`).
3. On this Windows machine, the working fallback is Ubuntu-20.04 WSL with system Jekyll. Its Ruby 2.7 cannot currently resolve the Gemfile (`ffi` requires Ruby 3), and the system packages lack `jemoji`. If `local/codex-preview.yml` is absent, copy [assets/codex-preview.yml](assets/codex-preview.yml) there; `local/` is ignored by Git and excluded from the generated site. Then start a persistent terminal session with:

   ```powershell
   wsl -d Ubuntu-20.04 -- bash -lc 'cd /mnt/d/Code/enlighten0707.github.io && JEKYLL_NO_BUNDLER_REQUIRE=true jekyll serve -l -H localhost --config _config.yml,local/codex-preview.yml'
   ```

   If Jekyll or the system plugins are missing, install them in WSL before retrying:

   ```powershell
   wsl -d Ubuntu-20.04 -u root -- apt-get install -y ruby-dev bundler nodejs build-essential jekyll ruby-jekyll-feed ruby-jekyll-sitemap ruby-jekyll-redirect-from ruby-jekyll-gist ruby-jekyll-paginate
   ```

4. Wait for `Server running` and verify that the page returns HTTP 200 and contains the requested new text or links. For example, in PowerShell: `$page = Invoke-WebRequest -Uri 'http://127.0.0.1:4000/' -NoProxy; $page.StatusCode; $page.Content.Contains('expected text')`. Open `http://127.0.0.1:4000/` in the Codex browser or give the user that link. The fallback omits `jemoji`, which only affects emoji rendering on pages that use it.

Keep the server's session ID so a stale preview can be stopped and restarted after further edits. Do not install dependencies or start a second server when the existing preview is current.
