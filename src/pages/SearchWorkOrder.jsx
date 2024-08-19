export default function SearchWorkOrder() {
  return (
    <main className="page-container">
      <div className="page__title">
        <h2>Search Work Order</h2>
      </div>

      <div className="page__details">
        <form onSubmit={() => {}}>
          <div className="control-group__row">
            <div className="input-group">
              <label htmlFor="workorder-search-by">Search By</label>
              <select
                id="workorder-search-by"
                type="text"
                name="search-by"
                required
              >
                <option value="workorder-number">Work Order Number</option>
                <option value="customer-account-number">
                  Customer Account Number
                </option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="workorder-search-value">Value</label>
              <input
                id="workorder-search-value"
                type="text"
                name="workorder-search-value"
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
