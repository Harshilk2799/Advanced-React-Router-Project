import "../pages/Students.css";

function StudentList({ students }) {
  if (!students || students.length === 0) {
    return <p className="empty-message">No students found.</p>;
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        <div key={student.id} className="student-card">
          <img
            src={student.profilePic || "/default-avatar.png"}
            alt={student.name}
            className="student-avatar"
          />
          <h2 className="student-name">{student.name}</h2>
          {student.email && <p className="student-email">{student.email}</p>}
        </div>
      ))}
    </div>
  );
}

export default StudentList;
