import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout";
import SchoolYearsPage from "@/features/academic-structure/school-years/pages/SchoolYearsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "dashboard", element: <div>Dashboard</div> },
      { path: "school-years", element: <SchoolYearsPage />, },
      { path: "sections", element: <div>Sections</div> },
      { path: "subjects", element: <div>Subjects</div> },
      { path: "teaching-loads", element: <div>Teaching Loads</div> },
      { path: "students", element: <div>Students</div> },
      { path: "attendance", element: <div>Attendance</div> },
      { path: "assessments", element: <div>Assessments</div> },
      { path: "grades", element: <div>Grades</div> },
      { path: "grading-templates", element: <div>Templates</div> },
    ],
  },
]);