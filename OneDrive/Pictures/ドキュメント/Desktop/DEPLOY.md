Deployment notes — SkyDrop backend

What I changed already
- Added proper CORS handling in `backend/index.js` to allow your Netlify frontend origin and handle OPTIONS preflight.
- Added `backend/.npmrc` to force usage of the public npm registry and `legacy-peer-deps=true`.
- Locked `multer` to `1.4.4` in `backend/package.json` (you may prefer `1.4.4-lts.1` to address CVE warnings).

Quick manual redeploy steps
1. Push any remaining changes to `main` (already done).
2. On Render (or your host), go to your service `dro-nc15` and trigger a deploy (or redeploy from the dashboard).
3. Ensure these environment variables are set in the Render dashboard for the service:
   - `NETLIFY_URL` or `FRONTEND_URL` = https://skydrop-project.netlify.app
   - `BASE_URL` = https://dro-nc15.onrender.com
   - `PORT` (if required by your host)
4. Wait for the deploy to finish and test the site.

Automated deploy via GitHub Actions (optional)
- I added a starter workflow that can trigger a Render deploy when commits are pushed to `main`.
- To make it work, add these repository secrets in GitHub:
  - `RENDER_API_KEY` : a Render service API key (from Render dashboard/API keys)
  - `RENDER_SERVICE_ID`: the service id for your backend (starts with `srv-`)

Security note
- Do NOT commit real API keys. Use GitHub Secrets or Render's environment settings.

If you want, I can:
- Change multer to `1.4.4-lts.1` and re-run `npm install` in `backend`.
- Add a Netlify deploy step or help set Render secrets.
