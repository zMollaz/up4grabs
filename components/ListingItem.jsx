export default function Listings(props) {
  const {title, img, date} = props;

  return (
    <div className=" bg-white  hover:shadow-2xl m-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <header>
      <img src={img} className="rounded-lg"/>
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
