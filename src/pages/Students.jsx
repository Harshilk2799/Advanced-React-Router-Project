import { useLoaderData } from "react-router";
import StudentList from "./StudentList";

export const USER_API =
  "https://raw.githubusercontent.com/codingscenes/react-app/11-Data-Fetching-With-Loader/api/users.json";

function Students() {
  const students = useLoaderData();

  return (
    <div>
      <StudentList students={students} />
    </div>
  );
}

export default Students;

export async function studentLoader() {
  const response = await fetch(USER_API);
  if (!response.ok) {
    throw new Response("Failed to fetch students", {
      status: response.status,
    });
  }
  const responseData = await response.json();
  return responseData;
}
