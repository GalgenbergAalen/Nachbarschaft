/* ==========================================
   footer-include.js
   ========================================== */

async function loadFooter() {
  const footerContainer = document.getElementById("site-footer");

  if (!footerContainer) return;

  try {
    const response = await fetch("footer.html");

    if (!response.ok) {
      throw new Error("footer.html konnte nicht geladen werden.");
    }

    footerContainer.innerHTML = await response.text();

    if (typeof insertContactLinks === "function") {
      insertContactLinks();
    }
  } catch (error) {
    footerContainer.innerHTML = `
      <footer class="site-footer">
        <p>Nachbarschaftsseite · privat organisiert</p>
        <p>
          <a href="impressum.html">Impressum</a> |
          <a href="datenschutz.html">Datenschutz</a>
        </p>
      </footer>
    `;
  }
}

document.addEventListener("DOMContentLoaded", loadFooter);
