import Layout from "../../components/Layout"
import prisma from "../../lib/prisma";

export async function getServerSideProps(context) {
  const listingItem = await prisma.listings.findUnique({
    where: {
      id: Number(context.params.id)
    },
  })
  // console.log("inside fetcher", listingItem);
  return {
    props: { listingItem },
  };
}

export default function listingItem({listingItem}) {
  const {title, description, img_src, end_date, postal_code} = listingItem
  console.log("Hello", title)
  return (
    
    <Layout>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={img_src} />
    </div>
    <div class="lg:flex-grow md:w-1 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}
        <br class="hidden lg:inline-block" />
      </h1>
      <p class="max-w-md mb-8 leading-relaxed">{description}</p>
      <div class="flex justify-center">
        <button class="ml-4 inline-flex text-gray-700 bg-gray border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
      {/* <div className= "flex flex-row justify-around">
      <div className="max-w-xs">
        <img src={img_src}/>
        </div>

        <div className="flex flex-col max-w-xs">
          <header>
            05 days 13 hours 22 mins 23 seconds until draw!
          </header>
          <br/>
          <article>
          <div>
            <span>
              33 users like this item
  
            </span>
            <button>
              Click to bid
            </button>
          </div>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          </article>
          <footer>
            Map view
          </footer>
        </div>
      </div> */}
    </Layout>
  )
    
}