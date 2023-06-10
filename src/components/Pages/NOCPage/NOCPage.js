import { Card, Typography } from "@material-tailwind/react";
import { Link, ScrollRestoration } from "react-router-dom";
const TABLE_HEAD = ["Date", "Name of NOC"];

const TABLE_ROWS = [
  {
    date: "April, 2023",
  },
  {
    name: " Dr. Tania Islam Resma",
    link: "https://drive.google.com/file/d/160Ck55ZIWTdhgYS3vNdHkw_LikpL_nfF/view?usp=share_link",
    date: "25-04-2023",
  },
  {
    date: "March, 2023",
  },
  {
    name: "Dr. Abu Ahammad Al Mamun",
    link: "https://drive.google.com/file/d/1_Tgoh9MeA4S8lxKyz5okAFBBGYSpcNww/view?usp=share_link",
    date: "09-03-2023",
  },
  {
    date: "February, 2023",
  },
  {
    name: "Md. Anamul Haque",
    link: "https://drive.google.com/file/d/1SH5WHsntNA107CGL2ImjOPZpJ_sE2U5f/view?usp=share_link",
    date: "27-02-2023",
  },
  {
    date: "December, 2022",
  },
  {
    name: "Md. Jahangir Alam Salim",
    link: "https://www.nilmrc.gov.bd/images/notice/Md_Jahangir_Alam_Salim.pdf",
    date: "01-12-2022",
  },
  {
    date: "September, 2022",
  },
  {
    name: "Muhammed Mahbub Hasan",
    link: "https://www.nilmrc.gov.bd/images/notice/NOC_of_Muhammed_Mahbub_Hasan.pdf",
    date: "03-09-2022",
  },

  {
    date: "July, 2022",
  },
  {
    name: "Dr. Mohammad Shahed Ali",
    link: "https://www.nilmrc.gov.bd/images/notice/NOC_Dr_MohammadShahedAli.pdf",
    date: "07-07-2022",
  },
  {
    name: "Dr. Tasnim Nafisa",
    link: "https://www.nilmrc.gov.bd/images/notice/Dr_Tasnim_Nafisa_NOC.pdf",
    date: "21-04-2022",
  },
  {
    date: "January, 2022",
  },
  {
    name: "Dr. Arifa Akram",
    link: "https://www.nilmrc.gov.bd/images/notice/Dr_Arifa_Akram_NOC.pdf",
    date: "24-01-2022",
  },
  {
    name: "Dr. Mst. Naznin Tarana",
    link: "https://www.nilmrc.gov.bd/images/notice/Dr_%20Naznin_Tarana_NOC.pdf",
    date: "18-01-2022",
  },

  {
    name: "Dr. Modina Khatun",
    link: "https://www.nilmrc.gov.bd/images/notice/Dr._Modina_Khatun.pdf",
    date: "05-01-2022",
  },
  {
    date: "September, 2021",
  },
  {
    name: "Dr. Mohammad Abdullah Az Zubayer Khan",
    link: "https://www.nilmrc.gov.bd/images/notice/NOC_Dr_A_Zubayer.pdf",
    date: "18-09-2021",
  },
  {
    date: "February, 2020",
  },
  {
    name: "Md. Jahangir Alam and Prokash Chondro Mondol",
    link: "https://www.nilmrc.gov.bd/images/notice/Nilmrc-Noc-11022020.pdf",
    date: "10-02-2020",
  },
];

export default function NOCPage() {
  return (
    <>
      <Card className="rounded-none h-full w-full xl:w-8/12 mt-10">
        <table className="w-full min-w-min table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="lg"
                    color="blue-gray"
                    className="font-bold leading-none opacity-100"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, link, date }, index) => (
              <tr key={name} className="even:bg-blue-gray-50/50 ">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal "
                  >
                    {date}
                  </Typography>
                </td>
                <td className="p-4">
                  <Link
                    to={link}
                    variant="small"
                    color="blue-gray"
                    className="font-bold underline underline-offset-4"
                  >
                    {name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <ScrollRestoration />
    </>
  );
}
