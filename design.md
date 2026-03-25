# Portfolio Design Plan (Initial Draft, tailored to Saurabh)

> This is a simple, flexible design direction. Subject to change as the portfolio evolves.

---

## 1. Philosophy

This portfolio should present Saurabh as a **strong technical generalist** with depth, not as someone unfocused.

Key positioning:

* 2 years of software development experience
* M.S. in Computer Engineering
* Comfortable across software, systems, hardware-adjacent work, and rapid prototyping
* Competitive chess background (represented CSUN)
* Hackathon builder with a bias toward shipping

Design goal:

* Make breadth feel like a strength
* Show that the common thread is **building hard things across domains**
* Keep the visual style clean, serious, and confident

Suggested brand feeling:

> Engineer, builder, competitor.

---

## 2. Overall Structure

Single-page layout:

```
[Name]
[Short one-line positioning statement]

[Short intro paragraph]

Featured Projects
- Card 1
- Card 2
- Card 3
- Card 4

About
Short paragraph about background and range

Proof / Highlights
- 2 years in software development
- M.S. in Computer Engineering
- Represented CSUN in chess
- Hackathon wins

Links
GitHub / Resume / LinkedIn / Contact
```

Recommended hero direction:

* Name first
* One-line identity under it
* A short paragraph that explains the mix of software engineering, computer engineering, and competitive problem-solving

Example tone:

> I build across software, systems, and embedded-adjacent domains. My background spans professional software development, graduate-level computer engineering, hackathons, and competitive chess.

---

## 3. Layout Rules

* Max width: 600–700px
* Left-aligned content (not centered)
* Generous vertical spacing between sections
* No cards, grids, or boxed layouts

Spacing guideline:

* Section gap: ~64px
* Line height: 1.5–1.7

---

## 4. Typography

Primary font options:

* Inter (preferred)
* System UI stack
* IBM Plex Sans (alternative)

Rules:

* Use **one font only**
* Large, clear headings
* No decorative fonts

---

## 5. Color Palette

Keep it minimal:

* Background: #FFFFFF
* Text: #111111
* Links: default blue or subtle gray

No gradients, shadows, or heavy color usage.

---

## 6. Project Section Style

Use **clean, minimal cards** for projects. The portfolio should feature a small number of projects that show range, but the presentation should still feel curated.

### Recommended Featured Projects

Based on the current GitHub profile, strong candidates include:

1. **GrpcSpellBee** — a 2-player spelling bee game built with gRPC and Python. Good for showing backend / distributed communication fundamentals. ([github.com](https://github.com/saurabhgaglani/GrpcSpellBee))
2. **stalkr** — an Angular web application that accepts a name and displays information from public APIs. Good for showing frontend + API integration work. ([github.com](https://github.com/saurabhgaglani))
3. **MazeGame** — a DFS maze game for Unix terminals. Good for showing CS fundamentals and lower-level problem solving. ([github.com](https://github.com/saurabhgaglani))
4. **IsMyShirtEthical** or **real-time-commentary** — these make the portfolio feel more current and experimental; the GitHub profile describes them as an LLM/web-scraping ethics checker and real-time chess commentary project. ([github.com](https://github.com/saurabhgaglani))

### Card Layout

Each project card should include:

* **Project Name**
* One sentence on what it is
* One sentence on why it matters / what it demonstrates
* Tech stack in smaller text
* GitHub link
* Autoplaying muted video (mp4) preview

Example structure:

```
Project Name
Short description
What it demonstrates
Tech: X, Y, Z
GitHub
[Autoplay video preview]
```

### Design Rules

* Cards should feel minimal, not trendy
* Very light border
* Small radius
* Comfortable padding
* Generous spacing between cards
* Text remains the primary design element

### Video Behavior

* Autoplay
* Muted
* Looping
* Inline
* No visible controls by default
* Kept visually contained so the page still feels elegant

### Important Curation Rule

Do not show every type of project equally.
The featured set should support this narrative:

* one project proving engineering fundamentals
* one proving product/web ability
* one proving breadth or experimentation
* one proving personality or domain edge

---

## 7. Interaction Design

* No animations initially
* Simple hover effect for links (optional)
* Fast loading, no distractions

---

## 8. Tone & Voice

* Direct
* Calm
* Technical without sounding inflated
* Competitive, but understated

Avoid sounding like a generic startup portfolio.
The tone should say:

> I have range, and I can execute.

Example positioning lines:

* Software developer with an M.S. in Computer Engineering and a bias for building across domains.
* I work across software, systems, and rapid prototypes — from web apps to engineering-heavy side projects.
* Engineer, hackathon builder, and competitive chess player.

---

## 9. Personal Touch

This portfolio should include a little personality, but in a controlled way.

Best personal signals to include:

* Represented CSUN in chess
* Hackathon wins
* Generalist builder identity

These should appear as concise proof points, not as oversized sections.

Example highlight strip:

* 2 years in software development
* M.S. in Computer Engineering
* Represented CSUN in chess
* Multiple hackathon wins

This helps the site feel memorable without losing its minimal style.

---

## 10. Future Enhancements (Optional)

* Add a writing/blog section
* Case study pages for projects
* Light/dark toggle (only if needed)
* Subtle transitions (if they don’t reduce clarity)

---

## 11. Non-Goals

Avoid:

* Overuse of animations
* Complex layouts
* Skill bars or rating visuals
* Trend-driven UI (glassmorphism, etc.)

---

## 12. Guiding Principle

> If something doesn’t improve clarity, remove it.

---

*End of initial draft.*
