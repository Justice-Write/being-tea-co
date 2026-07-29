export type SocialPost = {
  id: string;
  title: string;
  date: string;
  week: number;
  platforms: string[];
  pillar: string;
  format: string;
  instagramFacebookCaption: string;
  xCaption: string;
  cta: string;
  imageBrief: string;
  altText: string;
  sourceLinks: Array<{ label: string; url: string }>;
  crosslink: string;
  status: "staged";
};

export const socialPosts = [
  {
    "id": "S01",
    "title": "One plant, six broad paths",
    "date": "2026-08-03",
    "week": 1,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Know Your Leaf",
    "format": "7-slide educational carousel",
    "instagramFacebookCaption": "White, green, yellow, oolong, black, and dark tea can look like six unrelated worlds. They begin with one species: *Camellia sinensis*. What changes is the leaf’s path—how it is withered, heated, bruised, oxidized, shaped, dried, roasted, or microbially transformed.",
    "xCaption": "Six broad tea families; one species. Category maps the leaf’s processing path—it does not finish the tasting note. Start with *Camellia sinensis*, then follow the craft. #TeaEducation",
    "cta": "Save the six-family map and read the full foundation guide.",
    "imageBrief": "Slide 1 botanical branch and six finished leaves; slides 2–7 give one family per slide with a true-to-life leaf macro and one processing verb. Deep green field, warm gold rules, off-white type. No faux Asian motifs.",
    "altText": "A tea plant branch leads to examples of white, green, yellow, oolong, black, and dark tea.",
    "sourceLinks": [
      {
        "label": "Kew",
        "url": "https://www.kew.org/plants/tea-plant"
      },
      {
        "label": "UNESCO",
        "url": "https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884"
      }
    ],
    "crosslink": "/journal/what-is-tea-one-plant-many-paths",
    "status": "staged"
  },
  {
    "id": "S02",
    "title": "Tea or tisane?",
    "date": "2026-08-06",
    "week": 1,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Tea Language",
    "format": "Split-frame still + caption",
    "instagramFacebookCaption": "Peppermint can be beautiful. Rooibos can be complex. Chaga can be worth exploring. They are not made from *Camellia sinensis*, so the precise term is **tisane** or **herbal infusion**.",
    "xCaption": "Tea comes from *Camellia sinensis*. Peppermint, rooibos, chamomile, and chaga are tisanes or herbal infusions. Precision is not gatekeeping; it helps us understand what is actually in the cup.",
    "cta": "Comment with the infusion you want us to study next.",
    "imageBrief": "Left: processed tea leaf and amber cup. Right: peppermint, rooibos, chamomile, and chaga arranged separately, not blended. Clean botanical labeling added as editable type.",
    "altText": "True tea leaf on one side and four non-tea botanicals on the other.",
    "sourceLinks": [
      {
        "label": "NCCIH Tea overview",
        "url": "https://www.nccih.nih.gov/health/tea"
      },
      {
        "label": "Kew",
        "url": "https://www.kew.org/plants/tea-plant"
      }
    ],
    "crosslink": "/journal/what-is-tea-one-plant-many-paths",
    "status": "staged"
  },
  {
    "id": "S03",
    "title": "Read the opened leaf",
    "date": "2026-08-10",
    "week": 2,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Tea Observation",
    "format": "25-second overhead Reel / short video",
    "instagramFacebookCaption": "The dry leaf tells only the first half of the story. After brewing, open it out. Look for the plucking standard, stems, buds, torn edges, evenness, and the color changes that processing left behind.",
    "xCaption": "After brewing, read the opened leaf: bud, stem, edge, color, evenness. Don’t impose one beauty standard. Ask whether the leaf behaves like the style it claims to be.",
    "cta": "Brew one tea, photograph the dry and wet leaf, and compare.",
    "imageBrief": "Real overhead sequence: dry rolled oolong, water entering gaiwan, leaf opening across three infusions, final wet-leaf close-up. Hands only; no face required. Add step names in post-production.",
    "altText": "Rolled oolong leaves gradually opening over three infusions.",
    "sourceLinks": [
      {
        "label": "WSU Tea Production Guide",
        "url": "https://wpcdn.web.wsu.edu/extension/uploads/sites/25/2025/04/Tea-production-extension-guide.pdf"
      },
      {
        "label": "UNESCO",
        "url": "https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884"
      }
    ],
    "crosslink": "/journal/what-is-tea-one-plant-many-paths",
    "status": "staged"
  },
  {
    "id": "S04",
    "title": "What “golden light” means",
    "date": "2026-08-13",
    "week": 2,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "The Golden Light",
    "format": "Signature macro still",
    "instagramFacebookCaption": "**Golden light** is Being Tea Co.’s name for a sensory moment: a clear, lively twinkle that some balanced green and oolong teas show when leaf, water, heat, time, and dilution meet well.",
    "xCaption": "“Golden light” is our sensory language for a clear, lively cup—not an industry grade, caffeine test, or universal color standard. Look closely; then smell, sip, feel, and wait.",
    "cta": "Read the guide, then show us the light in your next cup.",
    "imageBrief": "Extreme close-up of clear pale-gold liquor in thin white porcelain with one natural glint; no artificial aura. Show the liquor edge and faint reflection of a window.",
    "altText": "Clear pale-gold tea catching a pinpoint of natural light.",
    "sourceLinks": [
      {
        "label": "Brewing water and tea flavor study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/"
      },
      {
        "label": "FDA caffeine guidance",
        "url": "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much"
      }
    ],
    "crosslink": "/journal/finding-the-golden-light",
    "status": "staged"
  },
  {
    "id": "S05",
    "title": "The five-pass cup reading",
    "date": "2026-08-17",
    "week": 3,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "The Golden Light",
    "format": "6-slide saveable carousel",
    "instagramFacebookCaption": "Try this before deciding whether a tea is “good”:",
    "xCaption": "Read a cup in five passes: look, smell, sip, feel, wait. Description before judgment. Precise noticing is more useful than borrowed tasting notes.",
    "cta": "Save this for your next session and write one word per pass.",
    "imageBrief": "One cup photographed consistently across five detail slides: color against white, steam/aroma, sip ripple, liquor texture on spoon, empty-cup aroma. Typography does the teaching.",
    "altText": "Five views of one cup demonstrate looking, smelling, sipping, feeling, and waiting.",
    "sourceLinks": [
      {
        "label": "Tea aroma review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/"
      },
      {
        "label": "Brewing-water study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/"
      }
    ],
    "crosslink": "/journal/finding-the-golden-light",
    "status": "staged"
  },
  {
    "id": "S06",
    "title": "A three-cup golden-light study",
    "date": "2026-08-20",
    "week": 3,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Brewing Practice",
    "format": "Demonstration Reel + recipe card",
    "instagramFacebookCaption": "One leaf. One water. Three cups.",
    "xCaption": "One tea, one water, three brews: cooler/shorter, baseline, hotter/longer. Compare—not for “correct,” but for coherence. A disappointing steep is data, not defeat.",
    "cta": "Run the comparison and reply with A, B, or C.",
    "imageBrief": "Locked overhead camera; identical clear pitchers and white cups labeled A/B/C in post. Show scale, kettle temperature, timer, pour, and three liquors.",
    "altText": "Three cups of the same tea brewed with different time and temperature settings.",
    "sourceLinks": [
      {
        "label": "Steeping conditions study",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26017324/"
      },
      {
        "label": "Brewing-water study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/"
      }
    ],
    "crosslink": "/journal/finding-the-golden-light",
    "status": "staged"
  },
  {
    "id": "S07",
    "title": "Ten decisions before the kettle",
    "date": "2026-08-24",
    "week": 4,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Seed to Cup",
    "format": "Motion graphic / vertical explainer",
    "instagramFacebookCaption": "Before your kettle: plant, place, harvest, wither, shape, oxidation, heat, sorting, packing, transport. After your kettle: storage, water, vessel, time, and presentation.",
    "xCaption": "Tea is not a leaf that simply dries. Plant, place, harvest, wither, shape, oxidation, heat, sorting, packing, transport—then your storage and brew. Real craft is more interesting than vague luxury.",
    "cta": "Watch twice, then read the full chain from seed to service.",
    "imageBrief": "Animated line travels from seedling through illustrated processing stations to a cup. Each stage is visually distinct, botanically credible, and labeled in editable motion text.",
    "altText": "An animated path connects tea cultivation, processing, packing, storage, brewing, and serving.",
    "sourceLinks": [
      {
        "label": "WSU Tea Production Guide",
        "url": "https://wpcdn.web.wsu.edu/extension/uploads/sites/25/2025/04/Tea-production-extension-guide.pdf"
      },
      {
        "label": "FAO",
        "url": "https://www.fao.org/international-tea-day/home/international-tea-day-2025/en"
      }
    ],
    "crosslink": "/journal/seed-to-cup-chain-of-choices",
    "status": "staged"
  },
  {
    "id": "S08",
    "title": "Origin is a people word",
    "date": "2026-08-27",
    "week": 4,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Seed to Cup",
    "format": "Documentary photo + quote card",
    "instagramFacebookCaption": "“Origin” should mean more than a mountain printed in gold. It points to cultivar, weather, land, harvest, knowledge, labor, and community. FAO reports that tea supports millions of people and that smallholders produce a major share of the world’s tea.",
    "xCaption": "Origin is not just a flavor word. It names land, season, labor, knowledge, and community. A famous mountain in gold type is atmosphere until provenance supports it.",
    "cta": "Ask your tea seller one specific origin question this week.",
    "imageBrief": "Documentary landscape of tea shrubs with working hands and baskets, licensed or commissioned rather than generated if representing a real origin. If generated, keep location generic and label it “illustration.”",
    "altText": "Hands harvesting tea shoots in a cultivated landscape.",
    "sourceLinks": [
      {
        "label": "FAO International Tea Day",
        "url": "https://www.fao.org/international-tea-day/home/international-tea-day-2025/en"
      },
      {
        "label": "FAO 2026 community focus",
        "url": "https://www.fao.org/director-general/news/details/international-tea-day-2026--fao-celebrates-the-importance-of-tea-to-communities-and-cultures/en"
      }
    ],
    "crosslink": "/journal/seed-to-cup-chain-of-choices",
    "status": "staged"
  },
  {
    "id": "S09",
    "title": "The hands inside the cup",
    "date": "2026-08-31",
    "week": 5,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Seed to Cup",
    "format": "8-frame carousel portrait series",
    "instagramFacebookCaption": "A cup may take three minutes to brew and years to become possible.",
    "xCaption": "A cup may take three minutes to brew and years to become possible. No tea begins at checkout. Our future shop will treat maker, harvest, storage, and evidence as part of the product—not fine print.",
    "cta": "Join the email list for our sourcing standards as they develop.",
    "imageBrief": "Eight non-identifying close-ups: pruning, plucking, withering tray, rolling, sorting, sealing, transport crate, home pour. Use licensed real imagery for any claimed region; otherwise mark as conceptual.",
    "altText": "Eight images show people cultivating, processing, moving, selling, and brewing tea.",
    "sourceLinks": [
      {
        "label": "FAO International Tea Day",
        "url": "https://www.fao.org/international-tea-day/home/international-tea-day-2025/en"
      },
      {
        "label": "UNESCO tea processing heritage",
        "url": "https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884"
      }
    ],
    "crosslink": "/journal/seed-to-cup-chain-of-choices",
    "status": "staged"
  },
  {
    "id": "S10",
    "title": "Bag versus loose leaf: blind",
    "date": "2026-09-03",
    "week": 5,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Tea Quality",
    "format": "Blind tasting Reel",
    "instagramFacebookCaption": "A bag is not a moral failure, and “loose leaf” is not a protected promise of quality. Smaller particles usually infuse faster; a bag can be convenient, consistent, and strong. Loose leaf gives you more visibility, room, and control.",
    "xCaption": "A bag is a tool; loose leaf is a format. Neither is a guaranteed quality verdict. Taste blind for aroma, balance, texture, finish, freshness, and value.",
    "cta": "Try a blind A/B and tell us which cup you chose before the reveal.",
    "imageBrief": "Identical unmarked cups A/B, one fine-particle bag and one basket of loose black tea revealed only at the end. Show equal leaf mass and water volume.",
    "altText": "Two unmarked cups compare bagged and loose tea under the same brewing conditions.",
    "sourceLinks": [
      {
        "label": "Tea-bag infusion study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5502043/"
      },
      {
        "label": "Bagged and loose black tea study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4930538/"
      }
    ],
    "crosslink": "/journal/tea-quality-ladder-bagged-loose-aged",
    "status": "staged"
  },
  {
    "id": "S13",
    "title": "Four variables, one cup",
    "date": "2026-09-14",
    "week": 7,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Brewing School",
    "format": "5-slide carousel",
    "instagramFacebookCaption": "Four variables do most of the work: **leaf-to-water ratio, water, temperature, and time.**",
    "xCaption": "Ratio, water, temperature, time. Change one variable at a time—or improve the tea without learning why.",
    "cta": "Choose one variable to test this week.",
    "imageBrief": "Hero cup surrounded by four radial objects: scale/leaf, water carafe, thermometer/kettle, timer. Each follow-up slide isolates one variable.",
    "altText": "A cup is surrounded by symbols for leaf ratio, water, temperature, and time.",
    "sourceLinks": [
      {
        "label": "Brewing-water study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/"
      },
      {
        "label": "Steeping-conditions study",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26017324/"
      }
    ],
    "crosslink": "/journal/brew-tea-like-an-experiment",
    "status": "staged"
  },
  {
    "id": "S14",
    "title": "Water is an ingredient",
    "date": "2026-09-17",
    "week": 7,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Brewing School",
    "format": "Side-by-side tasting Reel",
    "instagramFacebookCaption": "Brew the same green tea with tap, filtered, and moderate-mineral bottled water. Keep leaf, temperature, and time fixed. Compare aroma, brightness, bitterness, texture, and finish.",
    "xCaption": "Water is an ingredient. Compare tap, filtered, and moderate-mineral water with every other variable fixed. Look for compatibility, not the fanciest bottle.",
    "cta": "Run the water flight and post your city plus the winning cup.",
    "imageBrief": "Three matching glass pitchers and cups labeled tap/filtered/mineral in post-production. Show identical tea mass and a blind-tasting reveal.",
    "altText": "Three identical cups compare tea brewed with tap, filtered, and bottled water.",
    "sourceLinks": [
      {
        "label": "Brewing-water study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/"
      }
    ],
    "crosslink": "/journal/brew-tea-like-an-experiment",
    "status": "staged"
  },
  {
    "id": "S15",
    "title": "The one-line brewing log",
    "date": "2026-09-21",
    "week": 8,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Brewing School",
    "format": "Downloadable template + still",
    "instagramFacebookCaption": "Your whole tea log can fit on one line:",
    "xCaption": "Tea / grams / mL / water / temperature / time / result / next change. One line is enough to turn guesswork into a repeatable brew.",
    "cta": "Download the log card from the article and fill in your first line.",
    "imageBrief": "Branded blank field-note card on green linen beside scale, leaf, and cup. Text remains vector/editable for a printable download.",
    "altText": "A one-line tea log records recipe, result, and the next variable to change.",
    "sourceLinks": [
      {
        "label": "Steeping-conditions study",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26017324/"
      },
      {
        "label": "Caffeine variability study",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19007524/"
      }
    ],
    "crosslink": "/journal/brew-tea-like-an-experiment",
    "status": "staged"
  },
  {
    "id": "S16",
    "title": "Oolong is not a midpoint",
    "date": "2026-09-24",
    "week": 8,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Oolong",
    "format": "Spectrum carousel",
    "instagramFacebookCaption": "Calling oolong “between green and black” is like locating a continent between two oceans: useful, incomplete.",
    "xCaption": "Oolong is not one midpoint. Oxidation, roast, shape, cultivar, place, and maker create a wide territory. Start with the name; finish in the cup.",
    "cta": "Swipe across the spectrum and choose the profile you want to taste.",
    "imageBrief": "Five true-to-life leaf styles arranged as a multidimensional field, not a fake linear “oxidation percentage” bar. Each paired with infusion color.",
    "altText": "Five oolong styles show variation in leaf shape, roast appearance, and liquor color.",
    "sourceLinks": [
      {
        "label": "UNESCO tea categories",
        "url": "https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884"
      },
      {
        "label": "Tea aroma review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/"
      }
    ],
    "crosslink": "/journal/oolong-is-a-spectrum",
    "status": "staged"
  },
  {
    "id": "S17",
    "title": "Follow the infusion sequence",
    "date": "2026-09-28",
    "week": 9,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Oolong",
    "format": "30-second repeated-infusion Reel",
    "instagramFacebookCaption": "The first infusion does not have to carry the whole tea.",
    "xCaption": "The first infusion need not carry the whole oolong. Line up the sequence: opening, expansion, peak, softening, fade. Strongest is not automatically best.",
    "cta": "Brew five infusions and name what changed—not which one “won.”",
    "imageBrief": "Same camera and cups; five successive oolong infusions form a color and leaf-opening sequence. Include seconds and temperature as clean overlays.",
    "altText": "Five oolong infusions show the leaves opening and the liquor changing over time.",
    "sourceLinks": [
      {
        "label": "Tea aroma review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/"
      },
      {
        "label": "WSU processing guide",
        "url": "https://wpcdn.web.wsu.edu/extension/uploads/sites/25/2025/04/Tea-production-extension-guide.pdf"
      }
    ],
    "crosslink": "/journal/oolong-is-a-spectrum",
    "status": "staged"
  },
  {
    "id": "S18",
    "title": "Roast is not oxidation",
    "date": "2026-09-30",
    "week": 9,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Oolong",
    "format": "Myth/fact still",
    "instagramFacebookCaption": "A dark-looking oolong may be more oxidized, more roasted, or both. Those are different processes.",
    "xCaption": "Dark oolong can mean more oxidation, more roast, or both. Those are different processes. Ask which changed—and when the tea was roasted.",
    "cta": "Save the distinction and use it in your next shop conversation.",
    "imageBrief": "Two-axis diagram: oxidation left-to-right; roast bottom-to-top. Place four real leaf samples in quadrants. Avoid unsupported numeric percentages.",
    "altText": "A two-axis chart separates degree of oxidation from degree of roasting in oolong.",
    "sourceLinks": [
      {
        "label": "WSU Tea Production Guide",
        "url": "https://wpcdn.web.wsu.edu/extension/uploads/sites/25/2025/04/Tea-production-extension-guide.pdf"
      },
      {
        "label": "Tea aroma review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/"
      }
    ],
    "crosslink": "/journal/oolong-is-a-spectrum",
    "status": "staged"
  },
  {
    "id": "S19",
    "title": "Green tea is giving feedback",
    "date": "2026-10-05",
    "week": 10,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Green Tea",
    "format": "Face-to-camera or hands-only Reel",
    "instagramFacebookCaption": "Green tea is not fragile glass, waiting for one wrong degree so it can punish you. It is giving feedback.",
    "xCaption": "Green tea is not waiting to punish you. Start around 2.5 g / 250 mL / 80°C / 90 sec, then follow the leaf. Thin? Add time. Sharp? Shorten or cool.",
    "cta": "Brew the baseline and tell us the one adjustment your leaf requested.",
    "imageBrief": "Calm demonstration with scale, cooling water, basket, timer, and taste response. Overlay the starting recipe, clearly labeled “starting point.”",
    "altText": "A simple green-tea brew uses a scale, 80-degree water, and a 90-second timer.",
    "sourceLinks": [
      {
        "label": "Steeping-conditions study",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26017324/"
      },
      {
        "label": "NCCIH tea overview",
        "url": "https://www.nccih.nih.gov/health/tea"
      }
    ],
    "crosslink": "/journal/green-tea-without-fear",
    "status": "staged"
  },
  {
    "id": "S20",
    "title": "When water hides the tea",
    "date": "2026-10-08",
    "week": 10,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Green Tea",
    "format": "Troubleshooting carousel",
    "instagramFacebookCaption": "Your trusted green tea tastes dull. Before blaming the leaf, inspect the water. High mineral content and pH can change color, aroma, and taste. Surface film, muted fragrance, or unexpected darkness may be a water clue.",
    "xCaption": "Dull green tea may be a water problem. Compare tap, filtered, and moderate-mineral water with every other variable fixed. The goal is compatibility, not zero minerals.",
    "cta": "Save the three-water diagnostic.",
    "imageBrief": "Slide 1 dull versus bright cups; slides 2–4 show water labels, surface film detail, and controlled comparison; final slide gives the test.",
    "altText": "A troubleshooting sequence compares green tea brewed with three different waters.",
    "sourceLinks": [
      {
        "label": "Brewing-water study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/"
      }
    ],
    "crosslink": "/journal/green-tea-without-fear",
    "status": "staged"
  },
  {
    "id": "S21",
    "title": "Cold brew is not caffeine-free",
    "date": "2026-10-12",
    "week": 11,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Green Tea / Safety",
    "format": "Refrigerated cold-brew recipe Reel",
    "instagramFacebookCaption": "For a gentle cold brew, start with 5–8 g of green tea per liter of cold potable water. Cover and refrigerate for 6–10 hours, strain, and keep cold. Adjust the next batch by taste.",
    "xCaption": "Cold brew: 5–8 g tea / 1 L cold water / 6–10 hours refrigerated, then strain. It is not caffeine-free; long contact still extracts caffeine. Brew for flavor, not as a caffeine loophole.",
    "cta": "Make one refrigerated batch and label the start and strain times.",
    "imageBrief": "Clean jar in refrigerator, weighed leaf, potable water, time label, final strain. Do not show room-temperature overnight steeping.",
    "altText": "Green tea cold-brews in a covered jar in the refrigerator before straining.",
    "sourceLinks": [
      {
        "label": "Caffeine variability in brewed tea",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19007524/"
      },
      {
        "label": "FDA caffeine guidance",
        "url": "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much"
      }
    ],
    "crosslink": "/journal/green-tea-without-fear",
    "status": "staged"
  },
  {
    "id": "S22",
    "title": "Raw and ripe pu-erh",
    "date": "2026-10-15",
    "week": 11,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Pu-erh",
    "format": "Two-path carousel",
    "instagramFacebookCaption": "Raw pu-erh and ripe pu-erh are not young and old versions of the same process.",
    "xCaption": "Raw pu-erh does not become ripe with age. Raw transforms gradually in storage; ripe adds managed pile fermentation. Two processing paths, not youth and maturity.",
    "cta": "Swipe for the two paths, then sample one of each side by side.",
    "imageBrief": "Parallel process diagram using real leaf and cup photos: raw path with sun-dried leaf/storage; ripe path with clearly labeled managed pile fermentation. Avoid unsanitary imagery.",
    "altText": "A diagram compares the processing paths and liquor colors of raw and ripe pu-erh.",
    "sourceLinks": [
      {
        "label": "Pu-erh microbiome study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4918958/"
      },
      {
        "label": "2026 pu-erh aging study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13000720/"
      }
    ],
    "crosslink": "/journal/pu-erh-raw-ripe-age-provenance",
    "status": "staged"
  },
  {
    "id": "S25",
    "title": "Tea’s five everyday enemies",
    "date": "2026-10-26",
    "week": 13,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Storage",
    "format": "6-slide carousel",
    "instagramFacebookCaption": "Tea’s everyday enemies are ordinary: **heat, moisture, oxygen, light, and odor.**",
    "xCaption": "Tea’s five everyday enemies: heat, moisture, oxygen, light, odor. Inner barrier + opaque container + cool clean cupboard. Good storage prevents the room from making tea worse.",
    "cta": "Audit one shelf today.",
    "imageBrief": "Each threat gets one visual: stove heat, steam droplet, open pouch, sunlit glass, spice jar; final slide shows the protected system.",
    "altText": "Five panels show heat, moisture, oxygen, light, and odor threatening stored tea.",
    "sourceLinks": [
      {
        "label": "Tea aroma review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/"
      },
      {
        "label": "Black-tea storage review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743253/"
      }
    ],
    "crosslink": "/journal/home-tea-storage",
    "status": "staged"
  },
  {
    "id": "S26",
    "title": "Refrigerate without condensation",
    "date": "2026-10-29",
    "week": 13,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Storage",
    "format": "20-second how-to Reel",
    "instagramFacebookCaption": "Refrigeration can help some unopened, factory-sealed fresh teas—but the refrigerator also holds moisture and odor.",
    "xCaption": "Refrigerating fresh tea? Keep it odor-proof and sealed. Let the closed package reach room temperature before opening, so humid air does not condense on cold leaf.",
    "cta": "Label the opened date and split a bulk package before repeated use.",
    "imageBrief": "Sealed package leaves fridge, timer shows warm-up, then package opens at room temperature. Include a close-up of condensation on a separate cold glass—not on tea.",
    "altText": "A sealed tea package warms to room temperature before being opened after refrigeration.",
    "sourceLinks": [
      {
        "label": "Longjing storage study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11698971/"
      },
      {
        "label": "Tea aroma review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/"
      }
    ],
    "crosslink": "/journal/home-tea-storage",
    "status": "staged"
  },
  {
    "id": "S27",
    "title": "The five-minute cupboard reset",
    "date": "2026-10-31",
    "week": 13,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Storage / Community Prompt",
    "format": "Before-and-after still + checklist",
    "instagramFacebookCaption": "Monthly tea reset:",
    "xCaption": "Five-minute tea reset: close, inspect, rotate, label, finish. Fuzzy growth, damp clumps, or persistent mold? Don’t drink it. Price is never a reason to take the risk.",
    "cta": "Post your before-and-after shelf with #BeingTeaReset.",
    "imageBrief": "Attainable household cupboard before/after; no disposal pile dramatics. Labels show tea, purchase date, and opened date in editable text.",
    "altText": "A cluttered tea shelf becomes an organized cupboard with closed, dated packages.",
    "sourceLinks": [
      {
        "label": "Black-tea storage review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743253/"
      },
      {
        "label": "Humidity and dark-tea study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10534245/"
      }
    ],
    "crosslink": "/journal/home-tea-storage",
    "status": "staged"
  },
  {
    "id": "S28",
    "title": "The first useful tea kit",
    "date": "2026-11-02",
    "week": 14,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Teaware",
    "format": "Minimal-kit carousel",
    "instagramFacebookCaption": "Your first useful kit can be six things: a safe kettle, gram scale, roomy basket or small porcelain gaiwan, one cup you enjoy holding, a small pitcher if you share, and a towel or notebook.",
    "xCaption": "First useful tea kit: kettle, scale, basket or porcelain gaiwan, cup, optional pitcher, towel/notebook. Add an object when you can name the problem it solves.",
    "cta": "Save the starter kit before shopping.",
    "imageBrief": "Six objects on a simple green cloth, numbered with editable overlays. Choose accessible, unbranded tools—not luxury antiques.",
    "altText": "A kettle, scale, basket infuser, cup, pitcher, towel, and notebook form a simple tea kit.",
    "sourceLinks": [
      {
        "label": "Met — Japanese Tea Ceremony",
        "url": "https://www.metmuseum.org/pt/essays/the-japanese-tea-ceremony"
      },
      {
        "label": "British Museum — Yixing",
        "url": "https://www.britishmuseum.org/collection/object/A_Franks-2459"
      }
    ],
    "crosslink": "/journal/teaware-field-guide",
    "status": "staged"
  },
  {
    "id": "S29",
    "title": "What a cup changes",
    "date": "2026-11-05",
    "week": 14,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Teaware",
    "format": "Three-cup sensory comparison",
    "instagramFacebookCaption": "Use the same tea in three cups: thin porcelain, thick stoneware, and glass. Compare lip feel, cooling speed, aroma opening, weight, and how the color reads.",
    "xCaption": "Same tea, three cups: thin porcelain, thick stoneware, glass. Compare cooling, aroma, lip feel, weight, color. Teaware is sensory design you can hold.",
    "cta": "Run the three-cup test with what you already own.",
    "imageBrief": "Identical volume poured into three clearly different cup materials; thermometer readings and cooling times added as measured overlays, not invented.",
    "altText": "The same tea sits in thin porcelain, thick stoneware, and glass cups for comparison.",
    "sourceLinks": [
      {
        "label": "Met — Teabowl record",
        "url": "https://www.metmuseum.org/art/collection/search/48115"
      },
      {
        "label": "Kyoto National Museum — Tenmoku",
        "url": "https://www.kyohaku.go.jp/eng/learn/home/dictio/touji/tenmoku/"
      }
    ],
    "crosslink": "/journal/teaware-field-guide",
    "status": "staged"
  },
  {
    "id": "S30",
    "title": "Tea pet, pitcher, pick: what do they do?",
    "date": "2026-11-09",
    "week": 15,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Teaware / Trinkets",
    "format": "Object-label Reel",
    "instagramFacebookCaption": "A fairness pitcher evens the infusion among cups. A tea pick separates compressed leaf—always point it away from your hand. A strainer catches particles. A towel handles drips. A tea pet brings companionship and play to some contemporary gongfu tables.",
    "xCaption": "Pitcher: even the pour. Pick: open compressed leaf safely. Strainer: catch particles. Towel: drips. Tea pet: table companionship. Useful, optional, joyful—none proves seriousness.",
    "cta": "Name the small tool that genuinely improved your sessions.",
    "imageBrief": "Macro object portraits with hands demonstrating each real function. Never aim the tea pick toward the palm. Do not claim a single ancient origin for tea pets.",
    "altText": "A pitcher, tea pick, strainer, towel, and small clay tea pet are shown in use.",
    "sourceLinks": [
      {
        "label": "British Museum — Yixing ware",
        "url": "https://www.britishmuseum.org/collection/object/A_Franks-2459"
      },
      {
        "label": "Met — Japanese Tea Ceremony",
        "url": "https://www.metmuseum.org/pt/essays/the-japanese-tea-ceremony"
      }
    ],
    "crosslink": "/journal/teaware-field-guide",
    "status": "staged"
  },
  {
    "id": "S31",
    "title": "There is no single tea ceremony",
    "date": "2026-11-12",
    "week": 15,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Tea Culture",
    "format": "Three-tradition carousel",
    "instagramFacebookCaption": "There is no single global “tea ceremony.” Japanese chanoyu, Chinese regional tea practices, Korean traditions, Tibetan butter tea, Moroccan mint tea, and the hospitality of Azerbaijan and Türkiye carry different histories, people, tools, and meanings.",
    "xCaption": "There is no single global tea ceremony. Name the tradition, place, people, and source. Specificity lets each practice arrive with its history intact.",
    "cta": "Read the cultural guide and follow one primary source linked there.",
    "imageBrief": "Three clearly separated, captioned services—chanoyu tools, Chinese steeped-tea tools, Turkish/Azerbaijani tea glass—never blended into one composite ritual.",
    "altText": "Three distinct tea-service traditions are presented separately with their own utensils.",
    "sourceLinks": [
      {
        "label": "UNESCO Çay culture",
        "url": "https://ich.unesco.org/en/RL/culture-of-cay-tea-a-symbol-of-identity-hospitality-and-social-interaction-01685?RL=01685"
      },
      {
        "label": "Met chanoyu essay",
        "url": "https://www.metmuseum.org/pt/essays/the-japanese-tea-ceremony"
      },
      {
        "label": "UNESCO China tea practices",
        "url": "https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884"
      }
    ],
    "crosslink": "/journal/tea-ceremony-hospitality-and-respect",
    "status": "staged"
  },
  {
    "id": "S32",
    "title": "A personal tea pause",
    "date": "2026-11-16",
    "week": 16,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Mindful Tea",
    "format": "Quiet guided Reel",
    "instagramFacebookCaption": "Clear one small space. Put the phone away for one infusion. Notice the dry leaf and water. Brew without rushing. Offer the first complete cup to your guest. Drink in quiet for three breaths. Share only what you actually notice.",
    "xCaption": "One tea pause: clear space, put down the phone, notice leaf and water, brew, take three quiet breaths, share what you actually notice. Inspired by personal experience at Deer Park; independent and unaffiliated.",
    "cta": "Try one phone-free infusion today.",
    "imageBrief": "Unhurried hands clear a small table, set one pot and two cups, silence phone, pour, rest. No monastery property, robes, religious iconography, or implied endorsement.",
    "altText": "Two people share a quiet cup at a simple table with a phone put away.",
    "sourceLinks": [
      {
        "label": "Deer Park About Us",
        "url": "https://deerparkmonastery.org/about-us/"
      },
      {
        "label": "Deer Park tea meditation",
        "url": "https://wp.deerparkmonastery.org/be-mindful-in-daily-life/"
      }
    ],
    "crosslink": "/journal/tea-ceremony-hospitality-and-respect",
    "status": "staged"
  },
  {
    "id": "S33",
    "title": "Hospitality before performance",
    "date": "2026-11-19",
    "week": 16,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Tea Culture / Hosting",
    "format": "Host checklist still",
    "instagramFacebookCaption": "Before presenting the perfect tray, ask the guest: Do you want caffeine? How strong do you enjoy tea? Any allergies to the accompaniments? Quiet or conversation?",
    "xCaption": "Hospitality before performance: caffeine? preferred strength? allergies? quiet or conversation? The respectful host does not trap a guest inside a ritual they did not request.",
    "cta": "Save the four guest questions for your next shared pot.",
    "imageBrief": "Warm two-person table with one host offering choices: caffeinated tea, tisane, strength, accompaniments. Use editable checklist text and inclusive hands.",
    "altText": "A host offers a guest choices about tea, strength, food, and conversation.",
    "sourceLinks": [
      {
        "label": "UNESCO Çay culture",
        "url": "https://ich.unesco.org/en/RL/culture-of-cay-tea-a-symbol-of-identity-hospitality-and-social-interaction-01685?RL=01685"
      },
      {
        "label": "Deer Park tea meditation",
        "url": "https://wp.deerparkmonastery.org/be-mindful-in-daily-life/"
      }
    ],
    "crosslink": "/journal/tea-ceremony-hospitality-and-respect",
    "status": "staged"
  },
  {
    "id": "S34",
    "title": "“Tea drunk” is a report, not a mechanism",
    "date": "2026-11-23",
    "week": 17,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Tea & Body",
    "format": "Myth/context carousel",
    "instagramFacebookCaption": "“Tea drunk” is a community phrase for a noticeable subjective state during or after tea: bright, calm, warm, floaty, social, focused, or intense. The feeling can be real to the drinker without proving one universal mechanism.",
    "xCaption": "“Tea drunk” can name a real subjective experience without proving one mechanism. Describe what you felt; stay modest about why.",
    "cta": "Read the evidence-aware guide before your next long session.",
    "imageBrief": "Calm session journal with sensory words orbiting cups; no drunkenness, psychedelic imagery, medical diagrams, or claims of altered consciousness.",
    "altText": "A tea-session notebook records warmth, focus, aroma, and other subjective sensations.",
    "sourceLinks": [
      {
        "label": "NCCIH Tea",
        "url": "https://www.nccih.nih.gov/health/tea"
      },
      {
        "label": "L-theanine/caffeine systematic review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12422004/"
      }
    ],
    "crosslink": "/journal/tea-drunk-caffeine-and-clearer-language",
    "status": "staged"
  },
  {
    "id": "S35",
    "title": "Dilution does not erase caffeine",
    "date": "2026-11-26",
    "week": 17,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Tea & Body / Safety",
    "format": "Simple volume animation",
    "instagramFacebookCaption": "If a pot already contains caffeine, adding water lowers the concentration per sip. It does not remove the caffeine already extracted. Drink the whole diluted pot and the extracted total is still there.",
    "xCaption": "Adding water lowers caffeine concentration per sip; it does not remove the caffeine already extracted. Dilute for flavor and pacing—not as permission for unlimited intake.",
    "cta": "Share this correction without shaming the person who taught you the myth.",
    "imageBrief": "Animated dots represent a fixed extracted caffeine total as the same pot is diluted into more volume. Label as conceptual, not a dose calculation.",
    "altText": "The same number of caffeine symbols spreads through a larger water volume after dilution.",
    "sourceLinks": [
      {
        "label": "FDA caffeine guidance",
        "url": "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much"
      },
      {
        "label": "Caffeine in brewed tea study",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19007524/"
      }
    ],
    "crosslink": "/journal/tea-drunk-caffeine-and-clearer-language",
    "status": "staged"
  },
  {
    "id": "S36",
    "title": "The future shop promise",
    "date": "2026-11-30",
    "week": 18,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Future Shop / Trust",
    "format": "Founder pledge carousel",
    "instagramFacebookCaption": "Before Being Tea Co. sells a leaf, cup, sticker, or tool, here is the promise:",
    "xCaption": "Our future-shop promise: separate fact, tradition, experience, and marketing; no guaranteed “tea drunk”; no caffeine loopholes; clear affiliate disclosure; no praise without trying; evidence when age drives price.",
    "cta": "Join the list to review our sourcing and affiliate standards before launch.",
    "imageBrief": "Six pledge cards around the Being Tea Co. wordmark; restrained gold seal, deep green paper, tactile sticker mockup and tea tin in background. Do not imply products already exist.",
    "altText": "Six cards state Being Tea Co.’s promises for transparent product and affiliate recommendations.",
    "sourceLinks": [
      {
        "label": "FTC Disclosures 101",
        "url": "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers"
      },
      {
        "label": "FDA caffeine guidance",
        "url": "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much"
      },
      {
        "label": "NCCIH Tea",
        "url": "https://www.nccih.nih.gov/health/tea"
      }
    ],
    "crosslink": "/journal/tea-drunk-caffeine-and-clearer-language",
    "status": "staged"
  },
  {
    "id": "S23",
    "title": "Eight questions for an old cake",
    "date": "2026-10-19",
    "week": 12,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Pu-erh",
    "format": "Collector-claims checklist",
    "instagramFacebookCaption": "Before buying an “old” cake, ask:",
    "xCaption": "Old-cake checklist: year, maker, process, region/material, custody, storage, evidence, sample. Age creates rarity—not automatic authenticity or pleasure.",
    "cta": "Screenshot before your next aged-tea purchase.",
    "imageBrief": "Unbranded cake, wrapper, custody timeline, storage icons, and sample envelope. All names generic; no fabricated vintage marks.",
    "altText": "Eight questions surround an aged tea cake and a small sample packet.",
    "sourceLinks": [
      {
        "label": "Pu-erh aging study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13000720/"
      },
      {
        "label": "UNESCO Jingmai",
        "url": "https://whc.unesco.org/en/list/1665"
      }
    ],
    "crosslink": "/journal/pu-erh-raw-ripe-age-provenance",
    "status": "staged"
  },
  {
    "id": "S24",
    "title": "Jingmai: landscape before luxury",
    "date": "2026-10-22",
    "week": 12,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Pu-erh / Culture",
    "format": "Sourced landscape feature",
    "instagramFacebookCaption": "The old tea forests of Jingmai Mountain are not an “ancient tree” aesthetic. UNESCO describes a living landscape developed for more than a thousand years by Blang and Dai communities: tea groves, forests, villages, traditional governance, cultivation knowledge, ceremony, and biodiversity held together.",
    "xCaption": "Jingmai is not an “ancient tree” aesthetic. UNESCO recognizes a living landscape sustained by Blang and Dai communities, integrating tea groves, forests, villages, governance, belief, and biodiversity.",
    "cta": "Read UNESCO’s account, then the Being Tea Co. pu-erh guide.",
    "imageBrief": "Use a properly licensed real Jingmai landscape photo with creator/rights credit, not generated approximation. Add a map and community names in the caption, not decorative script.",
    "altText": "Old tea groves grow beneath taller forest trees in the Jingmai Mountain cultural landscape.",
    "sourceLinks": [
      {
        "label": "UNESCO World Heritage Centre — Jingmai",
        "url": "https://whc.unesco.org/en/list/1665"
      }
    ],
    "crosslink": "/journal/pu-erh-raw-ripe-age-provenance",
    "status": "staged"
  },
  {
    "id": "S11",
    "title": "The five-part value test",
    "date": "2026-09-07",
    "week": 6,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Tea Quality",
    "format": "Saveable checklist carousel",
    "instagramFacebookCaption": "Before calling a tea “worth it,” test five things:",
    "xCaption": "Tea value test: clarity, condition, craft, cup, cost per session. Price may reflect labor, rarity, storage, and skill—or packaging and myth. Ask what the money buys.",
    "cta": "Save the checklist for your next tea order.",
    "imageBrief": "Five tactile editorial stills: label/provenance card, sealed package, processed leaf, brewed cup, session-cost calculation. Minimal large type.",
    "altText": "Five panels represent product clarity, condition, craft, cup quality, and session cost.",
    "sourceLinks": [
      {
        "label": "FAO tea livelihoods",
        "url": "https://www.fao.org/international-tea-day/home/international-tea-day-2025/en"
      },
      {
        "label": "Tea-bag infusion study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5502043/"
      }
    ],
    "crosslink": "/journal/tea-quality-ladder-bagged-loose-aged",
    "status": "staged"
  },
  {
    "id": "S12",
    "title": "Before you buy “generational”",
    "date": "2026-09-10",
    "week": 6,
    "platforms": [
      "Instagram",
      "Facebook",
      "X"
    ],
    "pillar": "Buying Aged Tea",
    "format": "Red-flag / green-question carousel",
    "instagramFacebookCaption": "“Generational.” “Ancient.” “Collector grade.” Beautiful words are not custody records. Before paying an age premium, ask for production year, maker, raw or ripe process, claimed origin, wrapper history, storage climate, seller tasting notes, and a sample.",
    "xCaption": "Before paying for “generational” tea, ask: year, maker, process, origin evidence, custody, storage, batch tasting, sample. Beautiful words are not provenance.",
    "cta": "Screenshot the eight questions before shopping aged tea.",
    "imageBrief": "Archive-style wrapper and blank provenance record; red flags on unsupported marketing terms, green checks on evidence fields. No invented seals or fake Chinese text.",
    "altText": "A checklist separates aged-tea marketing language from evidence about date, maker, custody, and storage.",
    "sourceLinks": [
      {
        "label": "Pu-erh aging study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13000720/"
      },
      {
        "label": "Pu-erh microbiome study",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4918958/"
      }
    ],
    "crosslink": "/journal/tea-quality-ladder-bagged-loose-aged",
    "status": "staged"
  }
] satisfies SocialPost[];
