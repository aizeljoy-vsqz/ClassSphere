// import type { SchoolYear } from "../types";

// interface Props {
//   schoolYear: SchoolYear;
//   onEdit: () => void;
//   onDelete: () => void;
// }

// export function SchoolYearCard({
//   schoolYear,
//   onEdit,
//   onDelete,
// }: Props) {
//   return (
//     <div className="border rounded-lg p-4 bg-white">
//       <h3 className="font-semibold text-lg">
//         {schoolYear.name}
//       </h3>

//       <p className="text-sm text-gray-500">
//         {schoolYear.start_date} → {schoolYear.end_date}
//       </p>

//       <div className="flex gap-2 mt-4">
//         <button
//           onClick={onEdit}
//           className="px-3 py-1 border rounded"
//         >
//           Edit
//         </button>

//         <button
//           onClick={onDelete}
//           className="px-3 py-1 border rounded text-red-500"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { SchoolYear } from "../types";

interface Props {
  schoolYear: SchoolYear;
  onEdit: () => void;
  onDelete: () => void;
}

export function SchoolYearCard({
  schoolYear,
  onEdit,
  onDelete,
}: Props) {
  return (
    <Card className="shadow-sm hover:shadow-md transition">
      <CardContent className="p-5 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">
            {schoolYear.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {schoolYear.start_date} → {schoolYear.end_date}
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={onEdit}>
            Edit
          </Button>

          <Button
            variant="destructive"
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}