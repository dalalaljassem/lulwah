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
      subtitle: 'Redesigning KFH Online, Kuwait Finance House\'s mobile banking app.',
      role: 'Senior UX/UI Designer',
      client: 'Kuwait Finance House',
      year: 'Ongoing',
      live: '',
      category: 'Digital banking · Product design',
      hero: { art: 'phone-tilt', tone: 'warm', src: 'assets/KFH.png', alt: 'KFH Online login and home screens on two phones' },
      blocks: [
        {
          type: 'text',
          title: 'Context',
          body: [
            'KFH Online is Kuwait Finance House\'s mobile banking app. My work covers redesigning core flows, adding new customer-facing features like card customisation and AI-guided discovery, and keeping the experience consistent as the app grows across everyday banking, cards, transfers and KFH Private.'
          ]
        },
        {
          type: 'text',
          title: 'Rethinking the everyday screens.',
          body: [
            'One of the first things I tackled was the home screen and core navigation. The previous UI worked, but it felt plain — everything looked the same, and finding things quickly wasn\'t easy. The redesign focuses on a clearer, warmer welcome, more personalised content and faster access to the services people use most.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, src: 'assets/kfh/ui-before-after.jpg', alt: 'Old UI compared with the redesigned KFH Online home screen' }] },
        {
          type: 'text',
          title: 'Small features, considered details.',
          body: [
            'Beyond the core redesign, I designed a set of features that make everyday banking feel more personal:'
          ],
          list: [
            'Digital card covers — seasonal Visa card designs customers can choose and update from the app, from Kuwait-inspired art to sports and national day themes.',
            'Home screen shortcuts — a KFH widget for sending money in one tap, without opening the app first.',
            'Fahad AI — an in-app guide, introduced through Fahad and Reem, that helps customers discover KFH products and services more easily.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, src: 'assets/kfh/card-covers.jpg', alt: 'Digital card cover picker with seasonal Visa card designs' }] },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, src: 'assets/kfh/send-money-widget.jpg', alt: 'KFH Send Money iOS home screen widget' }] },
        {
          type: 'text',
          title: 'A premium experience: KFH Private.',
          body: [
            'For KFH Private customers, the same principles carry through: a calmer, more personal tone, with content and imagery suited to a premium banking experience.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, src: 'assets/kfh/kfh-private.jpg', alt: 'KFH Private home screen shown in hand' }] },
        {
          type: 'text',
          title: 'Meet Fahad and Reem.',
          body: [
            'To help customers get more out of the app, I worked on introducing Fahad AI, an in-app guide surfaced right from the App Store listing and inside the app, walking new and existing customers through KFH\'s products and services.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, src: 'assets/kfh/app-store-guide.jpg', alt: 'App Store listing and Fahad AI guide screens' }] },
        {
          type: 'text',
          title: 'Telling the story outside the app.',
          body: [
            'I also designed the App Store marketing screens that introduce KFH Online to new customers, covering everything from multi-currency cards and children\'s accounts to gold trading and international transfers.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, src: 'assets/kfh/marketing-screens.jpg', alt: 'KFH Online App Store marketing screenshots' }] },
        {
          type: 'text',
          title: 'Building a bank that keeps up.',
          body: [
            'KFH Online keeps evolving alongside how people actually bank: more personal, easier to navigate, and, with features like Fahad AI, a little smarter about helping customers find what they need.'
          ]
        }
      ]
    },
  
    {
      slug: 'gen',
      title: 'Gen by Payway',
      subtitle: 'A connected fintech ecosystem bringing families and schools together through smarter payments, everyday experiences and financial independence.',
      meta: [
        ['Role', 'Partner'],
        ['Focus', 'Product Design & Strategy'],
        ['Year', '2023 – Present'],
        ['Status', 'Live & evolving']
      ],
      live: '',
      category: 'Fintech · Product ecosystem',
      hero: { art: 'eco', tone: 'light', src: 'assets/Gen.png', alt: 'Gen tablet, phone, and wristband on a blue background' },
      blocks: [
        {
          type: 'text',
          title: 'From ideas to real experiences.',
          body: [
            'My role goes beyond designing screens. I work on defining Gen\'s product direction, improving existing experiences and creating a consistent identity across every customer touchpoint.'
          ],
          list: [
            'Shape the vision — defining product priorities, planning future experiences and building a strategy around the evolving needs of students, parents and schools.',
            'Design the experience — turning ideas into user journeys, interfaces and prototypes across the mobile app and point-of-sale experience.',
            'Bring it to life — working closely with the team to launch features, refine the product and maintain a consistent experience across digital and physical touchpoints.'
          ]
        },
        {
          type: 'text',
          title: 'One ecosystem. Every touchpoint.',
          body: [
            'From reimagining the mobile app to designing the POS and shaping Gen\'s brand presence, my work brings the entire experience together.'
          ]
        },
        {
          type: 'text',
          title: '1. A better Gen experience.',
          body: [
            'Mobile app revamp.',
            'Leading the redesign of the Gen app, creating a simpler and more intuitive experience for parents and students.',
            'From managing allowances and school purchases to activities, trips and everyday payments, the goal is to bring everything families need into one seamless experience.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, src: 'assets/gen/app-revamp.jpg', alt: 'Gen app family wallet balance with quick actions for meal plans, spending limits, product limits and allergies' }] },
        {
          type: 'text',
          title: '2. Making every payment feel effortless.',
          body: [
            'Gen POS.',
            'Designing Gen\'s point-of-sale interface, connecting the physical and digital experience to make school purchases faster and easier.',
            'From product selection to student identification and payment confirmation, every interaction is designed to be simple for school staff and students.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, src: 'assets/gen/pos.jpg', alt: 'Gen POS tablet with scan ID, tap to pay and cash options, next to a student ID card' }] },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, src: 'assets/gen/pos-grid.jpg', alt: 'Gen POS product selection screen with categories and billing total' }] },
        {
          type: 'text',
          title: '3. More than an app. A brand.',
          body: [
            'Branding & social media.',
            'Building a recognizable and playful identity for Gen across digital and physical experiences.',
            'My work includes social media management, campaign visuals, illustrations, stickers, branded assets and creative materials that bring Gen closer to students, parents and schools.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, src: 'assets/gen/branding.jpg', alt: 'Gen Instagram profile' }] },
        {
          type: 'text',
          title: 'Growing with the next generation.',
          body: [
            'Gen is evolving into more than a payment solution. It\'s becoming a connected ecosystem that brings families, students and schools together.',
            'Being involved in both the product and the business allows me to shape the experience from different perspectives, combining design, strategy and creativity to build something that grows with its users. And we\'re only getting started.'
          ]
        }
      ]
    },
  
    {
      slug: 'branding',
      title: 'Off the Clock.',
      subtitle: 'A little bit of everything I love creating, from pixels and prototypes to paint, yarn and everything in between.',
      meta: [
        ['Role', 'Designer, Maker & Explorer'],
        ['Focus', 'Creative Exploration'],
        ['Status', 'Always ongoing'],
        ['Format', 'Made with curiosity']
      ],
      live: '',
      category: 'Personal · Creative exploration',
      hero: { art: 'bento', tone: 'warm', bare: true, src: 'assets/lulu.png', alt: 'Two handmade crochet bunnies I made, sitting side by side' },
      blocks: [
        {
          type: 'text',
          title: 'Creativity doesn\'t stop at the screen.',
          body: [
            'I\'m a designer by profession and a maker at heart. Outside my everyday work, I love exploring different ways to create, whether that\'s experimenting with code, designing something in 3D or picking up a paintbrush or crochet hook.',
            'This is my little corner of the internet for everything I enjoy making.'
          ]
        },
        {
          type: 'text',
          title: 'Curiosity is my creative process.',
          body: [
            'Not everything I create starts with a problem to solve. Sometimes it\'s a new idea, a technique I want to learn or something I saw that made me think, \'I want to try that.\''
          ],
          list: [
            'Get inspired — collecting ideas from everyday life, design, technology, art and anything that catches my eye.',
            'Experiment — trying new tools, learning techniques and exploring ideas without worrying too much about getting everything perfect.',
            'Make something — turning experiments into little projects, whether it\'s a working app, a finished painting or something handmade.'
          ],
          tail: 'My creative interests take me in different directions. Here are some of the things I\'ve been exploring.'
        },
        {
          type: 'text',
          title: '1. Design Playground',
          body: [
            'SwiftUI & creative coding.',
            'My very own playground for experimenting with native Apple experiences. I build small apps, explore SwiftUI, test animations and turn random design ideas into working prototypes. It\'s where I get to be both the designer and the developer.',
            'SwiftUI · macOS · iOS · Prototyping · Animation'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, video: 'assets/offtheclock/playground.mp4', poster: 'assets/offtheclock/playground-poster.jpg', alt: 'A tour of my SwiftUI playground app, ending on a Daisy Planner crochet-square tracker' }] },
        {
          type: 'text',
          title: '2. A Little Dimension',
          body: [
            '3D design & visual experiments.',
            'Exploring shapes, materials, lighting and everything in between. I love bringing ideas to life through 3D elements, playful compositions and visual experiments.',
            '3D Elements · Rendering · Visual Exploration'
          ]
        },
        {
          type: 'media', layout: 'pair', itemClass: 'story', items: [
            { art: '', tone: 'light', video: 'assets/offtheclock/3d-1.mp4', poster: 'assets/offtheclock/3d-1-poster.jpg', alt: '3D design exploration, clip one' },
            { art: '', tone: 'light', video: 'assets/offtheclock/3d-2.mp4', poster: 'assets/offtheclock/3d-2-poster.jpg', alt: '3D design exploration, clip two' }
          ]
        },
        {
          type: 'text',
          title: '4. One Stitch at a Time',
          body: [
            'Crochet & handmade projects.',
            'When I\'m not designing on a screen, you\'ll probably find me surrounded by yarn. Crochet is my way of slowing down, playing with colors and making something with my hands, one stitch at a time.'
          ]
        },
        {
          type: 'media', layout: 'pair', itemClass: 'tight', items: [
            { art: '', tone: 'light', bare: true, src: 'assets/offtheclock/crochet.jpg', alt: 'A handmade crochet project, clip one' },
            { art: '', tone: 'light', bare: true, src: 'assets/offtheclock/crochetpic.jpg', alt: 'A handmade crochet project, clip two' }
          ]
        },
        {
          type: 'text',
          title: '5. Away from the Screen',
          body: [
            'Painting & art.',
            'Painting gives me the freedom to explore colors, textures and ideas without grids, guidelines or constraints. Sometimes the best ideas happen when I\'m not looking at a screen.'
          ]
        },
        { type: 'media', layout: 'full', items: [{ art: '', tone: 'light', bare: true, video: 'assets/offtheclock/art.mp4', poster: 'assets/offtheclock/art-poster.jpg', alt: 'A painting in progress' }] },
        {
          type: 'text',
          title: 'Always learning. Always making.',
          body: [
            'Every little experiment teaches me something new. Some turn into finished projects, some become part of my design work, and others are simply things I enjoyed creating.',
            'I believe staying curious and exploring beyond my everyday work is what keeps me growing as a designer.'
          ]
        }
      ]
    }
  ];