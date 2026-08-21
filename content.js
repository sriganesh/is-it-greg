// Is It Greg? — highlight Hacker News stories that link to greg.technology.

const GREG_HOST = "greg.technology";

function isGreg(href) {
  try {
    const host = new URL(href, location.href).hostname.toLowerCase();
    return host === GREG_HOST || host.endsWith("." + GREG_HOST);
  } catch {
    return false;
  }
}

function addBadge(link) {
  const badge = document.createElement("span");
  badge.className = "is-greg-badge";
  badge.textContent = "Greg";
  badge.title = "This link points to greg.technology";
  link.insertAdjacentElement("afterend", badge);
}

function scan() {
  const rows = document.querySelectorAll("tr.athing:not([data-is-greg-checked])");
  for (const row of rows) {
    row.dataset.isGregChecked = "1";
    const link = row.querySelector(".titleline > a");
    if (link && isGreg(link.href)) addBadge(link);
  }
}

scan();
