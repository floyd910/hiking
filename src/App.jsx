import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ScrollToTop from "./components/scrollTop/ScrollTop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";
// import Tour from "./pages/tour/Tour";
// import Tour2 from "./pages/Tour2/Tour2";
// import Tour3 from "./pages/Tour3/Tour3";
// import Tour4 from "./pages/Tour4/Tour4";
// import Hiking from "./pages/hiking/Hiking";
import Equipment from "./pages/equipment/Equipment";
// import Canyoning from "./pages/canyoning/Canyoning";
// import Festival from "./pages/festival/Festival";
import "./App.css";

export default function App() {
  const tours = [
    {
      title: "Svaneti Trekking",
      category: "hiking",
      link: "svaneti_trekking",
      cover:
        "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876327/Svaneti%20trekking/DSCF9677_cover_lsuuw4.jpg",
      location: {
        title: "About Svaneti",
        img: "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876326/Svaneti%20trekking/DSCF9598_tmuuku.jpg",
        text: "Svaneti is located in the northwest part of Georgia, in the Greater Caucasus mountains. The region has been saved by its inaccessible location, which helped to preserve its timeless feel. The main town of the area is Mestia, known as the place of a thousand towers, famous for its hospitality and delicious cuisine. Mount Ushba known as the “Matterhorn of the Caucasus” is near Mestia. Shkhara is the highest peak in Georgia, located not far from the village of Ushguli which is the highest inhabited settlement in Europe, recognised by UNESCO as a World Heritage Site.",
      },
      details: {
        images: [
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876326/Svaneti%20trekking/DSCF9630_pi3duq.jpg",
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876326/Svaneti%20trekking/DSCF9465_clk1o7.jpg",
        ],
        text: "This village-to-village trek from Mestia to Ushguli will create the most unforgettable travel experience with hiking and visiting gorgeous views of the Greater Caucasus We start the tour from Batumi or Kutaisi at 08:00 AM and drive towards Svaneti, after 3 hours of driving we will reach our first destination, Enguri Dam, the world’s third-highest dam. Soon we continue our journey through the gorgeous mountains of Svaneti. We’ll reach Mestia, the main town of Svaneti in the afternoon and prepare for the upcoming adventures On the next day, we start trekking from Mestia towards the Zhabeshi village, passing the mountain pass and the old authentic villages. In the evening we will overnight in the guesthouse of Zhabeshi. The day after we will hike from Zhabeshi to Adishi, one of the oldest and most authentic villages, Trekking from Adishi Iprali is even more adventurous, with crossing the river and passing the epic glacier mountains. On the last day, we will trek from Iprali to Ushguli - the UNESCO World Heritage Site. After the trek, you will drive from Ushguli back to the starting point (usually to Kutaisi or Batumi), or you can stay and enjoy Ushguli for a day or two. Please note: We can also transport your luggage to the guesthouses every day, so you don’t have to carry extra bags with you.",
      },
      itinerary: {
        days: [
          [
            "We will meet you in Batumi or Kutaisi Driving to Mestia Walking around Mestia, visit ancient towers Overnight in Mestia",
          ],
          ["Trekking from Mestia to Zhabeshi (16 km) Overnight in Zhabeshi"],
          ["Trekking from Zhabeshi to Adishi (11 km) Overnight in Adishi"],
          ["Trekking from Adishi to Iprali (18.5 km) Overnight in Iprali"],
          ["Trekking from Iprali to Ushguli (12.5 km) Overnight in Ushguli"],
          ["Driving from Ushguli to Batumi"],
        ],
        images: [
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876325/Svaneti%20trekking/DSCF9457_z4xzli.jpg",
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876326/Svaneti%20trekking/DSCF9598_tmuuku.jpg",
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876326/Svaneti%20trekking/DSCF9613_clneyx.jpg",
        ],

        alternative: {
          title: "Day 6, ALTERNATIVE",
          text: "Ushguli UNESCO world heritage site, staying in Ushguli one extra day. Horseback riding or hiking to the Shkhara glacier hiking route (11 km.) Hiking to Shkhara Glacier (8 km.) Overnight in Ushguli and drive to Batumi the next day",
        },
      },
      additional: {
        text: "",
        list: [
          { list: ["Difficulty: Moderate", "Overnight in local guesthouses"] },
        ],
        map: "https://drive.google.com/open?id=1TmlqIvxDPYUbOpMByTKGxQ0GJRT5srB5&usp=sharing",
      },
      price: {
        list: [
          "Private tour (up to 3 travellers) - $770 per person",
          "Group tour (4 travellers and more) - $550 per person",
        ],
        otherPrices: {
          list: [
            "Transfer from Tbilisi to Mestia: $120 group price",
            "Transfer from Mestia to Tbilisi: $120 group price",
            "Luggage transportation during the trek: $200 group price",
            "Horse riding in Ushguli: $40 per person",
          ],
        },
      },
      offer: {
        list: [
          "Comfortable transportation",
          "Professional trekking guide service",
          "Overnights in Guesthouses (basic accommodation in the villages)",
          "Meals: Breakfast and dinner + lunch boxes",
        ],
      },
    },

    {
      title: "4-day Svaneti Hiking Tour",
      category: "hiking",
      link: "4_day_svaneti_hiking_tour",
      cover:
        "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706877782/Svaneti%20hiking%20tour/DSCF9230_cover_tddy2z.jpg",
      location: {
        title: "About Svaneti",
        img: "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876326/Svaneti%20trekking/DSCF9598_tmuuku.jpg",
        text: "Svaneti is located in the northwest part of Georgia, in the Greater Caucasus mountains. The region has been saved by its inaccessible location, which helped to preserve its timeless feel. The main town of the area is Mestia, known as the place of a thousand towers, famous for its hospitality and delicious cuisine. Mount Ushba known as the “Matterhorn of the Caucasus” is near Mestia. Shkhara is the highest peak in Georgia, located not far from the village of Ushguli which is the highest inhabited settlement in Europe, recognised by UNESCO as a World Heritage Site.",
      },

      itinerary: {
        days: [
          [
            "Travel to Svaneti",
            "Enguri dam",
            "Driving through the beautiful mountains with stops for photography",
            "Arriving in Mestia",
            "Old Svan Tower",
            "Overnight in Mestia",
          ],
          [
            "Hiking to Ushba waterfalls, alt. Chalaadi glacier",
            "Heshkili village, panoramic view",
            "Overnight in Mestia",
          ],
          [
            "Driving to Ushguli",
            "Hiking to Shkhara Glacier",
            "Horse riding (optional)",
            "Overnight in Ushguli, Alt: Mestia",
          ],
          [
            "Visiting the old village of Ushguli (UNESCO World Heritage Site)",
            "Travel to Batumi/Kutaisi",
          ],
        ],
        images: [
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706877780/Svaneti%20hiking%20tour/DSCF7860_s0h5y0.jpg",
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706877784/Svaneti%20hiking%20tour/DSCF9443_pdp8pg.jpg",

          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876326/Svaneti%20trekking/DSCF9613_clneyx.jpg",
        ],

        alternative: {
          text: "Note: Extra hiking day can be added Hiking to Koruldi lakes",
        },
      },
      additional: {
        text: "",
        list: [
          {
            title: "Chaladi glacier",
            list: [
              "Difficulty - easy",
              "Distance - 6 km",
              "Duration - 3 hours",
              "Altitude change - 200m",
            ],
          },

          {
            title: "Ushba waterfalls",
            list: [
              "Difficulty - Moderate",
              "Distance - 8 km",
              "Duration - 4 hours",
              "Altitude change - 400 m",
            ],
          },

          {
            title: "Shkhara glacier",
            list: [
              "Difficulty - easy",
              "Distance - 15 km",
              "Duration - 5 hours",
              "Altitude change - 300m",
            ],
          },

          {
            title: "Koruldi lakes",
            list: [
              "Difficulty - hard",
              "Distance - 16 km",
              "Duration - 7 hours",
              "Altitude change - 1400m",
            ],
          },
        ],
      },
      price: {
        list: [
          "850 USD per person (private - 1 person)",
          "480 USD per person (private - 2-3 people). +100 USD per extra hiking day",
          "350 USD per person (group - 4+ people). +80 USD per extra hiking day",
        ],
        otherPrices: {
          list: [
            "Pick up from Tbilisi +100 USD per person",
            "Drop off in Tbilisi +100 USD per person",
          ],
        },
      },
    },

    {
      title: "Batumi Canyoning",
      category: "canyoning",
      link: "kapnistavi_canyoning",
      cover:
        "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714739363/DZNE4494_tdouec.jpg",

      details: {
        images: [
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714739363/DZNE4676_s2qjh0.jpg",
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714739413/photo_5460778779602432719_y1_qiqqqp.jpg",
        ],
        text: "Canyoning in the wilderness of Georgia, several hours of unforgettable walk through the canyon Sopho near Batumi. This is the best extreme outdoor activity in Georgia, which you will never forget. With professional and certified canyoning guides, this is the safest outdoor activity in Batumi. This activity is 3-4 hours of amazing descent to the 7 waterfalls with 8 rappelling points. We start the tour from Batumi, driving towards the mountains of Ajara. Right after 30 minutes of driving, we will get to the starting location of canyoning. Afterwards, we will have a short hike to the starting point and then start the canyoning activity. After passing through the canyon we drive back to Batumi. The tour will take 5 hours or a bit more. All necessary equipment and snacks will be provided.",
      },

      additional: {
        text: "Technical information",
        list: [
          {
            list: [
              "Distance from Batumi: 30 km",
              "Amount of descends: 7 waterfalls, 8 rappelling points.",
              "Length off valley – 750 m.",
              "Altitude: start point 650 m – endpoint 430 m.",
              "Highest waterfall: 35 m.",
              "Activity difficulty: hard.",
              "Water level: Low.",
            ],
          },
        ],
      },
      price: {
        list: [
          "90 EUR per person",
          "2-3 person - 100 EUR",
          "4-5 person - 90 EUR",
          "6-7 person - 80 EUR",
          "8-10 person - 700 EUR",
        ],
      },
      offer: {
        list: [
          "Transportation from and to Batumi",
          "4X4 vehicle to the starting point",
          "Full equipment, 5mm wetsuit, helmet, harness",
          "Certified instructors service",
          "You will get an energy bar and snacks during the canyoning",
        ],
      },
    },

    {
      title: "3-Day Adventure Tour in Svaneti",
      category: "hiking",
      link: "3_day_adventure_tour_in_svaneti",
      cover:
        "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714998476/Untitled_2_jeyfp3.jpg",
      location: {
        title: "About Svaneti",
        img: "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876326/Svaneti%20trekking/DSCF9598_tmuuku.jpg",
        text: "Svaneti is located in the northwest part of Georgia, in the Greater Caucasus mountains. The region has been saved by its inaccessible location, which helped to preserve its timeless feel. The main town of the area is Mestia, known as the place of a thousand towers, famous for its hospitality and delicious cuisine. Mount Ushba known as the “Matterhorn of the Caucasus” is near Mestia. Shkhara is the highest peak in Georgia, located not far from the village of Ushguli which is the highest inhabited settlement in Europe, recognised by UNESCO as a World Heritage Site.",
      },

      mainText:
        "Our first day begins with a scenic drive through the majestic mountains towards the ancient town of Mestia - the historical and cultural centre of the Svaneti region. On our way we'll stop by the Enguri Dam - the second-highest dam in Europe (271m) - this is the first of many breathtaking photo opportunities that await us. After arriving in Mestia we will be hiking to the spectacular Chalaadi Glacier which lies in a valley with jagged Caucasus Mountains peaks towering over it.   This is a fairly easy hike with a few rocky sections allowing us to relish and fully take in the surrounding scenery. We will drive to the highest permanently inhabited village in Europe - Ushguli (UNESCO World Heritage Site). Save your breath for this venture to the foot of the highest peak in Georgia - Mt Shkhara (5193m). We will have the chance to relish the majestic Shkhara glacier that feeds the main river in the area - Enguri. If you feel venturous, you can do part of the hike by horse (optional). On the same day, you will have enough time to explore Mestia, the main town of Svaneti and climb inside one of the towers, as well as enjoy the giant swing with a panoramic view. In the afternoon we will return to Batumi.       ",

      itinerary: {
        days: [
          [
            "Driving from Batumi at 08:00",
            "Stop for 10 minutes in Zugdidi",
            "Visit Enguri dam",
            "Arriving in Mestia",
            "Hiking to Chaladi Glacier",
            "Overnight in Mestia",
          ],
          [
            "Driving to Ushguli",
            "Hiking to Shkhara Glacier",
            "Horse riding (optional)",
            "Overnight in Mestia",
          ],
          [
            "Museum of Mikheil Khergiani, legendary climber",
            "Visiting the old tower in Mestia",
            "Heshkili Panoramic view with the giant swing",
            "Arrival in Batumi at 19:00",
          ],
        ],
        images: [
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714998476/Untitled_3_rwb1qb.jpg",
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714998476/Untitled_2_jeyfp3.jpg",
          "https://res.cloudinary.com/dxhhvp8jh/image/upload/v1714998476/20200710_180735_pwnbth.jpg",
        ],
      },
      additional: {
        text: "",
        list: [
          {
            title: "Day 1",
            list: [
              "Difficulty - Easy",
              "Distance - 6 km",
              "Altitude change - 200m",
            ],
          },

          {
            title: "Day 2",
            list: [
              "Difficulty - easy/moderate",
              "Distance - 15 km",
              "Altitude change - 300m",
            ],
          },
        ],
      },
      price: {
        list: [
          "Private tour (2 PAX)  310 USD per person",
          "Group tour (3+ PAX)  250 USD per person",
        ],
      },
    },
  ];
  return (
    <Router>
      <ScrollToTop />

      <Header />
      <Routes>
        <Route path="/" element={<Home tours={tours} />} />
        {/* <Route path="/batumi_hiking_festival_2024" element={<Festival />} />
        <Route path="/hiking" element={<Hiking tours={tours} />} />
        <Route path="/canyoning" element={<Canyoning tours={tours} />} />
        <Route path="/:language?/tour/:link" element={<Tour tours={tours} />} /> */}
        {/* <Route
          path="/tour/4_day_adventures_svaneti_kutaisi"
          element={<Tour2 />}
        /> */}
        {/* {tours.map((tour) => {
          return (
            <Route
              path={`/tour/${tour.link}`}
              element={<Tour tour={tour} />}
              key={tour.link}
            />
          );
        })} */}
        <Route path="/about_us" element={<AboutUs />} />

        <Route path="/rent_equipment" element={<Equipment />} />
      </Routes>
    </Router>
  );
}
