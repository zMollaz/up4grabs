import Link from "next/link";

export default function Listings(props) {
  const { title, img, date, id } = props;

  return (
    <Link href={`/listings/${id}`}>
      <a>
        <div className="bg-white w-full shadow-md hover:shadow-2xl m-4 rounded-lg border-gray-200">
          <header>
            <img src={img} className="object-contain h-60 w-full" />
          </header>
          <div className="p-5 h-44 flex flex-col items-center justify-between">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 text-black">
              {title}
            </h5>
            <footer className="text-black self-end ">{date}</footer>
          </div>
        </div>
      </a>
    </Link>
  );
}
