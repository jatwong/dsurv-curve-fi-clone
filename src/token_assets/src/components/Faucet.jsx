import React, { useState } from "react";
import { canisterId, createActor } from "../../../declarations/token";
import { AuthClient } from "@dfinity/auth-client";
import { token } from "../../../declarations/token";

function Faucet(props) {
  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisable(true);

    // The following code section is for authentication //

    // const authClient = await AuthClient.create();
    // const identity = await authClient.getIdentity();

    // const authenticatedCanister = createActor(canisterId, {
    //   agentOptions: {
    //     identity,
    //   },
    // });

    // const result = await authenticatedCanister.payOut();

    const result = await token.payOut();

    setButtonText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>
        Get your free RoBot coins here! Claim 10,000 ROBO coins to your account.
        {/* {props.userPrincipal}. */}
      </label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
