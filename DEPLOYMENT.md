# Deployment Guide for Intern.dev

This guide will help you deploy the Intern.dev platform to Vercel.

## Prerequisites

- GitHub account
- Vercel account
- OpenAI API key
- (Optional) Sanity CMS account
- (Optional) Plausible Analytics account

## Step 1: Prepare Your Repository

1. Push your code to a GitHub repository
2. Make sure all files are committed and pushed

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project

## Step 3: Configure Environment Variables

In your Vercel dashboard, go to Settings > Environment Variables and add:

### Required Variables
```
OPENAI_API_KEY=sk-your-openai-api-key-here
```

### Optional Variables
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-sanity-api-token
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
```

## Step 4: Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your site will be available at `https://your-project-name.vercel.app`

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Follow the DNS configuration instructions

## Step 6: Set Up Sanity CMS (Optional)

1. Create a new project at [sanity.io](https://sanity.io)
2. Run the Sanity CLI setup:
```bash
npm install -g @sanity/cli
sanity init
```
3. Configure your schemas
4. Deploy your Sanity studio

## Step 7: Set Up Analytics (Optional)

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Copy the domain name to your environment variables

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes | Your OpenAI API key for the chatbot |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | No | Sanity project ID for CMS |
| `NEXT_PUBLIC_SANITY_DATASET` | No | Sanity dataset name |
| `SANITY_API_TOKEN` | No | Sanity API token for server-side operations |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No | Domain for Plausible analytics |

## Troubleshooting

### Build Errors
- Check that all dependencies are in `package.json`
- Ensure TypeScript types are correct
- Verify environment variables are set

### API Errors
- Confirm OpenAI API key is valid
- Check API rate limits
- Verify serverless function logs in Vercel

### CMS Issues
- Ensure Sanity project is properly configured
- Check API tokens have correct permissions
- Verify dataset exists

## Performance Optimization

1. Enable Vercel Analytics
2. Optimize images with Next.js Image component
3. Use Vercel's Edge Functions for better performance
4. Implement proper caching strategies

## Security Considerations

1. Never commit API keys to version control
2. Use environment variables for all sensitive data
3. Implement proper CORS policies
4. Use HTTPS in production
5. Regularly update dependencies

## Monitoring

1. Set up Vercel Analytics
2. Monitor API usage and costs
3. Track user engagement with Plausible
4. Set up error monitoring (Sentry, etc.)

## Backup Strategy

1. Regular database backups (if using Sanity)
2. Version control for all code
3. Document all configurations
4. Keep environment variable backups secure

---

For more help, check the [Vercel Documentation](https://vercel.com/docs) or open an issue in the project repository.
