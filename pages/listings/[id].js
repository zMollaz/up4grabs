import Layout from "../../components/Layout";
import Countdown from "../../components/Countdown";
import prisma from "../../lib/prisma";
// import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// const MAPBOX_TOKEN =
//   "pk.eyJ1IjoiYWVsbW9sbGF6IiwiYSI6ImNremJpcmY4ZDJlbjIyb28yZWt3NjF5MmMifQ.03oFENowylydeoRfp732qg";


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
      <section className="text-gray-600 body-font">
        <div className="container mx-auto bg-[#fefefe] w-full flex px-8 py-24 md:flex-row justify-between flex-col items-center">
          <div className="lg:w-52  md:w-1/2 w-5/6 mb-10 md:mb-0 flex-col self-start ">
            <img
              className="lg:max-w-lg  md:w-42 md:h-[35vh] rounded"
              alt="hero"
              src={img_src}
            />
        
            <Countdown
            end_date={end_date}
            />
         
           

          </div>

          {/* <Map
            initialViewState={{
              latitude: 43.59438,
              longitude: -79.64279,
              zoom: 14,
            }}
            style={{ width: 400, height: 300, alignSelf: 'end', position: 'absolute',}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <Marker  latitude={43.59438} longitude={-79.64279}/>
          </Map> */}

          <div className="lg:max-w-lg lg:w-70  md:w-60 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              {title}
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="max-w-md mb-8 text-black leading-relaxed">
              {description}
            </p>
            <div className="flex justify-center">
              <button className="ml-4 inline-flex text-white bg-gray-dark border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
