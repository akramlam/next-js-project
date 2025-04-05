import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Lightbulb, Zap, TrendingUp, Users, ChevronRight, BookOpen, PenTool, BarChart3 } from "lucide-react"

export function RecommendationFeed() {
  const recommendedProjects = [
    {
      title: "Machine Learning Study Group",
      category: "Research",
      compatibility: 95,
      reason: "Based on your programming skills",
    },
    {
      title: "UI/UX Design Challenge",
      category: "Design",
      compatibility: 87,
      reason: "Matches your interest in design",
    },
  ]

  const skillBuilding = [
    {
      skill: "Data Visualization",
      description: "Enhance your research presentations",
      level: "Intermediate",
      icon: BarChart3,
    },
    {
      skill: "UI Prototyping",
      description: "Complement your programming skills",
      level: "Beginner",
      icon: PenTool,
    },
  ]

  const trendingCollaborations = [
    {
      title: "Blockchain for Student Records",
      participants: 28,
      department: "Computer Science",
    },
    {
      title: "Campus Sustainability App",
      participants: 15,
      department: "Environmental Studies",
    },
  ]

  const partnerSuggestions = [
    {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Computer Science",
      compatibility: 92,
      reason: "Expert in areas you're learning",
    },
    {
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Digital Media",
      compatibility: 88,
      reason: "Complementary design skills",
    },
  ]

  return (
    <Card className="border-none shadow-lg bg-white dark:bg-navy-800 dark:text-white overflow-hidden">
      <CardHeader className="pb-2 bg-gradient-to-r from-navy-500 to-navy-600 text-white">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base">AI Recommendations</CardTitle>
          <Badge variant="outline" className="bg-tech-blue/20 text-white border-tech-blue/50 flex items-center gap-1">
            <Zap className="h-3 w-3" /> Personalized
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-6">
        {/* Recommended Projects */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-tech-blue/20">
              <Lightbulb className="h-4 w-4 text-tech-blue" />
            </div>
            <h3 className="font-medium text-sm">Recommended Projects</h3>
          </div>
          <div className="space-y-2">
            {recommendedProjects.map((project, index) => (
              <div
                key={index}
                className="p-3 rounded-md border border-navy-200 dark:border-navy-600 bg-gradient-to-r from-white to-navy-50 dark:from-navy-700 dark:to-navy-800 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-sm">{project.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-navy-300">{project.category}</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-tech-blue to-tech-purple">{project.compatibility}%</Badge>
                </div>
                <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-navy-300">
                  <Zap className="h-3 w-3 mr-1 text-tech-yellow" />
                  <span>AI: {project.reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Building */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-tech-purple/20">
              <BookOpen className="h-4 w-4 text-tech-purple" />
            </div>
            <h3 className="font-medium text-sm">Skill-Building Opportunities</h3>
          </div>
          <div className="space-y-2">
            {skillBuilding.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-md border border-navy-200 dark:border-navy-600 bg-gradient-to-r from-white to-navy-50 dark:from-navy-700 dark:to-navy-800 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 p-2 rounded-md">
                    <item.icon className="h-4 w-4 text-tech-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{item.skill}</h4>
                    <p className="text-xs text-gray-500 dark:text-navy-300">{item.description}</p>
                    <Badge
                      variant="outline"
                      className="mt-1 text-xs bg-navy-100 dark:bg-navy-700 border-navy-200 dark:border-navy-600"
                    >
                      {item.level}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Collaborations */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-tech-green/20">
              <TrendingUp className="h-4 w-4 text-tech-green" />
            </div>
            <h3 className="font-medium text-sm">Trending Collaborations</h3>
          </div>
          <div className="space-y-2">
            {trendingCollaborations.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-md border border-navy-200 dark:border-navy-600 bg-gradient-to-r from-white to-navy-50 dark:from-navy-700 dark:to-navy-800 hover:shadow-md transition-all"
              >
                <h4 className="font-medium text-sm">{item.title}</h4>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-gray-500 dark:text-navy-300">{item.department}</p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-navy-300">
                    <Users className="h-3 w-3 mr-1" />
                    {item.participants} participants
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Suggestions */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-tech-cyan/20">
              <Users className="h-4 w-4 text-tech-cyan" />
            </div>
            <h3 className="font-medium text-sm">Partner Suggestions</h3>
          </div>
          <div className="space-y-2">
            {partnerSuggestions.map((partner, index) => (
              <div
                key={index}
                className="p-3 rounded-md border border-navy-200 dark:border-navy-600 bg-gradient-to-r from-white to-navy-50 dark:from-navy-700 dark:to-navy-800 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 ring-2 ring-navy-200 dark:ring-navy-600">
                    <AvatarImage src={partner.avatar} alt={partner.name} />
                    <AvatarFallback className="bg-navy-500 text-white">
                      {partner.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-sm">{partner.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-navy-300">{partner.department}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-tech-blue to-tech-purple">{partner.compatibility}%</Badge>
                    </div>
                    <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-navy-300">
                      <Zap className="h-3 w-3 mr-1 text-tech-yellow" />
                      <span>AI: {partner.reason}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full border-navy-300 dark:border-navy-600 hover:bg-navy-100 dark:hover:bg-navy-700"
        >
          View More Recommendations <ChevronRight className="ml-1 h-3 w-3" />
        </Button>
      </CardContent>
    </Card>
  )
}

