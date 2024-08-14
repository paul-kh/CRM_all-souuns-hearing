export default function NewWorkOrder() {
  return (
    <main className="page-container">
      <div className="page__title">
        <h2>New Work Order Page</h2>
      </div>

      <div className="page__details">
        <form action={() => {}}>
          {/* CUSTOMER ACCOUNT LOOKUP */}
          <div className="control-group__col">
            <div className="input-group">
              <label htmlFor="account-number">Customer Account Number </label>
              <input
                id="account-number"
                type="text"
                name="account-number"
                required
              />
            </div>
          </div>

          {/* DEVICE AND USER INFO */}
          <div className="control-group__row">
            <fieldset>
              <legend>Device and User Info</legend>
              <div className="control-group__col">
                <div className="input-group">
                  <label htmlFor="user-name">User Name</label>
                  <input type="text" id="user-name" name="user-name" />
                </div>
              </div>
              <div className="control-group__row">
                <div className="input-group">
                  <label htmlFor="user-name">Make</label>
                  <input type="text" id="user-name" name="user-name" />
                </div>
                <div className="input-group">
                  <label htmlFor="user-name">Model #</label>
                  <input type="text" id="user-name" name="user-name" />
                </div>
                <div className="input-group">
                  <label htmlFor="user-name">Serial #</label>
                  <input type="text" id="user-name" name="user-name" />
                </div>
              </div>
              <div className="control-group__row flex-end">
                <div className="input-group flex-row">
                  <input type="checkbox" id="user-name" name="user-name" />
                  <label htmlFor="user-name">Left</label>
                </div>
                <div className="input-group flex-row">
                  <input type="checkbox" id="user-name" name="user-name" />
                  <label htmlFor="user-name">Right</label>
                </div>
                <div className="input-group flex-row">
                  <input type="checkbox" id="user-name" name="user-name" />
                  <label htmlFor="user-name">BTE</label>
                </div>
                <div className="input-group flex-row">
                  <input type="checkbox" id="user-name" name="user-name" />
                  <label htmlFor="user-name">Custom</label>
                </div>
              </div>
            </fieldset>

            {/* DATE RECEIVED, DATE SHIPPED */}
            <fieldset>
              <legend>Dates</legend>
              <div className="control-group__col">
                <div className="input-group">
                  <label htmlFor="date-received">Date Received </label>
                  <input type="date" id="date-received" name="date-received" />
                </div>
                <div className="input-group">
                  <label htmlFor="date-received">Date Shipped </label>
                  <input type="date" id="date-received" name="date-received" />
                </div>
              </div>
            </fieldset>
          </div>

          {/* REPLACEMENT PARTS AND QUALITY CHECK*/}
          <div className="control-group__col">
            <fieldset>
              <legend>REPLACEMENT PARTS</legend>
              <div className="control-group__row">
                {/* PART LIST - 1  */}
                <div className="control-group__col">
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">MIC</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">VOL CNTRL</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">PRESET</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">HOOK</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">WIRES</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">REPLATE</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">RECASE/HSG</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">WINDSCREEN</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">REPLACE CIRCUIT</label>
                  </div>
                </div>

                {/* PART LIST - 2  */}
                <div className="control-group__col">
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">REC</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">RIC</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">SWITCH/BUTTON</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">TELECOIL/WIRELESS</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">BATTERY DOOR</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">SOUND STUD</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">SUSP/TUBES</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">WAXGUARD</label>
                  </div>
                  <div className="input-group flex-row">
                    <input type="checkbox" id="user-name" name="user-name" />
                    <label htmlFor="user-name">OTHER</label>
                  </div>
                </div>

                {/* PART LIST - 3 - QUALITY CHECK */}
                <div className="control-group__col">
                  <fieldset>
                    <legend> QUALITY CHECK</legend>

                    <div className="input-group">
                      <label htmlFor="user-name" className="text-transform__no">
                        New Serial #
                      </label>
                      <input type="text" id="user-name" name="user-name" />
                    </div>

                    <div className="input-group flex-row">
                      <input type="checkbox" id="user-name" name="user-name" />
                      <label htmlFor="user-name" className="text-transform__no">
                        Return at User's Settings
                      </label>
                    </div>
                    <div className="input-group flex-row">
                      <input type="checkbox" id="user-name" name="user-name" />
                      <label htmlFor="user-name" className="text-transform__no">
                        Unable to Save User's Settings
                      </label>
                    </div>
                    <div className="input-group flex-row">
                      <input type="checkbox" id="user-name" name="user-name" />
                      <label htmlFor="user-name" className="text-transform__no">
                        Clean, Check, and Verify All
                      </label>
                    </div>

                    <div className="input-group flex-row">
                      <input type="checkbox" id="user-name" name="user-name" />
                      <label
                        htmlFor="user-name"
                        className="text-yellow text-bold"
                      >
                        PASSED QC
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>
            </fieldset>
          </div>

          {/* WARRANTY & PAYMENT*/}
          <div className="control-group__row">
            <fieldset>
              <legend>WARRANTY</legend>
              <div className="control-group__col">
                <div className="control-group__row">
                  <div className="input-group">
                    <label htmlFor="user-name">Warranty Starts</label>
                    <input type="date" id="user-name" name="user-name" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="user-name">Warranty Ends</label>
                    <input type="date" id="user-name" name="user-name" />
                  </div>
                </div>

                <div className="control-group__row">
                  <div className="input-group">
                    <label htmlFor="user-name">Ship Method</label>
                    <input type="text" id="user-name" name="user-name" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="user-name">Pay Method</label>
                    <input type="text" id="user-name" name="user-name" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="user-name">Total Amount</label>
                    <input type="text" id="user-name" name="user-name" />
                  </div>
                </div>
              </div>
              <div className="control-group__row flex-space-between">
                <div className="input-group flex-row">
                  <input type="checkbox" id="user-name" name="user-name" />
                  <label htmlFor="user-name">Repair</label>
                </div>
                <div className="input-group flex-row">
                  <input type="checkbox" id="user-name" name="user-name" />
                  <label htmlFor="user-name">Re-repair</label>
                </div>
                <div className="input-group flex-row">
                  <input type="checkbox" id="user-name" name="user-name" />
                  <label htmlFor="user-name">Remake</label>
                </div>
              </div>
            </fieldset>

            {/* TECHNICIAN COMMENTS */}
            <fieldset>
              <legend>TECHNICIAN</legend>
              <div className="control-group__col">
                <div className="input-group">
                  <label htmlFor="date-received" className="text-transform__no">
                    Comments{" "}
                  </label>
                  <textarea
                    type="textarea"
                    id="date-received"
                    name="date-received"
                    rows="3"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="user-name" className="text-transform__no">
                    Initial
                  </label>
                  <input type="text" id="user-name" name="user-name" />
                </div>
                <div className="input-group">
                  <label htmlFor="user-name" className="text-transform__no">
                    Repaired
                  </label>
                  <input type="text" id="user-name" name="user-name" />
                </div>
                <div className="input-group">
                  <label htmlFor="user-name">SPEC</label>
                  <input type="text" id="user-name" name="user-name" />
                </div>
              </div>
            </fieldset>
          </div>

          {/* BUTTONS SECTION */}
          <div className="control-group__col p-t-1"></div>
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
