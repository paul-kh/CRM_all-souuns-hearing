export default function SearchInvoice() {
  return (
    <main className="page-container">
      <div className="page__title">
        <h2>Search Invoice</h2>
      </div>

      <div className="page__details">
        <form onSubmit={() => {}}>
          <div className="control-group__row">
            <div className="input-group">
              <label htmlFor="invoice-search-by">Search By</label>
              <select
                id="invoice-search-by"
                type="text"
                name="invoice-search-by"
                required
              >
                <option value="invoice-number">Invoice Number</option>
                <option value="account-number">Customer Account Number</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="invoice-search-value">Value</label>
              <input
                id="invoice-search-value"
                type="text"
                name="invoice-search-value"
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
