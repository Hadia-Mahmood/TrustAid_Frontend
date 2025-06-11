"use client";
import CampaignDetails from "@/components/Dashboard/Beneficiary/ProgressReport";
import BreakdownReport from "@/components/Dashboard/Beneficiary/BreakdownReport";
import React from "react";

import { useSearchParams } from "next/navigation";
const Page = () => {
  const searchParams = useSearchParams();
  const applicationId = searchParams.get("applicationId"); // Get the ID from URL
  const campaignId = searchParams.get("campaignId"); 
  return (
    <div>
      <CampaignDetails applicationId={applicationId} campaignId={campaignId} />
      <BreakdownReport applicationId={applicationId} campaignId={campaignId} />

 
    </div>
  );
};

export default Page;
