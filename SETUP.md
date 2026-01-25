# Setup Instructions

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   - Copy `.env.example` to `.env`
   - Add your Gemini API key from [Google AI Studio](https://ai.google.dev/)

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   ```

## Features

- ✨ Dark/Light theme support
- 🤖 AI-powered chat assistant (powered by Gemini)
- 📱 Fully responsive design
- 🚀 Fast development with Vite
- 💻 React 19 with TypeScript

## Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **AI Integration**: Google Gemini API
- **Styling**: Tailwind CSS with dark mode

## Project Structure

```
├── components/        # React components
│   ├── AIChat.tsx     # Chatbot component
│   ├── ProjectCard.tsx # Project showcase
│   └── Section.tsx    # Section wrapper
├── App.tsx            # Main app component
├── data.ts            # Portfolio content
├── geminiService.ts   # Gemini API integration
├── types.ts           # TypeScript types
└── index.tsx          # React entry point
```
