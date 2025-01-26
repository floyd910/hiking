import "./TransportType.css";

export default function TransportType() {
  return (
    <div className="transport_type">
      <h4>Transport Type</h4>
      <div className="transport_description">
        <ul>
          <li>
            <b>Model:</b> Mitsubishi Delica
          </li>
          <li>
            <b>Type:</b> 4X4 Van
          </li>
          <li>
            <b>Capacity</b>: 5+1 passengers
          </li>
        </ul>
        <div className="images">
          <img
            src="https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876576/tranport/DSCF7879_gk3va8.jpg"
            alt="Mitsubishi Delica - PinGeorgia.ge"
          />
          <img
            src="https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876574/tranport/DSCF9725_o8edgw.jpg"
            alt="Mitsubishi Delica - PinGeorgia.ge"
          />
          <img
            src="https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876632/tranport/DSCF9396_ryohvh.jpg"
            alt="Mitsubishi Delica - PinGeorgia.ge"
          />
        </div>
        <div>
          <p>Mercedes-Benz Sprinter 17 PAX</p>
          <div className="images">
            <img
              src="https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876576/tranport/DSCF2845_st5ooh.jpg"
              alt="Mercedes-Benz Sprinter 17 PAX - PinGeorgia.ge"
            />
            <img
              src="https://res.cloudinary.com/dxhhvp8jh/image/upload/v1706876575/tranport/DSCF2465_zcbhpi.jpg"
              alt="Mercedes-Benz Sprinter 17 PAX - PinGeorgia.ge"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
