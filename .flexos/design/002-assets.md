---
type: spec
subtype: design
title: Asset Registry
description: Centralized registry for all digital assets (images, icons, videos, fonts).
sequence: 2
status: active
relatesTo: []
tags: [design, assets]
createdAt: 2024-07-30T10:00:00Z
updatedAt: 2024-07-30T10:00:00Z
---

# Asset Registry

This document serves as the central registry for all digital assets used across the Flexi project. It helps in organizing, tracking, and managing images, icons, videos, fonts, and other media files.

## Asset Categories

We'll categorize assets to ensure easy discoverability and management.

<flex_block type="config">
{
  "asset_categories": [
    {
      "category": "Images",
      "description": "Photographs, illustrations, marketing banners.",
      "fields": [
        {"name": "name", "type": "string", "description": "Display name of the asset"},
        {"name": "path", "type": "string", "description": "Relative path to the asset file"},
        {"name": "type", "type": "string", "description": "File type (e.g., png, jpg, svg)"},
        {"name": "alt_text", "type": "string", "description": "Alternative text for accessibility"},
        {"name": "dimensions", "type": "string", "description": "Width x Height (e.g., 1920x1080)"},
        {"name": "usage", "type": "array", "items": {"type": "string"}, "description": "Where the asset is used (e.g., homepage, dashboard)"},
        {"name": "status", "type": "string", "description": "Active, Archived, Placeholder"},
        {"name": "uploaded_by", "type": "string", "description": "Team member who uploaded it"}
      ]
    },
    {
      "category": "Icons",
      "description": "SVG icons for UI elements.",
      "fields": [
        {"name": "name", "type": "string", "description": "Display name of the icon"},
        {"name": "path", "type": "string", "description": "Relative path to the SVG file"},
        {"name": "tags", "type": "array", "items": {"type": "string"}, "description": "Keywords for searching icons"}
      ]
    },
    {
      "category": "Videos",
      "description": "Promotional videos, tutorials.",
      "fields": [
        {"name": "name", "type": "string", "description": "Display name of the video"},
        {"name": "url", "type": "string", "description": "URL to the video source (e.g., YouTube, Vimeo)"},
        {"name": "thumbnail", "type": "string", "description": "Path to the video thumbnail image"}
      ]
    },
    {
      "category": "Fonts",
      "description": "Custom fonts used in the project.",
      "fields": [
        {"name": "name", "type": "string", "description": "Font family name"},
        {"name": "variants", "type": "array", "items": {"type": "string"}, "description": "Available weights and styles (e.g., Regular, Bold, Italic)"},
        {"name": "source", "type": "string", "description": "Source of the font (e.g., Google Fonts, Custom Upload)"}
      ]
    }
  ]
}
</flex_block>

<flex_block type="ai-instructions">
This asset registry defines the structure for how we will catalog all visual and media assets. When new assets are added, they should conform to the fields defined here.
</flex_block>
