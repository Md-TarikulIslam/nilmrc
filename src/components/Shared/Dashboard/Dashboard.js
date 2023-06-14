import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import img from "../../assets/images/dashboard/a.avif";
import img2 from "../../assets/images/dashboard/2.png";
import { FcIdea } from "react-icons/fc";
import { FaUpload } from "react-icons/fa";
import { ScrollRestoration } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mt-10">
      <Card className="mt-7">
      <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white" className="tracking-widest">
              Dashboard
            </Typography>
          </CardHeader>
        <CardBody>
        
          <div>
            <img className="h-1/2 w-1/2 mx-auto" src={img} alt="" />
            <div className="bg-green-700 rounded-lg p-2 w-80 mx-auto">
              <Typography className="flex text-2xl font-bold gap-2 tracking-widest text-yellow-400 justify-center">
                <span className="mt-1 ">
                  <FcIdea />
                </span>{" "}
                Hello, Admin
              </Typography>
            </div>
          </div>
          <div>
            <Typography className="text-center mt-10 italic text-lg text-red-600 tracking-wider">
              Update your website as like as you want from here.
            </Typography>

            <div className="my-10">
              <Input color="red" label="Enter Title" className="" />
            </div>

            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <img className="w-16 mb-5" src={img2} alt="" />
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG, WEBP or JPEG (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
          <Button
            fullWidth
            variant="gradient"
            className="flex items-center gap-3 justify-center mt-5 tracking-widest text-lg"
          >
            <FaUpload strokeWidth={2} className="h-5 w-5" /> Upload Files
          </Button>
        </CardBody>
      </Card>
      <ScrollRestoration />
    </div>
  );
};

export default Dashboard;
