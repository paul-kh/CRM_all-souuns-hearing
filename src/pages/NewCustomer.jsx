import { USA_STATES } from "../data.js";

export default function NewCustomer() {
  return (
    <main className="page-container">
      <div className="page__title">
        <h2>New Customer</h2>
      </div>

      <div className="page__details">
        <form onSubmit={() => {}}>
          <div className="control-group__col">
            <div className="input-group">
              <label htmlFor="customer-name">Customer Name</label>
              <input
                id="customer-name"
                type="text"
                name="customer-name"
                required
              />
            </div>
          </div>

          <div className="control-group__col">
            <div className="input-group">
              <label htmlFor="address">Street Address</label>
              <input id="address" type="text" name="address" required />
            </div>
          </div>

          <div className="control-group__row">
            <div className="input-group">
              <label htmlFor="confirm-password">Suite#</label>
              <input id="suite-number" type="text" name="suite-number" />
            </div>

            <div className="input-group">
              <label htmlFor="first-name">City</label>
              <input type="text" id="City" name="City" required />
            </div>

            <div className="input-group">
              <label htmlFor="state">State</label>
              <select id="state" name="state" required defaultValue="">
                <option value="" disabled>
                  Select state
                </option>
                {USA_STATES.map((state) => {
                  return (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="zip-code">Zip Code</label>
              <input type="number" id="zip-code" name="zip-code" required />
            </div>
          </div>
          <div className="control-group__row">
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="number" name="phone" />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">E-mail</label>
              <input id="email" type="email" name="email" />
            </div>
          </div>

          <div className="control-group__row">
            <div className="input-group">
              <label htmlFor="contact-person">Contact Person</label>
              <input id="contact-person" type="text" name="contact-person" />
            </div>
            <div className="input-group">
              <label htmlFor="old-account">Old Account Number</label>
              <input id="old-account" type="number" name="old-account" />
            </div>
          </div>

          <p className="form-actions p-t-1">
            <button type="reset" className="button button-flat">
              Reset
            </button>
            <button type="submit" className="button">
              Save
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}
