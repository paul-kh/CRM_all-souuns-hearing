export default function SearchCustomer() {
  return (
    <main className="page-container">
      <div className="page__title">
        <h2>Search Customer</h2>
      </div>

      <div className="page__details">
        <form onSubmit={() => {}}>
          <div className="control-group__row">
            <div className="input-group">
              <label htmlFor="search-by">Search By</label>
              <select id="search-by" type="text" name="search-by" required>
                <option value="account-number">Account Number</option>
                <option value="customer-name">Customer Name</option>
                <option value="phone-number">Phone number</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="search-value">Value</label>
              <input
                id="search-value"
                type="text"
                name="search-value"
                required
              />
            </div>
          </div>

          <p className="form-actions p-t-1">
            <button type="reset" className="button button-flat">
              Reset
            </button>
            <button type="submit" className="button">
              Search
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}
