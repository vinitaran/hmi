import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import jobTypeImages from "./data/images";
import jobs from "./data/output_file.json";
import { motion } from 'framer-motion';

const JobDescription = () => {
  const [Pathname, setPathname] = useState("");
  const [Data, setData] = useState([]);
  const [Cluster, setCluster] = useState([]);

  const career_clusters = {
    "Architecture and Construction": [
      "architect",
      "architecture",
      "building",
      "construction",
      "design",
      "engineer",
      "structural",
      "drafting",
      "blueprint",
      "project management",
    ],

    "Arts, Audio-Video Technology and Communications": [
      "art",
      "audio",
      "communication",
      "design",
      "media",
      "technology",
      "visual",
      "graphic design",
      "video production",
      "photography",
    ],

    "Business Management and Administration": [
      "administration",
      "business",
      "management",
      "finance",
      "operations",
      "strategy",
      "leadership",
      "entrepreneurship",
      "business analysis",
      "project management",
    ],

    "Education and Training": [
      "education",
      "instructor",
      "learning",
      "teaching",
      "training",
      "curriculum",
      "student",
      "e-learning",
      "educational technology",
      "instructional design",
    ],

    Finance: [
      "accounting",
      "finance",
      "investment",
      "banking",
      "financial",
      "analysis",
      "tax",
      "auditing",
      "financial planning",
      "risk management",
    ],

    "Government and Public Administration": [
      "government",
      "public administration",
      "policy",
      "regulation",
      "public service",
      "political",
      "legislation",
      "public policy",
      "government relations",
      "budgeting",
    ],

    "Health Science": [
      "healthcare",
      "medical",
      "nursing",
      "pharmaceutical",
      "research",
      "patient",
      "clinical",
      "health informatics",
      "healthcare administration",
      "epidemiology",
    ],

    "Hospitality and Tourism": [
      "hospitality",
      "tourism",
      "hotel",
      "restaurant",
      "customer service",
      "event",
      "catering",
      "travel",
      "hospitality management",
      "event planning",
    ],

    "Human Services": [
      "social work",
      "counseling",
      "community",
      "nonprofit",
      "advocacy",
      "youth",
      "family",
      "case management",
      "social justice",
      "volunteer coordination",
    ],

    "Information Technology": [
      "information technology",
      "software",
      "programming",
      "network",
      "database",
      "cybersecurity",
      "web",
      "data analysis",
      "cloud computing",
      "IT project management",
    ],

    "Law, Public Safety, Corrections, and Security": [
      "law",
      "public safety",
      "security",
      "criminal justice",
      "legal",
      "enforcement",
      "investigation",
      "court procedures",
      "emergency management",
      "cybersecurity",
    ],

    Manufacturing: [
      "manufacturing",
      "production",
      "assembly",
      "supply chain",
      "quality control",
      "engineering",
      "operations",
      "lean manufacturing",
      "industrial engineering",
      "product development",
    ],

    "Marketing, Sales, and Service": [
      "marketing",
      "sales",
      "customer",
      "advertising",
      "branding",
      "market research",
      "customer service",
      "digital marketing",
      "sales management",
      "CRM",
    ],

    "Science, Technology, Engineering, and Mathematics": [
      "science",
      "technology",
      "engineering",
      "mathematics",
      "research",
      "data",
      "analysis",
      "machine learning",
      "data science",
      "quantitative analysis",
    ],

    "Transportation, Distribution, and Logistics": [
      "transportation",
      "logistics",
      "supply chain",
      "warehouse",
      "fleet",
      "shipping",
      "inventory",
      "procurement",
      "international trade",
      "demand planning",
    ],

    "Other Services": [
      "service",
      "maintenance",
      "repair",
      "personal care",
      "beauty",
      "wellness",
      "cleaning",
      "landscaping",
      "hair styling",
      "pet grooming",
    ],
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const path = window.location.pathname;
    const decodedData = decodeURIComponent(
      path.split("/").pop().replace(/%20/g, " ")
    );

    setPathname(decodedData);
    setData(jobs[decodedData]); // Print the extracted data with spaces
    setCluster(career_clusters[decodedData]);
  }, []);
  console.log(Data);

  return (
    <motion.div >
      <div className="job_heading">
        <motion.h1 initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}>{Pathname} </motion.h1>
        {/* <span>Top Skills: </span> */}
        {Cluster?.map((keyword, index) => (
          <>
            <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
              key={index}
              style={{ textDecoration: "underline", marginRight: "8px", color: '#b24020', fontSize: '20px' }}
            >
              {keyword}{" "}
            </motion.span>
          </>
        ))}
      </div>
      <div className="main">
        <div className="job_desc">
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
            className="job_image"
            style={{
              backgroundImage: `url(${jobTypeImages[Pathname]})`,
              width: "100%",
              height: "480px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
          {Data?.map((job, index) => {
            const requirements = job.requirements.split("_");
            return (
              <motion.div
              initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5, delay: index * 0.2 }}
              className="job-container">
                <h1>Job Number: {job.job_num}</h1>
                <hr />
                <h4>Summary: {job.summary}</h4>
                <p>
                  Requirements:
                  {requirements.map((requirement, index) => (
                    <React.Fragment key={index}>
                      <br />
                      {requirement}
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default JobDescription;
