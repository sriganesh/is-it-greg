// Is It Greg? — highlight Hacker News content by Greg
// (links to greg.technology, or anything posted by gregsadetsky).

const GREG_HOST = "greg.technology";
const GREG_USER = "gregsadetsky";

function isGreg(href) {
  try {
    const host = new URL(href, location.href).hostname.toLowerCase();
    return host === GREG_HOST || host.endsWith("." + GREG_HOST);
  } catch {
    return false;
  }
}

function isGregUser(userLink) {
  return !!userLink && userLink.textContent.trim() === GREG_USER;
}

function addBadge(after, reason) {
  const badge = document.createElement("span");
  badge.className = "is-greg-badge";
  const face = document.createElement("img");
  face.className = "is-greg-face";
  face.src = chrome.runtime.getURL("images/greg.png");
  face.alt = "";
  badge.append(face, "Greg");
  badge.title = reason;
  after.insertAdjacentElement("afterend", badge);
}

function scan() {
  // Story rows (front page, /newest, /show, /item header, ...).
  const stories = document.querySelectorAll("tr.athing:not(.comtr):not([data-is-greg-checked])");
  for (const row of stories) {
    row.dataset.isGregChecked = "1";
    const link = row.querySelector(".titleline > a");
    if (!link) continue;
    // The row right after `tr.athing` holds the "N points by user" subtext.
    const author = row.nextElementSibling?.querySelector(".hnuser");
    if (isGreg(link.href)) {
      addBadge(link, "This link points to greg.technology");
    } else if (isGregUser(author)) {
      addBadge(link, "Posted by " + GREG_USER);
    }
  }

  // Comment headers (/item, /threads, /newcomments, ...).
  const commenters = document.querySelectorAll(".comhead > .hnuser:not([data-is-greg-checked])");
  for (const user of commenters) {
    user.dataset.isGregChecked = "1";
    if (isGregUser(user)) addBadge(user, "Comment by " + GREG_USER);
  }
}

scan();
