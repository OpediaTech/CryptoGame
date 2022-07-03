import React from "react";
import Header from "../components/Header";
import { useMetaMask } from "metamask-react";

import hill from "../assets/Crypto/LandIcon.png";
import { raidData } from "../utils/data";

function Attack() {
  const raidHandler = () => {};
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  return (
    <div className="raidBackground">
      <Header />
      {/* raid section  */}
      <div className="container-custome raid">
        <div className="row header">
          <div className="col-md-6">
            <p>
              <span className="clr-rr">Attacking |</span> Your Attacking Stats
            </p>
          </div>
          <div className="col-md-6">
            <p className="clr-g">Raid AI</p>
          </div>
        </div>
        {raidData.map((item) => (
          <div className="row">
            <div className="col-md-6">
              <div
                className="d-flex left"
                style={{ border: `solid 3px ${item.color} ` }}
              >
                <div
                  style={{
                    borderRight: `solid 3px ${item.color} `,
                    boxShadow: `2px 2px 61px -7px ${item.color} 0.75 inset`,
                  }}
                  className="img"
                >
                  <img src={hill} alt="" />
                </div>
                <p>{item.name}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right  d-flex">
                <span>Level 1</span>
                <p>Rew : 15,000 $Leaf</p>
              </div>
            </div>
          </div>
        ))}
        {status === "connected" && (
          <div className="clr-w">
            Connected account {account} on chain ID {chainId}
          </div>
        )}
        <div className="details">
          <h2>Raid Player</h2>
          <div className="primarybtn" onClick={() => raidHandler()}>
            Raid
          </div>
          <p className="reward">Reward</p>
          <p className="balance">50,000,000 $Leaf</p>
          <h5 className="increase">Increased $LEAF Multiplier</h5>
        </div>
      </div>

      {/* raid section  */}
    </div>
  );
}

export default Attack;
