"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Users,
  Target,
  BookOpen,
  Sparkles,
  Github,
  Mail,
  Play,
  Star,
  TrendingUp,
  Brain,
  Compass,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Engineering Student",
      content: "Future Gaze helped me discover my passion for AI and guided me to the perfect college program!",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      role: "12th Grade Student",
      content: "The personalized roadmap made choosing my career path so much clearer. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      role: "College Graduate",
      content: "Thanks to Future Gaze, I found my dream job in data science. The action steps were spot-on!",
      rating: 5,
    },
  ]

  const careerPaths = [
    { name: "Technology", icon: "💻", count: "50+ careers", color: "from-blue-500 to-cyan-500" },
    { name: "Healthcare", icon: "🏥", count: "30+ careers", color: "from-green-500 to-emerald-500" },
    { name: "Business", icon: "💼", count: "40+ careers", color: "from-purple-500 to-violet-500" },
    { name: "Creative Arts", icon: "🎨", count: "25+ careers", color: "from-pink-500 to-rose-500" },
    { name: "Engineering", icon: "⚙️", count: "35+ careers", color: "from-orange-500 to-amber-500" },
    { name: "Education", icon: "📚", count: "20+ careers", color: "from-indigo-500 to-blue-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Enhanced Header */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Future Gaze
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              About
            </Link>
            <Link href="#careers" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Explore Careers
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              How It Works
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Dashboard
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/form">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>
        <div className="container mx-auto text-center relative z-10">
          <div
            className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 px-4 py-2 text-sm font-medium">
              🚀 AI-Powered Career Guidance
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Find Your Path with Future Gaze
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Smart career guidance tailored to your skills, stream, and goals. Join 10,000+ students who discovered
              their perfect career path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
                asChild
              >
                <Link href="/form">
                  Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 border-2 hover:bg-gray-50 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="#demo">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600">Students Guided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-gray-600">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Partner Colleges</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <Image
                src="/placeholder.svg?height=500&width=900"
                alt="Future Gaze Platform Preview"
                width={900}
                height={500}
                className="mx-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Exploration Section */}
      <section id="careers" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Explore Career Paths</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover opportunities across diverse industries and find the perfect match for your interests and skills.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPaths.map((path, index) => (
              <Link key={index} href={`/careers/${path.name.toLowerCase().replace(" ", "-")}`}>
                <Card className="group cursor-pointer bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-2xl">{path.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {path.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{path.count}</p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Explore <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800 border-0">The Problem</Badge>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">From Confusion to Clarity</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Every year, millions of students face the overwhelming challenge of choosing the right career path.
                  Traditional guidance often lacks personalization and fails to consider individual strengths,
                  interests, and market realities.
                </p>
              </div>

              <div>
                <Badge className="mb-4 bg-green-100 text-green-800 border-0">Our Solution</Badge>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Future Gaze changes this by providing AI-powered, personalized career recommendations based on your
                  unique profile, skills, and aspirations. We help you make informed decisions about your future.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Brain, title: "AI-Powered Matching", desc: "Advanced algorithms analyze your profile" },
                  { icon: Target, title: "Personalized Results", desc: "Tailored recommendations just for you" },
                  { icon: BookOpen, title: "College Guidance", desc: "Find the perfect educational path" },
                  { icon: TrendingUp, title: "Career Growth", desc: "Plan your long-term success" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-3xl blur-2xl"></div>
              <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Career Guidance Illustration"
                  width={600}
                  height={600}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to discover your ideal career path with our AI-powered guidance system
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Select Your Stage", desc: "Choose your current educational stage", step: "01" },
              {
                icon: BookOpen,
                title: "Share Your Details",
                desc: "Tell us about your skills and interests",
                step: "02",
              },
              { icon: Brain, title: "AI Analysis", desc: "Our AI analyzes your profile for matches", step: "03" },
              {
                icon: Target,
                title: "Get Your Roadmap",
                desc: "Receive personalized career recommendations",
                step: "04",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              >
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">What Students Say</h2>
            <p className="text-xl text-gray-600">Real stories from students who found their path</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl p-8">
              <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonials[activeTestimonial].name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need for smart career planning and growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Dynamic Forms",
                desc: "Adaptive questionnaires that adjust based on your profile",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Brain,
                title: "AI-Powered Matching",
                desc: "Advanced algorithms that understand your unique strengths",
                color: "from-purple-500 to-violet-500",
              },
              {
                icon: Target,
                title: "Skill-Aware Recommendations",
                desc: "Suggestions that consider your abilities and growth potential",
                color: "from-pink-500 to-rose-500",
              },
              {
                icon: Users,
                title: "College Suggestions",
                desc: "Curated list of institutions that align with your goals",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: TrendingUp,
                title: "Progress Tracking",
                desc: "Monitor your career development journey over time",
                color: "from-orange-500 to-amber-500",
              },
              {
                icon: Compass,
                title: "Career Exploration",
                desc: "Discover new opportunities and alternative paths",
                color: "from-indigo-500 to-blue-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-white">Ready to Discover Your Future?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students who have found their path with Future Gaze. Start your journey today and unlock
            your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-6 bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              asChild
            >
              <Link href="/form">
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transition-all duration-300"
              asChild
            >
              <Link href="/dashboard">
                View Dashboard <TrendingUp className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Future Gaze</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Smart career guidance for the next generation. Empowering students to make informed decisions about
                their future.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 mb-4">
                <Mail className="w-5 h-5" />
                <span>hello@futuregaze.com</span>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Career Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Future Gaze. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
