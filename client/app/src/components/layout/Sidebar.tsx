import {
  BarChart3,
  BookOpen,
  CalendarRange,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  Layers3,
  School,
  Settings,
  Users,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import LumiSphere from "@/assets/LumiSphere.png";

import { cn } from "@/lib/utils";

const links = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "School Years", path: "/school-years", icon: CalendarRange },
  { label: "Sections", path: "/sections", icon: School },
  { label: "Subjects", path: "/subjects", icon: BookOpen },
  { label: "Teaching Loads", path: "/teaching-loads", icon: Layers3 },
  { label: "Students", path: "/students", icon: Users },
  { label: "Attendance", path: "/attendance", icon: ClipboardCheck },
  { label: "Assessments", path: "/assessments", icon: FileText },
  { label: "Grades", path: "/grades", icon: BarChart3 },
  { label: "Settings", path: "/settings", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden h-screen w-72 flex-col border-r bg-background md:flex">
      {/* Logo */}
      <div className="flex h-18 items-center px-4">
        <Link
          to="/dashboard"
          className="flex w-full items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-muted/50"
        >
          {/* Icon */}
   
            <img className="w-8  h-8" src={LumiSphere} alt="" />


          {/* Text */}
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-foreground">
              {/* ClassSphere  */}
              Lumisphere
              {/* MindSphere */}
              {/* FocusSphere */}
            </span>
          </div>
        </Link>
      </div>

      {/* <Separator /> */}

      {/* Navigation */}
      <ScrollArea className="flex-1 px-4 py-0">
        <nav className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "group flex items-center gap-3 rounded-xl p-2 text-sm font-medium transition-all",
                  isActive
                    ? "bg-foreground text-background shadow-sm"
                    : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                )}
              >
                {/* Icon box */}
                <div
                  className={cn(
                    "flex size-6 items-center justify-center rounded-lg transition-all",
                    isActive
                      ? "bg-background/15"
                      : "bg-transparent group-hover:bg-background/10"
                  )}
                >
                  <Icon
                    className={cn(
                      "size-4",
                      isActive ? "text-background" : "text-foreground/70"
                    )}
                  />
                </div>

                <span className="truncate">{link.label}</span>

              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <Separator />

      {/* USER SECTION (MODERN) */}
      <div className="p-4">
        <div className="flex items-center gap-3 rounded-2xl border bg-muted/40 p-3">
          {/* Avatar */}
          <div className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
            T
          </div>

          {/* User Info */}
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium">
              Teacher Account
            </span>

            <span className="text-xs text-muted-foreground">
              Active session
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}