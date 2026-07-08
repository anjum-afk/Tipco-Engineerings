# Marketing Glossary — Plain English

Written for a non-marketer reading the audit in `11-landing-page-marketing-audit.md`.
Each term: what it means in plain words, then how it actually showed up as a
concrete finding on this homepage. Add to this file as new terms come up.

---

## Value Proposition & Message Clarity

**Plain meaning:** your value proposition is the honest answer to "why should
I buy from you instead of anyone else?" Message clarity is whether a total
stranger looking at your site for the first time gets that answer immediately
— without scrolling, clicking, or thinking about it.

**The 5-second rule:** research on how people scan websites shows visitors
decide whether to stay or leave in about 3–5 seconds of landing on a page.
They don't read, they skim the biggest text on screen (the headline) and the
button next to it. In that glance, three questions need answering:

1. **What do you actually do?** (not "Innovating Excellence Since 1985" — that says nothing)
2. **Who is this for?** (them, specifically)
3. **Why you, not a competitor?**

**How it shows up here:** the hero headline in `Hero.tsx:82-89` — *"Machines
that mix, mill and hold up on the floor."* — passes 2 of 3: it says what Tipco
does (✅) and implies a real differentiator, durability, not generic "quality"
(✅). It doesn't say *who* it's for in the headline itself — that's in the
smaller eyebrow text and the paragraph below — so a visitor skimming only the
big text might miss that this is for Paint/Ink/Pharma/Chemical manufacturers
specifically. See finding #11 in `11-landing-page-marketing-audit.md` for the
related CTA-mismatch issue (the "See Products" button doesn't go to products).

---

## Conversion Funnel & CTA Integrity

**Plain meaning:** a "funnel" is just the path a visitor takes from landing on
your page to becoming a lead (filling a form, calling, etc.). "CTA integrity"
means every button that claims to move them along that path actually does —
link goes to a real page, form actually sends the data somewhere, confirmation
message is telling the truth.

**Why marketers check this first:** a beautiful page with a broken button
loses 100% of the visitors who click it, and nobody notices because it doesn't
show up as an "error" — it just looks like fewer people wanted to buy.

**How it shows up here:** this was the single biggest problem found — see
findings #1–#3 in `11-landing-page-marketing-audit.md`. The header's "Get a
Quote" button links to a page that doesn't exist (404), and the homepage's own
quote form shows a fake "Request Sent ✓" without ever sending the data
anywhere. Both look completely normal to a visitor; neither works.

---

## Trust & Credibility Signals

**Plain meaning:** the evidence on the page that convinces a stranger you're
real, established, and safe to do business with — client logos, testimonials
with real names and companies, certifications, years in business.

**Why it matters more for B2B:** per `03-user-personas.md`, Tipco's buyers are
spending ₹10–50L on equipment they can't return. They need proof before they'll
even request a quote, not just persuasion.

**How it shows up here:** genuinely improved since the last audit —
testimonials now name real companies (Asian Paints, Kansai Nerolac, Berger
Paints), and DRDO/Lexamix credentials surface early in the navigation. But the
trust signals are inconsistently delivered: testimonials are invisible on
mobile (finding #5), and client logo images still carry generic `alt="Client
12"` text instead of real company names (finding #10).

---

## Persona / Journey Fit

**Plain meaning:** a "persona" is a stand-in for a type of real customer —
their goals, what they search for, what they need to see before they act. A
page has good "journey fit" when the order of sections matches how that
persona actually behaves, not how the company wants to tell its own story.

**How it shows up here:** `03-user-personas.md` describes the primary
persona — a procurement manager — as someone who "skips hero and goes straight
to products." The homepage currently has no product/machine grid at all
(finding #4), so that persona's top need is only served by digging into the
navigation menu, not by the page itself.

---

## Content & SEO

**Plain meaning:** SEO (search engine optimization) is what determines
whether Google shows your page when someone searches. "Content" here means:
is each page's title and description unique and accurate, is there a real H1
headline, and — separately from search engines — is the actual written
content on the page real, or is it decorative filler that looks like content
but isn't?

**How it shows up here:** technically improved — there's now an H1 on the
homepage and each route gets its own `<title>` via `TitleManager` in
`App.tsx`. But the "News & Insights" section (finding #9) is the content-is-
decorative problem: every single article links to the same generic `/blog`
page instead of its own story, so it reads as real news but has no substance
behind it.

---

## Performance & Mobile UX

**Plain meaning:** how fast the page loads, and whether it actually works —
not just looks slightly different — on a phone. Marketers care about this
because it directly kills conversions before the message even has a chance
to land.

**How it shows up here:** the pre-design briefing (`01-pre-design-briefing.md`)
flagged the *old* site's 7.2-second load time as a critical problem no design
could fix. In the new build, the specific mobile issue is that the entire
Testimonials section is coded to not render below the `md` breakpoint
(finding #5) — not slow, just completely absent for a majority-mobile audience.

---

## Competitive Positioning

**Plain meaning:** looking at what competitors do well (to match or beat) and
what they do badly (to avoid repeating), so your site doesn't accidentally
make the same mistakes a rival already made.

**How it shows up here:** `04-design-direction.md` explicitly lists "generic
stock photography" as a mistake a competitor (Abster) made and told the team
to avoid. The homepage's quote-request section currently uses an unrelated
stock photo hot-linked from a third-party site (finding #8) — the exact
mistake the team's own research told them to avoid.

---

## Analytics & Measurability

**Plain meaning:** can you actually tell, from your dashboards, whether a
visitor converted? If a "success" message shows regardless of whether
anything really happened, your analytics will report a healthy funnel while
leads quietly disappear.

**How it shows up here:** the broken quote form (finding #2) doesn't just lose
leads — it will also never show up as an error in monitoring, because from
the code's point of view the submission "succeeded." This is worse than a
visible bug because nobody will know to go looking for it.

---

## Brand & Consistency

**Plain meaning:** does the same claim, the same button, the same fact behave
the same way everywhere on the site? Inconsistency (three different "get a
quote" buttons doing three different things, or two different explanations of
how old the company is) quietly erodes trust even when a visitor can't
articulate why.

**How it shows up here:** the "1985 vs. 2021" company-age contradiction that
was the #1 issue on the old live site is now resolved with one honest sentence
in the hero (`Hero.tsx:91-95`) — a good fix, worth carrying the same wording
everywhere else the company's age is mentioned. On the other hand, there are
now three inconsistent "get a quote" entry points on one page (finding #3),
which is the same class of problem in a different place.
