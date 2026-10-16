# Portfolio content maintenance

The website distinguishes personal projects, university work, and professional contributions. Update the site data and README together when those details change.

## Evidence used for this update

| Content | Source | Treatment |
| --- | --- | --- |
| Existing Angular site, university and qordata history | Portfolio source on `master` at `e16824fa5177c80ff17e8ad3a5ff232666939767` | Retained supported work; replaced vague outcomes with concrete implementation details |
| COSMOS title and April 2026 start date; 12 collection services; job history, status, exports and access control | Career information and resume dated October 13, 2026 | Included as personal contributions, without implying ownership of every collection service |
| 5+ pharmaceutical clients, 4 teams, 15+ regions; document management and cross-database routing | October 13, 2026 career resume | Used scope counts rather than unexplained performance percentages |
| DataVerse FastAPI/MongoDB stack and keyword-discovery research | User-provided project and research context | Described current work; omitted unverified publication statuses and experimental results |
| Musify streaming flow and AWS components | [Musify README](https://github.com/Adarsh0311/Musify) and `S3Service.java` | Links to public source and architecture; no latency or production-usage claims |
| Campus architecture and GitHub Actions deployment | [Campus Inspection README](https://github.com/Adarsh0311/campus-inspection-system) | No uptime percentage or unmeasured savings claim |
| ShopSphere and Task Management | Existing portfolio data and linked project documentation | Secondary projects; omitted the blanket “production-ready” label |
| Portfolio infrastructure | Existing README, committed architecture image, and `buildspec.yml` | Separates documented infrastructure from files actually configured in this repository |

The resume download and PDF asset were removed at the owner's request. Do not add a resume link or asset without a new request.

## Information needed before the next content expansion

- **Certification verification:** add the exact public Credly badge URL once supplied. Do not construct a guessed badge URL.
- **Publications:** confirm exact titles, author lists, venue, status, DOI or public paper links, and permission to link demonstration materials. An acceptance is not a publication.
- **Research results:** supply a finalized experiment table, dataset/platform context, baseline configuration, deduplication rules, and metric definitions before publishing KUS comparisons.
- **Metrics:** supply the baseline, measurement method, and observation period before restoring percentage improvements or availability claims. The prior site and resume used different figures for course-submission improvements.
- **Project previews:** add actual screenshots or a walkthrough and verified demo URLs. Do not publish internal DataVerse addresses or screenshots containing research data.
- **Engineering case studies:** extend the project cards with verified architecture tradeoffs, testing evidence, and deployment details when available.
- **Education:** confirm the undergraduate graduation month; existing site and resume sources differ. This update preserves the site's original month.

## Repository metadata

Suggested GitHub About description:

> Software engineering portfolio featuring Java/Spring Boot, AWS, React/Angular projects, and COSMOS research tooling. Website built with Angular and Tailwind CSS.

Keep implementation topics such as `angular`, `typescript`, and `tailwindcss`. A `portfolio` topic also describes the repository accurately; backend languages belong in the project descriptions and linked implementation repositories.

## Runtime maintenance

The content refresh does not upgrade Angular or the deployment runtime. Review the pinned Angular 17 dependencies and Node.js 18 CodeBuild setting together in a separate compatibility update.
