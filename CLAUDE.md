# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Opulon is a premium automotive gallery and test-drive booking platform built with Next.js 15.5.2, React 19, and Tailwind CSS v4. The project focuses on showcasing luxury vehicles through a visual-first experience with refined minimalism.

## Commands

### Development
- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the production application
- `npm start` - Start the production server

### Installation
- `npm install` - Install all dependencies

## Architecture

### Tech Stack
- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono from Google Fonts

### Project Structure
- `/src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind imports and CSS variables
- `/public/images/` - High-resolution automotive imagery for the gallery
- Path alias configured: `@/*` maps to `./src/*`

### Styling Approach
- Uses Tailwind CSS v4 with inline theme configuration
- CSS custom properties for theming (--background, --foreground)
- Dark mode support via prefers-color-scheme media query
- Font variables: --font-geist-sans and --font-geist-mono

## Core Features to Implement

Based on the README, the following features are planned:
1. Visual gallery with high-resolution car images
2. Hover effects and fade-in transitions
3. Test drive booking flow
4. Car detail preview functionality
5. Minimalist UI with balanced whitespace
6. AI Assistant powered by Google Gemini API - provides intelligent car recommendations, answers questions about vehicles, and assists with the test drive booking process

## Development Notes

- The project currently has the default Next.js starter template
- TypeScript strict mode is enabled - ensure all new code is properly typed
- The metadata in layout.tsx needs updating from default "Create Next App" values
- Car images are already available in `/public/images/` directory