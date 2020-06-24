import React from "react";
import "./RentalBox.css";

const RentalBox = (props) => {
  return (
    <div className="rental ui">
      <div class="ui centered three column grid">
        <div class="column">
          <div className="ui right rail">
            <div class="">
              <div></div>
              <div className="ui">
                <h2 class="ui sub header">
                  Rental Customer:{" "}
                  {props.customerPick ? props.customerPick.name : ""}
                </h2>
                <h2 class="ui sub header">
                  Rental Movie: {props.moviePick ? props.moviePick.title : ""}
                </h2>

                <div class="ui buttons cart">
                  <button
                    class="ui button"
                    onClick={() => {
                      props.clearSelectionsCallback(null);
                    }}
                  >
                    Cancel
                  </button>
                  <div class="or"></div>
                  <button
                    class="ui blue button"
                    onClick={() => {
                      props.submitSelectionsCallback(null);
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalBox;
