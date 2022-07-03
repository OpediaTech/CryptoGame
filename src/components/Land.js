import React, { useState } from "react";
import active from "../assets/Crypto/ActiveCards.png";
import inactive from "../assets/Crypto/Inactive.png";
import DetailsActive from "../assets/Crypto/groupbg.png";
import { landData } from "../utils/data";
import Header from "./Header";

const imgB =
  "https://images.unsplash.com/photo-1588599037678-3131ff026fe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80";

function Land() {
  const [land, setLand] = useState(0);
  const [landDetails, setLandDetails] = useState(null);

  return (
    <>
      <Header />
      <div className="Landbackground">
        <div className="container-custome land row ">
          <div className="col-md-3">
            <p className="title clr-w">Your Land</p>
            <div className="image-collection">
              {landData.map((item, index) => (
                <div
                  onClick={() => {
                    setLand(index);
                  }}
                  className="img"
                >
                  <img
                    src={item.image}
                    style={{ border: index === land && "5px solid #BCB448" }}
                    alt="land-details"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <p className="title clr-g px-4">Active Units</p>
            {landData[land].property.map((item) => (
              // {[active, active, inactive].map((item) => (
              <div
                onClick={() => setLandDetails(item)}
                className="activeGames"
                style={{
                  backgroundImage: item.status
                    ? `url(${active})`
                    : `url(${inactive})`,
                }}
              >
                <div className="row">
                  <div className="col-md-3">
                    <div className="img">
                      <img src={imgB} alt="" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="details">
                      <p className="title">{item.name}</p>
                      <p className="power clr-g">Mountain Land</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {landDetails && (
              <div
                className="DetailsGames"
                style={{ backgroundImage: `url(${DetailsActive})` }}
              >
                <div className="game-details">
                  <button className="btn-state">Total states</button>
                  <div className="details mt-4">
                    <div className="left">
                      <p className="clr-w">Leaf Generation</p>
                      <p className="power clr-w mt-4">{landDetails.name}</p>
                      <p className="clr-w">
                        Air : {landDetails.StatMultiplier}
                      </p>
                    </div>
                    <div className="left">
                      <p className="clr-r">Attacking Stats</p>
                      <p className="power clr-r mt-4">{landDetails.name}</p>
                      <p className="clr-r"> Air:{landDetails.StatMultiplier}</p>
                      <p className="clr-r">
                        Underground: {landDetails.Underground}
                      </p>
                    </div>
                    <div className="left">
                      <p className="clr-g">Defensive Stats</p>
                      <p className="power clr-g mt-4">{landDetails.name}</p>
                      <p className="clr-g">Air: {landDetails.StatMultiplier}</p>
                      <p className="clr-g">
                        Underground :{landDetails.Underground}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Land;
