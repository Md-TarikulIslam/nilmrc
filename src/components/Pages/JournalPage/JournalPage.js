import { Card, Typography } from "@material-tailwind/react";
import { Link, ScrollRestoration } from "react-router-dom";

const TABLE_ROWS = [
  {
    name: "2022 December Volume-2 Number-2",
    link: "https://www.nilmrc.gov.bd/index.php/journal1?id=130",
  },
  {
    name: "2022 June Volume-2 Number-1",
    link: "https://www.nilmrc.gov.bd/index.php/journal1?id=131",
  },
  {
    name: "2021 December Volume-1 Number-2",
    link: "https://www.nilmrc.gov.bd/index.php/journal1?id=127",
  },
  {
    name: "2021 June Volume-1 Number-1",
    link: "https://www.nilmrc.gov.bd/index.php/journal1?id=126",
  },
];

export default function JournalPage() {
  return (
    <>
      <Card className=" h-full w-full mt-10 ">
        <table className="w-full min-w-min table-auto text-left">
          <tbody>
            <Typography
              color="blue-gray"
              className="font-bold text-red-500 text-2xl p-4 leading-10"
            >
              Journal of National Institute of Laboratory Medicine and Referral
              Center Bangladesh (JNILMRCB)
            </Typography>
            {TABLE_ROWS.map(({ name, link }, index) => (
              <tr key={name} className="even:bg-blue-gray-50/50 ">
                <td className="p-4">
                  <Link to={link}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal hover:underline"
                    >
                      Content Link: {name}
                    </Typography>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ScrollRestoration />
      </Card>
    </>
  );
}
