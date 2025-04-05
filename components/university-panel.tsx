import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, GraduationCap, Users, Award, ChevronRight, Clock } from "lucide-react"

export function UniversityPanel() {
  const departments = [
    { name: "Computer Science", connections: 42 },
    { name: "Digital Media", connections: 18 },
    { name: "Business School", connections: 7 },
  ]

  const events = [
    {
      title: "Tech Innovation Showcase",
      date: "Apr 15",
      time: "2:00 PM",
      location: "Innovation Center",
      department: "Computer Science",
    },
    {
      title: "Design Thinking Workshop",
      date: "Apr 18",
      time: "10:00 AM",
      location: "Media Lab",
      department: "Digital Media",
    },
  ]

  const deadlines = [
    { title: "Research Grant Application", date: "Apr 20", priority: "High" },
    { title: "Summer Internship Registration", date: "May 5", priority: "Medium" },
  ]

  return (
    <Card className="border-none shadow-lg bg-white dark:bg-navy-800 dark:text-white overflow-hidden">
      <CardHeader className="pb-2 bg-gradient-to-r from-navy-500 to-navy-600 text-white">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base">University Integration</CardTitle>
          <Badge variant="outline" className="bg-tech-green/20 text-white border-tech-green/50">
            65% Adoption Rate
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-5">
        {/* Department Connections */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-tech-blue/20">
              <GraduationCap className="h-4 w-4 text-tech-blue" />
            </div>
            <h3 className="font-medium text-sm">Department Connections</h3>
          </div>
          <div className="space-y-2">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 rounded-md border border-navy-200 dark:border-navy-600 bg-gradient-to-r from-white to-navy-50 dark:from-navy-700 dark:to-navy-800 hover:shadow-md transition-all"
              >
                <h4 className="text-sm">{dept.name}</h4>
                <div className="flex items-center text-xs text-gray-500 dark:text-navy-300">
                  <Users className="h-3 w-3 mr-1" />
                  {dept.connections} connections
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Endorsements */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-tech-purple/20">
              <Award className="h-4 w-4 text-tech-purple" />
            </div>
            <h3 className="font-medium text-sm">Faculty Endorsements</h3>
          </div>
          <div className="p-4 rounded-md bg-gradient-to-r from-navy-50 to-navy-100 dark:from-navy-700 dark:to-navy-600 border border-navy-200 dark:border-navy-500">
            <p className="text-sm text-navy-700 dark:text-white">
              "Alex has demonstrated exceptional collaboration skills in cross-disciplinary projects."
            </p>
            <div className="mt-2 text-xs text-navy-600 dark:text-navy-300">
              — Dr. Sarah Chen, Computer Science Department
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-tech-cyan/20">
              <Calendar className="h-4 w-4 text-tech-cyan" />
            </div>
            <h3 className="font-medium text-sm">Upcoming Events</h3>
          </div>
          <div className="space-y-2">
            {events.map((event, index) => (
              <div
                key={index}
                className="p-3 rounded-md border border-navy-200 dark:border-navy-600 bg-gradient-to-r from-white to-navy-50 dark:from-navy-700 dark:to-navy-800 hover:shadow-md transition-all"
              >
                <h4 className="font-medium text-sm">{event.title}</h4>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center text-xs text-gray-500 dark:text-navy-300">
                    <Calendar className="h-3 w-3 mr-1" />
                    {event.date}
                    <Clock className="h-3 w-3 ml-2 mr-1" />
                    {event.time}
                  </div>
                </div>
                <div className="mt-1 flex justify-between items-center">
                  <p className="text-xs text-gray-500 dark:text-navy-300">{event.location}</p>
                  <Badge
                    variant="outline"
                    className="text-xs bg-navy-100 dark:bg-navy-700 border-navy-200 dark:border-navy-600"
                  >
                    {event.department}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Deadlines */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-tech-yellow/20">
              <Clock className="h-4 w-4 text-tech-yellow" />
            </div>
            <h3 className="font-medium text-sm">Academic Calendar</h3>
          </div>
          <div className="space-y-2">
            {deadlines.map((deadline, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 rounded-md border border-navy-200 dark:border-navy-600 bg-gradient-to-r from-white to-navy-50 dark:from-navy-700 dark:to-navy-800 hover:shadow-md transition-all"
              >
                <div>
                  <h4 className="text-sm font-medium">{deadline.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-navy-300">Due: {deadline.date}</p>
                </div>
                <Badge
                  className={
                    deadline.priority === "High"
                      ? "bg-tech-red/20 text-tech-red border-tech-red/30"
                      : "bg-tech-yellow/20 text-tech-yellow border-tech-yellow/30"
                  }
                >
                  {deadline.priority}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full border-navy-300 dark:border-navy-600 hover:bg-navy-100 dark:hover:bg-navy-700"
        >
          View University Portal <ChevronRight className="ml-1 h-3 w-3" />
        </Button>
      </CardContent>
    </Card>
  )
}

