import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { SchoolYear } from "../types";
import { SchoolYearForm } from "./SchoolYearForm";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editing: SchoolYear | null;

  onSubmit: (data: Omit<SchoolYear, "id">) => void;
}

export function SchoolYearDialog({
  open,
  onOpenChange,
  editing,
  onSubmit,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editing
              ? "Edit School Year"
              : "Create School Year"}
          </DialogTitle>
        </DialogHeader>

        <SchoolYearForm
          initialData={editing}
          onSubmit={onSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}