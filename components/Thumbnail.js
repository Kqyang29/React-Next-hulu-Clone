import Image from "next/image"
import { HandThumbUpIcon } from '@heroicons/react/24/outline'
import { forwardRef } from "react";


const Thumbnail = forwardRef(function Thumbnail({ result }, ref) {

  const BASE_URL = "http://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
        height={1080}
        width={1920}
        alt={result.title}
        layout="responsive"
      />


      <div className="p-2">
        <p className="truncate max-w-md">
          {result.overview}
        </p>

        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_title}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {`${result.release_date} ·`}{" "}
          <HandThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});



export default Thumbnail;
