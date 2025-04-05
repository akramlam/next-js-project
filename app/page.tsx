import { DashboardHeader } from "@/components/dashboard-header"
import { ProfileOverview } from "@/components/profile-overview"
import { ProjectMatching } from "@/components/project-matching"
import { ProjectShowcase } from "@/components/project-showcase"
import { RecommendationFeed } from "@/components/recommendation-feed"
import { UniversityPanel } from "@/components/university-panel"
import { CommunicationHub } from "@/components/communication-hub"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-800 to-navy-900">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 max-w-3xl lg:max-w-none">
        <div className="mb-6">
          <ProfileOverview />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <ProjectMatching />
            <ProjectShowcase />
          </div>
          <div className="space-y-4 md:space-y-6 order-first lg:order-last">
            <RecommendationFeed />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <UniversityPanel />
              <CommunicationHub />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

