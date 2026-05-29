// import { useState } from "react";
// import type { SchoolYear } from "../types";
// import { SchoolYearForm } from "../components/SchoolYearForm";
// import { SchoolYearCard } from "../components/SchoolYearCard";

// export default function SchoolYearsPage() {
//   const [schoolYears, setSchoolYears] = useState<SchoolYear[]>([]);
//   const [editing, setEditing] = useState<SchoolYear | null>(null);

//   function createSchoolYear(data: Omit<SchoolYear, "id">) {
//     const newItem: SchoolYear = {
//       id: Date.now(),
//       ...data,
//     };

//     setSchoolYears((prev) => [...prev, newItem]);
//   }

//   function updateSchoolYear(data: Omit<SchoolYear, "id">) {
//     if (!editing) return;

//     setSchoolYears((prev) =>
//       prev.map((item) =>
//         item.id === editing.id
//           ? { ...item, ...data }
//           : item
//       )
//     );

//     setEditing(null);
//   }

//   function deleteSchoolYear(id: number) {
//     setSchoolYears((prev) =>
//       prev.filter((item) => item.id !== id)
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold">
//           School Years
//         </h1>

//         <p className="text-sm text-gray-500">
//           Manage academic school years
//         </p>
//       </div>

//       <div className="border rounded-xl p-4 bg-white">
//         <h2 className="font-semibold mb-4">
//           {editing ? "Edit School Year" : "Create School Year"}
//         </h2>

//         <SchoolYearForm
//           initialData={editing}
//           onSubmit={
//             editing
//               ? updateSchoolYear
//               : createSchoolYear
//           }
//         />
//       </div>

//       <div className="grid gap-4">
//         {schoolYears.map((item) => (
//           <SchoolYearCard
//             key={item.id}
//             schoolYear={item}
//             onEdit={() => setEditing(item)}
//             onDelete={() => deleteSchoolYear(item.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/shared/EmptyState";

import type { SchoolYear } from "../types";
import { SchoolYearCard } from "../components/SchoolYearCard";
import { SchoolYearDialog } from "../components/SchoolYearDialog";

export default function SchoolYearsPage() {
    const [schoolYears, setSchoolYears] = useState<
        SchoolYear[]
    >([]);

    const [open, setOpen] = useState(false);

    const [editing, setEditing] =
        useState<SchoolYear | null>(null);

    function handleCreate(
        data: Omit<SchoolYear, "id">
    ) {
        const newItem: SchoolYear = {
            id: Date.now(),
            ...data,
        };

        setSchoolYears((prev) => [...prev, newItem]);

        setOpen(false);
    }

    function handleUpdate(
        data: Omit<SchoolYear, "id">
    ) {
        if (!editing) return;

        setSchoolYears((prev) =>
            prev.map((item) =>
                item.id === editing.id
                    ? { ...item, ...data }
                    : item
            )
        );

        setEditing(null);
        setOpen(false);
    }

    function handleDelete(id: number) {
        setSchoolYears((prev) =>
            prev.filter((item) => item.id !== id)
        );
    }

    function openCreateDialog() {
        setEditing(null);
        setOpen(true);
    }

    function openEditDialog(item: SchoolYear) {
        setEditing(item);
        setOpen(true);
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-md font-semibold">
                        School Years
                    </h1>

                    <p className="text-muted-foreground text-sm">
                        Manage academic school years
                    </p>
                </div>

                <Button size="lg" className="rounded-lg gap-2" onClick={openCreateDialog}>
                    Add School Year
                </Button>
            </div>

            {schoolYears.length === 0 ? (
                <EmptyState></EmptyState>
            ) : (
                <div className="grid gap-4">
                    {schoolYears.map((item) => (
                        <SchoolYearCard
                            key={item.id}
                            schoolYear={item}
                            onEdit={() => openEditDialog(item)}
                            onDelete={() => handleDelete(item.id)}
                        />
                    ))}
                </div>
            )}

            <SchoolYearDialog
                open={open}
                onOpenChange={setOpen}
                editing={editing}
                onSubmit={
                    editing
                        ? handleUpdate
                        : handleCreate
                }
            />
        </div>
    );
}