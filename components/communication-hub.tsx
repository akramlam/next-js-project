"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users, Calendar, Paperclip, Send, Clock, FileText, ImageIcon, ChevronRight } from "lucide-react"

export function CommunicationHub() {
  const [activeTab, setActiveTab] = useState("messages")
  const [message, setMessage] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I've added some new research findings to our shared document.",
      time: "10:42 AM",
      unread: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Can we schedule a meeting to discuss the project timeline?",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 3,
      name: "Data Visualization Team",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Sophia: I've uploaded the latest mockups for review.",
      time: "Yesterday",
      unread: false,
      isGroup: true,
      members: 4,
    },
  ]

  const teamSpaces = [
    {
      id: 1,
      name: "Campus Navigation App",
      members: 3,
      lastActivity: "2h ago",
    },
    {
      id: 2,
      name: "Research Group",
      members: 5,
      lastActivity: "1d ago",
    },
  ]

  const meetings = [
    {
      id: 1,
      title: "Project Planning",
      date: "Today",
      time: "3:00 PM",
      participants: 3,
    },
    {
      id: 2,
      title: "Design Review",
      date: "Apr 16",
      time: "11:00 AM",
      participants: 4,
    },
  ]

  const sharedFiles = [
    {
      id: 1,
      name: "Research Findings.pdf",
      type: "PDF",
      size: "2.4 MB",
      sharedBy: "Emma",
      icon: FileText,
    },
    {
      id: 2,
      name: "UI Mockups.png",
      type: "Image",
      size: "4.1 MB",
      sharedBy: "You",
      icon: ImageIcon,
    },
  ]

  const quickResponses = [
    "I'll take a look at this soon.",
    "Can we schedule a meeting?",
    "Thanks for sharing!",
    "I'll get back to you tomorrow.",
  ]

  return (
    <Card className="border-none shadow-lg bg-white dark:bg-navy-800 dark:text-white overflow-hidden">
      <CardHeader className="pb-2 bg-gradient-to-r from-navy-500 to-navy-600 text-white">
        <CardTitle className="text-base">Communication Hub</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="messages" onValueChange={setActiveTab}>
          <TabsList className="w-full rounded-none border-b border-navy-200 dark:border-navy-600 bg-navy-100 dark:bg-navy-700">
            <TabsTrigger
              value="messages"
              className="flex-1 data-[state=active]:bg-white dark:data-[state=active]:bg-navy-600"
            >
              <MessageSquare className="h-4 w-4 mr-2" /> Messages
            </TabsTrigger>
            <TabsTrigger
              value="teams"
              className="flex-1 data-[state=active]:bg-white dark:data-[state=active]:bg-navy-600"
            >
              <Users className="h-4 w-4 mr-2" /> Teams
            </TabsTrigger>
            <TabsTrigger
              value="meetings"
              className="flex-1 data-[state=active]:bg-white dark:data-[state=active]:bg-navy-600"
            >
              <Calendar className="h-4 w-4 mr-2" /> Meetings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="messages" className="p-0 m-0">
            <div className="max-h-[300px] overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-start gap-3 p-3 hover:bg-navy-50 dark:hover:bg-navy-700 cursor-pointer transition-colors ${conversation.unread ? "bg-tech-blue/10 dark:bg-navy-700/70" : ""}`}
                >
                  <Avatar className="h-10 w-10 ring-2 ring-navy-200 dark:ring-navy-600">
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback className="bg-navy-500 text-white">
                      {conversation.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <h4 className="font-medium text-sm">{conversation.name}</h4>
                        {conversation.isGroup && (
                          <Badge
                            variant="outline"
                            className="ml-2 text-xs bg-navy-100 dark:bg-navy-700 border-navy-200 dark:border-navy-600"
                          >
                            {conversation.members} members
                          </Badge>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-navy-300">{conversation.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-navy-300 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread && <div className="h-2 w-2 rounded-full bg-tech-blue"></div>}
                </div>
              ))}
            </div>

            {activeTab === "messages" && (
              <div className="p-3 border-t border-navy-200 dark:border-navy-600">
                <div className="mb-2">
                  <div className="text-xs text-gray-500 dark:text-navy-300 mb-1">Quick Responses</div>
                  <div className="flex flex-wrap gap-1">
                    {quickResponses.map((response, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs h-7 border-navy-200 dark:border-navy-600 hover:bg-navy-100 dark:hover:bg-navy-700"
                        onClick={() => setMessage(response)}
                      >
                        {response}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 shrink-0 border-navy-200 dark:border-navy-600 hover:bg-navy-100 dark:hover:bg-navy-700"
                  >
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    className="h-9 text-sm bg-white dark:bg-navy-700 border-navy-200 dark:border-navy-600"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button
                    size="sm"
                    className="h-9 px-3 bg-gradient-to-r from-navy-500 to-navy-600 hover:from-navy-600 hover:to-navy-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="teams" className="p-3 m-0 space-y-3">
            <div className="space-y-2">
              {teamSpaces.map((team) => (
                <div
                  key={team.id}
                  className="p-3 rounded-md border border-navy-200 dark:border-navy-600 bg-gradient-to-r from-white to-navy-50 dark:from-navy-700 dark:to-navy-800 hover:shadow-md transition-all"
                >
                  <h4 className="font-medium text-sm">{team.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex items-center text-xs text-gray-500 dark:text-navy-300">
                      <Users className="h-3 w-3 mr-1" />
                      {team.members} members
                    </div>
                    <div className="flex items-center text-xs text-gray-500 dark:text-navy-300">
                      <Clock className="h-3 w-3 mr-1" />
                      {team.lastActivity}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-navy-200 dark:border-navy-600 pt-3">
              <div className="text-xs font-medium mb-2">Shared Files</div>
              <div className="space-y-2">
                {sharedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-3 p-3 rounded-md border border-navy-200 dark:border-navy-600 bg-gradient-to-r from-white to-navy-50 dark:from-navy-700 dark:to-navy-800 hover:shadow-md transition-all"
                  >
                    <div className="bg-navy-100 dark:bg-navy-700 p-2 rounded">
                      <file.icon className="h-4 w-4 text-navy-600 dark:text-navy-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium truncate">{file.name}</h4>
                      <div className="flex items-center text-xs text-gray-500 dark:text-navy-300">
                        <span>{file.type}</span>
                        <span className="mx-1">•</span>
                        <span>{file.size}</span>
                        <span className="mx-1">•</span>
                        <span>By {file.sharedBy}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="meetings" className="p-3 m-0 space-y-3">
            <div className="space-y-2">
              {meetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="p-3 rounded-md border border-navy-200 dark:border-navy-600 bg-gradient-to-r from-white to-navy-50 dark:from-navy-700 dark:to-navy-800 hover:shadow-md transition-all"
                >
                  <h4 className="font-medium text-sm">{meeting.title}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex items-center text-xs text-gray-500 dark:text-navy-300">
                      <Calendar className="h-3 w-3 mr-1" />
                      {meeting.date}
                      <Clock className="h-3 w-3 ml-2 mr-1" />
                      {meeting.time}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 dark:text-navy-300">
                      <Users className="h-3 w-3 mr-1" />
                      {meeting.participants} participants
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full border-navy-200 dark:border-navy-600 hover:bg-navy-100 dark:hover:bg-navy-700"
            >
              Schedule Meeting <Calendar className="ml-1 h-3 w-3" />
            </Button>
          </TabsContent>
        </Tabs>

        <div className="p-3 border-t border-navy-200 dark:border-navy-600">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-xs text-tech-blue hover:bg-navy-100 dark:hover:bg-navy-700"
          >
            View All Communications <ChevronRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

