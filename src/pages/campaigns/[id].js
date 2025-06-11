"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./CampaignDetails.module.css";

const CampaignDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [campaign, setCampaign] = useState(null);
 
  // Mock Data
  const mockData = {
    campaignPoints: [
      {
        _id: "1",
        name: "Clean Water for Villages",
        image: { url: "/findBeneficiary/campaign-image1.jpg" },
        admin: "admin1",
        title: "Water Access Initiative",
        description: "Providing clean and safe drinking water to rural villages.",
        target: "0.1",
        amountCollected: "0.01",
        deadline: "6 Days Left",
        backers: 1,
        donators: ["0x24Cd5...2C"],
      },
      {
        _id: "2",
        name: "Meals for the Homeless",
        image: { url: "/findBeneficiary/campaign-image2.jpg" },
        admin: "admin2",
        title: "Meal Assistance Program",
        description: "Providing hot meals and basic nutrition to homeless individuals.",
        target: "0.06",
        amountCollected: "0.017",
        deadline: "15 Days Left",
        backers: 5,
        donators: ["0x12Ab4...5E", "0x34Cd6...7F"],
      },
      {
        _id: "3",
        name: "Health Camps for Rural Areas",
        image: { url: "/findBeneficiary/campaign-image3.jpg" },
        admin: "admin3",
        title: "Rural Health Drive",
        description: "Organizing health camps to offer free medical checkups and medications.",
        target: "0.05",
        amountCollected: "0.013",
        deadline: "3 Days Left",
        backers: 3,
        donators: ["0x56Ef3...9B"],
      },
      {
        _id: "4",
        name: "Support for Orphaned Children",
        image: { url: "/findBeneficiary/campaign-image4.jpg" },
        admin: "admin4",
        title: "Orphan Assistance Initiative",
        description: "Providing educational resources and support for orphaned children.",
        target: "0.08",
        amountCollected: "0.03",
        deadline: "10 Days Left",
        backers: 4,
        donators: ["0x78Ad1...6C", "0x90Be4...8D"],
      },
      {
        _id: "5",
        name: "Disaster Relief Efforts",
        image: { url: "/findBeneficiary/campaign-image5.jpg" },
        admin: "admin5",
        title: "Disaster Aid Fund",
        description: "Delivering emergency aid and relief supplies to disaster-stricken areas.",
        target: "0.15",
        amountCollected: "0.046",
        deadline: "20 Days Left",
        backers: 7,
        donators: ["0x12Fe3...7A", "0x45Bd9...2E", "0x23Ac7...4F"],
      },
      {
        _id: "6",
        name: "Educational Support for Underserved",
        image: { url: "/findBeneficiary/campaign-image6.jpg" },
        admin: "admin6",
        title: "Education Empowerment Fund",
        description: "Providing scholarships and educational support to students from underprivileged backgrounds.",
        target: "0.12",
        amountCollected: "0.036",
        deadline: "12 Days Left",
        backers: 6,
        donators: ["0x34Cd6...7F", "0x45Ad3...5C"],
      },
    ],
      
    
  };

  useEffect(() => {
    if (id) {
      const foundCampaign = mockData.campaignPoints.find(
        (campaign) => campaign._id === id
      );
      setCampaign(foundCampaign);
    }
  }, [id]);

  if (!campaign) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      
        <div className="flex items-center justify-center h-screen">
  <h1 className="text-center font-bold text-black text-2xl">
    {campaign.name}
  </h1>
</div>

       
    <div className={styles.campaignDetailsPage}>
      {/* Header Section */}
      {/* <div className={styles.header}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search for campaigns..."
        />
        
      </div> */}
      

      {/* Campaign Container */}
      <div className={styles.campaignContainer}>
        <div className={styles.leftColumn}>
          <img
            src={campaign.image.url}
            alt={campaign.name}
            className={styles.campaignImage}
          />
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{
                width: `${(campaign.amountCollected / campaign.target) * 100}%`,
              }}
            ></div>
          </div>

          {/* Creator Section */}
          <div className={styles.creatorSection}>
            <h2>CREATOR</h2>
            <span>{campaign.admin}</span>
          </div>

          {/* Story Section */}
          <div className={styles.storySection}>
            <h2>Story</h2>
            <p>{campaign.description}</p>
          </div>

          {/* Donators Section */}
          <div className={styles.donatorsSection}>
            <h2>Donators</h2>
            <ul>
              {campaign.donators.map((donator, index) => (
                <li key={index}>{donator}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <p>Days Left</p>
              <h2>{campaign.deadline}</h2>
            </div>
            <div className={styles.statItem}>
              <p>Raised</p>
              <h2>
                {campaign.amountCollected} of {campaign.target} ETH
              </h2>
            </div>
            <div className={styles.statItem}>
              <p>Total Backers</p>
              <h2>{campaign.backers}</h2>
            </div>
          </div>

          {/* Fund Section */}
          <div className={styles.fundSection}>
            <h2>Fund</h2>
            <form>
              <label htmlFor="pledgeInput">Pledge without reward</label>
              <input id="pledgeInput" type="text" placeholder="ETH 0.1" />
              <p>
                Back it because you believe in it. Support the project for no
                reward.
              </p>
              <button type="submit" className={styles.fundBtn}>
                Fund Campaign
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CampaignDetails;
