// src/db/services.js

export const services = [
  {
    _id: '6880375d8d0af64f9d5fd216',

    // Данные для страницы /services
    title: 'Roof Replacement',
    slug: 'roof-replacement',
    shortDescription:
      'Complete roof replacement using durable materials, careful installation, and recommendations based on the condition of your home.',
    cardImage: {
      src: 'src/assets/images/services/roof-replacement/card.png',
      alt: 'Completed residential roof replacement',
    },
    cardIcon: {
      src: 'src/assets/images/services/roof-replacement/icon.svg',
      alt: 'Roof Replacement',
    },
    status: 'published',
    sortOrder: 1,

    // Данные верхней секции страницы услуги
    hero: {
      eyebrow: 'Roofing Services',
      title: 'Roof Replacement',
      description:
        'Protect your home with a professionally installed roofing system designed for long-term performance, dependable weather protection, and improved curb appeal.',
      image: {
        src: '/images/services/roof-replacement/hero.webp',
        alt: 'Roofing contractors installing a new residential roof',
      },
      primaryAction: {
        label: 'Get Free Estimate',
        href: '#estimate',
      },
      secondaryAction: {
        label: 'View Our Work',
        href: '#related-projects',
      },
    },

    // Общая информация об услуге
    overview: {
      eyebrow: 'Overview',
      title: 'A Complete Roofing Solution for Long-Term Protection',
      paragraphs: [
        'A full roof replacement is often the best solution when an existing roofing system has reached the end of its service life, developed widespread damage, or can no longer provide reliable protection.',
        'Our team evaluates the condition of the roof, explains the available material options, and installs a complete roofing system designed around the structure, ventilation requirements, budget, and long-term goals of the homeowner.',
      ],
      included: {
        title: 'What the Service May Include',
        items: [
          {
            _id: '6880375d8d0af64f9d5fd21b',
            text: 'Removal and disposal of existing roofing materials.',
            sortOrder: 1,
          },
          {
            _id: '6880375d8d0af64f9d5fd21c',
            text: 'Inspection of the exposed roof deck.',
            sortOrder: 2,
          },
          {
            _id: '6880375d8d0af64f9d5fd21d',
            text: 'Replacement of damaged or deteriorated decking when required.',
            sortOrder: 3,
          },
          {
            _id: '6880375d8d0af64f9d5fd21e',
            text: 'Installation of underlayment and ice-and-water protection.',
            sortOrder: 4,
          },
          {
            _id: '6880375d8d0af64f9d5fd21f',
            text: 'Installation of new shingles and roofing accessories.',
            sortOrder: 5,
          },
          {
            _id: '6880375d8d0af64f9d5fd220',
            text: 'Installation or replacement of flashing around roof penetrations.',
            sortOrder: 6,
          },
          {
            _id: '6880375d8d0af64f9d5fd221',
            text: 'Evaluation and improvement of roof ventilation when appropriate.',
            sortOrder: 7,
          },
          {
            _id: '6880375d8d0af64f9d5fd222',
            text: 'Final inspection and cleanup of the work area.',
            sortOrder: 8,
          },
        ],
      },
    },

    // Основные преимущества полной замены кровли
    benefits: {
      eyebrow: 'Service Benefits',
      title: 'Why Homeowners Choose Roof Replacement',
      items: [
        {
          _id: '6880375d8d0af64f9d5fd223',
          title: 'Reliable Weather Protection',
          description:
            'A complete roofing system helps protect the home from rain, wind, snow, moisture intrusion, and changing seasonal conditions.',
          icon: 'shield',
          sortOrder: 1,
        },
        {
          _id: '6880375d8d0af64f9d5fd224',
          title: 'Improved Curb Appeal',
          description:
            'New roofing materials can significantly refresh the appearance of the property and complement its exterior design.',
          icon: 'house',
          sortOrder: 2,
        },
        {
          _id: '6880375d8d0af64f9d5fd225',
          title: 'Long-Term Value',
          description:
            'Replacing an aging or failing roof can reduce recurring repair needs and provide a more dependable long-term solution.',
          icon: 'chart-line',
          sortOrder: 3,
        },
        {
          _id: '6880375d8d0af64f9d5fd226',
          title: 'Better System Performance',
          description:
            'A properly installed roofing system combines shingles, flashing, ventilation, underlayment, and accessories into one coordinated assembly.',
          icon: 'layers',
          sortOrder: 4,
        },
      ],
    },

    // Варианты и элементы кровельной системы
    solutions: {
      eyebrow: 'Roofing Solutions',
      title: 'A Roofing System Built Around Your Home',
      description:
        'Roof replacement involves more than installing new shingles. Each component must work together to provide dependable performance and proper moisture management.',
      mainImage: {
        src: '/images/services/roof-replacement/solutions/main.webp',
        alt: 'Roofing contractor installing a residential roofing system',
      },
      items: [
        {
          _id: '6880375d8d0af64f9d5fd227',
          title: 'Asphalt Shingle Roofing',
          description:
            'A versatile residential roofing option available in a variety of profiles, textures, colors, and performance levels.',
          image: {
            src: '/images/services/roof-replacement/solutions/asphalt-shingles.webp',
            alt: 'Architectural asphalt shingles installed on a residential roof',
          },
          sortOrder: 1,
        },
        {
          _id: '6880375d8d0af64f9d5fd228',
          title: 'Underlayment Protection',
          description:
            'A secondary protective layer installed beneath the shingles to help manage moisture and protect the roof deck.',
          image: {
            src: '/images/services/roof-replacement/solutions/underlayment.webp',
            alt: 'Roofing underlayment installed over a residential roof deck',
          },
          sortOrder: 2,
        },
        {
          _id: '6880375d8d0af64f9d5fd229',
          title: 'Flashing Installation',
          description:
            'Properly installed flashing helps protect valleys, chimneys, walls, vents, and other vulnerable transitions.',
          image: {
            src: '/images/services/roof-replacement/solutions/flashing.webp',
            alt: 'Metal roof flashing installed around a chimney',
          },
          sortOrder: 3,
        },
        {
          _id: '6880375d8d0af64f9d5fd22a',
          title: 'Roof Ventilation',
          description:
            'Balanced intake and exhaust ventilation can help manage attic heat and moisture while supporting roof-system performance.',
          image: {
            src: '/images/services/roof-replacement/solutions/ventilation.webp',
            alt: 'Residential roof ventilation system',
          },
          sortOrder: 4,
        },
      ],
    },

    // Изображения до и после работ
    beforeAfter: {
      eyebrow: 'Before & After',
      title: 'See the Difference a New Roof Can Make',
      description:
        'Compare the condition of the existing roofing system with the completed roof replacement.',
      items: [
        {
          _id: '6880375d8d0af64f9d5fd22b',
          title: 'Aging Shingle Roof Replacement',
          description:
            'The deteriorated roofing system was removed and replaced with new architectural asphalt shingles.',
          location: 'Abington, PA',
          beforeImage: {
            src: '/images/services/roof-replacement/before-after/aging-roof-before.webp',
            alt: 'Aging residential shingle roof before replacement',
          },
          afterImage: {
            src: '/images/services/roof-replacement/before-after/aging-roof-after.webp',
            alt: 'Residential home after complete roof replacement',
          },
          sortOrder: 1,
        },
        {
          _id: '6880375d8d0af64f9d5fd22c',
          title: 'Storm-Damaged Roof Replacement',
          description:
            'A roof with widespread storm damage was replaced to restore protection and improve the exterior appearance of the home.',
          location: 'Lansdale, PA',
          beforeImage: {
            src: '/images/services/roof-replacement/before-after/storm-damage-before.webp',
            alt: 'Storm-damaged residential roof before replacement',
          },
          afterImage: {
            src: '/images/services/roof-replacement/before-after/storm-damage-after.webp',
            alt: 'New residential roof after storm-damage replacement',
          },
          sortOrder: 2,
        },
        {
          _id: '6880375d8d0af64f9d5fd22d',
          title: 'Exterior Transformation',
          description:
            'The new roofing color and profile were selected to complement the siding, trim, and architectural style of the home.',
          location: 'Hatboro, PA',
          beforeImage: {
            src: '/images/services/roof-replacement/before-after/exterior-before.webp',
            alt: 'Residential exterior before roof replacement',
          },
          afterImage: {
            src: '/images/services/roof-replacement/before-after/exterior-after.webp',
            alt: 'Updated residential exterior after roof replacement',
          },
          sortOrder: 3,
        },
      ],
    },

    // Этапы выполнения услуги
    process: {
      eyebrow: 'Our Process',
      title: 'What You Can Expect',
      description:
        'We use a clear process to evaluate the existing roof, explain the available options, and complete the replacement efficiently.',
      steps: [
        {
          _id: '6880375d8d0af64f9d5fd22e',
          title: 'Initial Consultation',
          description:
            'We discuss your concerns, the age of the roof, visible damage, previous repairs, and your goals for the project.',
          sortOrder: 1,
        },
        {
          _id: '6880375d8d0af64f9d5fd22f',
          title: 'Roof Inspection',
          description:
            'We inspect accessible roof areas, roofing materials, flashing, ventilation, penetrations, and visible structural conditions.',
          sortOrder: 2,
        },
        {
          _id: '6880375d8d0af64f9d5fd230',
          title: 'Replacement Proposal',
          description:
            'We explain the recommended scope of work, available materials, expected project timeline, and estimated cost.',
          sortOrder: 3,
        },
        {
          _id: '6880375d8d0af64f9d5fd231',
          title: 'Material Selection',
          description:
            'You select the preferred roofing material, profile, color, and available accessories for your home.',
          sortOrder: 4,
        },
        {
          _id: '6880375d8d0af64f9d5fd232',
          title: 'Roof Installation',
          description:
            'Our crew removes the existing roofing, prepares the roof deck, and installs the new roofing system.',
          sortOrder: 5,
        },
        {
          _id: '6880375d8d0af64f9d5fd233',
          title: 'Final Inspection',
          description:
            'We review the completed work, inspect the installation, clean the work area, and address final project questions.',
          sortOrder: 6,
        },
      ],
    },

    // Пока проекты можно хранить внутри услуги.
    // Позже их лучше вынести в отдельную коллекцию.
    relatedProjects: [
      {
        _id: '6880375d8d0af64f9d5fd234',
        title: 'Architectural Shingle Roof Replacement',
        slug: 'architectural-shingle-roof-replacement',
        location: 'Abington, PA',
        shortDescription:
          'Complete replacement of an aging residential roofing system using architectural asphalt shingles.',
        image: {
          src: '/images/projects/architectural-shingle-roof/card.webp',
          alt: 'Completed architectural shingle roof replacement',
        },
        serviceSlug: 'roof-replacement',
        sortOrder: 1,
      },
      {
        _id: '6880375d8d0af64f9d5fd235',
        title: 'Storm-Damaged Roof Replacement',
        slug: 'storm-damaged-roof-replacement',
        location: 'Hatboro, PA',
        shortDescription:
          'Replacement of a residential roof after widespread wind and storm damage.',
        image: {
          src: '/images/projects/storm-damaged-roof/card.webp',
          alt: 'New roof installed after storm damage',
        },
        serviceSlug: 'roof-replacement',
        sortOrder: 2,
      },
      {
        _id: '6880375d8d0af64f9d5fd236',
        title: 'Residential Exterior Roof Upgrade',
        slug: 'residential-exterior-roof-upgrade',
        location: 'Lansdale, PA',
        shortDescription:
          'A complete roofing upgrade selected to improve protection and complement the exterior of the home.',
        image: {
          src: '/images/projects/residential-roof-upgrade/card.webp',
          alt: 'Completed residential roofing upgrade',
        },
        serviceSlug: 'roof-replacement',
        sortOrder: 3,
      },
    ],

    // Пока отзывы также находятся в услуге.
    // Позже их можно вынести в отдельную коллекцию reviews.
    reviews: {
      eyebrow: 'Customer Reviews',
      title: 'What Homeowners Say',
      averageRating: 5,
      totalReviews: 3,
      items: [
        {
          _id: '6880375d8d0af64f9d5fd237',
          authorName: 'Michael R.',
          location: 'Abington, PA',
          rating: 5,
          text: 'The team explained every step of the roof replacement and completed the work professionally. The new roof looks great, and the property was left clean when the project was finished.',
          serviceSlug: 'roof-replacement',
          isFeatured: true,
          sortOrder: 1,
        },
        {
          _id: '6880375d8d0af64f9d5fd238',
          authorName: 'Jennifer T.',
          location: 'Hatboro, PA',
          rating: 5,
          text: 'We received a clear estimate, helpful guidance on materials, and regular updates throughout the project. The installation was organized and completed on schedule.',
          serviceSlug: 'roof-replacement',
          isFeatured: true,
          sortOrder: 2,
        },
        {
          _id: '6880375d8d0af64f9d5fd239',
          authorName: 'David S.',
          location: 'Lansdale, PA',
          rating: 5,
          text: 'Our old roof had several ongoing issues. The replacement process was straightforward, and the finished roof completely changed the appearance of the house.',
          serviceSlug: 'roof-replacement',
          isFeatured: false,
          sortOrder: 3,
        },
      ],
    },

    // Часто задаваемые вопросы
    faq: {
      eyebrow: 'Frequently Asked Questions',
      title: 'Roof Replacement Questions',
      items: [
        {
          _id: '6880375d8d0af64f9d5fd23a',
          question: 'How do I know whether my roof needs to be replaced?',
          answer:
            'Replacement may be appropriate when the roof has widespread deterioration, recurring leaks, extensive storm damage, significant granule loss, damaged decking, or has reached the end of its expected service life.',
          sortOrder: 1,
        },
        {
          _id: '6880375d8d0af64f9d5fd23b',
          question: 'How long does a roof replacement take?',
          answer:
            'The duration depends on the size and complexity of the roof, material selection, weather, access conditions, and whether concealed deck damage is discovered. Many residential projects can be completed within several working days.',
          sortOrder: 2,
        },
        {
          _id: '6880375d8d0af64f9d5fd23c',
          question: 'Do I need to leave my home during the work?',
          answer:
            'Homeowners can usually remain in the house during roof replacement, although the work will create noise, vibration, and activity around the property.',
          sortOrder: 3,
        },
        {
          _id: '6880375d8d0af64f9d5fd23d',
          question: 'What happens if damaged roof decking is found?',
          answer:
            'After the existing roofing materials are removed, damaged or deteriorated decking can be identified. Any necessary replacement should be reviewed and completed before the new roofing system is installed.',
          sortOrder: 4,
        },
        {
          _id: '6880375d8d0af64f9d5fd23e',
          question: 'Can I choose the color and style of the new roof?',
          answer:
            'Yes. Available choices depend on the selected roofing manufacturer and product line. Color, profile, texture, warranty level, and architectural compatibility can all be considered.',
          sortOrder: 5,
        },
        {
          _id: '6880375d8d0af64f9d5fd23f',
          question: 'Will you remove the old roofing materials?',
          answer:
            'The replacement scope can include removal, disposal, site protection, roof-deck inspection, installation of the new roofing system, and final cleanup.',
          sortOrder: 6,
        },
      ],
    },

    // Нижний CTA
    estimateCta: {
      eyebrow: 'Request a Roof Replacement Estimate',
      title: 'Let’s Talk About Your Project',
      description:
        'Tell us about your roofing needs and we’ll contact you to discuss the project and arrange a free, no-obligation estimate.',
      contactPrompt: 'Prefer to speak with someone?',
      phone: {
        label: '(215) 555-0198',
        href: 'tel:+12155550198',
      },
    },

    // SEO-настройки страницы
    seo: {
      metaTitle: 'Roof Replacement Services | Northline Roofing & Exteriors',
      metaDescription:
        'Professional residential roof replacement services with quality materials, experienced installation, roof-deck inspection, flashing, ventilation, and complete cleanup.',
      canonicalPath: '/services/roof-replacement',
      ogTitle: 'Professional Roof Replacement Services',
      ogDescription:
        'Replace an aging or damaged roof with a professionally installed roofing system designed for long-term protection.',
      ogImage: {
        src: '/images/services/roof-replacement/og-image.webp',
        alt: 'Completed residential roof replacement',
      },
      noIndex: false,
    },

    createdAt: '2026-07-21T00:00:00.000Z',
    updatedAt: '2026-07-21T00:00:00.000Z',
    publishedAt: '2026-07-21T00:00:00.000Z',
  },
  {
    _id: '6880375d8d0af64f9d5fd217',

    // Данные для страницы /services
    title: 'Roof Repair',
    slug: 'roof-repair',
    shortDescription:
      'Professional roof repair for leaks, damaged shingles, flashing issues, and other problems that can compromise the protection of your home.',
    cardImage: {
      src: 'src/assets/images/services/roof-repair/card.png',
      alt: 'Roofing contractor repairing a residential roof',
    },
    cardIcon: {
      src: 'src/assets/images/services/roof-repair/icon.svg',
      alt: 'Roof Repair',
    },
    status: 'published',
    sortOrder: 2,
  },
  {
    _id: '6880375d8d0af64f9d5fd218',

    // Данные для страницы /services
    title: 'Storm Damage',
    slug: 'storm-damage',
    shortDescription:
      'Inspection and repair of roof and exterior damage caused by wind, hail, fallen debris, and severe weather conditions.',
    cardImage: {
      src: 'src/assets/images/services/storm-damage/card.png',
      alt: 'Residential roof affected by severe storm damage',
    },
    cardIcon: {
      src: 'src/assets/images/services/storm-damage/icon.svg',
      alt: 'Storm Damage',
    },
    status: 'published',
    sortOrder: 3,
  },
  {
    _id: '6880375d8d0af64f9d5fd219',

    // Данные для страницы /services
    title: 'Siding',
    slug: 'siding',
    shortDescription:
      'Professional siding installation and replacement designed to improve your home’s appearance, energy efficiency, and protection from the elements.',
    cardImage: {
      src: 'src/assets/images/services/siding/card.png',
      alt: 'Residential home with professionally installed exterior siding',
    },
    cardIcon: {
      src: 'src/assets/images/services/siding/icon.svg',
      alt: 'Siding',
    },
    status: 'published',
    sortOrder: 4,
  },
  {
    _id: '6880375d8d0af64f9d5fd220',

    // Данные для страницы /services
    title: 'Gutters',
    slug: 'gutters',
    shortDescription:
      'Gutter installation, replacement, and repair to help direct rainwater away from your roof, siding, foundation, and landscaping.',
    cardImage: {
      src: 'src/assets/images/services/gutters/card.png',
      alt: 'New gutter system installed along a residential roofline',
    },
    cardIcon: {
      src: 'src/assets/images/services/gutters/icon.svg',
      alt: 'Gutters',
    },
    status: 'published',
    sortOrder: 5,
  },
  {
    _id: '6880375d8d0af64f9d5fd221',

    // Данные для страницы /services
    title: 'Windows & Skylights',
    slug: 'windows-skylights',
    shortDescription:
      'Window and skylight installation and replacement that improves natural light, ventilation, energy efficiency, and overall comfort.',
    cardImage: {
      src: 'src/assets/images/services/windows-skylights/card.png',
      alt: 'Residential roof with professionally installed skylights',
    },
    cardIcon: {
      src: 'src/assets/images/services/windows-skylights/icon.svg',
      alt: 'Windows and Skylights',
    },
    status: 'published',
    sortOrder: 6,
  },
];
