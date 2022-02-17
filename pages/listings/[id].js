import Layout from "../../components/Layout";
import Countdown from "../../components/Countdown";
import prisma from "../../lib/prisma";
import Map, { Marker } from "react-map-gl";
import axios from "axios";
import { ListingsContext } from "../../context/ListingsContext";
import useListings from "../../hooks/useListings";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWVsbW9sbGF6IiwiYSI6ImNremJpcmY4ZDJlbjIyb28yZWt3NjF5MmMifQ.03oFENowylydeoRfp732qg";

export async function getServerSideProps(context) {
  const listingItem = await prisma.listings.findUnique({
    where: {
      id: Number(context.params.id),
    },
  });
  const users = await prisma.user.findMany();
  const defaultListings = await prisma.listings.findMany();

  const response = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${listingItem.postal_code}.json?access_token=pk.eyJ1IjoiYWVsbW9sbGF6IiwiYSI6ImNremJpcmY4ZDJlbjIyb28yZWt3NjF5MmMifQ.03oFENowylydeoRfp732qg`
  );

  const extract = response.data.features[0].center;
  const coordinates = { longitude: extract[0], latitude: extract[1] };

  return {
    props: { listingItem, coordinates, users, defaultListings },
  };
}

export default function ListingPage(props) {
  const { title, description, img_src, end_date } = props.listingItem;

  return (
    <ListingsContext.Provider value={useListings(props)}>
      <Layout>
        <section className="text-gray-700 body-font overflow-hidden bg-white h-full">
          <div className="lg:w-4/5 h-[1000px] mx-auto flex flex-wrap flex-col">
            <img
              alt="ecommerce"
              className=" w-[430px] sticky self-start mt-12 object-contain rounded border border-gray-200"
              src={img_src}
            />
            <div className="flex mt-6 items-center w-[430px] pb-5 border-b-2 border-gray-dark mb-5">
              <div className="flex"></div>
              <div className="relative"></div>
            </div>
            <div className="flex w-[300px]">
              <span className="title-font font-medium text-2xl text-gray-dark">
                Like to bid
              </span>
              <button className="rounded-full w-[200px] h-10 bg-gray-200 p-0 border-0 inline-flex items-start justify-center text-gray-500 ml-4">
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
            </div>
            <Map
              initialViewState={{
                longitude: props.coordinates.longitude,
                latitude: props.coordinates.latitude,
                zoom: 14,
              }}
              style={{
                width: 400,
                height: 300,
                alignSelf: "end",
                position: "relative",
                marginLeft: "80px",
                marginTop: "40px",
              }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={MAPBOX_TOKEN}
            >
              <Marker
                latitude={props.coordinates.latitude}
                longitude={props.coordinates.longitude}
              />
            </Map>
          </div>
        </section>
      </Layout>
    </ListingsContext.Provider>
  );
}
