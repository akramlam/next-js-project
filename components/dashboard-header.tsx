"use client"

import { useState } from "react"
import { Bell, Mail, Search, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-navy-600 to-navy-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold flex items-center">
              <span className="text-tech-blue mr-1">Collab</span>
              <span className="text-white">Sync</span>
            </h1>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-navy-700 transition-colors">
                  Dashboard
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-navy-700 transition-colors">
                  Projects
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-navy-700 transition-colors">
                  Discover
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-navy-700 transition-colors">
                  Messages
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-md bg-navy-700/50 border-navy-600 text-white placeholder-navy-200 w-64 focus:outline-none focus:ring-2 focus:ring-tech-blue"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-navy-200" />
              </div>

              <Button variant="ghost" size="icon" className="relative hover:bg-navy-700">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-tech-red ring-2 ring-navy-700"></span>
              </Button>

              <Button variant="ghost" size="icon" className="relative hover:bg-navy-700">
                <Mail className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-tech-red ring-2 ring-navy-700"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative rounded-full hover:bg-navy-700">
                    <Avatar className="h-8 w-8 ring-2 ring-tech-blue">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alex" />
                      <AvatarFallback className="bg-tech-blue text-white">AL</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-navy-700 border-navy-600 text-white">
                  <DropdownMenuItem className="hover:bg-navy-600 focus:bg-navy-600">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-navy-600 focus:bg-navy-600">Settings</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-navy-600 focus:bg-navy-600">Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-navy-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-700 pb-4 px-4">
          <div className="space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-navy-600 transition-colors"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-navy-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-navy-600 transition-colors"
            >
              Discover
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-navy-600 transition-colors"
            >
              Messages
            </a>
          </div>
          <div className="mt-4 pt-4 border-t border-navy-600">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Avatar className="h-10 w-10 ring-2 ring-tech-blue">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Alex" />
                  <AvatarFallback className="bg-tech-blue text-white">AL</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium">Alex Johnson</div>
                <div className="text-sm font-medium text-navy-200">alex.johnson@university.edu</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

