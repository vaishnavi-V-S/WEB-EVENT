# PROMPTPRENEUR — static event website

A responsive, single-page event website built with HTML5, CSS3 and vanilla JavaScript. No build step, package manager, backend or framework is needed.

## Folder structure

PROMPTPRENEUR/
|-- index.html
|-- style.css
|-- script.js
|-- assets/
    |-- images/
    |-- icons/
    |-- logo/

The asset folders are ready for local files if desired. Current event/editorial images load from Unsplash URLs listed at the top of script.js in EVENT_IMAGES and HERO_SLIDES. They illustrate the event theme and are not photographs from PROMPTPRENEUR. Replace those URLs with your own authorized image URLs or local paths such as assets/images/team.jpg.

## Update event settings

At the top of script.js, edit the CONFIG object:

- registrationURL: the public Google Form is set to https://forms.gle/k9i8jBswSTLhjer68. Registration calls-to-action open it in a new tab.
- eventDate: enter an ISO date/time with timezone, for example 2026-10-12T09:30:00+05:30. Keep it empty while the date/time is unannounced; the timer then shows dashes.
- qrImageURL: set this to the QR image extracted from the event PDF (for example assets/images/registration-qr.png). The QR section is the target of every registration button.
- collegeEmail, collegePhone, coordinatorPhone: update official contact details in one place.
- canonicalURL: replace the example URL with the deployed site URL.
- socialURLs: add official profile links only after the organizers confirm them.

Registration buttons open the configured Google Form; the PDF QR remains available in the QR section. The QR cropped from the supplied WhatsApp poster image is saved as assets/images/registration-qr.png and configured in script.js. Replace that path only if the registration QR changes.


The registration deadline supplied in the brief is shown as 12 October before 12 PM. The year and event date/time were not supplied, so they are not assumed in the countdown.

## Run locally

Open index.html directly in a modern browser, or serve the folder using a static file server. There is no build step. Internet access is needed for Google Fonts, Unsplash images and QRServer-generated QR images; you can download appropriately licensed images into assets/images/ for offline use.

## Deploy on Netlify

1. Place this folder in a Git repository, or drag the folder into Netlify's manual deploy area.
2. For Git deploys, choose the repository and set the publish directory to the project root (the folder containing index.html). Leave build command empty.
3. Deploy. Add your final domain to the canonical URL in script.js and index.html.

## Deploy on Render Static Sites

1. Push this folder to a Git provider and create a Static Site in Render.
2. Set the repository and branch; leave the build command empty and use the project root as the publish directory.
3. Deploy. Configure your production domain in the canonical URL settings.

## Notes

- All provided timings and rules come from the supplied brief. Event date, venue, prize information, official social profiles and real scores were not provided.
- The college discovery link is a Google search because an official college URL was not supplied.
- The code is intentionally framework-free and can be hosted on GitHub Pages, Netlify or Render Static Sites.

Section backdrops use event-related Unsplash images and rotate every five seconds; the hero slider has its own image rotation. The dark overlays preserve readable text.

The college gallery and contact sections use the supplied campus photos saved under assets/images/ (2x upscaled and lightly sharpened while preserving the original building details).
