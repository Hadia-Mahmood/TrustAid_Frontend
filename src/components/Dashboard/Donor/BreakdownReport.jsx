
"use client";
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import TrustAidContractInteraction from "@/utils/trustAidContractInteraction";
import Pagination from "../Pagination";
import usePagination from "@/utils/usePagination";
import DataLoader from "@/components/Shared/DataLoader";
import { useGetProgressReport } from "../../../hooks/beneficiary-hook"; 
import Link from "next/link";
   
import styles from "./CampaignDetails.module.css";
const BreakdownReport = ({ applicationId }) => {
  const paginate = usePagination();
  
  const [campaignData, setCampaignData] = useState(null);
  const contractAddress = "0xd0D43EfafA5F72CF7a9218222Ff2B8B5066aD417";
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
  const {
    data: applicationData,
    isLoading,
    iserror,
  } = useGetProgressReport(applicationId);
  const ben_eth_address = applicationData?.user?.ethAddress || "";
  const campaignId= applicationData?.campaignId;
  console.log("campadddddddddddignId",campaignId);
    useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        setLoading(true);
        const data = await TrustAidContractInteraction.getCampaignById(campaignId);
        
        setCampaignData(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching campaign data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (campaignId) {
      fetchCampaignData();
    }
  }, [campaignId]);

  if (isLoading) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <DataLoader />
      </div>
    );
  }

  if (iserror || !applicationData) {
    return <div className="text-red-500">No breakdown found.</div>;
  }

    if (error) return <div>Error: {error}</div>;
    if (!campaignData) return <div>No campaign data found</div>;
    
    // Extract needs from campaign data
    const needs = campaignData[6] || [];
    
    // Format needs for display
    const formattedNeeds = needs.map(need => ({
      needId: need[0].toString(),
      description: need[1],
      amountRequired: ethers.utils.formatEther(need[2]),
      needFulfilled: need[3] ? 'Yes' : 'No',
      proofSubmitted: need[4] ? 'Yes' : 'No',
      proofApproved: need[5] ? 'Yes' : 'No',
      timestamp: new Date(need[6] * 1000).toLocaleString(),
      amountDonated: ethers.utils.formatEther(need[7]),
      excessAmount: ethers.utils.formatEther(need[8]),
      ipfsHash: need[9].join(', ')
    }));
  
    const { breakdowns } = applicationData;
    const { currentPage, totalPages, visibleItems, goToPage } = paginate(breakdowns);
  
    if (needs.length === 0) return <div>No needs found for this campaign</div>;
  
  return (
    <div>
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {/* <th className="py-2 px-4 border">Need ID</th> */}
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Amount Required (ETH)</th>
            <th className="py-2 px-4 border">Fulfilled</th>
            <th className="py-2 px-4 border">Proof Submitted</th>
            <th className="py-2 px-4 border">Proof Approved</th>
            <th className="py-2 px-4 border">Amount Donated (ETH)</th>
            {/* <th className="py-2 px-4 border">Excess Amount (ETH)</th> */}
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Proof</th>
          </tr>
        </thead>
        <tbody>
          {formattedNeeds.slice(0, visibleItems.length).map((need, index) => {
            const breakdown = visibleItems[index];
            return (
              <tr key={index} className="hover:bg-gray-50">
                {/* <td className="py-2 px-4 border">{need.needId}</td> */}
                <td className="py-2 px-4 border">{need.description}</td>
                <td className="py-2 px-4 border">{need.amountRequired}</td>
                <td className="py-2 px-4 border">{need.needFulfilled}</td>
                <td className="py-2 px-4 border">{need.proofSubmitted}</td>
                <td className="py-2 px-4 border">{need.proofApproved}</td>
                <td className="py-2 px-4 border">{need.amountDonated}</td>
                {/* <td className="py-2 px-4 border">{need.excessAmount}</td> */}
                <td className="py-2 px-4 border">{breakdown?.breakdownStatus || "N/A"}</td>
                <td className="py-2 px-4 border truncate max-w-xs">
                {need.proofApproved === "Yes" ? (
  <Link
    href={`/dashboard/donor/proof-details?breakdownId=${breakdown?.id}`}
    className="text-sm text-black hover:underline"
  >   
    View
  </Link>
) : breakdown?.breakdownStatus === "inactive" ? (
  <p className="text-sm text-gray-500">N/A</p>
                 ) : need.proofSubmitted === "No" &&
                 need.amountRequired === need.amountDonated ? (
                <p className="text-sm text-gray-500">Proof not uploaded</p>
                ) : (
                <p className="text-sm text-gray-500">N/A</p>
                )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
{/* Input Entries Section */}
<div className={styles.inputEntriesSection}>
          

          {/* <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button className={styles.blockchainButton}>
              View Blockchain Data
            </button>
          </div>  */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
  <a
    href={`https://sepolia.etherscan.io/address/${contractAddress}`}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }} // Optional: removes underline
  >
    <button className={styles.blockchainButton}>
      View Blockchain Data
    </button>
  </a>
</div>

        </div>
     

      {breakdowns.length > 5 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={goToPage}
        />
      )}
    </div>

      
    </div>
  );
};

export default BreakdownReport;