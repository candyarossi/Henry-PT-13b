import React from "react";
import style from "./Shipping.module.css";

export default function Shipping() {
  return (
    <div className={style.cruises}>
      <ul>
        <li>
          <img
            src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1677546096/Henry_hws_refactor/naviera-carnival_vfhkxk.png"
            alt="Carnival"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1677546096/Henry_hws_refactor/naviera-azamara_qrwqrh.jpg"
            alt="Azamara"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1677546096/Henry_hws_refactor/naviera-costa_pos2lt.png"
            alt="Costa"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1677546096/Henry_hws_refactor/naviera-croisieurop_l1e9ve.jpg"
            alt="CroisiMer"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1677546097/Henry_hws_refactor/naviera-silversea_zmlqmg.jpg"
            alt="Silversea"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dpiy1qwcm/image/upload/v1677546096/Henry_hws_refactor/naviera-disney_gi8mqz.jpg"
            alt="DisneyCruise"
          />
        </li>
      </ul>
    </div>
  );
}
