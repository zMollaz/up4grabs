import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";

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
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="lg:max-w-lg lg:w-full md:max-w-lg md:w-full object-cover object-center rounded"
              alt="hero"
              src={img_src}
            />
          </div>
          <div className="lg:max-w-lg lg:w-full lg:flex-grow md:w-1 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {title}
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="max-w-md mb-8 leading-relaxed">{description}</p>
            <div className="flex justify-center">
              <button className="ml-4 inline-flex text-gray-700 bg-gray border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
