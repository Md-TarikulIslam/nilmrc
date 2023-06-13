import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { Link, ScrollRestoration } from "react-router-dom";

const ContactUsPage = () => {
  return (
    <div className="mt-10 px-5 xl:px-0">
     <Card>
      <CardBody>
      <Fragment>
        <Typography variant="" className="text-3xl font-extrabold text-red-600 mb-3 leading-normal">
          National Institute of Laboratory <br /> Medicine &  Referral Centre
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
      </CardBody>
     </Card>
      <ScrollRestoration />
    </div>
  );
};

export default ContactUsPage;
