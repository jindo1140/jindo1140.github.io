---
name: 박진원 경력 포트폴리오
description: Toss-inspired professional portfolio preview
colors:
  ink: "#191f28"
  body: "#333d4b"
  muted: "#5b6677"
  blue: "#1b64da"
  blue-light: "#e8f3ff"
  surface: "#f7f8fa"
  white: "#ffffff"
typography:
  body:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "17px"
    lineHeight: 1.75
  display:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "clamp(38px,3.8vw,54px)"
    fontWeight: 750
    lineHeight: 1.4
    letterSpacing: "-.035em"
rounded:
  button: "16px"
  card: "24px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "16px 23px"
---
# Design System: 박진원 경력 포트폴리오

## Overview

A professional Korean career statement and portfolio with the user's requested Toss-inspired blue, white, gray typography, rounded surfaces, and generous spacing. Framework design and AI development practice lead the narrative. Six project cases and five employers retain the career context.

## Colors

Blue emphasizes primary actions and verified outcomes. Ink anchors headings; body and muted grays separate narrative from metadata. White and pale gray section surfaces establish hierarchy.

## Typography

Local Pretendard variable font with sans-serif fallback. Desktop section headings use 36px, project headings 23px, and narrative text 16–17px. The hero scales separately at 1100px, 800px, and 480px. Paragraphs have a 70ch maximum and Korean keep-all wrapping.

## Layout

Content width is capped at 1160px. Desktop side margins are 32px; tablet 24px and phone 20px. Hero and expertise sections use two columns on wide screens and one at 800px. Project and career rows retain metadata columns until phone widths. Results stack at 480px. Section padding moves from 95px through 80px and 65px to 50px.

## Elevation & Depth

Flat tonal layering without box shadows. White containers sit on pale gray or pale blue surfaces. The original S-Frame concept diagram uses linked blocks and a slight rotation on its configuration node.

## Shapes

Primary buttons use 16px radii, project cards 22px, and feature cards 24px. Phone buttons reduce to 13px; most phone cards use 20px. The desktop concept diagram uses 36px corners.

## Components

Primary and secondary links provide career download and project navigation. Scenario buttons switch illustrative framework examples. Filter buttons narrow the six cases; native details expose fuller evidence. Selected controls expose aria-pressed; status text announces changes. Keyboard focus uses a 3px blue outline with 5px offset. Reduced-motion settings remove transitions and smooth scrolling.

## Do's and Don'ts

- Do keep roles, dates, employers, technologies, and measured outcomes visible as career evidence.
- Do label conceptual examples clearly and preserve the supplied career statement download.
- Do retain the original S-Frame diagram and blue emphasis requested by the user.
- Don't introduce unsupported accomplishments or substitute product marketing for professional career content.
- Don't use U+00B7 in copy.
