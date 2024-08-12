export default function SelectBox() {
  return (
    <div className="control">
      <label htmlFor="phone">What best describes your role?</label>
      <select id="role" name="role" required>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="employee">Employee</option>
        <option value="founder">Founder</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}
