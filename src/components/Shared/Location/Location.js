import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14604.653052789905!2d90.3676998!3d23.7771999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1c4ed63e7d9%3A0x7226a29076a2fc15!2z4Kao4KeN4Kav4Ka-4Ka24Kao4Ka-4KayIOCmh-CmqOCmuOCnjeCmn-Cmv-Cmn-Cmv-CmieCmnyDgpoXgpqwg4Kay4KeN4Kav4Ka-4Kas4Kaw4KeH4Kaf4Kaw4Ka_IOCmruCnh-CmoeCmv-CmuOCmv-CmqCDgpo_gpqjgp43gpqEg4Kaw4KeH4Kar4Ka-4Kaw4KeH4KayIOCmuOCnh-CmqOCnjeCmn-CmvuCmsA!5e0!3m2!1sen!2sbd!4v1686115178276!5m2!1sen!2sbd"
        className="map"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
