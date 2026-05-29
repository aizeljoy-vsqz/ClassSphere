import { CalendarDays, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function EmptyState() {
  return (
    <Empty className="h-full rounded-2xl border border-dashed bg-muted/20 py-16">
      <EmptyHeader>
        <EmptyMedia
          variant="icon"
          className="size-12 rounded-3xl bg-background shadow-sm"
        >
          <CalendarDays className="size-6 text-muted-foreground" />
        </EmptyMedia>

        <EmptyTitle className="text-xl">
          No School Years Yet
        </EmptyTitle>

        <EmptyDescription className="max-w-md text-sm leading-relaxed">
          Create your first academic school year
          to start organizing sections,
          subjects, schedules, and academic
          records inside ClassSphere.
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent>
        
      </EmptyContent>
    </Empty>
  );
}