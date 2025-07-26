"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle, AlertCircle, Brain, Target } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

type UserStage = "school" | "12th-pass" | "college" | ""

interface FormData {
  stage: UserStage
  name: string
  age: string
  email: string
  phone: string
  class10Marks: string
  class12Marks?: string
  stream: string
  currentCourse?: string
  skills: string[]
  interests: string[]
  careerGoals: string
  examResults?: string
  performance?: number[]
  goalShift?: string
  preferredLocation: string
  budgetRange: string
  timeCommitment: string
  learningStyle: string
}

export default function FormPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<FormData>({
    stage: "",
    name: "",
    age: "",
    email: "",
    phone: "",
    class10Marks: "",
    stream: "",
    skills: [],
    interests: [],
    careerGoals: "",
    performance: [75],
    preferredLocation: "",
    budgetRange: "",
    timeCommitment: "",
    learningStyle: "",
  })

  const getSteps = () => {
    const baseSteps = ["Stage Selection", "Personal Info", "Contact Details"]

    switch (formData.stage) {
      case "school":
        return [...baseSteps, "Academic Details", "Skills & Interests", "Preferences", "Goals"]
      case "12th-pass":
        return [...baseSteps, "Academic Details", "Exam Results", "Skills & Interests", "Preferences", "Goals"]
      case "college":
        return [
          ...baseSteps,
          "Academic Details",
          "Current Performance",
          "Skills & Interests",
          "Preferences",
          "Goals & Changes",
        ]
      default:
        return baseSteps
    }
  }

  const steps = getSteps()
  const progress = ((currentStep + 1) / steps.length) * 100

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    switch (currentStep) {
      case 0:
        if (!formData.stage) newErrors.stage = "Please select your current stage"
        break
      case 1:
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.age) newErrors.age = "Age is required"
        break
      case 2:
        if (!formData.email.trim()) newErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
        break
      case 3:
        if (!formData.class10Marks) newErrors.class10Marks = "10th marks are required"
        if (!formData.stream) newErrors.stream = "Stream selection is required"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (!validateStep()) return

    setIsAnimating(true)
    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        // Save form data and navigate to results
        localStorage.setItem("futureGazeFormData", JSON.stringify(formData))
        router.push("/results")
      }
      setIsAnimating(false)
    }, 300)
  }

  const handlePrevious = () => {
    setIsAnimating(true)
    setTimeout(() => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1)
      }
      setIsAnimating(false)
    }, 300)
  }

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
    }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const renderStepContent = () => {
    const content = (() => {
      switch (currentStep) {
        case 0: // Stage Selection
          return (
            <div className="space-y-8">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">What's your current stage?</h2>
                <p className="text-gray-600 text-lg">This helps us customize the perfect guidance for you</p>
              </div>
              <RadioGroup
                value={formData.stage}
                onValueChange={(value: UserStage) => setFormData((prev) => ({ ...prev, stage: value }))}
                className="space-y-4"
              >
                {[
                  {
                    value: "school",
                    title: "School Student (10th/11th/12th)",
                    desc: "Currently studying in school",
                    icon: "🎓",
                  },
                  {
                    value: "12th-pass",
                    title: "12th Pass",
                    desc: "Completed 12th grade, looking for next steps",
                    icon: "📚",
                  },
                  {
                    value: "college",
                    title: "College Student",
                    desc: "Currently pursuing undergraduate/graduate studies",
                    icon: "🏛️",
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    className={`flex items-center space-x-4 p-6 border-2 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer ${formData.stage === option.value ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <div className="text-3xl">{option.icon}</div>
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      <div className="font-semibold text-lg text-gray-900">{option.title}</div>
                      <div className="text-gray-600">{option.desc}</div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {errors.stage && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>{errors.stage}</span>
                </div>
              )}
            </div>
          )

        case 1: // Personal Info
          return (
            <div className="space-y-8">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👋</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Tell us about yourself</h2>
                <p className="text-gray-600 text-lg">Basic information to personalize your experience</p>
              </div>
              <div className="grid gap-6">
                <div>
                  <Label htmlFor="name" className="text-lg font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    className={`mt-2 h-12 text-lg ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="age" className="text-lg font-medium">
                    Age *
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
                    placeholder="Enter your age"
                    className={`mt-2 h-12 text-lg ${errors.age ? "border-red-500" : ""}`}
                  />
                  {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age}</p>}
                </div>
              </div>
            </div>
          )

        case 2: // Contact Details
          return (
            <div className="space-y-8">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Information</h2>
                <p className="text-gray-600 text-lg">We'll use this to send your personalized career report</p>
              </div>
              <div className="grid gap-6">
                <div>
                  <Label htmlFor="email" className="text-lg font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email address"
                    className={`mt-2 h-12 text-lg ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-lg font-medium">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter your phone number"
                    className="mt-2 h-12 text-lg"
                  />
                </div>
              </div>
            </div>
          )

        case 3: // Academic Details
          return (
            <div className="space-y-8">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Academic Background</h2>
                <p className="text-gray-600 text-lg">Your educational journey so far</p>
              </div>
              <div className="grid gap-6">
                <div>
                  <Label htmlFor="class10" className="text-lg font-medium">
                    Class 10th Marks (%) *
                  </Label>
                  <Input
                    id="class10"
                    type="number"
                    value={formData.class10Marks}
                    onChange={(e) => setFormData((prev) => ({ ...prev, class10Marks: e.target.value }))}
                    placeholder="Enter your 10th marks percentage"
                    className={`mt-2 h-12 text-lg ${errors.class10Marks ? "border-red-500" : ""}`}
                  />
                  {errors.class10Marks && <p className="text-red-600 text-sm mt-1">{errors.class10Marks}</p>}
                </div>

                {(formData.stage === "12th-pass" || formData.stage === "college") && (
                  <div>
                    <Label htmlFor="class12" className="text-lg font-medium">
                      Class 12th Marks (%)
                    </Label>
                    <Input
                      id="class12"
                      type="number"
                      value={formData.class12Marks || ""}
                      onChange={(e) => setFormData((prev) => ({ ...prev, class12Marks: e.target.value }))}
                      placeholder="Enter your 12th marks percentage"
                      className="mt-2 h-12 text-lg"
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="stream" className="text-lg font-medium">
                    Stream/Field *
                  </Label>
                  <Select
                    value={formData.stream}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, stream: value }))}
                  >
                    <SelectTrigger className={`mt-2 h-12 text-lg ${errors.stream ? "border-red-500" : ""}`}>
                      <SelectValue placeholder="Select your stream" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="science">Science (PCM/PCB)</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="arts">Arts/Humanities</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="medical">Medical</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.stream && <p className="text-red-600 text-sm mt-1">{errors.stream}</p>}
                </div>

                {formData.stage === "college" && (
                  <div>
                    <Label htmlFor="currentCourse" className="text-lg font-medium">
                      Current Course
                    </Label>
                    <Input
                      id="currentCourse"
                      value={formData.currentCourse || ""}
                      onChange={(e) => setFormData((prev) => ({ ...prev, currentCourse: e.target.value }))}
                      placeholder="e.g., B.Tech Computer Science"
                      className="mt-2 h-12 text-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          )

        case 4: // Exam Results or Current Performance
          if (formData.stage === "12th-pass") {
            return (
              <div className="space-y-8">
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Entrance Exam Results</h2>
                  <p className="text-gray-600 text-lg">Any competitive exams you've taken (Optional)</p>
                </div>
                <div>
                  <Label htmlFor="examResults" className="text-lg font-medium">
                    Exam Results
                  </Label>
                  <Textarea
                    id="examResults"
                    value={formData.examResults || ""}
                    onChange={(e) => setFormData((prev) => ({ ...prev, examResults: e.target.value }))}
                    placeholder="e.g., JEE Main: 85 percentile, NEET: 92 percentile, CAT: 95 percentile"
                    rows={6}
                    className="mt-2 text-lg"
                  />
                </div>
              </div>
            )
          } else if (formData.stage === "college") {
            return (
              <div className="space-y-8">
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Current Performance</h2>
                  <p className="text-gray-600 text-lg">How are you doing in your current course?</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <Label className="text-lg font-medium mb-4 block">
                    Overall Performance: {formData.performance?.[0]}%
                  </Label>
                  <Slider
                    value={formData.performance || [75]}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, performance: value }))}
                    max={100}
                    step={5}
                    className="mt-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Poor</span>
                    <span>Average</span>
                    <span>Excellent</span>
                  </div>
                </div>
              </div>
            )
          }
          return null

        case steps.length - 3: // Skills & Interests
          const skillOptions = [
            "Programming",
            "Mathematics",
            "Writing",
            "Public Speaking",
            "Leadership",
            "Problem Solving",
            "Creativity",
            "Analysis",
            "Communication",
            "Teamwork",
            "Research",
            "Design",
            "Sales",
            "Teaching",
            "Organization",
            "Critical Thinking",
            "Time Management",
            "Adaptability",
          ]

          const interestOptions = [
            "Technology",
            "Healthcare",
            "Business",
            "Education",
            "Arts",
            "Sports",
            "Environment",
            "Social Work",
            "Finance",
            "Media",
            "Science",
            "Travel",
            "Food",
            "Fashion",
            "Gaming",
            "Music",
            "Photography",
            "Writing",
          ]

          return (
            <div className="space-y-10">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Skills & Interests</h2>
                <p className="text-gray-600 text-lg">Select what describes you best (Choose 3-8 items each)</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <Label className="text-xl font-semibold text-gray-900">Your Skills</Label>
                  <Badge variant="outline" className="text-sm">
                    {formData.skills.length} selected
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skillOptions.map((skill) => (
                    <Button
                      key={skill}
                      variant={formData.skills.includes(skill) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSkillToggle(skill)}
                      className="justify-start h-12 text-left transition-all duration-200"
                    >
                      {formData.skills.includes(skill) && <CheckCircle className="w-4 h-4 mr-2" />}
                      {skill}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <Label className="text-xl font-semibold text-gray-900">Your Interests</Label>
                  <Badge variant="outline" className="text-sm">
                    {formData.interests.length} selected
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestOptions.map((interest) => (
                    <Button
                      key={interest}
                      variant={formData.interests.includes(interest) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleInterestToggle(interest)}
                      className="justify-start h-12 text-left transition-all duration-200"
                    >
                      {formData.interests.includes(interest) && <CheckCircle className="w-4 h-4 mr-2" />}
                      {interest}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )

        case steps.length - 2: // Preferences
          return (
            <div className="space-y-8">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Your Preferences</h2>
                <p className="text-gray-600 text-lg">Help us tailor recommendations to your lifestyle</p>
              </div>
              <div className="grid gap-6">
                <div>
                  <Label className="text-lg font-medium">Preferred Location</Label>
                  <Select
                    value={formData.preferredLocation}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredLocation: value }))}
                  >
                    <SelectTrigger className="mt-2 h-12 text-lg">
                      <SelectValue placeholder="Select preferred location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metro">Metro Cities (Mumbai, Delhi, Bangalore)</SelectItem>
                      <SelectItem value="tier2">Tier 2 Cities (Pune, Hyderabad, Chennai)</SelectItem>
                      <SelectItem value="hometown">Hometown/Local Area</SelectItem>
                      <SelectItem value="abroad">International</SelectItem>
                      <SelectItem value="flexible">Flexible/Open to relocate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-lg font-medium">Budget Range (Annual)</Label>
                  <Select
                    value={formData.budgetRange}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, budgetRange: value }))}
                  >
                    <SelectTrigger className="mt-2 h-12 text-lg">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Under ₹2 Lakhs</SelectItem>
                      <SelectItem value="medium">₹2-5 Lakhs</SelectItem>
                      <SelectItem value="high">₹5-10 Lakhs</SelectItem>
                      <SelectItem value="premium">Above ₹10 Lakhs</SelectItem>
                      <SelectItem value="flexible">Budget is flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-lg font-medium">Time Commitment</Label>
                  <Select
                    value={formData.timeCommitment}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, timeCommitment: value }))}
                  >
                    <SelectTrigger className="mt-2 h-12 text-lg">
                      <SelectValue placeholder="Select time commitment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short-term (6 months - 1 year)</SelectItem>
                      <SelectItem value="medium">Medium-term (2-3 years)</SelectItem>
                      <SelectItem value="long">Long-term (4+ years)</SelectItem>
                      <SelectItem value="flexible">Flexible timeline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-lg font-medium">Learning Style</Label>
                  <Select
                    value={formData.learningStyle}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, learningStyle: value }))}
                  >
                    <SelectTrigger className="mt-2 h-12 text-lg">
                      <SelectValue placeholder="Select learning style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="visual">Visual (diagrams, charts, videos)</SelectItem>
                      <SelectItem value="auditory">Auditory (lectures, discussions)</SelectItem>
                      <SelectItem value="kinesthetic">Hands-on (practical, experiments)</SelectItem>
                      <SelectItem value="reading">Reading/Writing focused</SelectItem>
                      <SelectItem value="mixed">Mixed approach</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )

        case steps.length - 1: // Goals
          return (
            <div className="space-y-8">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  {formData.stage === "college" ? "Goals & Changes" : "Career Goals"}
                </h2>
                <p className="text-gray-600 text-lg">Tell us about your aspirations and dreams</p>
              </div>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="careerGoals" className="text-lg font-medium">
                    Career Goals & Aspirations
                  </Label>
                  <Textarea
                    id="careerGoals"
                    value={formData.careerGoals}
                    onChange={(e) => setFormData((prev) => ({ ...prev, careerGoals: e.target.value }))}
                    placeholder="Describe your career aspirations, what you want to achieve, and what success looks like to you..."
                    rows={6}
                    className="mt-2 text-lg"
                  />
                </div>

                {formData.stage === "college" && (
                  <div>
                    <Label htmlFor="goalShift" className="text-lg font-medium">
                      Any Goal Changes?
                    </Label>
                    <Textarea
                      id="goalShift"
                      value={formData.goalShift || ""}
                      onChange={(e) => setFormData((prev) => ({ ...prev, goalShift: e.target.value }))}
                      placeholder="Are you considering changing your career path? If so, what's driving this change?"
                      rows={4}
                      className="mt-2 text-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          )

        default:
          return null
      }
    })()

    return (
      <div
        className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
      >
        {content}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      {/* Enhanced Header */}
      <div className="container mx-auto mb-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Future Gaze
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-sm">
              Step {currentStep + 1} of {steps.length}
            </Badge>
            <div className="text-sm text-gray-500">{Math.round(progress)}% Complete</div>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="container mx-auto mb-8">
        <div className="relative">
          <Progress value={progress} className="h-3 bg-gray-200" />
          <div
            className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          {steps.map((step, index) => (
            <span key={index} className={`${index <= currentStep ? "text-blue-600 font-medium" : ""}`}>
              {step}
            </span>
          ))}
        </div>
      </div>

      {/* Enhanced Form Card */}
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
            <CardTitle className="text-center text-2xl text-gray-900 flex items-center justify-center space-x-2">
              <span>{steps[currentStep]}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            {renderStepContent()}

            {/* Enhanced Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="flex items-center space-x-2 px-6 py-3 text-lg bg-transparent hover:bg-gray-50 disabled:opacity-50"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Previous</span>
              </Button>

              <Button
                onClick={handleNext}
                className="flex items-center space-x-2 px-8 py-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>{currentStep === steps.length - 1 ? "Get My Results" : "Next"}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
