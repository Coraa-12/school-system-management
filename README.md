# School Management System Website

This repository contains the code for the Lincoln High School website, including the public-facing pages and the student dashboard.

## Structure

- `index.html` - Public home page
- `profile.html` - School profile/about page
- `dashboard.html` - Student portal/dashboard
- `styles.css` - Main stylesheet
- `main.js` - JavaScript for public pages
- `auth.js` - Authentication functionality
- `dashboard.js` - Dashboard specific functionality

## CI/CD with GitHub Pages

This project is set up for continuous deployment to GitHub Pages.

### How It Works

1. When you push to the `main` branch, GitHub Actions automatically:
   - Validates the HTML files for errors
   - Deploys the website to GitHub Pages

2. The deployment workflow is defined in `.github/workflows/deploy.yml`
3. HTML validation is handled by `.github/workflows/html-test.yml`

### Development Workflow

1. Clone this repository
2. Make your changes locally
3. Test your changes by opening the HTML files in your browser
4. Commit and push to GitHub
5. GitHub Actions will automatically deploy your changes

### Setting Up GitHub Pages

Before the automatic deployment works, you need to:

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions" 
4. Your site will be available at `https://[username].github.io/[repository-name]/`

## Best Practices

- Commit changes in logical, small increments
- Always test locally before pushing
- Use descriptive commit messages
- Check the Actions tab on GitHub to monitor deployment status

## Local Development

Simply open the HTML files in a web browser to view the site locally. No build process is required.