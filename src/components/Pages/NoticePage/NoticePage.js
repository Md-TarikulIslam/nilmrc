import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "ক্রম",
  "বিষয়বস্তু",
  "ইস্যু নম্বর",
  "শাখা",
  "প্রকাশের তারিখ",
  "ডাউনলোড",
];

const TABLE_ROWS = [
  {
    no: "১",
    subject: "ই-জিপির মাধ্যমে দরপত্র বিজ্ঞপ্তি",
    issue_no: " ৩০৪",
    div: "প্রশাসনিক",
    date: "০৯-০৩-২০২৩",
    download: " দরপত্র বিজ্ঞপ্তি.pdf",
    link: "https://drive.google.com/file/d/1pis1nsOj1jzq-R-m1X9DrEWRjBteFK8l/view",
  },
  {
    no: "২",
  },
  {
    no: "৩",
  },
];

export default function NoticePage() {
  return (
    <Card className="overflow-scroll h-full w-full mt-10">
      <Typography
        color="blue-gray"
        className="font-bold text-red-500 text-2xl p-4 leading-10"
      >
        National Institute of Laboratory Medicine & Referral Centre (NILMRC)
      </Typography>
      <table className="w-full min-w-max table-auto text-center ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 "
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            ({ no, subject, issue_no, div, date, download, link }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={no}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {no}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {subject}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {issue_no}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {div}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <a target="_blank" href={link}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal hover:underline"
                      >
                        {download}
                      </Typography>
                    </a>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
}
