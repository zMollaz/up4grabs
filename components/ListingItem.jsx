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
          <div className="relative p-5 h-44 flex flex-col items-center justify-between">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 text-black">
              {title}
            </h5>

            <footer className=" card-footer absolute bottom-0 flex right-0 s-between w-full">
              <div>
                <svg
                  class=" icon h-7 w-7 text-red"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="bg-gray-light w-5/12 rounded-lg overflow-hidden shadow-lg text-center text-black self-end ">
                {date}
              </div>
            </footer>
          </div>
        </div>
      </a>
    </Link>
  );
}
