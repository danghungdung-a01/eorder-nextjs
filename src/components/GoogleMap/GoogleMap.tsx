import React from "react";

type GoogleMapProps = {
  addressLink: string;
};

export default function GoogleMap(props: GoogleMapProps) {
  return (
    <div className="booking-system-map-frist">
      <div className="ak-google-map ak-bg">
        <iframe src={props.addressLink} allowFullScreen />
      </div>
    </div>
  );
}
