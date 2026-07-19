import roofReplacementHero from '../assets/images/services/roof-replacement/roof-replacement-hero.webp';
import roofReplacementMain from '../assets/images/services/roof-replacement/roof-replacement-main.png';

// import architecturalShinglesImage from "../assets/images/services/roof-replacement/architectural-shingles.webp";
// import metalRoofingImage from "../assets/images/services/roof-replacement/metal-roofing.webp";
// import lowSlopeRoofingImage from "../assets/images/services/roof-replacement/low-slope-roofing.webp";
// import premiumRoofingImage from "../assets/images/services/roof-replacement/premium-roofing.webp";

// import bensalemRoofProjectImage from "../assets/images/services/roof-replacement/projects/bensalem-roof-replacement.webp";
// import abingtonRoofProjectImage from "../assets/images/services/roof-replacement/projects/abington-roof-system.webp";
// import westChesterRoofProjectImage from "../assets/images/services/roof-replacement/projects/west-chester-roof-upgrade.webp";

import roofRepairHero from '../assets/images/services/roof-repair/roof-repair-hero.webp';
import roofRepairMain from '../assets/images/services/roof-repair/roof-repair-main.png';

// import shingleRepairImage from "../assets/images/services/roof-repair/shingle-repair.webp";
// import flashingRepairImage from "../assets/images/services/roof-repair/flashing-repair.webp";
// import leakRepairImage from "../assets/images/services/roof-repair/leak-repair.webp";
// import emergencyProtectionImage from "../assets/images/services/roof-repair/emergency-protection.webp";

// import harborRoofRepairProject from "../assets/images/services/roof-repair/projects/harboro-shingle-repair.webp";
// import lansdaleFlashingProject from "../assets/images/services/roof-repair/projects/lansdale-flashing-repair.webp";
// import doylestownStormRepairProject from "../assets/images/services/roof-repair/projects/doylestown-storm-repair.webp";

import stormDamageHero from '../assets/images/services/storm-damage/storm-damage-hero.webp';
import stormDamageMain from '../assets/images/services/storm-damage/storm-damage-main.png';

// import windDamageImage from "../assets/images/services/storm-damage/wind-damage.webp";
// import hailDamageImage from "../assets/images/services/storm-damage/hail-damage.webp";
// import fallenDebrisImage from "../assets/images/services/storm-damage/fallen-debris.webp";
// import temporaryProtectionImage from "../assets/images/services/storm-damage/temporary-protection.webp";

// import willowGroveWindProject from "../assets/images/services/storm-damage/projects/willow-grove-wind-damage.webp";
// import newtownHailProject from "../assets/images/services/storm-damage/projects/newtown-hail-damage.webp";
// import horshamDebrisProject from "../assets/images/services/storm-damage/projects/horsham-debris-repair.webp";

import sidingHero from '../assets/images/services/siding/siding-hero.webp';
import sidingMain from '../assets/images/services/siding/siding-main.png';

// import vinylSidingImage from "../assets/images/services/siding/vinyl-siding.webp";
// import fiberCementImage from "../assets/images/services/siding/fiber-cement.webp";
// import insulatedSidingImage from "../assets/images/services/siding/insulated-siding.webp";
// import sidingTrimImage from "../assets/images/services/siding/siding-trim.webp";

// import mediaSidingProject from "../assets/images/services/siding/projects/media-siding-replacement.webp";
// import kingOfPrussiaSidingProject from "../assets/images/services/siding/projects/king-of-prussia-siding-upgrade.webp";
// import westChesterSidingProject from "../assets/images/services/siding/projects/west-chester-fiber-cement.webp";

import guttersHero from '../assets/images/services/gutters/gutters-hero.webp';
import guttersMain from '../assets/images/services/gutters/gutters-main.png';

// import seamlessGuttersImage from "../assets/images/services/gutters/seamless-gutters.webp";
// import downspoutsImage from "../assets/images/services/gutters/downspouts.webp";
// import gutterGuardsImage from "../assets/images/services/gutters/gutter-guards.webp";
// import drainagePlanningImage from "../assets/images/services/gutters/drainage-planning.webp";

// import kingOfPrussiaGuttersProject from "../assets/images/services/gutters/projects/king-of-prussia-gutters.webp";
// import norristownDownspoutsProject from "../assets/images/services/gutters/projects/norristown-downspouts.webp";
// import glensideGutterGuardsProject from "../assets/images/services/gutters/projects/glenside-gutter-guards.webp";

import windowsSkylightsHero from '../assets/images/services/windows-skylights/windows-skylights-hero.webp';
import windowsSkylightsMain from '../assets/images/services/windows-skylights/windows-skylights-main.png';

// import replacementWindowsImage from "../assets/images/services/windows-skylights/replacement-windows.webp";
// import skylightReplacementImage from "../assets/images/services/windows-skylights/skylight-replacement.webp";
// import flashingSystemsImage from "../assets/images/services/windows-skylights/flashing-systems.webp";
// import exteriorTrimImage from "../assets/images/services/windows-skylights/exterior-trim.webp";

// import brynMawrWindowsProject from "../assets/images/services/windows-skylights/projects/bryn-mawr-window-replacement.webp";
// import westChesterSkylightProject from "../assets/images/services/windows-skylights/projects/west-chester-skylight-replacement.webp";
// import newtownWindowsSidingProject from "../assets/images/services/windows-skylights/projects/newtown-windows-siding.webp";

export const services = [
  {
    id: 1,

    slug: 'roof-replacement',

    title: 'Roof Replacement',

    cardDescription:
      'Complete residential roof replacement using durable materials and careful installation.',

    heroDescription:
      'A new roof is one of the best ways to protect your home and increase its value. We provide complete roof replacement services using high-quality materials and expert installation.',

    heroImage: roofReplacementHero,

    heroImageAlt:
      'Newly replaced dark shingle roof on a white residential home',

    rating: {
      value: '5.0',
      reviewsCount: '120+ Reviews',
    },

    overview: {
      eyebrow: 'Overview',

      title: 'A New Roof Built for Long-Term Protection',

      paragraphs: [
        'A roof replacement is more than installing new shingles. The process should include an evaluation of the existing roof system, ventilation, flashing, decking, drainage, and visible structural concerns.',
        'Our team reviews the condition of the property, explains the available material options, and develops a clear replacement plan based on the home and project requirements.',
      ],

      highlightsTitle: 'What the Service May Include',

      highlights: [
        'Full removal of existing roofing materials when required.',
        'Inspection of accessible roof decking.',
        'Installation of underlayment and weather protection.',
        'Flashing replacement around vulnerable areas.',
        'Ventilation review and improvement where appropriate.',
        'Final cleanup and project inspection.',
      ],
    },

    benefits: [
      {
        title: 'Improved Protection',

        description:
          'A properly installed roof helps protect your home from severe weather, leaks, and long-term damage.',
      },

      {
        title: 'Better Curb Appeal',

        description:
          'A new roof can dramatically improve the look of your home and increase its overall value.',
      },

      {
        title: 'Reduced Repair Risk',

        description:
          'Replacing an aging roof helps reduce the risk of recurring repairs and unexpected problems.',
      },

      {
        title: 'Material Warranty Options',

        description:
          'High-quality materials come with strong manufacturer warranties for added peace of mind.',
      },
    ],

    options: {
      eyebrow: 'Roofing Options',

      title: 'Quality Materials. Built to Last.',

      description:
        "We offer a range of premium roofing systems to match your home's style, budget, and performance needs.",

      mainImage: roofReplacementMain,

      mainImageAlt:
        'Close view of architectural asphalt shingles installed on a residential roof',

      items: [
        {
          id: 1,

          title: 'Architectural Shingles',

          description:
            'Durable, cost-effective protection available in a variety of colors and styles.',

          // image: architecturalShinglesImage,

          imageAlt: 'Dark architectural asphalt roofing shingles',
        },

        {
          id: 2,

          title: 'Metal Roofing',

          description:
            'Long-lasting roofing performance with excellent durability and energy efficiency.',

          // image: metalRoofingImage,

          imageAlt: 'Dark standing-seam metal roofing panels',
        },

        {
          id: 3,

          title: 'Low-Slope Roofing',

          description:
            'Specialized roofing systems for flat and low-slope residential roof areas.',

          // image: lowSlopeRoofingImage,

          imageAlt:
            'Low-slope roofing system installed on a residential property',
        },

        {
          id: 4,

          title: 'Premium Upgrades',

          description:
            'Enhanced protection through upgraded underlayment, ventilation, and roof-edge details.',

          // image: premiumRoofingImage,

          imageAlt:
            'Premium residential roofing materials and upgraded shingles',
        },
      ],
    },

    process: [
      {
        number: '01',

        title: 'Roof Inspection',

        description:
          'We evaluate visible roofing conditions, measurements, flashing, drainage, ventilation, and accessibility.',
      },

      {
        number: '02',

        title: 'Project Recommendation',

        description:
          'We explain the findings and recommend appropriate roofing materials and project scope.',
      },

      {
        number: '03',

        title: 'Written Proposal',

        description:
          'You receive a detailed written proposal describing the planned work, materials, and project terms.',
      },

      {
        number: '04',

        title: 'Professional Installation',

        description:
          'The roofing system is installed according to the approved scope and applicable product requirements.',
      },
    ],

    relatedProjects: [
      {
        id: 1,

        slug: 'shingle-roof-replacement-bensalem',

        title: 'Shingle Roof Replacement',

        location: 'Bensalem, PA',

        summary:
          'Architectural shingles with upgraded ventilation and weather protection.',

        // image: bensalemRoofProjectImage,

        imageAlt:
          'Completed architectural shingle roof replacement in Bensalem, Pennsylvania',
      },

      {
        id: 2,

        slug: 'complete-roof-system-abington',

        title: 'Complete Roof System',

        location: 'Abington, PA',

        summary:
          'Full roof replacement with new shingles, flashing, underlayment, and ventilation.',

        // image: abingtonRoofProjectImage,

        imageAlt:
          'Completed residential roof system replacement in Abington, Pennsylvania',
      },

      {
        id: 3,

        slug: 'premium-roof-upgrade-west-chester',

        title: 'Premium Roof Upgrade',

        location: 'West Chester, PA',

        summary:
          'High-performance shingles with enhanced roof-edge and ventilation details.',

        // image: westChesterRoofProjectImage,

        imageAlt:
          'Premium residential roof upgrade in West Chester, Pennsylvania',
      },
    ],

    review: {
      quote:
        'Northline replaced our roof after a big storm. The communication was excellent, the crew was professional, and everything was left cleaner than they found it.',

      name: 'Danielle H.',

      location: 'Warminster, PA',

      rating: 5,
    },

    faq: [
      {
        id: 1,

        question: 'How do I know if my roof needs to be replaced?',

        answer:
          'Signs may include missing or curling shingles, recurring leaks, water stains, extensive granule loss, damaged flashing, visible sagging, repeated repairs, or an aging roofing system. An inspection can help determine whether repair or replacement is more appropriate.',
      },

      {
        id: 2,

        question: 'How long does a roof replacement take?',

        answer:
          'Many residential roof replacements take one to three days. Larger or more complex roofs, decking repairs, weather conditions, property access, and material availability may extend the schedule.',
      },

      {
        id: 3,

        question: 'What types of roofing materials do you offer?',

        answer:
          'Available options may include architectural asphalt shingles, metal roofing, low-slope roofing systems, and selected premium upgrades. The appropriate material depends on the roof design, budget, appearance, and performance requirements.',
      },

      {
        id: 4,

        question: 'Do you offer warranties on your work?',

        answer:
          'Warranty coverage depends on the selected roofing materials, manufacturer requirements, installation system, project scope, and the terms included in the written proposal.',
      },

      {
        id: 5,

        question: 'Do you help with insurance claims?',

        answer:
          'We can inspect visible storm damage, document affected areas, and prepare project information. Insurance coverage, claim approval, and payment decisions remain the responsibility of the homeowner and insurance carrier.',
      },
    ],
  },

  {
    id: 2,

    slug: 'roof-repair',

    title: 'Roof Repair',

    cardDescription:
      'Targeted roof repairs for leaks, damaged shingles, flashing problems, and other localized roofing issues.',

    heroDescription:
      'Address leaks, damaged shingles, and other roofing issues before they turn into bigger, more expensive problems. We provide reliable roof repair services with honest recommendations and quality workmanship.',

    heroImage: roofRepairHero,

    heroImageAlt:
      'Roofing contractor repairing asphalt shingles on a residential roof',

    rating: {
      value: '4.9',
      reviewsCount: '95+ Reviews',
    },

    overview: {
      eyebrow: 'Overview',

      title: 'Practical Repairs for Localized Roof Problems',

      paragraphs: [
        'Not every roofing issue requires a full replacement. When damage is limited to a specific area, a targeted repair can restore protection and extend the life of your existing roof.',
        "Our team inspects the problem area, explains the cause, and recommends the best repair solution based on your roof's overall condition and long-term performance.",
      ],

      highlightsTitle: 'What the Service May Include',

      highlights: [
        'Replacement of missing or damaged shingles.',
        'Flashing repair around penetrations and roof edges.',
        'Leak detection and targeted repairs.',
        'Vent and pipe-boot repair.',
        'Minor roof-deck repairs when accessible.',
        'Storm-damage repairs and temporary protection.',
      ],
    },

    benefits: [
      {
        title: 'Stops Active Leaks',

        description:
          'Timely repairs help stop water intrusion and reduce the risk of damage to ceilings, insulation, walls, and interior finishes.',
      },

      {
        title: 'Cost-Effective Solution',

        description:
          'When damage is localized, a targeted repair is often more affordable than replacing an otherwise serviceable roof.',
      },

      {
        title: 'Extends Roof Life',

        description:
          'Correcting damaged shingles, flashing, or penetrations can help the existing roof perform longer and more reliably.',
      },

      {
        title: 'Honest Guidance',

        description:
          'We explain whether a repair is the right solution or whether replacement would make more practical long-term sense.',
      },
    ],

    options: {
      eyebrow: 'Repair Solutions',

      title: 'Targeted Solutions for Common Roof Problems',

      description:
        'We repair a wide range of localized roofing issues using appropriate materials and careful installation methods.',

      mainImage: roofRepairMain,

      mainImageAlt:
        'Roofing contractor replacing damaged shingles on a residential asphalt roof',

      items: [
        {
          id: 1,

          title: 'Shingle Repair',

          description:
            'Replacement of missing, cracked, curled, lifted, or otherwise damaged shingles.',

          // image: shingleRepairImage,

          imageAlt: 'Contractor replacing damaged asphalt roof shingles',
        },

        {
          id: 2,

          title: 'Flashing Repair',

          description:
            'Repair of flashing around chimneys, vents, walls, valleys, and roof penetrations.',

          // image: flashingRepairImage,

          imageAlt:
            'Roof flashing repair around a residential roof penetration',
        },

        {
          id: 3,

          title: 'Leak Repair',

          description:
            'Investigation of likely water-entry points followed by a targeted repair recommendation.',

          // image: leakRepairImage,

          imageAlt: 'Localized roof leak repair on an asphalt shingle roof',
        },

        {
          id: 4,

          title: 'Emergency Protection',

          description:
            'Temporary protective measures when permanent repairs cannot be completed immediately.',

          // image: emergencyProtectionImage,

          imageAlt:
            'Temporary emergency protection installed over damaged roofing',
        },
      ],
    },

    process: [
      {
        number: '01',

        title: 'Problem Review',

        description:
          'We discuss the issue, visible symptoms, recent leaks, storm activity, and any previous repair history.',
      },

      {
        number: '02',

        title: 'Roof Inspection',

        description:
          'We inspect accessible roof areas to identify the likely cause and evaluate the extent of the damage.',
      },

      {
        number: '03',

        title: 'Repair Recommendation',

        description:
          'We explain the available options and recommend the most appropriate repair approach.',
      },

      {
        number: '04',

        title: 'Repair Completion',

        description:
          'We complete the approved repair, inspect the finished area, and clean the surrounding work zone.',
      },
    ],

    relatedProjects: [
      {
        id: 1,

        slug: 'shingle-repair-leak-fix-hatboro',

        title: 'Shingle Repair & Leak Fix',

        location: 'Hatboro, PA',

        summary:
          'Replaced damaged shingles and repaired a leak around a roof penetration.',

        // image: harborRoofRepairProject,

        imageAlt:
          'Completed shingle repair and roof leak repair in Hatboro, Pennsylvania',
      },

      {
        id: 2,

        slug: 'flashing-repair-lansdale',

        title: 'Flashing Repair',

        location: 'Lansdale, PA',

        summary:
          'Repaired deteriorated chimney flashing and restored proper water protection.',

        // image: lansdaleFlashingProject,

        imageAlt: 'Completed chimney flashing repair in Lansdale, Pennsylvania',
      },

      {
        id: 3,

        slug: 'storm-damage-repair-doylestown',

        title: 'Storm Damage Repair',

        location: 'Doylestown, PA',

        summary:
          'Replaced wind-damaged shingles and sealed exposed areas after severe weather.',

        // image: doylestownStormRepairProject,

        imageAlt:
          'Completed storm-damage roof repair in Doylestown, Pennsylvania',
      },
    ],

    review: {
      quote:
        'We had a persistent leak around our chimney. Northline found the issue right away, explained everything clearly, and fixed it quickly. No upselling, just honest service.',

      name: 'Michael R.',

      location: 'Abington, PA',

      rating: 5,
    },

    faq: [
      {
        id: 1,

        question: 'Can every roof leak be repaired?',

        answer:
          'Many roof leaks can be repaired, but widespread deterioration, repeated failures, extensive decking damage, or an aging roofing system may make replacement the more reliable long-term solution.',
      },

      {
        id: 2,

        question: 'Can you find the exact source of a leak?',

        answer:
          'Roof leaks can travel along decking, framing, insulation, or flashing before appearing indoors. An inspection can usually identify the most likely source, although some leaks require additional investigation.',
      },

      {
        id: 3,

        question: 'How do I know whether I need repair or replacement?',

        answer:
          "The decision depends on the roof's age, overall condition, extent of damage, previous repair history, active leaks, and expected remaining service life.",
      },

      {
        id: 4,

        question: 'How long do roof repairs usually take?',

        answer:
          'Many localized repairs can be completed within several hours. More extensive repairs, material availability, access conditions, and weather may extend the schedule.',
      },

      {
        id: 5,

        question: 'Do you offer emergency roof repairs?',

        answer:
          'Emergency availability depends on weather, roof accessibility, crew scheduling, and safety conditions. Temporary protection may be recommended when a permanent repair cannot be completed immediately.',
      },
    ],
  },

  {
    id: 3,

    slug: 'storm-damage',

    title: 'Storm Damage',

    cardDescription:
      'Roof and exterior inspections after wind, hail, falling debris, and severe weather.',

    heroDescription:
      'Get a clear assessment of visible storm-related damage to your roof and exterior. We inspect affected areas, document visible concerns, and recommend the appropriate next step.',

    heroImage: stormDamageHero,

    heroImageAlt:
      'Residential roof with visible storm damage after severe weather',

    rating: {
      value: '4.9',
      reviewsCount: '80+ Reviews',
    },

    overview: {
      eyebrow: 'Overview',

      title: 'Understand the Condition of Your Property After a Storm',

      paragraphs: [
        'Wind, hail, heavy rain, and falling debris can affect roofing, siding, gutters, flashing, and other exterior components.',
        'A prompt inspection can help identify visible damage and determine whether temporary protection, targeted repair, or full replacement should be considered.',
      ],

      highlightsTitle: 'What the Service May Include',

      highlights: [
        'Inspection of visible roofing damage.',
        'Evaluation of missing, lifted, or creased shingles.',
        'Review of flashing and roof penetrations.',
        'Inspection of gutters and exterior components.',
        'Photographic documentation where appropriate.',
        'Repair, replacement, or temporary protection recommendations.',
      ],
    },

    benefits: [
      {
        title: 'Prompt Evaluation',

        description:
          'Early inspection helps identify visible storm damage before additional weather makes the condition worse.',
      },

      {
        title: 'Clear Documentation',

        description:
          'Photographs and written observations help homeowners understand which areas were affected.',
      },

      {
        title: 'Repair Planning',

        description:
          'The inspection helps determine whether temporary protection, repair, or replacement may be needed.',
      },

      {
        title: 'Honest Guidance',

        description:
          'We explain what we can verify, what remains uncertain, and which next step makes the most practical sense.',
      },
    ],

    options: {
      eyebrow: 'Storm Damage Services',

      title: 'A Clear Response After Severe Weather',

      description:
        'The appropriate response depends on the type of storm, the visible damage, active leaks, property access, and the overall condition of the roof and exterior.',

      mainImage: stormDamageMain,

      mainImageAlt:
        'Residential roof showing visible wind and storm-related damage',

      items: [
        {
          id: 1,

          title: 'Wind Damage',

          description:
            'Evaluation of lifted, creased, displaced, or missing shingles after strong winds.',

          // image: windDamageImage,

          imageAlt: 'Lifted and missing roof shingles caused by strong wind',
        },

        {
          id: 2,

          title: 'Hail Damage',

          description:
            'Inspection of visible impact marks on shingles, flashing, gutters, and exterior surfaces.',

          // image: hailDamageImage,

          imageAlt: 'Hail impact damage on residential asphalt shingles',
        },

        {
          id: 3,

          title: 'Fallen Debris',

          description:
            'Assessment of roof and exterior damage caused by branches, limbs, or other storm debris.',

          // image: fallenDebrisImage,

          imageAlt:
            'Tree branch and storm debris resting on a damaged residential roof',
        },

        {
          id: 4,

          title: 'Temporary Protection',

          description:
            'Short-term protective measures when permanent repair cannot begin immediately.',

          // image: temporaryProtectionImage,

          imageAlt:
            'Temporary protective covering installed over a storm-damaged roof',
        },
      ],
    },

    process: [
      {
        number: '01',

        title: 'Initial Contact',

        description:
          'You tell us when the storm occurred, what damage you noticed, and whether water is entering the property.',
      },

      {
        number: '02',

        title: 'Property Inspection',

        description:
          'We inspect accessible roofing and exterior areas for visible storm-related damage.',
      },

      {
        number: '03',

        title: 'Damage Documentation',

        description:
          'We document relevant observations and affected areas with photographs when appropriate.',
      },

      {
        number: '04',

        title: 'Repair Plan',

        description:
          'We explain the recommended repair, replacement, or temporary protection options.',
      },
    ],

    relatedProjects: [
      {
        id: 1,

        slug: 'wind-damage-roof-repair-willow-grove',

        title: 'Wind Damage Roof Repair',

        location: 'Willow Grove, PA',

        summary:
          'Replaced lifted and missing shingles after a severe wind event and restored exposed roof areas.',

        // image: willowGroveWindProject,

        imageAlt:
          'Completed wind-damage roof repair in Willow Grove, Pennsylvania',
      },

      {
        id: 2,

        slug: 'hail-damage-roof-replacement-newtown',

        title: 'Hail Damage Roof Replacement',

        location: 'Newtown, PA',

        summary:
          'Replaced a hail-damaged roofing system with new architectural shingles and updated flashing.',

        // image: newtownHailProject,

        imageAlt:
          'Completed hail-damage roof replacement in Newtown, Pennsylvania',
      },

      {
        id: 3,

        slug: 'fallen-debris-roof-repair-horsham',

        title: 'Fallen Debris Roof Repair',

        location: 'Horsham, PA',

        summary:
          'Repaired roof damage caused by a fallen tree limb and replaced affected shingles and decking.',

        // image: horshamDebrisProject,

        imageAlt:
          'Completed fallen-debris roof repair in Horsham, Pennsylvania',
      },
    ],

    review: {
      quote:
        'After a major windstorm, Northline inspected the roof, showed us exactly where the damage was, and explained the repair options without creating unnecessary pressure.',

      name: 'Lauren P.',

      location: 'Bensalem, PA',

      rating: 5,
    },

    estimate: {
      eyebrow: 'Request a Storm Damage Inspection',

      title: 'Let’s Assess the Damage and Plan the Next Step',

      description:
        'Tell us what happened, what damage you can see, and whether the property has an active leak.',

      messagePlaceholder:
        'Describe the storm, visible damage, leaks, or affected exterior areas',
    },

    faq: [
      {
        id: 1,

        question: 'Should I have my roof inspected after a major storm?',

        answer:
          'An inspection is reasonable after strong wind, hail, falling debris, visible exterior damage, missing shingles, or new signs of water intrusion.',
      },

      {
        id: 2,

        question: 'Can storm damage be difficult to see from the ground?',

        answer:
          'Yes. Some damage may be located on roof slopes that are not visible from the ground, and certain wind or hail effects can be subtle without closer inspection.',
      },

      {
        id: 3,

        question: 'Do you determine whether insurance will cover the damage?',

        answer:
          'No. Insurance coverage and claim decisions are made by the insurance carrier. We can inspect visible damage, document affected areas, and prepare project information.',
      },

      {
        id: 4,

        question: 'What should I do if water is entering the home?',

        answer:
          'Move belongings away from the affected area, contain water when safe, document visible damage, and contact a roofing professional. Do not climb onto a wet or damaged roof.',
      },

      {
        id: 5,

        question: 'Can you provide temporary roof protection?',

        answer:
          'Temporary protection may be possible depending on weather, roof accessibility, safety conditions, crew availability, and the extent of the damage.',
      },
    ],
  },

  {
    id: 4,
    slug: 'siding',
    title: 'Siding',
    cardDescription:
      'Exterior siding installation and replacement for improved protection, energy performance, and curb appeal.',
    heroDescription:
      'Refresh and protect your home with professionally installed siding designed to improve weather resistance, appearance, and long-term exterior performance.',
    heroImage: sidingHero,
    heroImageAlt: 'New exterior siding installed on a residential home',
    rating: {
      value: '4.9',
      reviewsCount: '70+ Reviews',
    },
    overview: {
      eyebrow: 'Overview',
      title: 'Improve the Protection and Appearance of Your Home',
      paragraphs: [
        'Siding is a major part of the exterior building envelope. It helps protect wall assemblies from weather while contributing significantly to the style and overall appearance of the property.',
        'A properly planned siding project should consider the condition of the existing walls, water management, insulation, trim details, window and door transitions, and the selected exterior material.',
      ],
      highlightsTitle: 'What the Service May Include',
      highlights: [
        'Removal of existing siding when required.',
        'Inspection of accessible wall surfaces.',
        'Installation of a weather-resistant barrier.',
        'Siding and exterior trim installation.',
        'Detailing around windows, doors, corners, and rooflines.',
        'Final cleanup and project inspection.',
      ],
    },
    benefits: [
      {
        title: 'Exterior Protection',
        description:
          'Properly installed siding helps protect exterior wall assemblies from moisture, wind, and changing weather conditions.',
      },

      {
        title: 'Updated Appearance',
        description:
          'New siding can dramatically improve the style, color, and curb appeal of the entire property.',
      },

      {
        title: 'Lower Maintenance',
        description:
          'Many modern siding products require less ongoing maintenance than older painted or deteriorated exterior materials.',
      },

      {
        title: 'Efficiency Options',
        description:
          'Some siding systems can be combined with exterior insulation and improved weather barriers to support better wall performance.',
      },
    ],

    options: {
      eyebrow: 'Siding Options',
      title: 'Exterior Materials for Different Homes and Priorities',
      description:
        'We help homeowners compare siding systems based on appearance, durability, maintenance, insulation, budget, and the existing condition of the property.',
      mainImage: sidingMain,
      mainImageAlt:
        'Close view of newly installed exterior siding and trim on a residential home',

      items: [
        {
          id: 1,
          title: 'Vinyl Siding',
          description:
            'A practical, low-maintenance siding option available in many profiles, textures, and colors.',
          // image: vinylSidingImage,

          imageAlt:
            'New vinyl siding panels installed on a residential exterior',
        },

        {
          id: 2,

          title: 'Fiber Cement',

          description:
            'A durable exterior material with a substantial painted appearance and strong weather resistance.',

          // image: fiberCementImage,

          imageAlt: 'Fiber cement siding installed on a residential home',
        },

        {
          id: 3,

          title: 'Insulated Siding',

          description:
            'A siding system with added backing designed to support improved wall performance and comfort.',

          // image: insulatedSidingImage,

          imageAlt: 'Insulated siding system with foam backing',
        },

        {
          id: 4,

          title: 'Trim and Details',

          description:
            'Coordinated corner posts, soffits, fascia, window trim, door trim, and exterior finishing details.',

          // image: sidingTrimImage,

          imageAlt:
            'Exterior siding trim installed around a residential window',
        },
      ],
    },

    process: [
      {
        number: '01',

        title: 'Exterior Evaluation',

        description:
          'We review the existing siding, trim, visible wall conditions, moisture concerns, and exterior details.',
      },

      {
        number: '02',

        title: 'Material Selection',

        description:
          'You compare suitable siding materials, profiles, colors, trim options, and project priorities.',
      },

      {
        number: '03',

        title: 'Preparation',

        description:
          'Existing materials are removed or prepared according to the approved project scope and wall conditions.',
      },

      {
        number: '04',

        title: 'Professional Installation',

        description:
          'The siding, weather-management components, trim, and finishing details are installed and inspected.',
      },
    ],

    relatedProjects: [
      {
        id: 1,

        slug: 'vinyl-siding-replacement-media',

        title: 'Vinyl Siding Replacement',

        location: 'Media, PA',

        summary:
          'Replaced aging exterior siding with a new low-maintenance vinyl siding system and updated window trim.',

        // image: mediaSidingProject,

        imageAlt: 'Completed vinyl siding replacement in Media, Pennsylvania',
      },

      {
        id: 2,

        slug: 'exterior-siding-upgrade-king-of-prussia',

        title: 'Exterior Siding Upgrade',

        location: 'King of Prussia, PA',

        summary:
          'Updated the exterior with new siding, coordinated trim, soffits, and improved weather-management details.',

        // image: kingOfPrussiaSidingProject,

        imageAlt:
          'Completed residential siding upgrade in King of Prussia, Pennsylvania',
      },

      {
        id: 3,

        slug: 'fiber-cement-siding-west-chester',

        title: 'Fiber Cement Siding',

        location: 'West Chester, PA',

        summary:
          'Installed fiber cement siding with contrasting trim for a durable and updated exterior appearance.',

        // image: westChesterSidingProject,

        imageAlt:
          'Completed fiber cement siding installation in West Chester, Pennsylvania',
      },
    ],

    review: {
      quote:
        'The new siding completely changed the appearance of our home. Northline helped us compare materials, explained the trim details, and kept the entire project organized from start to finish.',

      name: 'Rachel T.',

      location: 'Media, PA',

      rating: 5,
    },

    estimate: {
      eyebrow: 'Request a Siding Estimate',

      title: 'Let’s Refresh and Protect Your Home',

      description:
        'Tell us about your current siding, visible damage, preferred materials, or the exterior changes you are considering.',

      messagePlaceholder:
        'Describe your siding project, existing exterior condition, preferred material, or areas of concern',
    },

    faq: [
      {
        id: 1,

        question: 'How do I know when my siding needs replacement?',

        answer:
          'Common signs include cracked or loose panels, warping, fading, repeated repairs, moisture damage, deterioration around windows and trim, or widespread aging across the exterior.',
      },

      {
        id: 2,

        question: 'Can damaged siding be repaired instead of replaced?',

        answer:
          'Localized damage may sometimes be repaired. However, matching discontinued profiles, textures, or faded colors can be difficult, and broader deterioration may make full replacement more practical.',
      },

      {
        id: 3,

        question: 'Can new siding improve energy efficiency?',

        answer:
          'Some siding projects can include exterior insulation or improved weather barriers. Actual energy performance depends on the full wall assembly, insulation levels, air sealing, and selected products.',
      },

      {
        id: 4,

        question: 'How long does siding installation usually take?',

        answer:
          'The schedule depends on the size of the home, exterior complexity, preparation work, wall repairs, selected material, weather, and project access.',
      },

      {
        id: 5,

        question: 'Can siding be installed around existing windows and doors?',

        answer:
          'Yes. Window and door openings are integrated into the siding system with appropriate trim, flashing, and water-management details. Existing conditions should be evaluated before installation.',
      },
    ],
  },

  {
    id: 5,

    slug: 'gutters',

    title: 'Gutters',

    cardDescription:
      'Gutter and downspout installation designed to move roof runoff safely away from your home.',

    heroDescription:
      'Protect your roofline, siding, landscaping, and foundation with a properly planned gutter and downspout system.',

    heroImage: guttersHero,

    heroImageAlt:
      'New seamless gutters and downspouts installed on a residential home',

    rating: {
      value: '4.9',
      reviewsCount: '65+ Reviews',
    },

    overview: {
      eyebrow: 'Overview',

      title: 'A Reliable Drainage System for Your Home',

      paragraphs: [
        'Gutters and downspouts are essential parts of the roof drainage system. They collect rainwater from the roof and direct it away from exterior walls, walkways, landscaping, and foundation areas.',
        'A well-planned system should account for the roof area, gutter size, downspout locations, fascia condition, discharge points, and visible drainage patterns around the property.',
      ],

      highlightsTitle: 'What the Service May Include',

      highlights: [
        'Removal of existing gutters and downspouts when required.',
        'Installation of seamless gutter sections.',
        'New downspouts and outlet connections.',
        'Evaluation of fascia and roof-edge conditions.',
        'Gutter guard installation when selected.',
        'Final drainage review and site cleanup.',
      ],
    },

    benefits: [
      {
        title: 'Improved Drainage',

        description:
          'Properly sized gutters help collect roof runoff and direct it toward planned discharge locations.',
      },

      {
        title: 'Foundation Protection',

        description:
          'Downspouts help reduce uncontrolled water accumulation near foundation walls and lower-level areas.',
      },

      {
        title: 'Reduced Exterior Damage',

        description:
          'Controlled drainage can help reduce staining, erosion, overflow, and repeated water exposure along siding and trim.',
      },

      {
        title: 'Cleaner Roofline',

        description:
          'New gutters can improve the appearance of the roof edge while coordinating with roofing, fascia, and exterior trim.',
      },
    ],

    options: {
      eyebrow: 'Gutter Options',

      title: 'A Drainage System Designed Around Your Roofline',

      description:
        'The right gutter system depends on the roof area, pitch, drainage volume, fascia condition, downspout placement, landscaping, and available discharge points.',

      mainImage: guttersMain,

      mainImageAlt:
        'Close view of newly installed seamless gutters on a residential roofline',

      items: [
        {
          id: 1,

          title: 'Seamless Gutters',

          description:
            'Continuous gutter sections formed to fit the property with fewer joints along the roofline.',

          // image: seamlessGuttersImage,

          imageAlt:
            'White seamless gutter installed along a residential roof edge',
        },

        {
          id: 2,

          title: 'Downspouts',

          description:
            'Vertical drainage components planned to move collected roof water away from the structure.',

          // image: downspoutsImage,

          imageAlt:
            'Residential downspout connected to a seamless gutter system',
        },

        {
          id: 3,

          title: 'Gutter Guards',

          description:
            'Protective systems designed to reduce larger debris entering and collecting inside gutters.',

          // image: gutterGuardsImage,

          imageAlt: 'Gutter guard installed over a residential gutter',
        },

        {
          id: 4,

          title: 'Drainage Planning',

          description:
            'Recommendations for outlet locations, downspout routes, extensions, and visible discharge areas.',

          // image: drainagePlanningImage,

          imageAlt: 'Residential gutter and downspout drainage planning',
        },
      ],
    },

    process: [
      {
        number: '01',

        title: 'Drainage Review',

        description:
          'We inspect the existing gutters, downspouts, roof edges, fascia, overflow areas, and visible drainage conditions.',
      },

      {
        number: '02',

        title: 'System Recommendation',

        description:
          'We recommend suitable gutter sizing, downspout placement, discharge routes, and optional gutter protection.',
      },

      {
        number: '03',

        title: 'Removal and Preparation',

        description:
          'Existing gutter components are removed where required, and accessible roof-edge conditions are reviewed.',
      },

      {
        number: '04',

        title: 'Professional Installation',

        description:
          'The approved gutters and downspouts are installed, aligned, secured, and checked for proper drainage direction.',
      },
    ],

    relatedProjects: [
      {
        id: 1,

        slug: 'seamless-gutter-installation-king-of-prussia',

        title: 'Seamless Gutter Installation',

        location: 'King of Prussia, PA',

        summary:
          'Installed new seamless gutters and coordinated downspouts to improve drainage around the home.',

        // image: kingOfPrussiaGuttersProject,

        imageAlt:
          'Completed seamless gutter installation in King of Prussia, Pennsylvania',
      },

      {
        id: 2,

        slug: 'downspout-upgrade-norristown',

        title: 'Downspout and Drainage Upgrade',

        location: 'Norristown, PA',

        summary:
          'Reconfigured downspout locations and added extensions to direct roof runoff away from the foundation.',

        // image: norristownDownspoutsProject,

        imageAlt:
          'Completed residential downspout upgrade in Norristown, Pennsylvania',
      },

      {
        id: 3,

        slug: 'gutter-guard-installation-glenside',

        title: 'Gutter Guard Installation',

        location: 'Glenside, PA',

        summary:
          'Installed new gutter guards and corrected several sections of sagging and poorly draining gutter.',

        // image: glensideGutterGuardsProject,

        imageAlt:
          'Completed gutter guard installation in Glenside, Pennsylvania',
      },
    ],

    review: {
      quote:
        'Our old gutters overflowed during every heavy rain. Northline replaced the system, adjusted the downspouts, and clearly explained how the water should move away from the house.',

      name: 'Thomas B.',

      location: 'King of Prussia, PA',

      rating: 5,
    },

    estimate: {
      eyebrow: 'Request a Gutter Estimate',

      title: 'Let’s Improve Your Home’s Drainage',

      description:
        'Tell us about overflowing gutters, leaks, sagging sections, downspout concerns, or the new system you are considering.',

      messagePlaceholder:
        'Describe your current gutters, drainage problems, overflow areas, or requested upgrades',
    },

    faq: [
      {
        id: 1,

        question: 'How do I know whether my gutters need replacement?',

        answer:
          'Common signs include persistent leaks, separated seams, sagging sections, corrosion, loose fasteners, repeated overflow, damaged outlets, and drainage that does not move water away from the home.',
      },

      {
        id: 2,

        question: 'Should gutters be replaced at the same time as the roof?',

        answer:
          'Not always, but coordinating both projects can improve scheduling and allow the roof edge, fascia, flashing, and drainage system to be evaluated together.',
      },

      {
        id: 3,

        question: 'Do gutter guards eliminate gutter maintenance?',

        answer:
          'No gutter protection system completely eliminates inspection and maintenance. Gutter guards can reduce larger debris accumulation, but smaller material and roof granules may still collect over time.',
      },

      {
        id: 4,

        question: 'How many downspouts does my home need?',

        answer:
          'The appropriate number depends on the roof area, roof shape, gutter size, expected rainfall, drainage routes, and available discharge locations.',
      },

      {
        id: 5,

        question: 'Where should downspouts discharge?',

        answer:
          'Downspouts should generally direct water away from the structure toward an appropriate discharge area, subject to site conditions, grading, landscaping, and local drainage requirements.',
      },
    ],
  },
  {
    id: 6,

    slug: 'windows-skylights',

    title: 'Windows & Skylights',

    cardDescription:
      'Window and skylight replacement focused on weather protection, natural light, comfort, and careful exterior detailing.',

    heroDescription:
      'Improve natural light, indoor comfort, and weather protection with professionally installed windows and skylights integrated with your roofing and siding systems.',

    heroImage: windowsSkylightsHero,

    heroImageAlt:
      'Modern replacement windows and skylights installed on a residential home',

    rating: {
      value: '4.9',
      reviewsCount: '55+ Reviews',
    },

    overview: {
      eyebrow: 'Overview',

      title: 'Exterior Openings Require Careful Weather Protection',

      paragraphs: [
        'Windows and skylights are important parts of the exterior building envelope. When flashing, sealants, trim, or surrounding roofing and siding details are incomplete or deteriorated, water can enter around the opening.',
        'A properly planned replacement addresses not only the visible window or skylight unit, but also the surrounding flashing system, water-management details, exterior trim, and integration with adjacent materials.',
      ],

      highlightsTitle: 'What the Service May Include',

      highlights: [
        'Replacement window installation.',
        'Skylight replacement and removal.',
        'Flashing-system integration.',
        'Exterior trim and sealant work.',
        'Roofing coordination around skylights.',
        'Inspection of accessible surrounding damage.',
      ],
    },

    benefits: [
      {
        title: 'Weather Protection',

        description:
          'Proper flashing and installation help reduce the risk of water intrusion around windows and skylights.',
      },

      {
        title: 'More Natural Light',

        description:
          'Skylights can bring daylight into interior spaces that may not receive enough light from standard windows.',
      },

      {
        title: 'Improved Comfort',

        description:
          'Modern window products may help reduce drafts, improve operation, and support more consistent indoor comfort.',
      },

      {
        title: 'Exterior Integration',

        description:
          'Window and skylight work can be coordinated with roofing and siding to improve surrounding weather-management details.',
      },
    ],

    options: {
      eyebrow: 'Product Options',

      title: 'Windows and Skylights Integrated With the Exterior',

      description:
        'The right product and installation method depend on the opening size, surrounding materials, flashing requirements, ventilation goals, natural-light needs, and project scope.',

      mainImage: windowsSkylightsMain,

      mainImageAlt:
        'Close view of a residential skylight installed within a finished asphalt shingle roof',

      items: [
        {
          id: 1,

          title: 'Replacement Windows',

          description:
            'New window units selected to fit the existing opening, exterior details, and project requirements.',

          // image: replacementWindowsImage,

          imageAlt: 'New residential replacement window with exterior trim',
        },

        {
          id: 2,

          title: 'Skylight Replacement',

          description:
            'Replacement of aging or damaged skylights together with surrounding roofing and flashing.',

          // image: skylightReplacementImage,

          imageAlt: 'New skylight installed on a residential roof',
        },

        {
          id: 3,

          title: 'Flashing Systems',

          description:
            'Water-management components designed to integrate the opening with roofing or siding materials.',

          // image: flashingSystemsImage,

          imageAlt:
            'Window and skylight flashing components installed for weather protection',
        },

        {
          id: 4,

          title: 'Exterior Trim',

          description:
            'Finished trim, sealant, cladding, and transition details around exterior windows and skylights.',

          // image: exteriorTrimImage,

          imageAlt:
            'Finished exterior trim installed around a residential window',
        },
      ],
    },

    process: [
      {
        number: '01',

        title: 'Opening Evaluation',

        description:
          'We review the existing window or skylight, surrounding materials, visible leaks, operation, and accessible damage.',
      },

      {
        number: '02',

        title: 'Product Selection',

        description:
          'We identify a suitable replacement unit and installation approach based on the opening and project goals.',
      },

      {
        number: '03',

        title: 'Removal and Preparation',

        description:
          'The existing unit and affected exterior materials are carefully removed and the opening is prepared.',
      },

      {
        number: '04',

        title: 'Installation and Flashing',

        description:
          'The new unit is installed and integrated with the surrounding roofing, siding, flashing, trim, and sealant system.',
      },
    ],

    relatedProjects: [
      {
        id: 1,

        slug: 'replacement-windows-bryn-mawr',

        title: 'Whole-Home Window Replacement',

        location: 'Bryn Mawr, PA',

        summary:
          'Replaced aging windows throughout the home and installed new exterior trim and weather-sealing details.',

        // image: brynMawrWindowsProject,

        imageAlt:
          'Completed whole-home window replacement in Bryn Mawr, Pennsylvania',
      },

      {
        id: 2,

        slug: 'skylight-replacement-west-chester',

        title: 'Skylight Replacement',

        location: 'West Chester, PA',

        summary:
          'Replaced an aging leaking skylight during a roof project and installed a new integrated flashing system.',

        // image: westChesterSkylightProject,

        imageAlt:
          'Completed residential skylight replacement in West Chester, Pennsylvania',
      },

      {
        id: 3,

        slug: 'windows-siding-upgrade-newtown',

        title: 'Windows and Siding Upgrade',

        location: 'Newtown, PA',

        summary:
          'Coordinated window replacement with new siding, exterior trim, and improved water-management details.',

        // image: newtownWindowsSidingProject,

        imageAlt:
          'Completed window and siding upgrade in Newtown, Pennsylvania',
      },
    ],

    review: {
      quote:
        'Our old skylight had leaked more than once. Northline replaced it during the roof project, explained the flashing system, and left the interior and exterior areas clean.',

      name: 'Jennifer C.',

      location: 'West Chester, PA',

      rating: 5,
    },

    estimate: {
      eyebrow: 'Request a Windows and Skylights Estimate',

      title: 'Let’s Improve Light, Comfort, and Weather Protection',

      description:
        'Tell us about the windows or skylights you want to replace, any visible leaks, drafts, operational problems, or exterior work you are planning.',

      messagePlaceholder:
        'Describe the windows or skylights, visible leaks, drafts, damage, or replacement goals',
    },

    faq: [
      {
        id: 1,

        question: 'Can a leaking skylight always be repaired?',

        answer:
          'Some leaks are caused by flashing, sealant, or surrounding roofing problems, while others involve the skylight unit itself. The appropriate solution depends on the age, condition, and source of the water intrusion.',
      },

      {
        id: 2,

        question: 'Should skylights be replaced during a roof replacement?',

        answer:
          'It is often practical to evaluate and replace aging skylights while the surrounding roofing is already being removed. This provides better access to the flashing and roof integration details.',
      },

      {
        id: 3,

        question: 'Can windows be replaced at the same time as siding?',

        answer:
          'Yes. Coordinating window and siding work can provide better access to exterior flashing, weather barriers, trim, and transitions around the openings.',
      },

      {
        id: 4,

        question: 'How long does window replacement usually take?',

        answer:
          'The schedule depends on the number of windows, opening conditions, product availability, exterior trim requirements, access, and whether additional siding or wall repairs are required.',
      },

      {
        id: 5,

        question: 'Will a new skylight eliminate every risk of leaking?',

        answer:
          'Proper product selection, installation, and flashing significantly reduce the risk of water intrusion, but no exterior opening is completely maintenance-free. The surrounding roof and sealants should still be inspected over time.',
      },
    ],
  },
];
