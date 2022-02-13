import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Listings from "../components/Listings";
import New from "../components/New";
import prisma from "../lib/prisma";
import {useState} from 'react';


export async function getStaticProps() {
  const listings = await prisma.listings.findMany();
  // console.log("inside fetcher", listings);
  return {
    props: { listings },
  };
}

//search function 
// export async function getStaticProps() {
//   const search = await prisma.listings.findMany({
//     where: {
//       title: {
//         contains: 'shelf',
//       },
//     },
//   })
// }



//use useEffect inside the component when you want to make additional queries to db or api like create

export default function Home({ listings }) {
  
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay((prev) => !prev);
  };

  return  (
    <Layout handleClick={handleClick}>
      <Header />
      <Listings listings={listings}/>
      {display && <New handleClick={handleClick} />}
      <Footer />
    </Layout>
  );

}
