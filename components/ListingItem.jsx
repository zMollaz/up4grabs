export default function Listings(props) {
  const {title, img, date} = props;


  
  return (
    <div className=" bg-white shadow-md hover:shadow-2xl m-4 rounded-lg border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <header>
      <img src={img} className="rounded-t-lg  object-cover h-60 w-full"/>
      </header>
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        <footer>{date}</footer>
      </div>
    </div>
  );
}
