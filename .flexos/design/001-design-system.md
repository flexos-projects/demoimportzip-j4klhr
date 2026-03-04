---
id: design.001-design-system
seq: 28
type: spec
subtype: design
slug: 001-design-system
title: Design System
description: Flo visual identity — violet primary, near-black surfaces, Inter type
status: active
tags: [tokens, core]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: []
---

# Design System

Flo is a daily-use tool. Dark, calm, efficient. The violet primary distinguishes it from the sea of blue SaaS tools without trying too hard.

<flex_block type="tokens">
{
  "type": "colors",
  "tokens": [
    { "name": "primary", "value": "#8B5CF6", "label": "Violet" },
    { "name": "primary-dark", "value": "#7C3AED", "label": "Violet Dark" },
    { "name": "primary-light", "value": "#A78BFA", "label": "Violet Light" },
    { "name": "primary-faint", "value": "#1E1B2E", "label": "Violet Faint" },
    { "name": "surface-base", "value": "#0A0A0F", "label": "Base" },
    { "name": "surface", "value": "#111118", "label": "Surface" },
    { "name": "surface-alt", "value": "#1A1A25", "label": "Surface Alt" },
    { "name": "surface-hover", "value": "#22222F", "label": "Surface Hover" },
    { "name": "border", "value": "#1E1E2A", "label": "Border" },
    { "name": "border-strong", "value": "#2A2A3A", "label": "Border Strong" },
    { "name": "text", "value": "#F1F0F5", "label": "Text" },
    { "name": "text-muted", "value": "#8B8AA0", "label": "Text Muted" },
    { "name": "text-faint", "value": "#4A4A60", "label": "Text Faint" },
    { "name": "success", "value": "#22C55E", "label": "Success" },
    { "name": "warning", "value": "#F59E0B", "label": "Warning" },
    { "name": "error", "value": "#EF4444", "label": "Error" },
    { "name": "info", "value": "#38BDF8", "label": "Info" }
  ]
}
</flex_block>

<flex_block type="tokens">
{
  "type": "typography",
  "tokens": [
    { "name": "display", "size": "48px", "weight": "700", "lineHeight": "1.1", "label": "Display" },
    { "name": "h1", "size": "36px", "weight": "700", "lineHeight": "1.15", "label": "H1" },
    { "name": "h2", "size": "24px", "weight": "600", "lineHeight": "1.25", "label": "H2" },
    { "name": "h3", "size": "18px", "weight": "600", "lineHeight": "1.3", "label": "H3" },
    { "name": "body", "size": "14px", "weight": "400", "lineHeight": "1.6", "label": "Body" },
    { "name": "small", "size": "12px", "weight": "400", "lineHeight": "1.5", "label": "Small" },
    { "name": "mono", "size": "13px", "weight": "400", "lineHeight": "1.5", "label": "Mono" }
  ]
}
</flex_block>

<flex_block type="tokens">
{
  "type": "spacing",
  "tokens": [
    { "name": "xs", "value": "4px", "label": "XS" },
    { "name": "sm", "value": "8px", "label": "SM" },
    { "name": "md", "value": "12px", "label": "MD" },
    { "name": "lg", "value": "16px", "label": "LG" },
    { "name": "xl", "value": "24px", "label": "XL" },
    { "name": "2xl", "value": "32px", "label": "2XL" },
    { "name": "3xl", "value": "48px", "label": "3XL" },
    { "name": "4xl", "value": "64px", "label": "4XL" }
  ]
}
</flex_block>
