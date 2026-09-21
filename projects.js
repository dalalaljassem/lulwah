/* ──────────────────────────────────────────────────────────────
   PROJECT CONTENT  ·  edit this file, not project.html
   ──────────────────────────────────────────────────────────────
   Each project renders into the same case-study template.

   Media: every image slot has `art` (a built-in placeholder) and
   an optional `src`. To use a real image, set `src: 'assets/kfh/01.jpg'`
   and `alt`. As soon as `src` is set, the placeholder is replaced.

   Media layouts:
     layout: 'full'  → one wide panel (16:9-ish), 1 item
     layout: 'pair'  → two portrait panels side by side, 2 items

   Panel tones (background behind your image / placeholder):
     'dark' | 'light' | 'warm'

   Placeholder art names:
     'phones-1' 'phones-2' 'phones-3' 'phone-crop-a' 'phone-crop-b'
     'phone-tilt' 'eco' 'bento'

   `live`: URL for the lime "Live preview" card. Leave '' to hide it.
   ────────────────────────────────────────────────────────────── */

   window.PROJECTS = [
    {
      slug: 'kfh',
      title: 'KFH',
      subtitle: 'Digital banking experiences for Kuwait Finance House.',
      role: 'Senior UX/UI Designer',
      client: 'Kuwait Finance House',
      year: 'Ongoing',
      live: '#',
      category: 'Digital banking · Product design',
      hero: { art: 'phone-tilt', tone: 'warm', src: '', alt: 'KFH digital banking app on a phone' },
      blocks: [
        {
          type: 'text',
          title: 'Context',
          body: [
            'Write two or three sentences here about the product, the people it serves, and the problem you were brought in to solve. Keep it plain: what it is, who it is for, and why it mattered.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: 'phones-2', tone: 'dark', src: '', alt: 'Home and details screens' }] },
        {
          type: 'text',
          title: 'Process',
          body: ['Summarise how you worked in a sentence, then walk through the main steps.'],
          list: [
            'Describe the first step: research, audits, interviews, or discovery, and what it surfaced.',
            'Describe the middle: flows, wireframes, prototypes, and how feedback shaped them.',
            'Describe the last step: testing, refinement, and hand-off to engineering.'
          ]
        },
        {
          type: 'text',
          title: 'Solution',
          body: [
            'Explain what you designed and the decisions behind it. Focus on two or three choices that changed the experience for the better, and why you made them.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: 'phones-1', tone: 'dark', src: '', alt: 'Key flow screen' }] },
        {
          type: 'media', layout: 'pair', items: [
            { art: 'phone-crop-a', tone: 'dark', src: '', alt: 'Screen one' },
            { art: 'phone-crop-b', tone: 'dark', src: '', alt: 'Screen two' }
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: 'phones-3', tone: 'dark', src: '', alt: 'Screens overview' }] },
        {
          type: 'text',
          title: 'Outcome',
          body: [
            'Close with what changed: results, feedback, or what the team could do afterwards that they could not before. Numbers help if you have them.'
          ]
        }
      ]
    },
  
    {
      slug: 'gen',
      title: 'Gen',
      subtitle: 'A fintech product ecosystem for families and schools.',
      role: 'Product Designer',
      client: 'Gen',
      year: 'Ongoing',
      live: '#',
      category: 'Fintech · Product ecosystem',
      hero: { art: 'eco', tone: 'light', src: '', alt: 'Gen ecosystem for families and schools' },
      blocks: [
        {
          type: 'text',
          title: 'Context',
          body: [
            'Write two or three sentences here about Gen, the families and schools it connects, and the problem the ecosystem sets out to solve.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: 'phones-2', tone: 'dark', src: '', alt: 'Core product screens' }] },
        {
          type: 'text',
          title: 'Process',
          body: ['Summarise how the product took shape, then walk through the main steps.'],
          list: [
            'Describe how you learned about families, schools, and what each needed.',
            'Describe how the ecosystem was mapped, from journeys to screens.',
            'Describe how you tested, refined, and shaped the product with the team.'
          ]
        },
        {
          type: 'text',
          title: 'Solution',
          body: [
            'Explain the product and the decisions behind it: how the different parts fit together, and what makes it simple for each audience to use.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: 'eco', tone: 'dark', src: '', alt: 'Ecosystem overview' }] },
        {
          type: 'media', layout: 'pair', items: [
            { art: 'phone-crop-a', tone: 'dark', src: '', alt: 'Screen one' },
            { art: 'phone-crop-b', tone: 'dark', src: '', alt: 'Screen two' }
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: 'phones-3', tone: 'dark', src: '', alt: 'Screens overview' }] },
        {
          type: 'text',
          title: 'Outcome',
          body: [
            'Close with what changed: how the product is being used, what people said, and where it is heading next.'
          ]
        }
      ]
    },
  
    {
      slug: 'branding',
      title: 'Branding',
      subtitle: 'Identity and visual communication across brands.',
      role: 'Identity & Visual Design',
      client: 'Selected clients',
      year: 'Various',
      live: '',
      category: 'Identity · Visual communication',
      hero: { art: 'bento', tone: 'light', src: '', alt: 'Brand identity system' },
      blocks: [
        {
          type: 'text',
          title: 'Context',
          body: [
            'Write two or three sentences here about the brands you worked on, what each needed to say, and who it needed to say it to.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: 'bento', tone: 'dark', src: '', alt: 'Identity system' }] },
        {
          type: 'text',
          title: 'Process',
          body: ['Summarise your approach to identity work, then walk through the main steps.'],
          list: [
            'Describe how you defined the brand: positioning, audience, and tone.',
            'Describe how the visual language developed: logo, type, colour, and layout.',
            'Describe how it was applied and refined across real touchpoints.'
          ]
        },
        {
          type: 'text',
          title: 'Solution',
          body: [
            'Explain the identity system and the thinking behind it: what holds it together, and how it stays flexible across formats.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: 'bento', tone: 'warm', src: '', alt: 'Brand applications' }] },
        {
          type: 'media', layout: 'pair', items: [
            { art: 'bento', tone: 'dark', src: '', alt: 'Application one' },
            { art: 'bento', tone: 'light', src: '', alt: 'Application two' }
          ]
        },
        {
          type: 'text',
          title: 'Outcome',
          body: [
            'Close with what the identity made possible: consistency, recognition, or a clearer voice for the team using it.'
          ]
        }
      ]
    }
  ];