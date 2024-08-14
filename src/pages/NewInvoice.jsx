export default function NewInvoice() {
  return (
    <main className="page-container">
      <div className="page__title">
        <h2>New Invoice </h2>
      </div>

      <div className="page__details">
        <form onSubmit={() => {}}>
          <div className="control-group__col">
            <div className="input-group">
              <label htmlFor="customer-name">
                Enter Customer Account Number to Be Billed
              </label>
              <input
                id="customer-name"
                type="text"
                name="customer-name"
                required
              />
            </div>
          </div>

          {/* SPACERS */}
          <div className="control-group__row p-t-2" />
          <div className="control-group__row p-t-2" />

          <div className="control-group__col">
            <fieldset>
              <legend>{`Select Work Order(s) to Be Billed`}</legend>
              <div className="control-group__row flex-items-centered flex-content-centered p-t-2">
                <div className="control-group__row flex-content-centered">
                  <div className="input-group ">
                    <label htmlFor="availableWorkOrders" className="p-left-1">
                      Available Work Orders
                    </label>
                    <div className="list-container">
                      <select
                        name="availableWorkOrders"
                        id="availableWorkOrders"
                        multiple
                      >
                        <option value="0123456">0123451</option>
                        <option value="0123456">0123452</option>
                        <option value="0123456">0123453</option>
                        <option value="0123456">0123454</option>
                        <option value="0123456">0123455</option>
                        <option value="0123456">0123456</option>
                        <option value="0123456">0123457</option>
                        <option value="0123456">0123458</option>
                        <option value="0123456">0123459</option>
                        <option value="0123456">0123410</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="control-group__col">
                  <div className="input-group">
                    <button type="reset" className="button">
                      Add
                    </button>
                    <div className="control-group__row p-t-2" />
                    <button type="submit" className="button">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="control-group__col">
                  <div className="input-group">
                    <label htmlFor="address" className="p-left-1">
                      Selected Work Orders
                    </label>
                    <div className="list-container">
                      <select
                        name="availableWorkOrders"
                        id="availableWorkOrders"
                        multiple
                      >
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* SPACERS */}
              <div className="control-group__row p-t-2" />
            </fieldset>
          </div>

          {/* SPACERS */}
          <div className="control-group__row p-t-2 flex-content-centered">
            <p className="form-actions">
              <button type="submit" className="button">
                Create Invoice
              </button>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
