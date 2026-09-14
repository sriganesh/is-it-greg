# Is It Greg?

<img src="images/greg-dance.gif" width="120" align="right" alt="Greg, wobbling with joy">

A tiny Chrome extension that highlights Hacker News submissions linking to
[greg.technology](https://greg.technology) or any of its subdomains, as well
as stories and comments posted by Greg himself (`gregsadetsky`).

Matches get a small orange **Greg** badge (with his face on it).

## What it looks like

Stories on the front page — whether they link to greg.technology or were
submitted by Greg:

![The HN front page with two stories flagged with the Greg badge](images/screenshot-front-page.png)

Comments by Greg:

![A comment by Greg flagged with the badge](images/screenshot-comment.png)

## Install

1. Open `chrome://extensions`.
2. Turn on **Developer mode** (top right).
3. Click **Load unpacked** and select this repository's directory.
4. Browse [Hacker News](https://news.ycombinator.com). Try
   [`/from?site=greg.technology`](https://news.ycombinator.com/from?site=greg.technology)
   to see it in action.

No build step, no dependencies, no permissions beyond running on
`news.ycombinator.com`.
