import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_ROWS = [
  {
    date: "22-01-2021",
    name: "Cytogenetics-Presentation-Slide",
    content_link: "",
    download_name: "Cytogenetics Presentation Slide",
    download_link:
      "https://www.nilmrc.gov.bd/images/docs/Cytogenetics-Presentation-Slide.pdf",
  },
  {
    date: "09-12-2020",
    name: "Complete Genome Sequences published in ASM",
    content_name: "https://mra.asm.org/content/9/39/e00764-20",
    content_link: "https://mra.asm.org/content/9/39/e00764-20",
    download_name: "MicrobiologyResourceAnnouncements-2020.full",

    download_link:
      "https://www.nilmrc.gov.bd/images/MicrobiologyResourceAnnouncements-2020.full.pdf",
  },
];

export default function ResearchPage() {
  return (
    <Card className=" h-full w-full mt-10 ">
      <table className="w-full min-w-min table-auto text-left">
        <tbody>
          {TABLE_ROWS.map(
            (
              {
                name,
                date,
                content_link,
                content_name,
                download_link,
                download_name,
              },
              index
            ) => (
              <tr key={name} className="even:bg-blue-gray-50/50 hover:odd:bg-blue-gray-50/50 ">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    Date: {date}
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold text-red-500 text-2xl my-2"
                  >
                    {name}
                  </Typography>
                  <Link to={content_link}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal hover:underline"
                    >
                      Content Link: {content_name}
                    </Typography>
                  </Link>
                  <Link to={download_link}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal hover:underline "
                    >
                      Download Link: {download_name}
                    </Typography>
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
}
