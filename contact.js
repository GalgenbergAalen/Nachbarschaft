const CONTACT_EMAIL = "galgenbergaalen@tutanota.de";

function insertContactLinks() {
  document.querySelectorAll("[data-contact-email]").forEach((element) => {
    element.innerHTML = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;
  });
}

document.addEventListener("DOMContentLoaded", insertContactLinks);
