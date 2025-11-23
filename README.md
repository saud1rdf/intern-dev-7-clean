# Intern.dev - Technical Training Platform

A bilingual (Arabic & English) onboarding website for training computer science interns and new employees on technical tasks.

## Features

- **📚 Rich Documentation**: Comprehensive guides with code examples from authoritative sources
- **💻 Code Playground**: Interactive Java and Python code editor with live execution
- **🤖 AI Chatbot Tutor**: Intelligent learning assistant powered by OpenAI GPT-4
- **🔍 Advanced Search**: Smart search and filtering across all content
- **🌐 Bilingual Support**: Complete interface in Arabic and English
- **📱 Responsive Design**: Modern, clean design that works on all devices
- **🎨 Dark Mode**: Beautiful dark theme support

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor
- **AI Integration**: OpenAI GPT-4 API
- **CMS**: Sanity (optional)
- **Analytics**: Plausible (optional)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd intern-dev
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_openai_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### OpenAI API Setup

1. Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Add it to your `.env.local` file:
```
OPENAI_API_KEY=sk-your-api-key-here
```

### Sanity CMS Setup (Optional)

1. Create a new project at [sanity.io](https://sanity.io)
2. Add the configuration to your `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### Analytics Setup (Optional)

1. Sign up at [Plausible](https://plausible.io)
2. Add your domain to `.env.local`:
```
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── docs/              # Documentation pages
│   ├── playground/        # Code playground
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── providers/         # Context providers
│   ├── ui/               # UI components
│   ├── Chatbot.tsx       # AI chatbot component
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   ├── Categories.tsx    # Learning categories
│   ├── Navigation.tsx    # Navigation component
│   └── Loading.tsx       # Loading component
├── lib/                  # Utility functions
└── types/                # TypeScript type definitions
```

## Adding New Content

### Documentation Pages

1. Create a new file in `src/app/docs/[category]/page.tsx`
2. Follow the existing structure with bilingual content
3. Include code examples and practical exercises

### Code Examples

1. Add new code snippets to the playground
2. Update the default code examples in `src/app/playground/page.tsx`
3. Ensure examples work in both Java and Python

### AI Chatbot Training

The chatbot is configured to:
- Provide step-by-step guidance
- Ask interactive questions
- Offer hints and explanations
- Support both Arabic and English

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:
- `OPENAI_API_KEY`
- `NEXT_PUBLIC_SANITY_PROJECT_ID` (if using Sanity)
- `NEXT_PUBLIC_SANITY_DATASET` (if using Sanity)
- `SANITY_API_TOKEN` (if using Sanity)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (if using analytics)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ for computer science interns and new employees**
