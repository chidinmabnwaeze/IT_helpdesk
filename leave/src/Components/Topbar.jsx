import React from "react";

export default function Topbar() {
  return (
    <div>
      <div className="title">
        <h1>IT SUPPORT</h1>
      </div>

      <div className="notifications">
        <input type="text" placeholder="Search" />

        <div className="mode">
          <img className="night" src="" alt="" />
        </div>
        <div className="notify">
          <img className="bell" src="" alt="" />
        </div>
        <div className="user">
            <p>Micheal Offiong</p>
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
