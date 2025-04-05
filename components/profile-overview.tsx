import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Code, Lightbulb, PenTool, BarChart3, ChevronRight, Edit } from "lucide-react"

export function ProfileOverview() {
  const skills = [
    { name: "Programming", icon: Code, color: "bg-tech-blue/20 text-tech-blue border-tech-blue/30" },
    { name: "Design", icon: PenTool, color: "bg-tech-purple/20 text-tech-purple border-tech-purple/30" },
    { name: "Research", icon: Lightbulb, color: "bg-tech-yellow/20 text-tech-yellow border-tech-yellow/30" },
    { name: "Project Management", icon: BarChart3, color: "bg-tech-green/20 text-tech-green border-tech-green/30" },
  ]

  const projectHistory = [
    { name: "AI Research Assistant", role: "Lead Developer", date: "Jan 2023", outcome: "Published" },
    { name: "Campus Navigation App", role: "UI Designer", date: "Oct 2022", outcome: "Deployed" },
    { name: "Student Wellness Platform", role: "Researcher", date: "May 2022", outcome: "Completed" },
  ]

  return (
    <Card className="border-none shadow-lg bg-white dark:bg-navy-800 dark:text-white overflow-hidden">
      <CardHeader className="pb-2 bg-gradient-to-r from-navy-500 to-navy-600 text-white">
        <div className="flex justify-between items-center">
          <CardTitle>Student Profile</CardTitle>
          <Button variant="ghost" size="icon" className="text-white hover:bg-navy-700/50">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="h-24 w-24 mb-4 ring-4 ring-navy-100 dark:ring-navy-600">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Alex Johnson" />
              <AvatarFallback className="text-2xl bg-navy-500 text-white">AJ</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">Alex Johnson</h3>
            <p className="text-sm text-gray-500 dark:text-navy-200">Computer Science, Year 3</p>
            <p className="text-sm text-gray-500 dark:text-navy-200">University of Technology</p>
          </div>

          <div className="flex-1 space-y-4">
            <div className="bg-gradient-to-r from-navy-50 to-navy-100 dark:from-navy-700 dark:to-navy-600 p-4 rounded-lg border border-navy-200 dark:border-navy-600">
              <h3 className="font-medium text-navy-700 dark:text-white mb-1">
                Welcome back, Alex! You have 5 new project matches
              </h3>
              <p className="text-sm text-navy-600 dark:text-navy-200">
                Complete your profile to improve visibility and matching.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-medium">Profile Completion</h4>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="h-2 w-full bg-navy-100 dark:bg-navy-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-tech-blue to-tech-purple rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 dark:text-navy-300 mt-1">
                Add your portfolio link to improve your profile
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className={`${skill.color} flex items-center gap-1 px-2 py-1 border rounded-md`}
                  >
                    <skill.icon className="h-3 w-3" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">Project History</h4>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-xs text-navy-600 dark:text-navy-200 hover:text-navy-800 dark:hover:text-white"
            >
              View All <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
          <div className="space-y-2">
            {projectHistory.map((project, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 rounded-md bg-navy-50 dark:bg-navy-700/50 hover:bg-navy-100 dark:hover:bg-navy-700 transition-colors"
              >
                <div>
                  <h5 className="font-medium">{project.name}</h5>
                  <p className="text-xs text-gray-500 dark:text-navy-300">
                    {project.role} • {project.date}
                  </p>
                </div>
                <Badge variant="outline" className="bg-tech-green/10 text-tech-green border-tech-green/30">
                  {project.outcome}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

