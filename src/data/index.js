import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Lead of Events Management",
    company_name: "ACM Club",
    date: "July 2024 - Present",
    details: [
      "<span style='color: white;'>Planned and executed over 2-3 events</span> including workshops, guest lectures etc., attracting significant participants.",
      "<span style='color: white;'>Conducted over 100-150 interviews</span> for various club positions and optimized workflows, resulting in saving considerable amount of time.",
      
    ]
  },
  {
    title: "Member of NGO",
    company_name: "HAMARA SEHYOG",
    date: "Aug 2024 - Present",
    details: [
      
      "<span style='color: white;'>Organized and led food and clothing donation drives, engaging with underserved communities in slums to provide essential resources and support through various outreach activities.</span> ",
      "We helped expand our NGO's outreach by supporting the creation and management of its website, <span style='color: white;'>enhancing our online presence and community engagement.</span>"
    ],
  },
  {
    title: "Lead of Finance",
    company_name: "V@rSITy",
    date: "Sep 2023 - Present",
    details: [
      "<span style='color: white;'>Led financial planning and budgeting</span> for club activities, working closely with team members to manage resources effectively.",
      "<span style='color: white;'>Coordinated with administrative personnel to get approvals and signatures for Purchase Orders (POs),</span>, streamlining the procurement process.",
    ],
  },
  {
    title: "Treasurer",
    company_name: "Jivdaya Charitable Trust",
    date: "Oct 2021 -  Aug 2022",
    details: [
      "Managed financial records and resources for <span style='color: white;'>Jivdaya Charitable Trust</span>, ensuring proper allocation of funds for feeding, rescuing, and treating stray animals in need.",
      "Led efforts to provide food, shelter, and medical care to rescued animals,<span style='color: white;'> working closely with veterinarians to address medical needs and improve welfare for stray animals.</span>",
      ],
  },
];

const portfolio = [
  {
    name: "Job Attrition Model",
    description:
      "Developed a job attrition prediction model to help identify potential employee turnover risks and improve retention strategies. Leveraging machine learning techniques such as Logistic Regression, Decision Trees, and Random Forest.",
    image: oscs,
  },
  {
    name: "Quote Scraper",
    description:
      "I created a website that scrapes quotes using Beautiful Soup, allowing searches by author and tag for targeted quote results.",
    image: devnotes,
  },
  {
    name: "E-commerce Sales Data Analysis",
    description:
      "Conducted an in-depth analysis of a mock e-commerce sales dataset over six months.Created interactive dashboards using Matplotlib and Seaborn to visualize sales trends by product category and customer location.",
    image: algorithms,
  },
];

export { experiences, portfolio };

