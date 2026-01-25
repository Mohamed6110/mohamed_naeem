<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1aUswZM_YkY4TScky_qsGN8hYpFuzWX3L

## Quick Start ⚡

**Prerequisites:**  Node.js (v18+)

1. **Get a Gemini API Key** (Free)
   - Visit [Google AI Studio](https://ai.google.dev/)
   - Create a new API key
   - Copy your API key

2. **Configure the app**
   - Open `.env.local` file
   - Replace `PLACEHOLDER_API_KEY` with your Gemini API key
   - Save the file

3. **Install & Run**
   ```bash
   npm install    # Already done! ✓
   npm run dev    # Start development server
   ```
   - App will open at `http://localhost:3000`

## Build for Production

```bash
npm run build   # Creates optimized build
npm run preview # Preview production build locally
```

## Features ✨

- 🤖 AI-powered chatbot (Google Gemini)
- 🎨 Dark/Light theme toggle
- 📱 Fully responsive design
- ⚡ Lightning-fast with Vite
- 💻 React 19 + TypeScript
