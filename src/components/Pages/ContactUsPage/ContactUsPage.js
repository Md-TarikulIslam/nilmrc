import { Typography } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ContactUsPage = () => {
  return (
    <div className="mt-10 px-5 xl:px-0">
      <Fragment>
        <Typography variant="" className="text-2xl font-extrabold mb-3">
          National Institute of Laboratory Medicine & Referral Centre
        </Typography>
        <Typography variant="paragraph">
          Sher-E-Bangla Nagar, Agargoan, Dhaka-1207, Bangladesh
          <br /> Office Phone: +8802-44827350;
          <br /> Reception:+8801911-909153
          <br /> Office Information: +8801911-909141;
          <br /> Covid-19 Test Information: +8801911-909177;
          <br /> PABX: PA to Director: 14xx; PA to Joint Director: 1xx; Head
          Assistant: 1xx
          <br /> Fax: +88029XXXX; +88029XXX
          <br />
          <a href="mailto: nilmrc@ld.dghs.gov.bd" className="text text-blue-700">
            Email: nilmrc@ld.dghs.gov.bd
          </a>
          <br /> <Link className="text-blue-700" to='/'>Website: www.nilmrc.gov.bd</Link>
        </Typography>
      </Fragment>
    </div>
  );
};

export default ContactUsPage;
