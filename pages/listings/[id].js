import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";
import Countdown from "../../components/Countdown";

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
          <div className="lg:w-52  md:w-1/2 w-5/6 mb-10 md:mb-0 self-start">
            <img
              className="lg:max-w-lg  md:w-42 md:h-[35vh] rounded"
              alt="hero"
              src={img_src}
            />
          </div>
          <Countdown
          end_date={end_date}
          />
          <div className="lg:max-w-lg lg:w-70  md:w-60 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              {title}
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="max-w-md mb-8 text-black leading-relaxed">{description}</p>
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
