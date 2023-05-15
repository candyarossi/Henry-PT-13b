import React from "react";

export default function Promotions() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2em",
      }}
    >
      <img
        style={{ width: "50vw" }}
        src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1677546095/Henry_hws_refactor/discount1_jj4qmc.jpg"
        alt="prom1"
      />
      <img
        style={{ width: "50vw", paddingTop: "2em" }}
        src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1677546095/Henry_hws_refactor/discount2_g99cit.jpg"
        alt="prom2"
      />
      <img
        style={{ width: "50vw", paddingTop: "2em" }}
        src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1677546095/Henry_hws_refactor/discount3_spq9bh.jpg"
        alt="prom3"
      />
    </div>
  );
}
