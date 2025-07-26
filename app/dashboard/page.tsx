"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import {
  Sparkles,
  TrendingUp,
  Target,
  Users,
  CalendarIcon,
  Bell,
  Settings,
  Plus,
  CheckCircle,
  Clock,
  Star,
  Brain,
  Compass,
  Trophy,
  Zap,
  BarChart3,
  Activity,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

interface UserProgress {
  completedSteps: number
  totalSteps: number
  currentGoal: string
  streak: number
  points: number
  level: number
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  date?: string
}

interface Activity {
  id: string
  type: "assessment" | "goal" | "achievement" | "milestone"
  title: string
  description: string
  date: string
  icon: any
}

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedSteps: 8,
    totalSteps: 15,
    currentGoal: "Complete JEE preparation",
    streak: 12,
    points: 2450,
    level: 3,
  })

  const achievements: Achievement[] = [
    {
      id: "1",
      title: "First Assessment",
      description: "Completed your first career assessment",
      icon: "🎯",
      unlocked: true,
      date: "2024-01-15",
    },
    {
      id: "2",
      title: "Goal Setter",
      description: "Set your first career goal",
      icon: "🎪",
      unlocked: true,
      date: "2024-01-16",
    },
    {
      id: "3",
      title: "Skill Builder",
      description: "Completed 5 skill-building activities",
      icon: "🛠️",
      unlocked: true,
      date: "2024-01-20",
    },
    {
      id: "4",
      title: "Networking Pro",
      description: "Connected with 10 industry professionals",
      icon: "🤝",
      unlocked: false,
    },
    {
      id: "5",
      title: "Knowledge Seeker",
      description: "Read 20 career articles",
      icon: "📚",
      unlocked: false,
    },
  ]

  const recentActivities: Activity[] = [
    {
      id: "1",
      type: "achievement",
      title: "Achievement Unlocked!",
      description: "Earned 'Skill Builder' badge",
      date: "2 hours ago",
      icon: Trophy,
    },
    {
      id: "2",
      type: "goal",
      title: "Goal Progress",
      description: "Completed Python basics course",
      date: "1 day ago",
      icon: Target,
    },
    {
      id: "3",
      type: "assessment",
      title: "New Assessment",
      description: "Completed skills reassessment",
      date: "3 days ago",
      icon: Brain,
    },
    {
      id: "4",
      type: "milestone",
      title: "Milestone Reached",
      description: "Reached Level 3 in your journey",
      date: "1 week ago",
      icon: Star,
    },
  ]

  const upcomingTasks = [
    { id: "1", title: "Complete Data Structures course", dueDate: "Tomorrow", priority: "High" },
    { id: "2", title: "Apply to summer internships", dueDate: "This week", priority: "High" },
    { id: "3", title: "Update LinkedIn profile", dueDate: "Next week", priority: "Medium" },
    { id: "4", title: "Practice coding problems", dueDate: "Daily", priority: "Medium" },
  ]

  const skillProgress = [
    { skill: "Programming", progress: 75, target: 90 },
    { skill: "Problem Solving", progress: 85, target: 95 },
    { skill: "Communication", progress: 60, target: 80 },
    { skill: "Leadership", progress: 45, target: 70 },
  ]

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
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Avatar>
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, John! 👋</h1>
              <p className="text-xl text-gray-600">Ready to continue your career journey?</p>
            </div>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
              <Link href="/form">
                <Plus className="w-5 h-5 mr-2" />
                New Assessment
              </Link>
            </Button>
          </div>

          {/* Progress Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 mb-1">Current Level</p>
                    <p className="text-3xl font-bold">{userProgress.level}</p>
                  </div>
                  <Zap className="w-8 h-8 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 mb-1">Points Earned</p>
                    <p className="text-3xl font-bold">{userProgress.points.toLocaleString()}</p>
                  </div>
                  <Star className="w-8 h-8 text-green-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 mb-1">Day Streak</p>
                    <p className="text-3xl font-bold">{userProgress.streak}</p>
                  </div>
                  <Activity className="w-8 h-8 text-purple-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 mb-1">Progress</p>
                    <p className="text-3xl font-bold">
                      {Math.round((userProgress.completedSteps / userProgress.totalSteps) * 100)}%
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-orange-200" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Current Progress */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="w-6 h-6 text-blue-600" />
                      <span>Current Goal Progress</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{userProgress.currentGoal}</h3>
                        <Badge variant="outline">
                          {userProgress.completedSteps}/{userProgress.totalSteps} steps
                        </Badge>
                      </div>
                      <Progress value={(userProgress.completedSteps / userProgress.totalSteps) * 100} className="h-3" />
                      <p className="text-gray-600">You're making great progress! Keep up the momentum.</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Tasks */}
                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-6 h-6 text-purple-600" />
                      <span>Upcoming Tasks</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingTasks.map((task) => (
                        <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">{task.title}</h4>
                            <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
                          </div>
                          <Badge variant={task.priority === "High" ? "destructive" : "secondary"}>
                            {task.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="w-6 h-6 text-green-600" />
                      <span>Recent Activity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <activity.icon className="w-5 h-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{activity.title}</h4>
                            <p className="text-sm text-gray-600">{activity.description}</p>
                            <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Calendar */}
                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CalendarIcon className="w-6 h-6 text-indigo-600" />
                      <span>Calendar</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                      <Link href="/form">
                        <Brain className="w-4 h-4 mr-2" />
                        Take Assessment
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                      <Link href="/results">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        View Results
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                      <Link href="/careers">
                        <Compass className="w-4 h-4 mr-2" />
                        Explore Careers
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Skill Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skillProgress.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.skill}</span>
                          <span className="text-sm text-gray-600">
                            {skill.progress}% / {skill.target}%
                          </span>
                        </div>
                        <Progress value={skill.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Learning Path</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Programming Fundamentals", status: "completed", progress: 100 },
                      { title: "Data Structures & Algorithms", status: "in-progress", progress: 65 },
                      { title: "Web Development", status: "upcoming", progress: 0 },
                      { title: "System Design", status: "upcoming", progress: 0 },
                    ].map((course, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            course.status === "completed"
                              ? "bg-green-500"
                              : course.status === "in-progress"
                                ? "bg-blue-500"
                                : "bg-gray-300"
                          }`}
                        >
                          {course.status === "completed" ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{course.title}</h4>
                          <Progress value={course.progress} className="h-1 mt-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value="goals" className="space-y-6">
            <div className="grid gap-6">
              <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Your Goals</CardTitle>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Goal
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Complete JEE Preparation",
                        description: "Achieve 95+ percentile in JEE Main",
                        progress: 75,
                        deadline: "June 2024",
                        priority: "High",
                      },
                      {
                        title: "Build Programming Portfolio",
                        description: "Create 5 projects showcasing different skills",
                        progress: 40,
                        deadline: "March 2024",
                        priority: "Medium",
                      },
                      {
                        title: "Network with Industry Professionals",
                        description: "Connect with 20 professionals on LinkedIn",
                        progress: 60,
                        deadline: "April 2024",
                        priority: "Medium",
                      },
                      {
                        title: "Complete Online Courses",
                        description: "Finish 3 relevant online certifications",
                        progress: 85,
                        deadline: "February 2024",
                        priority: "High",
                      },
                    ].map((goal, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-semibold text-lg mb-2">{goal.title}</h3>
                              <p className="text-gray-600 text-sm">{goal.description}</p>
                            </div>
                            <Badge variant={goal.priority === "High" ? "destructive" : "secondary"}>
                              {goal.priority}
                            </Badge>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{goal.progress}%</span>
                            </div>
                            <Progress value={goal.progress} className="h-2" />
                            <div className="flex justify-between text-sm text-gray-500">
                              <span>Deadline: {goal.deadline}</span>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement) => (
                    <Card
                      key={achievement.id}
                      className={`border-2 ${achievement.unlocked ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"}`}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{achievement.icon}</div>
                        <h3
                          className={`font-semibold mb-2 ${achievement.unlocked ? "text-green-800" : "text-gray-500"}`}
                        >
                          {achievement.title}
                        </h3>
                        <p className={`text-sm mb-4 ${achievement.unlocked ? "text-green-700" : "text-gray-500"}`}>
                          {achievement.description}
                        </p>
                        {achievement.unlocked ? (
                          <Badge className="bg-green-500">Unlocked {achievement.date}</Badge>
                        ) : (
                          <Badge variant="outline">Locked</Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    <span>Study Groups</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "JEE Preparation 2024", members: 156, activity: "Very Active" },
                      { name: "Programming Beginners", members: 89, activity: "Active" },
                      { name: "Career Guidance", members: 234, activity: "Moderate" },
                    ].map((group, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">{group.name}</h4>
                          <p className="text-sm text-gray-600">
                            {group.members} members • {group.activity}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Join
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                    <span>Recent Discussions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Best resources for JEE preparation?", author: "Priya S.", replies: 12, time: "2h ago" },
                      {
                        title: "How to choose between engineering branches?",
                        author: "Arjun P.",
                        replies: 8,
                        time: "4h ago",
                      },
                      {
                        title: "Internship opportunities for beginners",
                        author: "Sneha G.",
                        replies: 15,
                        time: "6h ago",
                      },
                    ].map((discussion, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">{discussion.title}</h4>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>by {discussion.author}</span>
                          <span>
                            {discussion.replies} replies • {discussion.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
