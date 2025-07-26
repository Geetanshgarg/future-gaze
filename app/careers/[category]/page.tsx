"use client"

import { useState } from "react"
import { useParams } from "next/navigation"

interface Career {
  id: string
  title: string
  description: string
  averageSalary: string
  growthRate: string
  demandLevel: "High" | "Medium" | "Low"
  educationRequired: string
  skills: string[]
  workEnvironment: string
  jobOutlook: string
  matchScore?: number
}

interface CareerCategory {
  name: string
  description: string
  totalCareers: number
  careers: Career[]
}

export default function CareerCategoryPage() {
  const params = useParams()
  const category = params.category as string
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("relevance")
  const [filterBy, setFilterBy] = useState("all")

  // Mock data - in a real app, this would come from an API
  const categoryData: Record<string, CareerCategory> = {
    technology: {
      name: "Technology",
      description: "Explore cutting-edge careers in software, AI, cybersecurity, and more",
      totalCareers: 50,
      careers: [
        {
          id: "1",
          title: "Software Engineer",
          description: "Design, develop, and maintain software applications and systems",
          averageSalary: "₹8-25 LPA",
          growthRate: "15% annually",
          demandLevel: "High",
          educationRequired: "Bachelor's in Computer Science or related field",
          skills: ["Programming", "Problem Solving", "System Design", "Debugging"],
          workEnvironment: "Office/Remote",
          jobOutlook: "Excellent - High demand across industries",
          matchScore: 94
        },
        {
          id: "2",
          title: "Data Scientist",
          description: "Analyze complex data to help organizations make informed decisions",
          averageSalary: "₹10-30 LPA",
          growthRate: "22% annually",
          demandLevel: "High",
          educationRequired: "Bachelor's/Master's in Data Science, Statistics, or related field",
          skills: ["Statistics", "Machine Learning", "Python/R", "Data Visualization"],
          workEnvironment: "Office/Remote",
          jobOutlook: "Excellent - Rapidly growing field",
          matchScore: 89
        },
        {
          id: "3",
          title: "Cybersecurity Analyst",
          description: "Protect organizations from cyber threats and security breaches",
          averageSalary: "₹6-20 LPA",
          growthRate: "18% annually",
          demandLevel: "High",
          educationRequired: "Bachelor's in Cybersecurity, IT, or related field",
          skills: ["Network Security", "Risk Assessment", "Incident Response", "Ethical Hacking"],
          workEnvironment: "Office",
          jobOutlook: "Excellent - Critical need across all sectors",
          matchScore: 85
        },
        {
          id: "4",
          title: "UX/UI Designer",
          description: "Create intuitive and engaging user experiences for digital products",
          averageSalary: "₹5-18 LPA",
          growthRate: "12% annually",
          demandLevel: "High",
          educationRequired: "Bachelor's in Design, HCI, or related field",
          skills: ["Design Thinking", "Prototyping", "User Research", "Visual Design"],
          workEnvironment: "Office/Remote",
          jobOutlook: "Very Good - Growing importance of user experience",
          matchScore: 82
        },
        {
          id: "5",
          title: "DevOps Engineer",
          description: "Bridge development and operations to streamline software delivery",
          averageSalary: "₹8-22 LPA",
          growthRate: "20% annually",
          demandLevel: "High",
          educationRequired: "Bachelor's in Computer Science or related field",
          skills: ["Cloud Platforms", "Automation", "CI/CD", "Infrastructure Management"],
          workEnvironment: "Office/Remote",
          jobOutlook: "Excellent - Essential for modern software development",
          matchScore: 87
        }
      ]
    },
    healthcare: {
      name: "Healthcare",
      description: "Make a difference in people's lives through medical and healthcare careers",
      totalCareers: 30,
      careers: [
        {
          id: "1",
          title: "Medical Doctor",
          description: "Diagnose and treat patients across various medical specialties",
          averageSalary: "₹10-50 LPA",
          growthRate: "12% annually",
          demandLevel: "High",
          educationRequired: "MBBS + Specialization",
          skills: ["Medical Knowledge", "Patient Care", "Communication", "Critical Thinking"],
          workEnvironment: "Hospital/Clinic",
          jobOutlook: "Excellent - Always in demand",
          matchScore: 92
        },
        {
          id: "2",
          title: "Nurse Practitioner",
          description: "Provide advanced nursing care and patient treatment",
          averageSalary: "₹4-12 LPA",
          growthRate: "16% annually",
          demandLevel: "High",
          educationRequired: "Bachelor's/Master's in Nursing",
          skills: ["Patient Care", "Medical Procedures", "Communication", "Empathy"],
          workEnvironment: "Hospital/Clinic",
          jobOutlook: "Excellent - Growing healthcare needs",
          matchScore: 88
        }
      ]
