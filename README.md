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

The gallery artwork slideshow uses three supplied images bundled in assets/images/: promptpreneur-poster-lightbulb.jpeg (Your Ideas Can Build What’s Next), promptpreneur-poster-ideas.jpeg (From Ideas to Impact), and promptpreneur-event-flyer.jpeg (Registration Flyer). The artwork can also be opened in the gallery image viewer. Other event/editorial images load from Unsplash URLs listed at the top of script.js in EVENT_IMAGES and HERO_SLIDES. They illustrate the event theme and are not photographs from PROMPTPRENEUR. Replace those URLs with your own authorized image URLs or local paths such as assets/images/team.jpg.

## Update event settings

At the top of script.js, edit the CONFIG object:

- registrationURL: the public Google Form is set to https://forms.gle/k9i8jBswSTLhjer68. Registration calls-to-action open it in a new tab.
- eventDate: set to 2026-10-13T09:30:00+05:30 (13 October 2026, 9:30 AM India Standard Time). The year follows the current event year and the timezone follows the host college's location in India. The event countdown updates days, hours, minutes, and seconds automatically.
- roundSchedule: the three rounds are set to 13 October 2026, 10:00–11:30 AM, 11:45 AM–1:30 PM, and 2:00–3:30 PM, all in India Standard Time. Each round counts down to its start, then to its end while in progress, and shows zero with a completed status afterward. Edit these ISO timestamps if the schedule changes.
- qrImageURL: points to the bundled registration QR at assets/images/registration-qr.png. The code opens registrationURL and can also be clicked or tapped. If registrationURL changes, regenerate this image to match.
- collegeEmail, collegePhone, coordinatorPhone: update official contact details in one place.
- canonicalURL: replace the example URL with the deployed site URL.
- socialURLs: add official profile links only after the organizers confirm them.

Registration buttons open the configured Google Form. A generated QR image for that same form is bundled locally in assets/images/registration-qr.png, so displaying it does not depend on an external QR service. The registration section also provides a direct form link if the image cannot load.


The registration deadline supplied in the brief is shown as 12 October before 12 PM. The confirmed event date and start time are 13 October at 9:30 AM; the countdown uses 2026 and India Standard Time.

## Run locally

Open index.html directly in a modern browser, or serve the folder using a static file server. There is no build step. Internet access is needed for Google Fonts, Unsplash images, and the registration form; the QR image is served locally.

## Deploy on Netlify

1. Place this folder in a Git repository, or drag the folder into Netlify's manual deploy area.
2. For Git deploys, choose the repository and set the publish directory to the project root (the folder containing index.html). Leave build command empty.
3. Deploy. Add your final domain to the canonical URL in script.js and index.html.

## Deploy on Render Static Sites

1. Push this folder to a Git provider and create a Static Site in Render.
2. Set the repository and branch; leave the build command empty and use the project root as the publish directory.
3. Deploy. Configure your production domain in the canonical URL settings.

## Notes

- Round timings and rules come from the supplied brief, and the event date and start time were confirmed as 13 October at 9:30 AM. Venue, prize information, official social profiles and real scores were not provided.
- The college discovery link is a Google search because an official college URL was not supplied.
- The code is intentionally framework-free and can be hosted on GitHub Pages, Netlify or Render Static Sites.

Section backdrops use event-related Unsplash images and rotate every five seconds; the hero slider has its own image rotation. The dark overlays preserve readable text.

The college gallery uses both supplied campus photos, saved unchanged under assets/images/. college-campus-front.png shows the BBA college entrance and is also displayed in the contact section. college-host-campus.png shows an elevated campus view and is also used as the host college section's background. Both photos are available through the Campus gallery filter and image viewer.
