// import { useState } from "react";
// import type { SchoolYear } from "../types";

// interface Props {
//   initialData?: SchoolYear | null;
//   onSubmit: (data: Omit<SchoolYear, "id">) => void;
// }

// export function SchoolYearForm({ initialData, onSubmit }: Props) {
//   const [name, setName] = useState(initialData?.name || "");
//   const [startDate, setStartDate] = useState(
//     initialData?.start_date || ""
//   );
//   const [endDate, setEndDate] = useState(
//     initialData?.end_date || ""
//   );

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();

//     onSubmit({
//       name,
//       start_date: startDate,
//       end_date: endDate,
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         className="w-full border rounded p-2"
//         placeholder="School Year Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         type="date"
//         className="w-full border rounded p-2"
//         value={startDate}
//         onChange={(e) => setStartDate(e.target.value)}
//       />

//       <input
//         type="date"
//         className="w-full border rounded p-2"
//         value={endDate}
//         onChange={(e) => setEndDate(e.target.value)}
//       />

//       <button
//         type="submit"
//         className="bg-black text-white px-4 py-2 rounded"
//       >
//         Save
//       </button>
//     </form>
//   );
// }


import { useState } from "react";
import type { SchoolYear } from "../types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  initialData?: SchoolYear | null;
  onSubmit: (data: Omit<SchoolYear, "id">) => void;
}

export function SchoolYearForm({
  initialData,
  onSubmit,
}: Props) {
  const [name, setName] = useState(
    initialData?.name || ""
  );

  const [startDate, setStartDate] = useState(
    initialData?.start_date || ""
  );

  const [endDate, setEndDate] = useState(
    initialData?.end_date || ""
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onSubmit({
      name,
      start_date: startDate,
      end_date: endDate,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label>School Year Name</Label>

        <Input
          placeholder="e.g. 2025-2026"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Start Date</Label>

          <Input
            type="date"
            value={startDate}
            onChange={(e) =>
              setStartDate(e.target.value)
            }
          />
        </div>

        <div className="space-y-2">
          <Label>End Date</Label>

          <Input
            type="date"
            value={endDate}
            onChange={(e) =>
              setEndDate(e.target.value)
            }
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Save School Year
      </Button>
    </form>
  );
}