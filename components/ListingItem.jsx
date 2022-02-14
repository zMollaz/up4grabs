import Link from "next/link";

export default function Listings(props) {
  const { title, img, date, id } = props;

  return (
    <Link href={`/listings/${id}`}>
      <a>
        <div className="bg-off-white w-full shadow-md hover:shadow-2xl m-4 rounded-lg border-gray-200">
          <header>
            <img src={img} className="rounded-lg object-cover h-60 w-full" />
          </header>
          <div className="p-5 h-44 flex flex-col items-center justify-between">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 text-black">
              {title}
            </h5>
       
            <footer className="flex-row flex space-between" >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
              <div className= "bg-gray-light w-5/12 rounded-lg overflow-hidden shadow-lg text-center text-black self-end ">
              {date}
              </div>
            </footer>
          </div>
        </div>
      </a>
    </Link>
  );
}
