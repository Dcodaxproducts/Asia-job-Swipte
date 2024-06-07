// "use client";

// import useFetchJobs from "@/hooks/useFetchJobs";

// import { baseUrl } from "@/utils/constants";
// import { useJobsData } from "@/context/jobsData";
// import LoadingSkeleton from "@/components/LoadingSkeleton";
// import PaginationComponent from "@/components/Pagination";
// import MenuTab from "@/components/MenuTab";
// import Title from "@/components/Title";
// import ApplicantProfile from "./components/ApplicantProfile";
// import Message from "./components/Message";
// import Resume from "./components/Resume";

// const AllJobsData = () => {
//   const { activeTab, changeTab, page, pagination, changePage } = useJobsData();

//   const tabMenu = ["applicant-profile", "message", "resume"];

//   const endpoint =
//     activeTab === "active" ? "jobs" : "job-applications/all-job-applications";
//   const api = `${baseUrl}/${endpoint}?page=${page}`;

//   const { data, loading, error } = useFetchJobs(api);

//   if (loading) return <LoadingSkeleton />;
//   // if (error) return <div>Error: {error.message}</div>;

//   const title = `All Jobs - ${
//     activeTab === "applicant-profile"
//       ? "Applicant Profile"
//       : activeTab === "message"
//       ? "Message"
//       : activeTab === "resume"
    
//   }`;

//   return (
//     <Title title={title}>
//       <MenuTab activeTab={activeTab} changeTab={changeTab} tabMenu={tabMenu} />
//       <main className="my-4 px-4 flex-1">
//         {activeTab === "applicant-profile" && <ApplicantProfile />}
//         {activeTab === "message" && <Message />}
//         {activeTab === "resume" && <Resume />}
       
//       </main>
//       <PaginationComponent
//         page={page}
//         pagination={pagination}
//         changePage={changePage}
//       />
//     </Title>
//   );
// };

// export default AllJobsData;


import React from 'react'

const Tabs = () => {
  return (
    <div>Tabs</div>
  )
}

export default Tabs