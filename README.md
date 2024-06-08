# Markdoc

Create and style professional documents with Markdown and CSS.

## Features

-   Built-in Markdown and CSS editors with syntax highlighting and basic autofill.
-   Realtime preview while you write and style.
-   Export your document as PDF or print a paper copy using your browsers built-in print dialog.
-   Choose sections to hide from your export, allowing you to pick and choose content from a larger source document to include in your export.
    -   Great for creating specialized job-specific resumes!

## Components

This application is a TypeScript React webapp using recognizable packages like TanStack Router, shadcn/ui, TailwindCSS, Monaco, ReactToPrint, Remark, Rehype, and Unified.

### Markdown Parser

This app uses Remark, Rehype and Unified to render your Markdown to HTML to display in your browser and export. A custom Unified plugin is used for the hidden sections feature. This plugin traverses the markdown abstract-syntax tree before converting to HTML to determine which child elements are attributed to which Markdown headers based on heading depths. This allows the user to easily hide entire blocks of content from their export by just hiding the desired parent heading.
