export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret"
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret"
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret"
    },
    admin: {
      firstName: "Placemark",
      lastName: "Admin",
      email: "admin@placemark.com",
      password: "very_secret"
    }
  },
  categories: {
    _model: "Category",
    building: {
      name: "Buildings",
      img: "http://res.cloudinary.com/dlhqnloeh/image/upload/v1762423112/pcylvetl7ub3abucn5hw.jpg"
    },
    transport: {
      name: "Transport",
      img: "http://res.cloudinary.com/dlhqnloeh/image/upload/v1762423402/vh6hgcd8z6u5o6ex2coq.jpg"
    },
    university: {
      name: "Universities",
      img: "http://res.cloudinary.com/dlhqnloeh/image/upload/v1762423346/tkipcpo6qgnvvft6q4lk.jpg"
    },
    Private: {
      name: "Private Points of Interest",
      img: "http://res.cloudinary.com/dlhqnloeh/image/upload/v1763360479/yvyhlpap3wuyamutp8jp.png"
    }
  },
  pois: {
    _model: "Poi",
    building_1: {
      name: "Jahnstadion Regensburg",
      description: "The football stadium of the local 3rd division team SSV Jahn Regensburg",
      latitude: 49.015556,
      longitude: 12.073889,
      img: "http://res.cloudinary.com/dlhqnloeh/image/upload/v1762425742/w5cd3qrhhjtgl1fbueio.jpg",
      categoryid: "->categories.building" 
    },
    building_2: {
      name: "St. Emmeram Palace (Thurn und Taxis)",
      description: "Historic princely palace with rococo state rooms and family residence.",
      latitude: 49.0148,
      longitude: 12.0923,
      categoryid: "->categories.building" 
    },
    buidling_3: {
      name: "Old Town of Regensburg with Stadtamhof",
      description: "Medieval city centre with over 1,000 monuments and UNESCO status.",
      latitude: 49.0203,
      longitude: 12.0947,
      img: "http://res.cloudinary.com/dlhqnloeh/image/upload/v1762426520/svkb1y5k3ufzaptyec3b.jpg",
      categoryid: "->categories.building" 
    },
    building_3: {
      name: "Stone Bridge",
      description: "12th-century stone bridge across the Danube, iconic city landmark.",
      latitude: 49.0227,
      longitude: 12.0973,
      categoryid: "->categories.building" 
    },
    transport_1: {
      name: "Central Station Regensburg",
      description: "The central trainstation of the city of Regensburg.",
      latitude: 49.01222,
      longitude: 12.09944,
      categoryid: "->categories.transport" 
    },
    university_1: {
      name: "UNI Regensburg",
      description: "The biggest university in Regensburg.",
      latitude: 48.99373,
      longitude: 12.09298,
      categoryid: "->categories.university" 
    },
    university_2: {
      name: "OTH Regensburg",
      description: "One of the most research-intensive universities of applied sciences in Bavaria.",
      latitude: 49.003,
      longitude: 12.096,
      categoryid: "->categories.university" 
    },
  }
}