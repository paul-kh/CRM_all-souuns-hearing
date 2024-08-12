export default function CheckBox() {
  return (
    <div className="control">
      <label htmlFor="terms-and-conditions">
        <input
          type="checkbox"
          id="terms-and-conditions"
          name="terms"
          required
        />
        I agree to the terms and conditions
      </label>
    </div>
  );
}
