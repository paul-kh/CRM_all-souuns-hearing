import { STATES } from "../data";

export default function NewCustomer() {
  return (
    <main className="page-container">
      <div className="page__title">
        <h2>New Customer Page</h2>
      </div>

      <div className="page__details">
        <form onSubmit={() => {}}>
          <div className="control">
            <label htmlFor="customer-name">Customer Name</label>
            <input
              id="customer-name"
              type="text"
              name="customer-name"
              required
            />
          </div>

          <div className="control">
            <label htmlFor="address">Street Address</label>
            <input id="address" type="text" name="address" required />
          </div>

          <div className="control-row">
            <div className="control">
              <label htmlFor="confirm-password">Building or Suite</label>
              <input
                id="suite-number"
                type="text"
                name="suite-number"
                size="8"
              />
            </div>

            <div className="control">
              <label htmlFor="first-name">City</label>
              <input type="text" id="City" name="City" size="30" required />
            </div>

            <div className="control">
              <label htmlFor="state">State</label>
              <select id="state" name="state" required defaultValue="">
                <option value="" disabled>
                  Select state
                </option>
                {STATES.map((state) => {
                  return (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="control">
              <label htmlFor="zip-code">Zip Code</label>
              <input
                type="number"
                id="zip-code"
                name="zip-code"
                size="10"
                required
              />
            </div>
          </div>
          <div className="control-row">
            <div className="control">
              <label htmlFor="phone">Telephone Number</label>
              <input id="phone" type="number" name="phone" size="15" />
            </div>
            <div className="control">
              <label htmlFor="confirm-password">E-mail</label>
              <input id="email" type="email" name="email" size="100" />
            </div>
          </div>

          <div className="control-row">
            <div className="control">
              <label htmlFor="contact-person">Contact Person</label>
              <input
                id="contact-person"
                type="text"
                name="contact-person"
                size="50"
              />
            </div>
            <div className="control">
              <label htmlFor="old-account">Old Account Number</label>
              <input id="old-account" type="number" name="old-account" />
            </div>
          </div>

          <p className="form-actions">
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
