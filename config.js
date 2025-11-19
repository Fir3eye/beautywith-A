// Update your business details here
const PHONE_NUMBER = "919587676565"; // e.g., 91XXXXXXXXXX for India; no + or spaces
const BUSINESS_NAME = "Beauty by Akanksha";
const DEFAULT_GREETING = "Hi! I’m interested in your services.";

// Optional: phone number for "Call Now" button (include country code if needed)
const CALL_NUMBER = "+919587676565";

// Define your services
const SERVICES = [
  // Hair & Makeup
  { name: "Haircut & Styling", price: "₹799", duration: "45 min", message: "Hi! I’d like to book Haircut & Styling." },
  { name: "Party Makeup", price: "₹1999", duration: "90 min", message: "Hi! I’m interested in Party Makeup." },
  { name: "Bridal Makeup", price: "₹8999", duration: "3-4 hrs", message: "Hi! I’d like to book Bridal Makeup." },

  // Facials
  { name: "Facial (Glow)", price: "₹1299", duration: "60 min", message: "Hi! I’d like to book a Glow Facial." },
  { name: "Facial (O3 Glow)", price: "₹1499", duration: "70 min", message: "Hi! I’d like to book an O3 Glow Facial." },
  { name: "Facial (Anti-Aging)", price: "₹1599", duration: "75 min", message: "Hi! I’d like to book an Anti-Aging Facial." },
  { name: "Facial (Hydrating)", price: "₹1399", duration: "60 min", message: "Hi! I’d like to book a Hydrating Facial." },
  { name: "Facial (Acne Treatment)", price: "₹1499", duration: "70 min", message: "Hi! I’d like to book an Acne Treatment Facial." },

  // Waxing
  { name: "Waxing (Full Arms)", price: "₹499", duration: "30 min", message: "Hi! I’d like to book Full Arms Waxing." },
  { name: "Waxing (Full Legs)", price: "₹699", duration: "40 min", message: "Hi! I’d like to book Full Legs Waxing." },
  { name: "Waxing (Full Body)", price: "₹1799", duration: "90 min", message: "Hi! I’d like to book Full Body Waxing." },
  { name: "Waxing (Bikini)", price: "₹999", duration: "45 min", message: "Hi! I’d like to book a Bikini Wax." },

  // Skincare & Body
  { name: "Bleach", price: "₹499", duration: "30 min", message: "Hi! I’d like to book a Bleach service." },
  { name: "Body Polishing", price: "₹2499", duration: "90 min", message: "Hi! I’d like to book a Body Polishing session." },

  // Hair Treatments
  { name: "Hair Curl", price: "₹1999", duration: "90 min", message: "Hi! I’d like to book Hair Curl styling." },
  { name: "Hair Straightening", price: "₹3999", duration: "2-3 hrs", message: "Hi! I’d like to book Hair Straightening." },
];

// Define your packages
const PACKAGES = [
  {
    name: "Bridal Glow Package",
    price: "₹6999",
    duration: "5 hrs",
    includes: [
      "Bridal Makeup",
      "O3 Glow Facial",
      "Body Polishing",
      "Hair Styling"
    ],
    message: "Hi! I’d like to book the Bridal Glow Package."
  },
  {
    name: "Full Pamper Package",
    price: "₹4999",
    duration: "4 hrs",
    includes: [
      "Hydrating Facial",
      "Full Body Waxing",
      "Manicure & Pedicure",
      "Hair Curl"
    ],
    message: "Hi! I’d like to book the Full Pamper Package."
  }
];

const ABOUT = {
  title: "About Us",
  description: `✨ Welcome to *Beauty by Akanksha* ✨  

At Beauty by Akanksha, we believe self-care is more than a luxury — it's a way to empower yourself and feel radiant every day.  

💇‍♀️ With **6 years of professional experience**, including **3 wonderful years with Yes Madam**, I have honed my skills to provide world-class beauty services and care.  

💆‍♀️ From **professional hair styling and bridal makeup** to **rejuvenating facials, relaxing spa treatments, and expert skincare**, we offer a wide range of beauty services tailored just for you.  

🌸 Our mission is simple: to help you look confident, feel beautiful, and glow from within.  

With years of experience, premium products, and a passion for perfection, we ensure every client enjoys a **personalized, relaxing, and unforgettable beauty experience**. 💖`,
  image: "./assets/about.jpg",
  caption: "Professional Beautician" // 👈 Add this under the picture
};


