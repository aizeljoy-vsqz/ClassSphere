import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

export default function SchoolYearsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiGet("/school-years/").then(setData);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">School Years</h2>

      <div className="space-y-2">
        {data.map((sy: any) => (
          <div key={sy.id} className="p-3 border rounded">
            {sy.name}
          </div>
        ))}
      </div>
    </div>
  );
}