import { RxDashboard } from "react-icons/rx";
import { FaServicestack, FaTruckPickup } from "react-icons/fa6";
import { MdOutlineEvent } from "react-icons/md";
import { TbReport, TbRecycle } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { CiViewTable } from "react-icons/ci";
 
export const generateSidebarLinksUser = (id) => {
  const sidebarLinks = [
    {
      linkText: `Home`,
      linkTo: "/dashboard/user/home",
      linkIcon: <RxDashboard />,
    },
    {
      linkText: `Replies`,
      linkTo: `/dashboard/user/${id}/replies`,
      linkIcon: <RxDashboard />,
    },
  ];

  return sidebarLinks;
};
export const sidebarLinksRecyclingPointAdmin = [
  {
    linkText: `Dashboard`,
    linkTo: "/dashboard/organization",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Process Applications`,
    linkTo: "/dashboard/organization/process-application",
    linkIcon: <RxDashboard />,
  },
  
  {
    linkText: `Process Proofs`,
    linkTo: "/dashboard/organization/process-proofs",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Approve Proofs`,
    linkTo: "/dashboard/organization/approve-proof",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `All Supports `,
    linkTo: "/dashboard/organization/approved-applications",
    linkIcon: <RxDashboard />,
  },
  // {
  //   linkText: `Beneficiaries`,
  //   linkTo: "/dashboard/organization/recycling-output-entries",
  //   linkIcon: <RxDashboard />,
  // },
];
export const sidebarLinksOrganization = [
  {
    linkText: `Dashboard`,
    linkTo: "/dashboard/organization",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Process Applications`,
    linkTo: "/dashboard/organization/process-application",
    linkIcon: <RxDashboard />,
  },
   
  {
    linkText: `Process Proofs`,
    linkTo: "/dashboard/organization/process-proofs",
    linkIcon: <RxDashboard />,
  },
  
  {
    linkText: `All Supports `,
    linkTo: "/dashboard/organization/approved-applications",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `NFTs `,
    linkTo: "/dashboard/organization/nfts",
    linkIcon: <RxDashboard />,
  },
  // {
  //   linkText: `Beneficiaries`,
  //   linkTo: "/dashboard/organization/recycling-output-entries",
  //   linkIcon: <RxDashboard />,
  // },
];



export const sidebarLinksDonor = [
  {
    linkText: `Dashboard`,
    linkTo: "/dashboard/donor",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `My Contributions`,
    linkTo: "/dashboard/donor/donor-contributions",
    linkIcon: <RxDashboard />,
  },
  // {
  //   linkText: `Proof Details`,
  //   linkTo: "/dashboard/donor/proof-details",
  //   linkIcon: <RxDashboard />,
  // },
  {
    linkText: `My NFT Collection`,
    linkTo: "/dashboard/donor/nft-collection",
    linkIcon: <RxDashboard />,
  },
];

export const sidebarLinksBeneficiary = [
  {
    linkText: `Dashboard`,
    linkTo: "/dashboard/beneficiary",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Request Support`,
    linkTo: "/dashboard/beneficiary/request-support",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `All Requests`,
    linkTo: "/dashboard/beneficiary/all-requests",
    linkIcon: <RxDashboard />,
  },
  
  

  

];


export const signupSliderImages = [
  {
    image: "/shared/signup_carousel_1.jpg",
  },
  {
    image: "/shared/beneficiary1.jpg",
  },
  {
    image: "/shared/beneficiary2.jpg",
  },
];

export const heroSliderImages = [
  {
    imageSrc: "/home/hero__slider1.jpg",
  },
];

export const howItWorksHomeData = [
  {
    imageSrc: "/home/how__it__works2.png",
    title: "Secure Transactions",
  },
  {
    imageSrc: "/home/how__it__works3.png",
    title: "Seamless Contributions",
  },
  {
    imageSrc: "/home/how__it__works4.png",
    title: "Impact-Driven",
  },
];

export const howItWorksHomeListData = [
  {
    list: "Empowering Transparent and Accountable Charity Solutions",
  },
  {
    list: "Delivering Efficient, Impactful, and User-Centric Services",
  },
];

export const testimonialsData = [
  {
    name: "Lamar Owens",
    title: "CEO",

    image: "/shared/testimonials__1.jpg",
    text: "I felt really comfortable and trust them. They have a lot of security measures in place. Pretty cheap for such great peace of mind!",
  },
  {
    name: "Jessica Pearson",
    title: "Marketing Director",
    image: "/shared/testimonials__1.jpg",
    text: "The service was exceptional! The staff was attentive and professional. Highly recommend to anyone looking for top-notch service.",
  },
  {
    name: "Chris Wong",
    title: "Freelance Developer",
    image: "/shared/testimonials__1.jpg",
    text: "Their dedication to maintaining high standards is evident in their work. Absolutely no complaints and will be returning for their services again!",
  },
];

export const aboutServicesData = [
  {
    icon: <FaServicestack />,
    title: "User Registration",
    description:
      "Users sign up and set up their profiles with necessary details. They can then schedule waste pickups at their convenience, with real-time tracking at each stage of the process. Continuous updates based on user feedback ensure optimal performance and improvement.",
  },
  {
    icon: <FaTruckPickup />,
    title: "Waste Management",
    description:
      "Advanced technology sorts collected waste into recyclables, compostables, and landfill waste. Users can file and track complaints through the platform, ensuring quick resolution. Comprehensive reports and data insights help system improve their waste management practices.",
  },
  {
    icon: <MdOutlineEvent />,
    title: "System Integration",
    description:
      "The system integrates with external services using blockchain for secure transactions and API integration for enhanced functionality. Educational resources and community events promote sustainable practices, while robust security measures ensure data safety and regulatory compliance. ",
  },
];

export const aboutaccordionOurMissionData = [
  {
    title: "Reducing Waste",
    content:
      "Our primary goal is to reduce the amount of waste generated. We implement advanced sorting and processing technologies to ensure that as much waste as possible is diverted from landfills and repurposed in sustainable ways.",
  },
  {
    title: "Reduce Program",
    content:
      "The Reduce Program focuses on educating individuals and businesses about minimizing waste production. By promoting practices such as reducing single-use items and choosing products with minimal packaging, we aim to significantly lower the waste footprint.",
  },
  {
    title: "Recycle More",
    content:
      "We encourage and facilitate increased recycling efforts through user-friendly services and community initiatives. Our comprehensive recycling programs are designed to make recycling accessible and efficient for everyone.",
  },
  {
    title: "Reduce Program",
    content:
      "The Reduce Program focuses on educating individuals and businesses about minimizing waste production. By promoting practices such as reducing single-use items and choosing products with minimal packaging, we aim to significantly lower the waste footprint.",
  },
  {
    title: "Recycle More",
    content:
      "We encourage and facilitate increased recycling efforts through user-friendly services and community initiatives. Our comprehensive recycling programs are designed to make recycling accessible and efficient for everyone.",
  },
];



export const topicCardsData = [
  {
    category: "MEMBER POST",
    title: "Setting up content and creative project tasks",
    authorName: "Nelson Martinez",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "March 23, 2024 01:38",
  },
  {
    category: "DEMINAR",
    title: "Forecasting Made Easy: Smooth Resource Allocation...",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:46",
  },
  {
    category: "FROM WRIKE",
    title: "Exciting Announcement for PMI Certified Members!",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:37",
  },
  {
    category: "MEMBER POST",
    title: "Setting up content and creative project tasks",
    authorName: "Nelson Martinez",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "March 23, 2024 01:38",
  },
  {
    category: "DEMINAR",
    title: "Forecasting Made Easy: Smooth Resource Allocation...",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:46",
  },
  {
    category: "FROM WRIKE",
    title: "Exciting Announcement for PMI Certified Members!",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:37",
  },
  {
    category: "MEMBER POST",
    title: "Setting up content and creative project tasks",
    authorName: "Nelson Martinez",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "March 23, 2024 01:38",
  },
  {
    category: "DEMINAR",
    title: "Forecasting Made Easy: Smooth Resource Allocation...",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:46",
  },
  {
    category: "FROM WRIKE",
    title: "Exciting Announcement for PMI Certified Members!",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:37",
  },
];

export const postsData = [
  {
    id: 1,
    name: "janet andrews",
    date: "January 23, 2024 21:41",
    content:
      "One of the biggest challenges of Wrike is finding/coordinating tasks that relate to the same project but ALL HAVE DIFFERENT TICKET NUMBERS...",
    likes: 2,
    comments: [
      {
        id: 1,
        name: "janet andrews",
        date: "January 23, 2024 21:42",
        content: "Sorry for the unproofed comment above...",
      },
      {
        id: 2,
        name: "peter parker",
        date: "January 24, 2024 08:30",
        content:
          "This is indeed a significant issue that needs to be addressed!",
      },
    ],
  },
];
