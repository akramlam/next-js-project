"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Code, PenTool, Lightbulb, BarChart3, MessageSquare, UserPlus, Star, Zap, Filter } from "lucide-react"

export function ProjectMatching() {
  const [activeTab, setActiveTab] = useState("all")

  const matches = [
    {
      id: 1,
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=64&width=64",
      department: "Computer Science",
      compatibility: 94,
      skills: ["Programming", "Research"],
      matchReasons: ["Similar Projects", "Complementary Skills"],
      previousCollaboration: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=64&width=64",
      department: "Data Science",
      compatibility: 87,
      skills: ["Research", "Project Management"],
      matchReasons: ["Shared Interests", "Complementary Skills"],
      previousCollaboration: false,
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      avatar: "/placeholder.svg?height=64&width=64",
      department: "Digital Media",
      compatibility: 82,
      skills: ["Design", "Programming"],
      matchReasons: ["Similar Projects"],
      previousCollaboration: false,
    },
    {
      id: 4,
      name: "James Taylor",
      avatar: "/placeholder.svg?height=64&width=64",
      department: "Computer Engineering",
      compatibility: 78,
      skills: ["Programming", "Project Management"],
      matchReasons: ["Complementary Skills"],
      previousCollaboration: false,
    },
  ]

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case "Programming":
        return <Code className="h-3 w-3" />
      case "Design":
        return <PenTool className="h-3 w-3" />
      case "Research":
        return <Lightbulb className="h-3 w-3" />
      case "Project Management":
        return <BarChart3 className="h-3 w-3" />
      default:
        return null
    }
  }

  const getSkillColor = (skill: string) => {
    switch (skill) {
      case "Programming":
        return "bg-tech-blue/20 text-tech-blue border-tech-blue/30"
      case "Design":
        return "bg-tech-purple/20 text-tech-purple border-tech-purple/30"
      case "Research":
        return "bg-tech-yellow/20 text-tech-yellow border-tech-yellow/30"
      case "Project Management":
        return "bg-tech-green/20 text-tech-green border-tech-green/30"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getMatchReasonIcon = (reason: string) => {
    switch (reason) {
      case "Similar Projects":
        return <Star className="h-3 w-3" />
      case "Complementary Skills":
        return <Zap className="h-3 w-3" />
      case "Shared Interests":
        return <Lightbulb className="h-3 w-3" />
      default:
        return null
    }
  }

  return (
    <Card className="border-none shadow-lg bg-white dark:bg-navy-800 dark:text-white overflow-hidden">
      <CardHeader className="pb-2 bg-gradient-to-r from-navy-500 to-navy-600 text-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle>Project Matching</CardTitle>
          <div className="flex flex-wrap gap-2">
            <Select>
              <SelectTrigger className="w-[140px] h-8 text-xs bg-navy-700/50 border-navy-600 text-white">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent className="bg-navy-700 border-navy-600 text-white">
                <SelectItem value="all" className="focus:bg-navy-600 focus:text-white">
                  All Departments
                </SelectItem>
                <SelectItem value="cs" className="focus:bg-navy-600 focus:text-white">
                  Computer Science
                </SelectItem>
                <SelectItem value="design" className="focus:bg-navy-600 focus:text-white">
                  Design
                </SelectItem>
                <SelectItem value="business" className="focus:bg-navy-600 focus:text-white">
                  Business
                </SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[140px] h-8 text-xs bg-navy-700/50 border-navy-600 text-white">
                <SelectValue placeholder="Skills Needed" />
              </SelectTrigger>
              <SelectContent className="bg-navy-700 border-navy-600 text-white">
                <SelectItem value="all" className="focus:bg-navy-600 focus:text-white">
                  All Skills
                </SelectItem>
                <SelectItem value="programming" className="focus:bg-navy-600 focus:text-white">
                  Programming
                </SelectItem>
                <SelectItem value="design" className="focus:bg-navy-600 focus:text-white">
                  Design
                </SelectItem>
                <SelectItem value="research" className="focus:bg-navy-600 focus:text-white">
                  Research
                </SelectItem>
                <SelectItem value="pm" className="focus:bg-navy-600 focus:text-white">
                  Project Management
                </SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm" className="h-8 text-white border-navy-400 hover:bg-navy-700">
              <Filter className="h-3 w-3 mr-1" /> More Filters
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
          <TabsList className="bg-navy-100 dark:bg-navy-700">
            <TabsTrigger value="all" className="data-[state=active]:bg-white dark:data-[state=active]:bg-navy-600">
              All Matches
            </TabsTrigger>
            <TabsTrigger value="new" className="data-[state=active]:bg-white dark:data-[state=active]:bg-navy-600">
              New (5)
            </TabsTrigger>
            <TabsTrigger value="top" className="data-[state=active]:bg-white dark:data-[state=active]:bg-navy-600">
              Top Rated
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matches.map((match) => (
            <div
              key={match.id}
              className="border border-navy-200 dark:border-navy-600 rounded-lg p-5 bg-gradient-to-br from-white to-navy-50 dark:from-navy-700 dark:to-navy-800 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 ring-2 ring-navy-200 dark:ring-navy-500">
                  <AvatarImage src={match.avatar} alt={match.name} />
                  <AvatarFallback className="bg-navy-500 text-white">
                    {match.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{match.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-navy-300">{match.department}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-sm font-semibold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                        {match.compatibility}% Match
                      </div>
                      {match.previousCollaboration && (
                        <Badge
                          variant="outline"
                          className="text-xs mt-1 bg-tech-blue/10 text-tech-blue border-tech-blue/30"
                        >
                          Previous Collaborator
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs text-gray-500 dark:text-navy-300 mb-1">Overlapping Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {match.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className={`text-xs flex items-center gap-1 border rounded-md ${getSkillColor(skill)}`}
                        >
                          {getSkillIcon(skill)}
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs text-gray-500 dark:text-navy-300 mb-1">Match Reasons</p>
                    <div className="flex flex-wrap gap-1">
                      {match.matchReasons.map((reason) => (
                        <Badge
                          key={reason}
                          variant="outline"
                          className="text-xs flex items-center gap-1 bg-navy-100/50 dark:bg-navy-600/50 border-navy-200 dark:border-navy-500"
                        >
                          {getMatchReasonIcon(reason)}
                          {reason}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      size="sm"
                      className="h-8 bg-gradient-to-r from-navy-500 to-navy-600 hover:from-navy-600 hover:to-navy-700"
                    >
                      <MessageSquare className="h-3 w-3 mr-1" /> Message
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 border-navy-300 dark:border-navy-500 hover:bg-navy-100 dark:hover:bg-navy-700"
                    >
                      <UserPlus className="h-3 w-3 mr-1" /> Connect
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

