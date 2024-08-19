export default function NewStatement() {
  return (
    <main className="page-container">
      <div className="page__title">
        <h2>New Statement</h2>
      </div>

      <div className="page__details">
        <form onSubmit={() => {}}>
          <div className="control-group__row">
            <div className="input-group">
              <label htmlFor="account-number">Customer Account Number</label>
              <input
                id="account-number"
                type="number"
                name="account-number"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="from-date">From Date</label>
              <input id="from-date" type="date" name="from-date" required />
            </div>

            <div className="input-group">
              <label htmlFor="to-date">To Date</label>
              <input id="to-date" type="date" name="to-date" required />
            </div>
          </div>

          <p className="form-actions p-t-1">
            <button type="reset" className="button button-flat">
              Reset
            </button>
            <button type="submit" className="button">
              Generate Statement
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}
