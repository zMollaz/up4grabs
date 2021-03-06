import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import dynamic from "next/dynamic";
import { useContext, useState, useEffect } from "react";
import { ListingsContext } from "../../context/ListingsContext";
import { UsersContext } from "../../context/UsersContext";
import useListings from "../../hooks/useListings";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../components/Countdown"),
  { ssr: false }
);

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWVsbW9sbGF6IiwiYSI6ImNremJpcmY4ZDJlbjIyb28yZWt3NjF5MmMifQ.03oFENowylydeoRfp732qg";

export async function getServerSideProps(context) {
  const listingItem = await prisma.listings.findUnique({
    where: {
      id: Number(context.params.id),
    },
  });

  const biddings = await prisma.biddings.findMany({
    where: {
      listing_id: Number(context.params.id),
    },
  });

  const users = await prisma.user.findMany();
  const defaultListings = await prisma.listings.findMany();
  const listingId = Number(context.params.id);
  const response = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${listingItem.postal_code}.json?access_token=pk.eyJ1IjoiYWVsbW9sbGF6IiwiYSI6ImNremJpcmY4ZDJlbjIyb28yZWt3NjF5MmMifQ.03oFENowylydeoRfp732qg`
  );

  const extract = response.data.features[0].center;
  const coordinates = { longitude: extract[0], latitude: extract[1] };

  return {
    props: {
      listingItem,
      coordinates,
      users,
      defaultListings,
      listingId,
      biddings,
    },
  };
}

export default function ListingPage(props) {
  const { title, description, img_src, end_date } = props.listingItem;
  const { user, users } = useContext(UsersContext);
  const [color, setColor] = useState("none");
  const [timeUp, setTimeUp] = useState(false);
  const [winner, setWinner] = useState({});
  const [bidCount, setBidCount] = useState(0);

  const likeHistory = async () => {
    const response = await axios.get(`/api/likes/${props.listingId}`);
    const biddings = response.data.likes;
    setBidCount(biddings.length);
    const bidders = biddings.map((bidding) => bidding.user_id);
    const userWithPriorLike = bidders.find((bidder) => bidder === user.id);
    if (userWithPriorLike !== undefined) {
      setColor("#DA4567");
    } else {
      setColor("none");
    }
  };
  useEffect(() => likeHistory(), [user]);

  const handleLike = async () => {
    const postResponse = await axios.post("/api/likes", {
      user_id: user.id,
      listing_id: props.listingId,
    });
    
    const getResponse = await axios.get(`/api/likes/${props.listingId}`);
    const biddings = getResponse.data.likes;
    setBidCount(biddings.length);
    setColor("#DA4567"); // may want to remove this line
  };

  return (
    <ListingsContext.Provider value={useListings(props)}>
      <Layout
        setTimeUp={setTimeUp}
        winner={winner}
        listingItem={props.listingItem}
      >
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="lg:flex lg:flex-row lg:items-start xs:flex xs:flex-col xs:items-center pb-[270px]">
            <div className="w-70 ml-4 flex flex-col ">
              <img
                alt="ecommerce"
                className=" w-[430px] sticky self-start mt-6 mr-50 object-contain rounded border border-gray-200"
                src={img_src}
              />
              <div className="font-lucky w-42 pt-6 flex justify-center items-baseline text-4xl text-gray-dark">
                Like to bid
                <button
                  onClick={handleLike}
                  className="rounded-full h-10 bg-gray-200 p-0 border-0 inline-flex items-start align-middle justify-between text-gray-500 ml-4"
                >
                  <svg
                    className=" icon mb-2 h-10 w-10 text-red"
                    viewBox="0 0 24 24"
                    fill={color}
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
                 <div className="flex flex-col">
                <button className="bg-gray-dark mt-[10px] ml-[105px] items-center w-40 btn gap-2">
                  Bid Count 
                  <div className="badge badge-secondary">{bidCount}</div>
                </button>
                </div>
            </div>
            <div className="lg:w-[60%] w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 xs:flex xs:flex-col xs:items-center">
              <h2 className="text-sm title-font text-gray-dark tracking-widest">
                Up4Grabs
              </h2>
              <h1 className="text-gray-dark font-bold text-3xl title-font mb-1">
                {title}
              </h1>
              <div className="flex mb-">
                <DynamicComponentWithNoSSR
                  winner={winner}
                  setWinner={setWinner}
                  user={user}
                  timeUp={timeUp}
                  setTimeUp={setTimeUp}
                  end_date={end_date}
                  biddings={props.biddings}
                  users={props.users}
                  listingItem={props.listingItem}
                />
              </div>
              <p className="leading-relaxed flex-1 w-full pb-5 border-b-2 border-gray-light  mt-4 text-gray-dark ">
                {description}
              </p>
              <div className="flex justify-around">
                <Map
                  initialViewState={{
                    longitude: props.coordinates.longitude,
                    latitude: props.coordinates.latitude,
                    zoom: 13,
                  }}
                  style={{
                    width: 400,
                    height: 300,
                    alignSelf: "end",
                    position: "relative",
                    marginLeft: "80px",
                    marginTop: "70px",
                    border: "2px solid",
                    borderColor: "#31708e",
                    borderRadius: "8px",
                  }}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                  mapboxAccessToken={MAPBOX_TOKEN}
                >
                  <Marker
                    latitude={props.coordinates.latitude}
                    longitude={props.coordinates.longitude}
                  />
                </Map>
                <span className="flex h-10 ml-4 pl-3 py-12 border-gray-light">
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
            </div>
          </div>
        </section>
      </Layout>
    </ListingsContext.Provider>
  );
}
//test t
