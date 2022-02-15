import Layout from "../../components/Layout";
import Countdown from "../../components/Countdown";
import prisma from "../../lib/prisma";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWVsbW9sbGF6IiwiYSI6ImNremJpcmY4ZDJlbjIyb28yZWt3NjF5MmMifQ.03oFENowylydeoRfp732qg";

export async function getServerSideProps(context) {
  const listingItem = await prisma.listings.findUnique({
    where: {
      id: Number(context.params.id),
    },
  });

  return {
    props: { listingItem },
  };
}

export default function listingItem({ listingItem }) {
  const { title, description, img_src, end_date, postal_code } = listingItem;

  return (
    <Layout>
      <section className="text-gray-700 body-font overflow-hidden bg-white h-full">
        <div className=" px-5 py-18 h-full mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={img_src}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-dark tracking-widest">
                Up4Grabs
              </h2>
              <h1 className="text-gray-dark text-3xl title-font font-medium mb-1">
                {title}
              </h1>
              <div className="flex mb-4">
                <Countdown end_date={end_date} />
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-light">
                  <a className="text-gray-dark">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-dark">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-dark">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed text-gray-dark">{description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-dark mb-5">
                <div className="flex"></div>
                <div className="relative"></div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-dark">
                  Like to bid
                </span>
                {/* <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Button
                </button> */}
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    className=" icon h-7 w-7 text-red"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section classNameName=" sticky -z-50000"> */}
        {/* <div classNameName="container mx-auto bg-[#fefefe] w-full flex px-8 py-24 md:flex-row justify-between flex-col items-center"> */}
          {/* <div classNameName="lg:w-52  md:w-1/2 w-5/6 mb-10 md:mb-0 flex-col self-start ">
            <img
              classNameName="lg:max-w-lg  md:w-42 md:h-[35vh] rounded"
              alt="hero"
              src={img_src}
            />

          </div> */}

          <Map
            initialViewState={{
              latitude: 43.59438,
              longitude: -79.64279,
              zoom: 14,
            }}
            style={{
              width: 400,
              height: 300,
              position: "absolute",
              zIndex: 1000,
              right: 0,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <Marker latitude={43.59438} longitude={-79.64279} />
          </Map>

          {/* <div classNameName="lg:max-w-lg lg:w-70  md:w-60 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 classNameName="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              {title}
              <br classNameName="hidden lg:inline-block" />
            </h1>
            <p classNameName="max-w-md mb-8 text-black leading-relaxed">
              {description}
            </p>
            <div classNameName="flex justify-center">
              <button classNameName="ml-4 inline-flex text-white bg-gray-dark border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div> */}
        {/* </div> */}
      {/* </section> */}
    </Layout>
  );
}
