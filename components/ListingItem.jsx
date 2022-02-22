import Link from "next/link";

export default function Listings(props) {
  const { title, img, date, id } = props;
  
  return (
    <Link href={`/listings/${id}`}>
      <a>
        <div className="bg-off-white w-full shadow-md hover:shadow-2xl mx-4 rounded-lg border-gray-200">
          <header>
            <img src={img} className="rounded-lg object-cover h-60 w-full" />
          </header>
          <div className="relative p-5 h-[140px] flex flex-col items-center justify-between">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 text-black">
              {title}
            </h5>

            <footer className=" card-footer absolute bottom-0 flex flex-col right-0 s-between w-full">
              <div className="bg-gray-light w-xs p-1.5 font-bold text-sm rounded-lg overflow-hidden shadow-lg text-center text-black self-end ">
                {date}
              </div>
            </footer>
          </div>
        </div>
      </a>
    </Link>
  );
}
