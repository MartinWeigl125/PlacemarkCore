import bcrypt from "bcrypt";

export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: await bcrypt.hash("secret", 10)
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: await bcrypt.hash("secret", 10)
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: await bcrypt.hash("secret", 10)
    },
    lisa: {
      firstName: "Lisa",
      lastName: "Simpson",
      email: "lisa@simpson.com",
      password: await bcrypt.hash("secret", 10)
    },
    ned: {
      firstName: "Ned",
      lastName: "Flanders",
      email: "ned@flanders.com",
      password: await bcrypt.hash("secret", 10)
    },
    barney: {
      firstName: "Barney",
      lastName: "Gumble",
      email: "barney@gumble.com",
      password: await bcrypt.hash("secret", 10)
    },
    krusty: {
      firstName: "Krusty",
      lastName: "the Clown",
      email: "krusty@theclown.com",
      password: await bcrypt.hash("secret", 10)
    },
    lenny: {
      firstName: "Lenny",
      lastName: "Leonard",
      email: "lenny@leonard.com",
      password: await bcrypt.hash("secret", 10)
    },
    rod: {
      firstName: "Rod",
      lastName: "Flanders",
      email: "rod@flanders.com",
      password: await bcrypt.hash("secret", 10)
    },
    todd: {
      firstName: "Todd",
      lastName: "Flanders",
      email: "todd@flanders.com",
      password: await bcrypt.hash("secret", 10)
    },
    admin: {
      firstName: "Placemark",
      lastName: "Admin",
      email: "admin@placemark.com",
      password: await bcrypt.hash("very_secret", 10)
    }
  },
  categories: {
    _model: "Category",
    huge: {
      name: "Capacity more than 70,000",
    },
    big: {
      name: "Capacity 50,000-70,000",
    },
    medium: {
      name: "Capacity 30,000-49,999",
    },
    small: {
      name: "Capacity 10,000-29,999",
    },
    tiny: {
      name: "Capacity less than 10,000",
    },
    Private: {
      name: "Private Points of Interest",
      img: "http://res.cloudinary.com/dlhqnloeh/image/upload/v1763360479/yvyhlpap3wuyamutp8jp.png"
    }
  },
  pois: { // names, descriptions, some coordinates are from ChatGPT, some coordinates were registered manually
    _model: "Poi",
    building_1: {
      name: "WWK Arena",
      description: "WWK Arena in Augsburg is the modern home of FC Augsburg since 2009. The compact, fan-friendly stadium sits close to the city and was built to provide good sightlines and a lively matchday atmosphere. It hosts Bundesliga matches and club events and is notable for its clean, contemporary architecture and accessible location.",
      latitude: 48.32306,
      longitude: 10.88611,
      categoryid: "->categories.medium"
    },
    building_2: {
      name: "Stadion An der Alten Försterei",
      description: "Stadion An der Alten Försterei is the historic, intimate ground of 1. FC Union Berlin. Famous for its wooden roofed stands and fan-driven culture, the stadium sits in a wooded area of Köpenick and delivers one of Germany's most authentic, close-up football atmospheres. It has been carefully modernised while keeping its traditional character.",
      latitude: 52.457391,
      longitude: 13.568124,
      categoryid: "->categories.small"
    },
    building_3: {
      name: "Weserstadion",
      description: "Weserstadion in Bremen is the long-standing home of Werder Bremen, sitting on the north bank of the Weser River. The stadium combines historic charm with modern facilities following renovations and is known for its picturesque riverside setting, passionate fans, and a lively matchday atmosphere reflecting the city's footballing heritage.",
      latitude: 53.066803,
      longitude: 8.837929,
      categoryid: "->categories.medium"
    },
    building_4: {
      name: "Signal Iduna Park",
      description: "Signal Iduna Park (formerly Westfalenstadion) in Dortmund is Germany's largest football stadium and the spiritual home of Borussia Dortmund. Famous for the 'Yellow Wall' — the massive Südtribüne — it creates one of Europe's most intimidating and electric atmospheres. The ground is a modern icon of German football with deep cultural significance.",
      latitude: 51.492589,
      longitude: 7.451857,
      categoryid: "->categories.huge"
    },
    building_5: {
      name: "Deutsche Bank Park",
      description: "Deutsche Bank Park in Frankfurt (formerly Waldstadion) is Eintracht Frankfurt's traditional ground, set in a leafy park area. The stadium blends modern amenities with a historic site and hosts Bundesliga and occasional international fixtures. It is known for passionate supporters and a versatile complex that stage national and European matches.",
      latitude: 50.068056,
      longitude: 8.645806,
      categoryid: "->categories.big"
    },
    building_6: {
      name: "Europa-Park Stadion",
      description: "Europa-Park Stadion in Freiburg is SC Freiburg's modern, compact stadium opened in the early 2020s. Built to deliver an intimate fan experience, it features clean lines, good sightlines and contemporary facilities while respecting Freiburg's local scale. The venue quickly became known for its sustainable design choices and close proximity between fans and pitch.",
      latitude: 48.02154,
      longitude: 7.83001,
      categoryid: "->categories.medium"
    },
    building_7: {
      name: "Volksparkstadion",
      description: "Volksparkstadion in Hamburg is a large, multi-purpose arena and the historic home of Hamburger SV. The venue has hosted national and international fixtures and combines modern stands with infrastructure rebuilt over decades. Its central location and capacity make it one of Germany's major stadiums with a strong matchday identity.",
      latitude: 53.5856,
      longitude: 9.8925,
      categoryid: "->categories.big"
    },
    building_8: {
      name: "Voith-Arena",
      description: "Voith-Arena in Heidenheim is a compact, well-appointed stadium that serves 1. FC Heidenheim. The ground was expanded in recent years to meet Bundesliga requirements and offers a close, intense viewing experience where supporters are close to the action. Locals praise the stadium's atmosphere and tidy, community-oriented setting.",
      latitude: 48.668448,
      longitude: 10.139286,
      categoryid: "->categories.small"
    },
    building_9: {
      name: "PreZero Arena",
      description: "PreZero Arena (also known as Rhein-Neckar-Arena) in Sinsheim is the sleek home of TSG Hoffenheim. Opened in 2009, the stadium is lauded for its modern architecture, good sightlines and enjoyable matchday experience. Its compact footprint and modern facilities make it well-suited to league fixtures and regional events.",
      latitude: 49.238014,
      longitude: 8.887657,
      categoryid: "->categories.medium"
    },
    building_10: {
      name: "RheinEnergieStadion",
      description: "RheinEnergieStadion in Cologne is an established stadium serving 1. FC Köln. With a history stretching back decades and extensive renovations, it combines a strong local footballing tradition with modern facilities. The arena hosts Bundesliga fixtures, cup ties and has been used for international matches in the past.",
      latitude: 50.933461,
      longitude: 6.875155,
      categoryid: "->categories.medium"
    },
    building_11: {
      name: "Red Bull Arena",
      description: "Red Bull Arena in Leipzig is RB Leipzig's home ground, built on a historic site and redeveloped into a contemporary stadium. It offers a modern fan experience with good sightlines and strong acoustics. The arena regularly stages Bundesliga and European matches and is a prominent sports landmark in eastern Germany.",
      latitude: 51.345556,
      longitude: 12.348333,
      categoryid: "->categories.medium"
    },
    building_12: {
      name: "BayArena",
      description: "BayArena in Leverkusen is the long-time home of Bayer Leverkusen and notable for its close-to-pitch stands and compact bowl design. The stadium has been modernised incrementally to create a friendly yet passionate environment for matchdays and is considered one of the better mid-sized venues in Germany.",
      latitude: 51.036286,
      longitude: 7.001322,
      categoryid: "->categories.medium"
    },
    building_13: {
      name: "Mewa Arena",
      description: "Mewa Arena in Mainz is a modern stadium that hosts 1. FSV Mainz 05. Opened in the 2010s, it replaced older facilities and provides contemporary spectator amenities, corporate areas and a compact matchday bowl. It is well integrated into Mainz's urban fabric and known for a spirited local atmosphere.",
      latitude: 49.983668,
      longitude: 8.224641,
      categoryid: "->categories.medium"
    },
    building_14: {
      name: "Borussia-Park",
      description: "Borussia-Park in Mönchengladbach is the purpose-built home of Borussia Mönchengladbach. Opened in 2004, the stadium offers modern facilities and a strong crowd atmosphere with well-defined stands. The venue balances capacity and intimacy, delivering consistent acoustics and a clear matchday identity for supporters.",
      latitude: 51.171417,
      longitude: 6.384611,
      categoryid: "->categories.big"
    },
    building_15: {
      name: "Allianz Arena",
      description: "Allianz Arena in Munich is one of Europe's most iconic stadiums, home to Bayern Munich. Famous for its illuminated exterior panels and high-capacity bowl, the arena provides world-class facilities for domestic and international fixtures. Its scale and modernity make it a landmark of German and global football.",
      latitude: 48.217979,
      longitude: 11.623746,
      img: [
        "https://res.cloudinary.com/dlhqnloeh/image/upload/v1766134763/vvzst8hfbiu9mddsneoo.jpg",
        "https://res.cloudinary.com/dlhqnloeh/image/upload/v1766134960/zbuujbdv552dfo3s3yvb.jpg",
      ],
      categoryid: "->categories.huge"
    },
    building_16: {
      name: "Millerntor-Stadion",
      description: "Millerntor-Stadion is the compact, passionate home of FC St. Pauli in Hamburg. Located near the famous Reeperbahn, the venue is steeped in countercultural fan traditions and known for a vibrant, politically engaged supporter scene. Its intimate stands make for an intense matchday experience close to the action.",
      latitude: 53.552664,
      longitude: 9.967331,
      categoryid: "->categories.small"
    },
    building_17: {
      name: "MHPArena",
      description: "MHPArena (Neckarstadion) in Stuttgart is VfB Stuttgart's major stadium, with a long history and several renovations that have modernised its facilities. The arena has hosted World Cup and European Championship matches in the past and remains a central sporting venue for the region, offering a vibrant atmosphere on matchdays.",
      latitude: 48.792258,
      longitude: 9.232080,
      categoryid: "->categories.big"
    },
    building_18: {
      name: "Volkswagen Arena",
      description: "Volkswagen Arena in Wolfsburg is the home of VfL Wolfsburg, located within the Allerpark complex. The stadium is compact and modern, offering close sightlines and comfortable facilities. It is frequently used for Bundesliga matches and regional sporting events and is integrated into a larger leisure area.",
      latitude: 52.425275,
      longitude: 10.802331,
      categoryid: "->categories.small"
    },
    building_19: {
      name: "Olympiastadion",
      description: "The Olympiastadion in Berlin is a historic multi-purpose arena originally built for the 1936 Olympic Games and thoroughly modernised for major international events. It is Hertha BSC’s home for league matches and also hosts national team fixtures and large concerts. The stadium combines deep historical significance with modern amenities and a large bowl suited to big attendances and high-profile fixtures.",
      latitude: 52.514684,
      longitude: 13.239367,
      categoryid: "->categories.huge"
    },

    building_20: {
      name: "Veltins-Arena",
      description: "The Veltins-Arena is Schalke 04’s retractable-roof stadium, well known for its close, modern stands and frequent hosting of major domestic and international fixtures and concerts. Its flexible infrastructure (retractable pitch roof, high capacity) creates an intense atmosphere; matchdays combine modern fan facilities with the club’s passionate support and elaborate pre-match traditions.",
      latitude: 51.552700,
      longitude: 7.066110,
      categoryid: "->categories.big"
    },

    building_21: {
      name: "Merkur Spiel-Arena",
      description: "The Merkur Spiel-Arena is Fortuna Düsseldorf’s large, modern venue on the Messe site with very good transport links. It stages football, concerts and events, offering covered seating and modern facilities for spectators. The arena’s capacity and multi-use character make it one of the larger German stadiums used in 2. Bundesliga in 2025/26.",
      latitude: 51.261706,
      longitude: 6.733145,
      categoryid: "->categories.big"
    },

    building_22: {
      name: "Max-Morlock-Stadion",
      description: "The Max-Morlock-Stadion in Nuremberg is a long-standing football ground that mixes traditional stadium character with modern renovations. Home of 1. FC Nürnberg, it hosts league matches and occasional large events; its location near the Dutzendteich and transport nodes makes it accessible for visiting fans, and the arena has a strong local identity built over decades of German football.",
      latitude: 49.426253,
      longitude: 11.125708,
      categoryid: "->categories.medium"
    },

    building_23: {
      name: "Fritz-Walter-Stadion",
      description: "The Fritz-Walter-Stadion sits on the famous 'Betzenberg' and is steeped in football history as 1. FC Kaiserslautern’s iconic home. Named after the club legend Fritz Walter, the venue is famous for its steep terraces, charged atmosphere and passionate local support; modern upgrades keep the facility well suited to national league competition while preserving the site's historic character.",
      latitude: 49.434697,
      longitude: 7.776466,
      categoryid: "->categories.medium"
    },

    building_24: {
      name: "Heinz-von-Heiden-Arena",
      description: "The Heinz-von-Heiden-Arena (also historically known as the Niedersachsenstadion / HDI-Arena) is Hannover 96’s main stadium — a large, modern bowl offering extensive spectator facilities and good transport links. The venue is used for high-attendance league matches, concerts and other events and offers a typical modern German stadium experience with covered stands and strong home support.",
      latitude: 52.360016,
      longitude: 9.731226,
      categoryid: "->categories.medium"
    },

    building_25: {
      name: "BBBank Wildpark",
      description: "The BBBank Wildpark is the home of Karlsruher SC and sits within Karlsruhe’s Wildpark area. It combines a compact, football-centric layout with comfortable spectator amenities and good connections to the city. The stadium has periodically been modernised to improve sightlines and facilities while preserving the green park setting that gives it a pleasant local feel.",
      latitude: 49.020019,
      longitude: 8.413035,
      categoryid: "->categories.medium"
    },

    building_26: {
      name: "Rudolf-Harbig-Stadion",
      description: "Rudolf-Harbig-Stadion is Dynamo Dresden’s home ground with deep local roots and a reputation for lively, committed support. The arena sits close to Dresden’s historic core and offers modern seating and facilities following renovations; its atmosphere and history make it a notable visiting ground within the 2. Bundesliga calendar.",
      latitude: 51.040780,
      longitude: 13.748023,
      categoryid: "->categories.medium"
    },

    building_27: {
      name: "Avnet Arena",
      description: "Avnet Arena (formerly MDCC-Arena) is 1. FC Magdeburg’s modern stadium with a fully covered bowl and facilities suited to domestic and regional events. Opened in the 2000s, the venue replaced the old Ernst-Grube stadium and offers a compact matchday experience with good sightlines and a strong local fan culture.",
      latitude: 52.125095,
      longitude: 11.670785,
      categoryid: "->categories.medium"
    },

    building_28: {
      name: "Eintracht-Stadion",
      description: "The Eintracht-Stadion is Eintracht Braunschweig’s home, combining a modest capacity with a tight, fan-centred environment. The ground is known for its accessible location and intimate stands that keep fans close to the action, creating an engaging atmosphere for league fixtures and local derbies.",
      latitude: 52.290000,
      longitude: 10.518611,
      categoryid: "->categories.small"
    },

    building_29: {
      name: "Merck-Stadion am Böllenfalltor",
      description: "Commonly known as the 'Bölle', Merck-Stadion am Böllenfalltor is SV Darmstadt 98’s traditional ground located close to the city centre. With a compact footprint and passionate local supporters, the stadium has undergone modernisation work but retains an intimate, atmospheric feel — representative of smaller-city German football venues.",
      latitude: 49.854662,
      longitude: 8.669997,
      categoryid: "->categories.small"
    },

    building_30: {
      name: "Waldstadion an der Kaiserlinde",
      description: "Waldstadion an der Kaiserlinde is the home of SV Elversberg — a smaller but well maintained ground in a rural/Saarland setting. The stadium provides essential modern amenities for fans and players while reflecting the club’s community roots; recent years have seen infrastructure improvements to meet professional league requirements.",
      latitude: 49.318817,
      longitude: 7.121712,
      categoryid: "->categories.small"
    },

    building_31: {
      name: "Sportpark Ronhof Thomas Sommer",
      description: "Sportpark Ronhof (sponsored name Thomas Sommer) is SpVgg Greuther Fürth’s traditional stadium close to the old town. It is a compact, football-focussed venue with close spectator proximity to the pitch and a characterful, historic feel; renovations have modernised facilities while preserving intimate matchday sightlines.",
      latitude: 49.487046,
      longitude: 10.999119,
      categoryid: "->categories.small"
    },

    building_32: {
      name: "Holstein-Stadion",
      description: "Holstein-Stadion is Holstein Kiel’s home ground, located in the northern port city and historically known for its compact design and strong local support. Discussions and plans for phased redevelopment have been in the public sphere; for 2025/26 the stadium continued to host Kiel’s home fixtures with typical northern German fan culture.",
      latitude: 54.349134,
      longitude: 10.123650,
      categoryid: "->categories.small"
    },

    building_33: {
      name: "LVM-Preußenstadion",
      description: "LVM-Preußenstadion is SC Preußen Münster’s home venue, a traditional ground undergoing modernisation in recent years. It serves as a comfortable, compact stadium for league fixtures, offering accessible local transport links and a friendly provincial atmosphere typical of a long-established club with passionate local followers.",
      latitude: 51.929835,
      longitude: 7.624570,
      categoryid: "->categories.small"
    },

    building_34: {
      name: "Home Deluxe Arena / Benteler-Arena",
      description: "The Home Deluxe Arena (formerly Benteler-Arena) is SC Paderborn’s modern stadium on the city outskirts, offering contemporary facilities and a compact bowl for fans. Built in the 2000s to replace older grounds, it delivers a comfortable small-stadium experience with good transport links and clear sightlines for visitors.",
      latitude: 51.730782,
      longitude: 8.711065,
      categoryid: "->categories.small"
    },

    building_35: {
      name: "Schüco-Arena",
      description: "The Schüco-Arena, traditionally known as the Bielefelder Alm, is the home stadium of Arminia Bielefeld and one of the classic football venues in North Rhine-Westphalia. Originally opened in 1926 and modernised across decades, it combines historical charm with contemporary facilities. The compact ground sits close to the city centre and is known for close-to-pitch stands and passionate local support during 2. Bundesliga fixtures.",
      latitude: 52.03194,
      longitude: 8.51667,
      categoryid: "->categories.small"
    },

    building_36: {
      name: "Vonovia Ruhrstadion",
      description: "The Vonovia Ruhrstadion, known locally simply as the Ruhrstadion, is VfL Bochum’s traditional home ground with a long history dating back over a century. Renovated in phases, the stadium offers a comfortable matchday experience in the heart of the Ruhr area, with a strong atmosphere and great accessibility. Its location and loyal fan base ensure lively support throughout the 2. Bundesliga season.",
      latitude: 51.489919,
      longitude: 7.236521,
      categoryid: "->categories.small"
    },
    building_37: {
      name: "Tivoli",
      description: "Tivoli in Aachen is a historic football stadium and home to Alemannia Aachen. With a capacity near 33,000, it’s one of the most atmospheric grounds in the 3. Liga. The stadium has hosted numerous memorable matches and offers an engaging fan experience in the west of the city, anchoring local football culture in North Rhine-Westphalia.",
      latitude: 50.7932,
      longitude: 6.0973,
      categoryid: "->categories.medium"
    },
    building_38: {
      name: "Schauinsland-Reisen-Arena",
      description: "Located in Duisburg, the Schauinsland-Reisen-Arena is MSV Duisburg’s home ground. Built originally in the early 20th century and modernized in the 2000s, it holds over 31,000 spectators with a mix of seated and standing areas. It’s famous for its energetic atmosphere and fan culture during league and cup fixtures.",
      latitude: 51.409039,
      longitude: 6.778662,
      categoryid: "->categories.medium"
    },
    building_39: {
      name: "Ostseestadion",
      description: "The Ostseestadion in Rostock is a modern seaside venue hosting Hansa Rostock’s home matches. With nearly 29,000 capacity, it’s one of the larger football arenas in the 3. Liga, known for passionate support and scenic views toward the Baltic region. The stadium regularly attracts strong crowds for key fixtures.",
      latitude: 54.0850,
      longitude: 12.0951,
      categoryid: "->categories.small"
    },
    building_40: {
      name: "Carl-Benz-Stadion",
      description: "Carl-Benz-Stadion in Mannheim is the home of SV Waldhof Mannheim. Named after the automotive pioneer, it offers around 24,000 seats and is deeply rooted in local football tradition. The ground combines historic elements with modern stands, providing a vibrant matchday atmosphere in southern Germany.",
      latitude: 49.4795,
      longitude: 8.5026,
      categoryid: "->categories.small"
    },
    building_41: {
      name: "LEAG Energie Stadion",
      description: "Situated in Cottbus, the LEAG Energie Stadion hosts FC Energie Cottbus fixtures. With a capacity of over 22,000, it’s a key football venue in eastern Germany. The stadium’s design blends functionality with fan experience, and it’s known for an enthusiastic local following.",
      latitude: 51.7516,
      longitude: 14.3455,
      categoryid: "->categories.small"
    },
    building_42: {
      name: "Stadion an der Hafenstraße",
      description: "This Essen stadium is the home of Rot-Weiss Essen, featuring nearly 20,000 capacity and a traditional fan base. The venue has become a focal point of Essen’s sporting culture, hosting spirited 3. Liga fixtures with a lively atmosphere in the Ruhr region.",
      latitude: 51.4868,
      longitude: 6.9765,
      categoryid: "->categories.small"
    },
    building_43: {
      name: "Donaustadion",
      description: "Located in Ulm, the Donaustadion is home to SSV Ulm 1846. With around 17,400 capacity, it stands on the Danube’s edge and mixes a classic football stadium feel with contemporary amenities. The ground is known for its strong local support and community engagement.",
      latitude: 48.4045,
      longitude: 10.0095,
      categoryid: "->categories.small"
    },
    building_44: {
      name: "Ludwigsparkstadion",
      description: "Ludwigsparkstadion in Saarbrücken is the home venue of 1. FC Saarbrücken. With just over 16,000 capacity, it offers an intimate atmosphere with passionate supporters. The stadium underwent modern renovations while maintaining its traditional charm and remains central to Saarland’s football identity. :contentReference[oaicite:1]{index=1}",
      latitude: 49.248108,
      longitude: 6.983954,
      categoryid: "->categories.small"
    },
    building_45: {
      name: "Brita-Arena",
      description: "The Brita-Arena in Wiesbaden hosts SV Wehen Wiesbaden fixtures. With capacity above 12,000, it’s a dedicated football venue that emphasizes fan engagement and a supportive local crowd. Its compact size ensures close viewing and intense matchday energy.",
      latitude: 50.0713,
      longitude: 8.2566,
      categoryid: "->categories.small"
    },
    building_46: {
      name: "Audi-Sportpark",
      description: "Audi-Sportpark in Ingolstadt is the modern home of FC Ingolstadt 04. With around 15,200 capacity, it features contemporary facilities and strong regional support. The venue reflects the club’s aspirations and serves as a key infrastructure for football in Bavaria.",
      latitude: 48.7455,
      longitude: 11.4855,
      categoryid: "->categories.small"
    },
    building_47: {
      name: "WIRmachenDRUCK Arena",
      description: "Based in Aspach, the WIRmachenDRUCK Arena is used by VfB Stuttgart II for 3. Liga matches. With about 10,000 capacity, it offers a compact and intimate setting. Fans enjoy close action and grounded local support on matchdays.",
      latitude: 48.9805,
      longitude: 9.3930,
      categoryid: "->categories.small"
    },
    building_48: {
      name: "Grünwalder Stadion",
      description: "In Munich, Grünwalder Stadion hosts TSV 1860 München. With near 15,000 capacity, this historic ground has seen decades of football history. Its classic design and strong fan culture make it a core venue in Bavarian sport life.",
      latitude: 48.1110,
      longitude: 11.5745,
      categoryid: "->categories.small"
    },
    building_49: {
      name: "Riedel Bau Arena",
      description: "The Riedel Bau Arena in Schweinfurt is home to 1. FC Schweinfurt 05. With around 15,600 capacity, it’s a solid regional stadium combining good viewing conditions and community engagement for fans in northern Bavaria.",
      latitude: 50.0513,
      longitude: 10.2030,
      categoryid: "->categories.small"
    },
    building_50: {
      name: "Sportpark Höhenberg",
      description: "Sportpark Höhenberg in Cologne hosts Viktoria Köln matches. With under 9,000 capacity, it’s a smaller but vibrant venue. The intimate environment highlights a tight fanbase and urban football culture in Cologne.",
      latitude: 50.9452,
      longitude: 7.0305,
      categoryid: "->categories.tiny"
    },
    building_51: {
      name: "Dietmar-Hopp-Stadion",
      description: "Located in Hoffenheim, the Dietmar-Hopp-Stadion is home to TSG 1899 Hoffenheim II. With around 6,350 capacity, it’s a smaller ground focused on development and local fans. The stadium combines grassroots spirit with modern facilities.",
      latitude: 49.2783,
      longitude: 8.8422,
      categoryid: "->categories.tiny"
    },
    building_52: {
      name: "Sportclub Arena",
      description: "Sportclub Arena in Verl is home to SC Verl. With capacity just over 5,200, it’s one of the smallest professional stadiums in the 3. Liga. Its compact layout ensures an intense matchday feel with fans close to the pitch.",
      latitude: 51.8834,
      longitude: 8.5134,
      categoryid: "->categories.tiny"
    },
    building_53: {
      name: "Eilenriedestadion",
      description: "The Eilenriedestadion in Hannover hosts TSV Havelse home games due to 3. Liga standards. With capacity near 5,000, this classic stadium offers grassroots charm and local football culture, despite being used as a temporary home venue.",
      latitude: 52.3766,
      longitude: 9.7730,
      categoryid: "->categories.tiny"
    },
    building_54: {
      name: "Erzgebirgsstadion",
      description: "Erzgebirgsstadion in Aue is the home of FC Erzgebirge Aue. With around 15,500 capacity, it’s a traditional football ground in the Ore Mountains region. The stadium combines historical charm with loyal regional support.",
      latitude: 50.5978,
      longitude: 12.7113,
      categoryid: "->categories.small"
    },
    building_55: {
      name: "Jahnstadion Regensburg",
      description: "Jahnstadion Regensburg in Regensburg is the home of SSV Jahn Regensburg. With around 15,210 capacity, this modern football stadium opened in 2015, offering great facilities and passionate support for the Bavarian club’s league campaigns.",
      latitude: 48.99082,
      longitude: 12.10734,
      img: "http://res.cloudinary.com/dlhqnloeh/image/upload/v1762425742/w5cd3qrhhjtgl1fbueio.jpg",
      categoryid: "->categories.small" 
    },
    building_56: {
      name: "Stadion an der Bremer Brücke",
      description: "Stadion an der Bremer Brücke in Osnabrück serves as the home ground of VfL Osnabrück. With a capacity around 16,100, this historic stadium has hosted VfL matches for nearly a century and is known for its authentic football atmosphere.",
      latitude: 52.2809,
      longitude: 8.0713,
      categoryid: "->categories.small"
    },
    private_poi_1: {
      name: "Homer's private POI",
      description: "This POI is only visible for Homer.",
      latitude: 48.993732,
      longitude: 12.062018,
      categoryid: "->categories.Private",
      userid: "->users.homer", 
    },
    private_poi_2: {
      name: "Bart's private POI",
      description: "This POI is only visible for Bart.",
      latitude: 49.043461,
      longitude: 12.096703,
      categoryid: "->categories.Private",
      userid: "->users.bart", 
    },
  },
  comments: { // comments were generated by ChatGPT
    _model: "Comment",
    comment_1: {
      comment: "Amazing atmosphere on game day.",
      rating: 4,
      userid: "->users.homer",
      poiid: "->pois.building_1"
    },
    comment_2: {
      comment: "Seats were comfortable and views clear.",
      rating: 4,
      userid: "->users.marge",
      poiid: "->pois.building_1"
    },

    comment_3: {
      comment: "Crowd energy made the match unforgettable.",
      rating: 5,
      userid: "->users.bart",
      poiid: "->pois.building_2"
    },
    comment_4: {
      comment: "Lines were long but game was fun.",
      rating: 3,
      userid: "->users.lisa",
      poiid: "->pois.building_2"
    },

    comment_5: {
      comment: "Great stadium sound system.",
      rating: 4,
      userid: "->users.ned",
      poiid: "->pois.building_3"
    },
    comment_6: {
      comment: "Parking was a nightmare.",
      rating: 2,
      userid: "->users.barney",
      poiid: "->pois.building_3"
    },

    comment_7: {
      comment: "Classic football vibes everywhere.",
      rating: 4,
      userid: "->users.krusty",
      poiid: "->pois.building_4"
    },

    comment_8: {
      comment: "Field looked pristine.",
      rating: 5,
      userid: "->users.lenny",
      poiid: "->pois.building_5"
    },
    comment_9: {
      comment: "Concessions were overpriced.",
      rating: 3,
      userid: "->users.rod",
      poiid: "->pois.building_5"
    },

    comment_10: {
      comment: "Good views even from upper levels.",
      rating: 4,
      userid: "->users.todd",
      poiid: "->pois.building_6"
    },

    comment_11: {
      comment: "Average stadium, nothing special.",
      rating: 3,
      userid: "->users.homer",
      poiid: "->pois.building_7"
    },

    comment_12: {
      comment: "Fans were loud and passionate.",
      rating: 4,
      userid: "->users.marge",
      poiid: "->pois.building_8"
    },

    comment_13: {
      comment: "Weather protection could be better.",
      rating: 3,
      userid: "->users.bart",
      poiid: "->pois.building_9"
    },

    comment_14: {
      comment: "Easy entry and exit.",
      rating: 4,
      userid: "->users.lisa",
      poiid: "->pois.building_10"
    },

    comment_15: {
      comment: "Historic stadium feel.",
      rating: 5,
      userid: "->users.ned",
      poiid: "->pois.building_11"
    },

    comment_16: {
      comment: "Bathrooms were surprisingly clean.",
      rating: 4,
      userid: "->users.barney",
      poiid: "->pois.building_12"
    },

    comment_17: {
      comment: "Good family friendly environment.",
      rating: 4,
      userid: "->users.krusty",
      poiid: "->pois.building_13"
    },

    comment_18: {
      comment: "Nothing beats a night game here.",
      rating: 5,
      userid: "->users.lenny",
      poiid: "->pois.building_14"
    },

    comment_19: {
      comment: "Absolutely perfect football stadium.",
      rating: 5,
      userid: "->users.homer",
      poiid: "->pois.building_15"
    },
    comment_20: {
      comment: "Best atmosphere I have ever experienced.",
      rating: 5,
      userid: "->users.marge",
      poiid: "->pois.building_15"
    },
    comment_21: {
      comment: "Incredible design and sightlines.",
      rating: 5,
      userid: "->users.bart",
      poiid: "->pois.building_15"
    },
    comment_22: {
      comment: "Food options were outstanding.",
      rating: 5,
      userid: "->users.lisa",
      poiid: "->pois.building_15"
    },
    comment_23: {
      comment: "A true cathedral of football.",
      rating: 5,
      userid: "->users.ned",
      poiid: "->pois.building_15"
    },

    comment_24: {
      comment: "Decent stadium overall.",
      rating: 3,
      userid: "->users.barney",
      poiid: "->pois.building_16"
    },

    comment_25: {
      comment: "Loved the fan sections.",
      rating: 4,
      userid: "->users.krusty",
      poiid: "->pois.building_17"
    },

    comment_26: {
      comment: "Sound echoed strangely.",
      rating: 2,
      userid: "->users.lenny",
      poiid: "->pois.building_18"
    },

    comment_27: {
      comment: "Security was well organized.",
      rating: 4,
      userid: "->users.rod",
      poiid: "->pois.building_19"
    },

    comment_28: {
      comment: "Seats were cramped.",
      rating: 2,
      userid: "->users.todd",
      poiid: "->pois.building_20"
    },

    comment_29: {
      comment: "Great scoreboard visuals.",
      rating: 4,
      userid: "->users.homer",
      poiid: "->pois.building_21"
    },

    comment_30: {
      comment: "Old but charming stadium.",
      rating: 4,
      userid: "->users.marge",
      poiid: "->pois.building_22"
    },

    comment_31: {
      comment: "Could use renovations.",
      rating: 3,
      userid: "->users.bart",
      poiid: "->pois.building_23"
    },

    comment_32: {
      comment: "Fans made it exciting.",
      rating: 4,
      userid: "->users.lisa",
      poiid: "->pois.building_24"
    },

    comment_33: {
      comment: "Traffic afterwards was terrible.",
      rating: 2,
      userid: "->users.ned",
      poiid: "->pois.building_25"
    },

    comment_34: {
      comment: "Nice architecture for a stadium.",
      rating: 4,
      userid: "->users.barney",
      poiid: "->pois.building_26"
    },

    comment_35: {
      comment: "Great place for big matches.",
      rating: 4,
      userid: "->users.krusty",
      poiid: "->pois.building_27"
    },

    comment_36: {
      comment: "Average concessions.",
      rating: 3,
      userid: "->users.lenny",
      poiid: "->pois.building_28"
    },

    comment_37: {
      comment: "Field conditions were poor.",
      rating: 2,
      userid: "->users.rod",
      poiid: "->pois.building_29"
    },

    comment_38: {
      comment: "Friendly staff everywhere.",
      rating: 4,
      userid: "->users.todd",
      poiid: "->pois.building_30"
    },

    comment_39: {
      comment: "Good local stadium.",
      rating: 3,
      userid: "->users.homer",
      poiid: "->pois.building_31"
    },

    comment_40: {
      comment: "Loved the pregame shows.",
      rating: 4,
      userid: "->users.marge",
      poiid: "->pois.building_32"
    },

    comment_41: {
      comment: "Seats had great legroom.",
      rating: 4,
      userid: "->users.bart",
      poiid: "->pois.building_33"
    },

    comment_42: {
      comment: "Not enough food stands.",
      rating: 3,
      userid: "->users.lisa",
      poiid: "->pois.building_34"
    },

    comment_43: {
      comment: "Solid football experience.",
      rating: 4,
      userid: "->users.ned",
      poiid: "->pois.building_35"
    },

    comment_44: {
      comment: "Lighting was excellent.",
      rating: 4,
      userid: "->users.barney",
      poiid: "->pois.building_36"
    },

    comment_45: {
      comment: "Very loud crowd.",
      rating: 4,
      userid: "->users.krusty",
      poiid: "->pois.building_37"
    },

    comment_46: {
      comment: "Felt outdated.",
      rating: 2,
      userid: "->users.lenny",
      poiid: "->pois.building_38"
    },

    comment_47: {
      comment: "Nice views of the pitch.",
      rating: 4,
      userid: "->users.rod",
      poiid: "->pois.building_39"
    },

    comment_48: {
      comment: "Enjoyed watching derby here.",
      rating: 5,
      userid: "->users.todd",
      poiid: "->pois.building_40"
    },

    comment_49: {
      comment: "Good acoustics for chants.",
      rating: 4,
      userid: "->users.homer",
      poiid: "->pois.building_41"
    },

    comment_50: {
      comment: "Mediocre stadium experience.",
      rating: 3,
      userid: "->users.marge",
      poiid: "->pois.building_42"
    },

    comment_51: {
      comment: "Great energy during finals.",
      rating: 5,
      userid: "->users.bart",
      poiid: "->pois.building_43"
    },

    comment_52: {
      comment: "Needs better signage.",
      rating: 3,
      userid: "->users.lisa",
      poiid: "->pois.building_44"
    },

    comment_53: {
      comment: "Clean and modern.",
      rating: 4,
      userid: "->users.ned",
      poiid: "->pois.building_45"
    },

    comment_54: {
      comment: "Food was disappointing.",
      rating: 2,
      userid: "->users.barney",
      poiid: "->pois.building_46"
    },

    comment_55: {
      comment: "Fantastic home crowd.",
      rating: 5,
      userid: "->users.krusty",
      poiid: "->pois.building_47"
    },

    comment_56: {
      comment: "Average facilities.",
      rating: 3,
      userid: "->users.lenny",
      poiid: "->pois.building_48"
    },

    comment_57: {
      comment: "Good for local matches.",
      rating: 3,
      userid: "->users.rod",
      poiid: "->pois.building_49"
    },

    comment_58: {
      comment: "Atmosphere was electric.",
      rating: 5,
      userid: "->users.todd",
      poiid: "->pois.building_50"
    },

    comment_59: {
      comment: "Comfortable seating.",
      rating: 4,
      userid: "->users.homer",
      poiid: "->pois.building_51"
    },

    comment_60: {
      comment: "Pretty standard stadium.",
      rating: 3,
      userid: "->users.marge",
      poiid: "->pois.building_52"
    },

    comment_61: {
      comment: "Fans were respectful.",
      rating: 4,
      userid: "->users.bart",
      poiid: "->pois.building_53"
    },

    comment_62: {
      comment: "Good pitch quality.",
      rating: 4,
      userid: "->users.lisa",
      poiid: "->pois.building_54"
    },

    comment_63: {
      comment: "Perfect stadium for football lovers.",
      rating: 5,
      userid: "->users.homer",
      poiid: "->pois.building_55"
    },
    comment_64: {
      comment: "Unmatched atmosphere and comfort.",
      rating: 5,
      userid: "->users.marge",
      poiid: "->pois.building_55"
    },
    comment_65: {
      comment: "Best stadium I have visited.",
      rating: 5,
      userid: "->users.bart",
      poiid: "->pois.building_55"
    },
    comment_66: {
      comment: "Everything was top class.",
      rating: 5,
      userid: "->users.lisa",
      poiid: "->pois.building_55"
    },
    comment_67: {
      comment: "World class football experience.",
      rating: 5,
      userid: "->users.ned",
      poiid: "->pois.building_55"
    },

    comment_68: {
      comment: "Nice small stadium.",
      rating: 4,
      userid: "->users.barney",
      poiid: "->pois.building_56"
    },
    comment_69: {
      comment: "Enjoyed the local fans.",
      rating: 4,
      userid: "->users.krusty",
      poiid: "->pois.building_56"
    },

    comment_70: {
      comment: "Decent matchday experience.",
      rating: 3,
      userid: "->users.lenny",
      poiid: "->pois.building_6"
    },
    comment_71: {
      comment: "Good stadium layout.",
      rating: 4,
      userid: "->users.rod",
      poiid: "->pois.building_8"
    },
    comment_72: {
      comment: "Could hear chants clearly.",
      rating: 4,
      userid: "->users.todd",
      poiid: "->pois.building_10"
    },
    comment_73: {
      comment: "Nice modern feel.",
      rating: 4,
      userid: "->users.homer",
      poiid: "->pois.building_12"
    },
    comment_74: {
      comment: "Enjoyed the derby atmosphere.",
      rating: 5,
      userid: "->users.marge",
      poiid: "->pois.building_14"
    },
    comment_75: {
      comment: "Average crowd noise.",
      rating: 3,
      userid: "->users.bart",
      poiid: "->pois.building_16"
    },
    comment_76: {
      comment: "Good value tickets.",
      rating: 4,
      userid: "->users.lisa",
      poiid: "->pois.building_18"
    },
    comment_77: {
      comment: "Nice pitch lines.",
      rating: 4,
      userid: "->users.ned",
      poiid: "->pois.building_20"
    },
    comment_78: {
      comment: "Fun match overall.",
      rating: 4,
      userid: "->users.barney",
      poiid: "->pois.building_22"
    },
    comment_79: {
      comment: "Solid facilities.",
      rating: 3,
      userid: "->users.krusty",
      poiid: "->pois.building_24"
    },
    comment_80: {
      comment: "Very loud supporters.",
      rating: 5,
      userid: "->users.lenny",
      poiid: "->pois.building_27"
    },
    comment_81: {
      comment: "Okay stadium.",
      rating: 3,
      userid: "->users.rod",
      poiid: "->pois.building_28"
    },
    comment_82: {
      comment: "Enjoyed halftime entertainment.",
      rating: 4,
      userid: "->users.todd",
      poiid: "->pois.building_30"
    },
    comment_83: {
      comment: "Good crowd control.",
      rating: 4,
      userid: "->users.homer",
      poiid: "->pois.building_32"
    },
    comment_84: {
      comment: "Seats could be wider.",
      rating: 3,
      userid: "->users.marge",
      poiid: "->pois.building_34"
    },
    comment_85: {
      comment: "Nice stadium lights.",
      rating: 4,
      userid: "->users.bart",
      poiid: "->pois.building_36"
    },
    comment_86: {
      comment: "Fun away game experience.",
      rating: 4,
      userid: "->users.lisa",
      poiid: "->pois.building_37"
    },
    comment_87: {
      comment: "Needs upgrades.",
      rating: 2,
      userid: "->users.ned",
      poiid: "->pois.building_38"
    },
    comment_88: {
      comment: "Good atmosphere overall.",
      rating: 4,
      userid: "->users.barney",
      poiid: "->pois.building_39"
    },
    comment_89: {
      comment: "Crowd was energetic.",
      rating: 4,
      userid: "->users.krusty",
      poiid: "->pois.building_41"
    },
    comment_90: {
      comment: "Facilities were clean.",
      rating: 4,
      userid: "->users.lenny",
      poiid: "->pois.building_43"
    },
    comment_91: {
      comment: "Food options limited.",
      rating: 3,
      userid: "->users.rod",
      poiid: "->pois.building_44"
    },
    comment_92: {
      comment: "Nice stadium staff.",
      rating: 4,
      userid: "->users.todd",
      poiid: "->pois.building_45"
    },
    comment_93: {
      comment: "Crowd noise impressive.",
      rating: 4,
      userid: "->users.homer",
      poiid: "->pois.building_47"
    },
    comment_94: {
      comment: "Average matchday.",
      rating: 3,
      userid: "->users.marge",
      poiid: "->pois.building_48"
    },
    comment_95: {
      comment: "Good views from stands.",
      rating: 4,
      userid: "->users.bart",
      poiid: "->pois.building_49"
    },
    comment_96: {
      comment: "Enjoyed the chants.",
      rating: 4,
      userid: "->users.lisa",
      poiid: "->pois.building_50"
    },
    comment_97: {
      comment: "Solid football ground.",
      rating: 4,
      userid: "->users.ned",
      poiid: "->pois.building_51"
    },
    comment_98: {
      comment: "Nothing special.",
      rating: 3,
      userid: "->users.barney",
      poiid: "->pois.building_52"
    },
    comment_99: {
      comment: "Good stadium vibes.",
      rating: 4,
      userid: "->users.krusty",
      poiid: "->pois.building_53"
    },
    comment_100: {
      comment: "Nice end to season here.",
      rating: 4,
      userid: "->users.lenny",
      poiid: "->pois.building_54"
    },
    comment_101: {
      comment: "I love it here. Everything is so nice.",
      rating: 5,
      userid: "->users.homer",
      poiid: "->pois.building_55"
    }
  }
}