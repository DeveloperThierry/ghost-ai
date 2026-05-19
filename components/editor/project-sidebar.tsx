"use client"

import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <div
      className={cn(
        "fixed top-12 left-0 z-50 flex h-[calc(100vh-3rem)] w-72 flex-col",
        "bg-elevated border-r border-surface-border",
        "transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
        <span className="text-sm font-semibold text-copy-primary">Projects</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-7 w-7 text-copy-muted hover:text-copy-primary"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="flex flex-1 flex-col overflow-hidden">
        <TabsList className="mx-4 mt-3 w-auto">
          <TabsTrigger value="my-projects" className="flex-1">
            My Projects
          </TabsTrigger>
          <TabsTrigger value="shared" className="flex-1">
            Shared
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="my-projects"
          className="flex flex-1 items-center justify-center p-4"
        >
          <p className="text-sm text-copy-muted">No projects yet</p>
        </TabsContent>
        <TabsContent
          value="shared"
          className="flex flex-1 items-center justify-center p-4"
        >
          <p className="text-sm text-copy-muted">No shared projects</p>
        </TabsContent>
      </Tabs>

      <div className="border-t border-surface-border p-4">
        <Button className="w-full gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </div>
  )
}
