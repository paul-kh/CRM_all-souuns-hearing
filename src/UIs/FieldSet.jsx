export default function FieldSet() {
  return (
    <fieldset>
      <legend>How did you find us?</legend>
      <div className="control">
        <input type="checkbox" id="google" name="acquisition" value="google" />
        <label htmlFor="google">Google</label>
      </div>

      <div className="control">
        <input type="checkbox" id="friend" name="acquisition" value="friend" />
        <label htmlFor="friend">Referred by friend</label>
      </div>

      <div className="control">
        <input type="checkbox" id="other" name="acquisition" value="other" />
        <label htmlFor="other">Other</label>
      </div>
    </fieldset>
  );
}
