# Portfolio Homepage

A personal portfolio website powered by React and a single YAML configuration file. Just edit `public/content.yml` with your own information and the site generates itself.

## Quick Start

### Docker (Recommended)

```bash
docker compose up --build
```

The site will be available at `http://localhost:8092`.

### Local Development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## Customization

All content is defined in a single file: **`public/content.yml`**. Replace the existing data with your own information — no code changes needed.

### Sections

| Section | Description |
|---------|-------------|
| `hero` | Your name, title, description, avatar image, and technology stack (front / back / tools) |
| `nav` | Navigation links and optional resume PDF URL |
| `experiences` | Work experience entries with period, role, company, logo, descriptions, and tech stack |
| `projects` | Project cards with title, image, description, and GitHub link |
| `contact` | LinkedIn, GitHub, and email links |

### Example Structure

```yaml
hero:
  name: "Your Name"
  subtitle: "Your Role"
  description: "Short bio about yourself."
  avatar: "/images/your-photo.png"
  tools:
    front:
      - name: "React"
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    back:
      - name: "Python"
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    other:
      - name: "Docker"
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"

nav:
  resumeUrl: "https://link-to-your-resume.pdf"
  links:
    - id: "home"
      label: "Home"
    - id: "experience"
      label: "Experience"

experiences:
  - period: "2022 - Present"
    role: "Developer"
    company: "Company Name"
    image: "/images/company-logo.png"
    description:
      - "What you did there."
    stack:
      - "React"
      - "Node.js"

projects:
  - title: "Project Name"
    image: "/images/project.png"
    shortDescription: "One-liner about the project."
    description: "Detailed description of the project."
    github: "https://github.com/you/project"

contact:
  linkedin: "https://linkedin.com/in/you"
  github: "https://github.com/you"
  email: "you@example.com"
```

### Images

Place your images (avatar, company logos, project screenshots) in the `public/images/` directory and reference them with `/images/filename.ext` in the YAML.

## Features

- **Responsive navigation** — Sticky navbar with smooth scroll, active section highlight, and mobile hamburger menu
- **Hero section** — Name, role, bio, avatar, and categorized tech stack display with hover-to-reveal labels
- **Experience timeline** — Work history with company logos, descriptions, and tech stack badges
- **Project gallery** — Grid of project cards that open a modal with full description and GitHub link
- **Contact section** — Direct links to LinkedIn, GitHub, and email
- **Resume button** — Optional resume link in the navbar (set `nav.resumeUrl` in the YAML or `VITE_RESUME_URL` in `.env`)

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- YAML parser (`yaml` package)

## Favicon
 Replace public/favicon-16x16.png and public/favicon-32x32.png with your own favicon files. You can generate them from any image at favicon.io (https://favicon.io/).