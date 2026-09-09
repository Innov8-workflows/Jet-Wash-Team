// copy library: C:\Users\Jay\.claude\site-kit\copy\exterior-cleaning.js
module.exports = {
  name: 'The Jet Wash Team',
  trade: 'exterior-cleaning',

  /* 'demo' allows placeholders and a 4 MB payload.
     'client' forbids placeholders, forbids base64 video, and drops the budget to 2 MB. */
  mode: 'demo',

  /* Clean Trade: light ground, wide whitespace, soft radii. Exterior cleaning is
     a planned, priced, looked-forward-to job like a driveway, not a rescue, and
     the whole pitch is "look how clean", which a white page sells better than a
     near-black one. The logo's blue and navy carry the colour. */
  direction: 'clean-trade',

  title: 'The Jet Wash Team | Exterior Cleaning Services',
  description: 'Driveway, patio, roof, render and gutter cleaning for homes and businesses. Pressure washing and soft washing by The Jet Wash Team. Free no obligation quotes.',

  /* Sampled from logo-transparent.png: the water splash blue averages #36BAFB
     and the shield plate averages #031119. brand is the blue, brand2 a deeper
     blue from the same family so the CTA scrim and dark-surface accents stay
     on-brand. ink is the plate navy so the hero logo sits on its own colour. */
  palette: {
    brand: '#2AAEF2', 'brand-rgb': '42,174,242',
    'brand-lt': '#5FC6FF',
    'brand-dp': '#1479B8',
    brand2: '#1F5FA8', 'brand2-rgb': '31,95,168',
    'brand2-lt': '#5A96DB',
    'brand2-dk': '#153F70',
    'on-brand2': '#F2F8FF',

    ink: '#0A1824', 'ink-rgb': '10,24,36',
    'ink-1': '#11222F',
    'ink-2': '#1A2D3D',
    'ink-deep': '#040D15', 'ink-deep-rgb': '4,13,21',

    'band-bg': '#08141F',
    'band-g1': '#0F2233',
    'band-g2': '#0C1B2C',
    'chip-core-bg': '#1C3348',

    /* The direction's CTA scrim is built for a bright photograph. a1.jpeg (the finished
       court) is a grey mid-tone and vanished under it, so the wash is lighter here. */
    'cta-scrim': 'linear-gradient(135deg,rgba(var(--brand-rgb),.38),rgba(var(--ink-rgb),.48) 52%,rgba(var(--brand2-rgb),.36)),rgba(var(--ink-rgb),.14)',
  },

  /* A claim here is a statement that the client supplied evidence.
     NOTHING is declared. No insurance certificate, accreditation or guarantee
     document has been seen. */
  claims: {},

  facebook: 'https://www.facebook.com/Jetwashteam',
  instagram: 'https://www.instagram.com/jetwashteam/',
  tiktok: 'https://www.tiktok.com/@jetwashteam',

  /* Where each fact came from, so the next session does not have to re-derive it. */
  facts: {
    PHONE:     { value: '07963 334447', source: 'van livery in about-big-van.png, confirmed by the Instagram bio (0796 333 444 7) and TikTok captions', seen: '2026-09-09' },
    SERVICES:  { value: 'roof cleaning; gutters and fascia cleaning; driveways and patios cleaning; soft washing and render cleaning; cladding and maintenance', source: 'van livery in about-big-van.png', seen: '2026-09-09' },
    SCOPE:     { value: 'Residential and commercial, "nationwide"', source: 'van livery and the Facebook and Instagram bios', seen: '2026-09-09' },
    TOWN:      { value: 'UNKNOWN. A Google snippet of an Instagram caption reads "...SC13 KLD 58 TREAFORD LA..." which may be an address (Treaford Lane is Birmingham B8), and the van photograph looks like a Midlands street. Not used. Confirm with the client.', source: 'google search', seen: '2026-09-09' },
    OWNER:     { value: 'UNKNOWN. A TikTok caption reads "Another driveway completed by Lynch and the team". Not used. Confirm with the client.', source: 'google search', seen: '2026-09-09' },
    FACEBOOK:  { value: '19 followers, 1 recommendation (Heather Louise, a car clean, text used verbatim on the site), no contact info or address on the About tab', source: 'facebook/about, facebook/reviews', seen: '2026-09-09' },
    INSTAGRAM: { value: '786 followers, 50 posts, handle @jetwashteam, bio carries the phone and "nationwide"', source: 'instagram.com/jetwashteam', seen: '2026-09-09' },
    GOOGLE:    { value: 'No Google Business Profile found for the phone number', source: 'google search', seen: '2026-09-09' },
    LOGO:      { value: 'logo-transparent.png used per Jay. Real alpha (yuva420p after encode). Square 1:1 badge, so the golden hero-logo aspect fits.', source: 'folder', seen: '2026-09-09' },
  },

  tokens: {
    BUSINESS: 'The Jet Wash Team',
    BUSINESS_SHORT: 'The Jet Wash Team',
    TOWN: '[PLACEHOLDER]',
    PHONE: '07963 334447',
    PHONE_TEL: '+447963334447',
    PHONE_WA: '447963334447',
    FACEBOOK: 'https://www.facebook.com/Jetwashteam',
    INSTAGRAM: 'https://www.instagram.com/jetwashteam/',
    TIKTOK: 'https://www.tiktok.com/@jetwashteam',
  },
};
