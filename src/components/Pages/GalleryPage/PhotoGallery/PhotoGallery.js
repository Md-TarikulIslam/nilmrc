import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ScrollRestoration } from "react-router-dom";
const PhotoGallery = ({ isLoading }) => {
  const { data: photos = [] } = useQuery({
    queryKey: ["photos"],
    queryFn: async () => {
      const res = await fetch(
        "https://nilmrc-server.vercel.app/nilmrc-gallery"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="mt-10">
      <h1 className="mb-8 font-bold text-red-600 text-3xl">
        Some Memorable Moments
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {photos.map((photo) => {
          return (
            <div key={photo._id}>
              <img
                className="h-full w-full rounded-lg shadow-xl shadow-blue-gray-900/50 zoom"
                src={photo.img}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default PhotoGallery;
