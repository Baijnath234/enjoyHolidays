import React from "react";
import MainSection from "./MainSection";
import TopPlacesSection from "./TopPlacesSection";
import BestPackagesSection from "./BestPackagesSection";
import CustomerExperience from "./CustomerExperience";
import ComingSoonSection from "./ComingSoonSection";

const Dashboard = () => {
  return (
    <>
     <MainSection/>
     <TopPlacesSection/>
     <BestPackagesSection/>
     <CustomerExperience/>
     <ComingSoonSection/>
    </>
  );
};

export default Dashboard;
