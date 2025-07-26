"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Download,
  Share2,
  Sparkles,
  ExternalLink,
  CheckCircle,
  BookOpen,
  Target,
  Users,
  TrendingUp,
  Award,
  Brain,
  Compass,
  Star,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  Lightbulb,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

interface CareerMatch {
  title: string
  icon: string
  matchPercentage: number
  description: string
  whyMatch: string[]
  salaryRange: string
  growthRate: string
  demandLevel: "High" | "Medium" | "Low"
}

interface College {
  name: string
  course: string
  ranking: string
  fees: string
  location: string
  admissionRate: string
  link: string
  matchScore: number
}

interface ActionStep {
  title: string
  description: string
  timeline: string
  priority: "High" | "Medium" | "Low"
  category: "Education" | "Skills" | "Experience" | "Networking"
  completed?: boolean
}

export default function ResultsPage() {
  const [formData, setFormData] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load form data from localStorage
    const savedData = localStorage.getItem("futureGazeFormData")
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
    setIsLoading(false)
  }, [])

  // Enhanced career matching algorithm
  const generateCareerRecommendations = (): CareerMatch[] => {
    if (!formData) return []

    const recommendations: CareerMatch[] = []
    const { skills, interests, stream, performance } = formData

    // Technology careers
    if (skills.includes("Programming") || interests.includes("Technology")) {
      recommendations.push({
        title: "Software Engineer / Full-Stack Developer",
        icon: "💻",
        matchPercentage: 94,
        description: "Build innovative software solutions and applications that impact millions of users worldwide.",
        whyMatch: [
          "Strong programming and analytical skills",
          "High interest in technology and problem-solving",
          "Good academic performance in relevant subjects",
          "Leadership qualities valuable for team projects",
        ],
        salaryRange: "₹8-25 LPA",
        growthRate: "15% annually",
        demandLevel: "High",
      })
    }

    // Healthcare careers
    if (stream === "medical" || interests.includes("Healthcare")) {
      recommendations.push({
        title: "Medical Doctor / Specialist",
        icon: "🏥",
        matchPercentage: 89,
        description: "Diagnose, treat, and care for patients while making a meaningful impact on people's lives.",
        whyMatch: [
          "Strong academic background in medical sciences",
          "Genuine interest in healthcare and helping others",
          "Good communication and empathy skills",
          "Dedication to continuous learning",
        ],
        salaryRange: "₹10-50 LPA",
        growthRate: "12% annually",
        demandLevel: "High",
      })
    }

    // Business careers
    if (interests.includes("Business") || skills.includes("Leadership")) {
      recommendations.push({
        title: "Business Analyst / Consultant",
        icon: "💼",
        matchPercentage: 87,
        description: "Analyze business processes and provide strategic recommendations to drive growth.",
        whyMatch: [
          "Strong analytical and problem-solving skills",
          "Interest in business and strategy",
          "Good communication and presentation abilities",
          "Leadership potential",
        ],
        salaryRange: "₹6-20 LPA",
        growthRate: "10% annually",
        demandLevel: "High",
      })
    }

    // Default recommendation if no specific matches
    if (recommendations.length === 0) {
      recommendations.push({
        title: "Data Analyst",
        icon: "📊",
        matchPercentage: 82,
        description: "Transform raw data into actionable insights that drive business decisions.",
        whyMatch: [
          "Strong analytical thinking abilities",
          "Good with numbers and patterns",
          "Detail-oriented approach",
          "Growing field with high demand",
        ],
        salaryRange: "₹5-15 LPA",
        growthRate: "20% annually",
        demandLevel: "High",
      })
    }

    return recommendations.slice(0, 3) // Return top 3 matches
  }

  const generateCollegeRecommendations = (): College[] => {
    const colleges: College[] = [
      {
        name: "Indian Institute of Technology (IIT) Delhi",
        course: "B.Tech Computer Science",
        ranking: "#1 Engineering College",
        fees: "₹2.5L per year",
        location: "New Delhi",
        admissionRate: "2.5%",
        link: "#",
        matchScore: 95,
      },
      {
        name: "Birla Institute of Technology and Science (BITS) Pilani",
        course: "B.E. Computer Science",
        ranking: "#3 Private Engineering College",
        fees: "₹4.5L per year",
        location: "Pilani, Rajasthan",
        admissionRate: "8%",
        link: "#",
        matchScore: 92,
      },
      {
        name: "Delhi Technological University (DTU)",
        course: "B.Tech Software Engineering",
        ranking: "#5 State Engineering College",
        fees: "₹1.5L per year",
        location: "New Delhi",
        admissionRate: "12%",
        link: "#",
        matchScore: 88,
      },
      {
        name: "Vellore Institute of Technology (VIT)",
        course: "B.Tech Information Technology",
        ranking: "#8 Private Engineering College",
        fees: "₹3.2L per year",
        location: "Vellore, Tamil Nadu",
        admissionRate: "15%",
        link: "#",
        matchScore: 85,
      },
      {
        name: "Manipal Institute of Technology",
        course: "B.Tech Computer Engineering",
        ranking: "#12 Private Engineering College",
        fees: "₹3.8L per year",
        location: "Manipal, Karnataka",
        admissionRate: "18%",
        link: "#",
        matchScore: 82,
      },
    ]

    return colleges.sort((a, b) => b.matchScore - a.matchScore)
  }

  const generateActionPlan = (): ActionStep[] => {
    const steps: ActionStep[] = [
      {
        title: "Prepare for JEE Main & Advanced",
        description:
          "Focus on Physics, Chemistry, and Mathematics. Join coaching or online courses. Target score: 95+ percentile",
        timeline: "Next 6 months",
        priority: "High",
        category: "Education",
      },
      {
        title: "Master Programming Fundamentals",
        description: "Learn Python, Java, and data structures. Complete online courses and build projects",
        timeline: "3-4 months",
        priority: "High",
        category: "Skills",
      },
      {
        title: "Build a Strong Portfolio",
        description: "Create GitHub profile, develop 3-5 projects, contribute to open source",
        timeline: "Ongoing",
        priority: "Medium",
        category: "Experience",
      },
      {
        title: "Develop Problem-Solving Skills",
        description: "Practice coding problems on LeetCode, HackerRank, and CodeChef daily",
        timeline: "Daily practice",
        priority: "High",
        category: "Skills",
      },
      {
        title: "Network with Industry Professionals",
        description: "Join tech communities, attend webinars, connect on LinkedIn",
        timeline: "2-3 months",
        priority: "Medium",
        category: "Networking",
      },
      {
        title: "Gain Practical Experience",
        description: "Apply for internships, participate in hackathons, freelance projects",
        timeline: "6-12 months",
        priority: "Medium",
        category: "Experience",
      },
    ]

    return steps
  }

  const careerRecommendations = generateCareerRecommendations()
  const colleges = generateCollegeRecommendations()
  const actionSteps = generateActionPlan()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Your Profile...</h2>
          <p className="text-gray-600">Our AI is crafting your personalized career roadmap</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Enhanced Header */}
      <div className="border-b bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Future Gaze
            </span>
          </Link>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm" className="shadow-sm bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" size="sm" className="shadow-sm bg-transparent">
              <Share2 className="w-4 h-4 mr-2" />
              Share Results
            </Button>
            <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-sm">
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Your Career Path Revealed!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Based on your unique profile, here's your personalized roadmap to success
          </p>
          {formData && (
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>Generated for {formData.name}</span>
              <span>•</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          )}
        </div>

        {/* Enhanced Results with Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white shadow-sm">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="colleges" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Colleges</span>
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="flex items-center space-x-2">
              <Compass className="w-4 h-4" />
              <span>Roadmap</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center space-x-2">
              <Brain className="w-4 h-4" />
              <span>Insights</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Career Recommendations */}
            <div className="grid gap-8">
              {careerRecommendations.map((career, index) => (
                <Card key={index} className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                  <CardHeader
                    className={`${index === 0 ? "bg-gradient-to-r from-blue-50 to-purple-50" : "bg-gray-50"} border-b`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{career.icon}</div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{career.title}</CardTitle>
                          {index === 0 && <Badge className="bg-green-100 text-green-800 border-0">Best Match</Badge>}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-600 mb-1">{career.matchPercentage}%</div>
                        <div className="text-sm text-gray-500">Match Score</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">{career.description}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-gray-900 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          Why this matches you:
                        </h4>
                        <ul className="space-y-3">
                          {career.whyMatch.map((reason, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-5 h-5 text-green-600" />
                            <span className="font-medium">Salary Range</span>
                          </div>
                          <span className="font-bold text-green-700">{career.salaryRange}</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            <span className="font-medium">Growth Rate</span>
                          </div>
                          <span className="font-bold text-blue-700">{career.growthRate}</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Award className="w-5 h-5 text-purple-600" />
                            <span className="font-medium">Demand Level</span>
                          </div>
                          <Badge variant={career.demandLevel === "High" ? "default" : "secondary"}>
                            {career.demandLevel}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Colleges Tab */}
          <TabsContent value="colleges" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Recommended Colleges</h2>
              <p className="text-lg text-gray-600">Institutions that align with your career goals and profile</p>
            </div>

            <div className="grid gap-6">
              {colleges.map((college, index) => (
                <Card
                  key={index}
                  className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-bold text-xl text-gray-900">{college.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {college.ranking}
                          </Badge>
                        </div>
                        <p className="text-blue-600 font-semibold text-lg mb-2">{college.course}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">{college.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">{college.fees}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">{college.admissionRate} admission rate</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-gray-600">{college.matchScore}% match</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{college.matchScore}%</div>
                          <div className="text-xs text-gray-500">Match Score</div>
                        </div>
                        <Button variant="outline" size="sm">
                          Learn More <ExternalLink className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                    <Progress value={college.matchScore} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Your Action Roadmap</h2>
              <p className="text-lg text-gray-600">Step-by-step plan to achieve your career goals</p>
            </div>

            <div className="grid gap-6">
              {actionSteps.map((step, index) => (
                <Card key={index} className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.priority === "High"
                            ? "bg-red-100 text-red-600"
                            : step.priority === "Medium"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-green-100 text-green-600"
                        }`}
                      >
                        {step.category === "Education" && <BookOpen className="w-6 h-6" />}
                        {step.category === "Skills" && <Brain className="w-6 h-6" />}
                        {step.category === "Experience" && <Award className="w-6 h-6" />}
                        {step.category === "Networking" && <Users className="w-6 h-6" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={
                                step.priority === "High"
                                  ? "destructive"
                                  : step.priority === "Medium"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {step.priority} Priority
                            </Badge>
                            <Badge variant="outline">{step.category}</Badge>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">{step.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{step.timeline}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Career Insights</h2>
              <p className="text-lg text-gray-600">Data-driven insights about your career path</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <span>Market Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span>Job Growth Rate</span>
                      <span className="font-bold text-green-600">+15% annually</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span>Average Salary Increase</span>
                      <span className="font-bold text-blue-600">12% per year</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span>Remote Work Opportunities</span>
                      <span className="font-bold text-purple-600">85% of roles</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="w-6 h-6 text-yellow-600" />
                    <span>Skill Recommendations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Python Programming",
                      "Data Analysis",
                      "Machine Learning",
                      "Cloud Computing",
                      "Project Management",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span>{skill}</span>
                        <Badge variant="outline">High Demand</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-green-600" />
                  <span>Timeline Projection</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { period: "Next 6 months", goals: "Complete entrance exam preparation, build foundational skills" },
                    { period: "Year 1-2", goals: "College admission, core subject mastery, first internship" },
                    { period: "Year 3-4", goals: "Specialization, advanced projects, industry connections" },
                    { period: "Year 4+", goals: "Job placement, career growth, continuous learning" },
                  ].map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{phase.period}</h4>
                        <p className="text-gray-600">{phase.goals}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Enhanced CTA Section */}
        <Card className="mt-12 shadow-2xl border-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
          <CardContent className="p-12 text-center relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Your personalized roadmap is ready. Take the first step towards your dream career today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Complete Report
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  asChild
                >
                  <Link href="/dashboard">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Track Progress
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  asChild
                >
                  <Link href="/form">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Take Another Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
