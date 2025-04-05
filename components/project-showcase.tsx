"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, Heart, MessageSquare, Star, ChevronRight, Code, Figma, Database, BarChart3 } from "lucide-react"

export function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Campus Navigation AR App",
      category: "Development",
      image: "/placeholder.svg?height=200&width=300",
      description: "An augmented reality application to help new students navigate the campus.",
      technologies: ["React Native", "ARKit", "Firebase"],
      collaborators: [
        { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Emma Wilson", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      metrics: { views: 245, likes: 56, comments: 12 },
      featured: true,
    },
    {
      id: 2,
      title: "Student Mental Health Dashboard",
      category: "Research",
      image: "/placeholder.svg?height=200&width=300",
      description: "A research project analyzing student mental health trends with visualization tools.",
      technologies: ["Python", "D3.js", "Machine Learning"],
      collaborators: [
        { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Michael Chen", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      metrics: { views: 189, likes: 42, comments: 8 },
      featured: true,
    },
    {
      id: 3,
      title: "University Event Platform",
      category: "Design",
      image: "/placeholder.svg?height=200&width=300",
      description: "A platform for discovering and registering for university events.",
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      collaborators: [
        { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Sophia Rodriguez", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      metrics: { views: 156, likes: 38, comments: 5 },
      featured: false,
    },
    {
      id: 4,
      title: "Student Startup Incubator",
      category: "Business",
      image: "/placeholder.svg?height=200&width=300",
      description: "A business plan for a university-based startup incubator program.",
      technologies: ["Business Model Canvas", "Financial Modeling", "Pitch Deck"],
      collaborators: [
        { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "James Taylor", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      metrics: { views: 132, likes: 29, comments: 7 },
      featured: false,
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Development":
        return <Code className="h-4 w-4" />
      case "Design":
        return <Figma className="h-4 w-4" />
      case "Research":
        return <Database className="h-4 w-4" />
      case "Business":
        return <BarChart3 className="h-4 w-4" />
      default:
        return null
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Development":
        return "bg-tech-blue/20 text-tech-blue border-tech-blue/30"
      case "Design":
        return "bg-tech-purple/20 text-tech-purple border-tech-purple/30"
      case "Research":
        return "bg-tech-yellow/20 text-tech-yellow border-tech-yellow/30"
      case "Business":
        return "bg-tech-green/20 text-tech-green border-tech-green/30"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card className="border-none shadow-lg bg-white dark:bg-navy-800 dark:text-white overflow-hidden">
      <CardHeader className="pb-2 bg-gradient-to-r from-navy-500 to-navy-600 text-white">
        <div className="flex justify-between items-center">
          <CardTitle>Project Showcase</CardTitle>
          <Button variant="ghost" size="sm" className="text-xs text-white hover:bg-navy-700/50">
            View All <ChevronRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
          <TabsList className="bg-navy-100 dark:bg-navy-700">
            <TabsTrigger value="all" className="data-[state=active]:bg-white dark:data-[state=active]:bg-navy-600">
              All Projects
            </TabsTrigger>
            <TabsTrigger
              value="development"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-navy-600"
            >
              Development
            </TabsTrigger>
            <TabsTrigger value="design" className="data-[state=active]:bg-white dark:data-[state=active]:bg-navy-600">
              Design
            </TabsTrigger>
            <TabsTrigger value="research" className="data-[state=active]:bg-white dark:data-[state=active]:bg-navy-600">
              Research
            </TabsTrigger>
            <TabsTrigger value="business" className="data-[state=active]:bg-white dark:data-[state=active]:bg-navy-600">
              Business
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border border-navy-200 dark:border-navy-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-2 right-2 flex gap-1">
                  <Badge
                    variant="outline"
                    className={`${getCategoryColor(project.category)} flex items-center gap-1 border rounded-md`}
                  >
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-amber-500 to-amber-600">
                      <Star className="h-3 w-3 mr-1" /> Featured
                    </Badge>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-medium text-lg">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-navy-300 mt-1">{project.description}</p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs bg-navy-50 dark:bg-navy-700 border-navy-200 dark:border-navy-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex -space-x-2">
                    {project.collaborators.map((collaborator, index) => (
                      <Avatar
                        key={index}
                        className="h-6 w-6 border-2 border-white dark:border-navy-800 ring-1 ring-navy-200 dark:ring-navy-600"
                      >
                        <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                        <AvatarFallback className="text-xs bg-navy-500 text-white">
                          {collaborator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-navy-100 dark:bg-navy-700 text-xs font-medium border-2 border-white dark:border-navy-800">
                      +{project.collaborators.length}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-500 dark:text-navy-300">
                    <div className="flex items-center text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      {project.metrics.views}
                    </div>
                    <div className="flex items-center text-xs">
                      <Heart className="h-3 w-3 mr-1" />
                      {project.metrics.likes}
                    </div>
                    <div className="flex items-center text-xs">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      {project.metrics.comments}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gradient-to-r from-navy-50 to-navy-100 dark:from-navy-700 dark:to-navy-600 rounded-lg p-4 border border-navy-200 dark:border-navy-500">
          <h3 className="font-medium text-navy-700 dark:text-white flex items-center">
            <Star className="h-4 w-4 mr-2 text-amber-500" /> Featured by Faculty
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-3 p-2 bg-white dark:bg-navy-800 rounded-md shadow-sm border border-navy-200 dark:border-navy-600"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium">{project.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-navy-300">{project.category}</p>
                    <div className="flex items-center mt-1">
                      <Badge variant="outline" className="text-xs bg-tech-blue/10 text-tech-blue border-tech-blue/30">
                        Faculty Pick
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

