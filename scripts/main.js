// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

const PORTFOLIO_CASES = [
  {
    title: "Project 1: Conventional TEM Work",
    image: "images/JCB_image_1.jpg",
    imageAlt: "Conventional TEM project image",
    summary: "Conventional transmission electron microscopy workflows from sample preparation to imaging and interpretation.",
    details: [
      "Add representative panel images from your published paper.",
      "Include one line describing sample prep and staining conditions.",
      "Optional: link to publication DOI or journal page."
    ],
    link: {
      text: "Add paper link",
      url: "#"
    }
  },
  {
    title: "Project 2: Negative Staining Work",
    image: "images/NC_image_1.jpg",
    imageAlt: "Negative staining project image",
    summary: "Negative stain EM work highlighting screening, particle quality checks, and method optimization.",
    details: [
      "Replace this image with your own representative micrograph.",
      "Add 1-2 sentences about buffer conditions and stain type.",
      "List key outcomes, such as particle integrity or sample heterogeneity."
    ],
    link: {
      text: "Add example dataset",
      url: "#"
    }
  },
  {
    title: "Project 3: Cryo-EM Structural Biology",
    image: "images/PNAS_image_1.jpg",
    imageAlt: "Cryo-EM structural biology project image",
    summary: "Cryo-EM and structural biology projects focused on high-resolution reconstruction and biological interpretation.",
    details: [
      "Add map or model figure from published work.",
      "Include software and workflow keywords (for example: RELION, cryoSPARC, Phenix).",
      "Summarize the biological finding in one sentence for broad audiences."
    ],
    link: {
      text: "Add structure/publication link",
      url: "#"
    }
  },
  {
    title: "Project 4: Data Processing Tools & Manuals",
    image: "images/JG_image_1.jpg",
    imageAlt: "Data processing tools and manuals image",
    summary: "A practical collection of scripts, parameter notes, and step-by-step manuals for EM data processing.",
    details: [
      "Add links to your scripts, notebooks, or GitHub repositories.",
      "Include short manuals for common tasks (motion correction, CTF estimation, particle picking).",
      "Keep each manual concise, with copy/paste commands when possible."
    ],
    link: {
      text: "Add tool list link",
      url: "#"
    }
  }
];

$(document).ready(function() {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library

  renderPortfolioCases(PORTFOLIO_CASES);
});

function renderPortfolioCases(cases) {
  const portfolioGrid = document.getElementById("portfolio-grid");

  if (!portfolioGrid || !Array.isArray(cases)) {
    return;
  }

  const cards = cases
    .map(function(project) {
      const detailsMarkup = (project.details || [])
        .map(function(item) {
          return "<li>" + escapeHtml(item) + "</li>";
        })
        .join("");

      const hasLink = project.link && project.link.url && project.link.text;
      const safeUrl = hasLink ? sanitizeUrl(project.link.url) : "#";
      const shouldOpenInNewTab = safeUrl.startsWith("http://") || safeUrl.startsWith("https://");
      const targetMarkup = shouldOpenInNewTab ? ' target="_blank" rel="noopener noreferrer"' : "";
      const linkMarkup = hasLink
        ? '<a class="btn btn-outline-primary btn-sm" href="' + escapeHtml(safeUrl) + '"' + targetMarkup + '>' + escapeHtml(project.link.text) + "</a>"
        : "";

      return (
        '<div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-offset="10">' +
          '<article class="card portfolio-case-card h-100">' +
            '<img class="portfolio-case-image" src="' + escapeHtml(project.image) + '" alt="' + escapeHtml(project.imageAlt || project.title) + '">' +
            '<div class="card-body">' +
              '<h5 class="title mt-0">' + escapeHtml(project.title) + "</h5>" +
              '<p class="mb-3">' + escapeHtml(project.summary || "") + "</p>" +
              '<ul class="portfolio-case-list">' + detailsMarkup + "</ul>" +
              linkMarkup +
            "</div>" +
          "</article>" +
        "</div>"
      );
    })
    .join("");

  portfolioGrid.innerHTML = cards;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}


function sanitizeUrl(url) {
  const value = String(url || "").trim();

  if (value === "" || value === "#") {
    return "#";
  }

  if (value.startsWith("/")) {
    return value;
  }

  if (/^(https?:|mailto:)/i.test(value)) {
    return value;
  }

  return "#";
}
// Smooth scroll for links with hashes
$("a.smooth-scroll")
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });