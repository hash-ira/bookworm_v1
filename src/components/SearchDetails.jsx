import React from 'react'
import { useParams } from 'react-router-dom';

function SearchDetails({arrData}) {

  const { id } = useParams();

  const selectedItem = arrData.find((item) => item.id === id);

  const [data , setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  // React.useEffect(() => {

  //   // fetching book details from the object self link
  //     fetch(selectedItem.selfLink)
  //           .then(res =>res.json())
  //           .then(data => setData(data))
  //   }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(selectedItem.selfLink);

        if (!response.ok) {
          // Check for HTTP error status
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        // Handle fetch errors
        setError(error.message);
      }
    };

    fetchData();
  }, [selectedItem.selfLink]);

  console.log(data?.volumeInfo?.imageLinks.large , "data i got");

  //Error Handling
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold p-4 rounded-lg bg-red-500 text-white">
          Error: {error}
        </p>
        <div className="mt-4">
          <img
            className="h-[50vh] w-[50vh] min-w-min"
            src="/assets/error_img.png"
            alt="Error Image"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="h-[40vh] flex flex-col lg:flex-row mt-4">
      <div className="lg:w-1/2 w-full">
        <img src={data?.volumeInfo?.imageLinks?.extraLarge} className="bg-cover"/>
      </div>
      <div className="lg:w-1/2 p-4">
        <h1 className="text-3xl font-extrabold mb-2">{data?.volumeInfo?.title}</h1>
        <h2 className="text-xl font-semibold mb-4">{data?.volumeInfo?.subtitle}</h2>
        <p className="text-lg font-medium mb-2">
          <span className="text-gray-600">Author:</span> {data?.volumeInfo?.authors?.[0]}
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-gray-600">Publisher:</span> {data?.volumeInfo?.publisher}
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-gray-600">Published Date:</span> {data?.volumeInfo?.publishedDate}
        </p>
        <div className="mb-4">
          <span className="text-gray-600">Description:</span>
          <p className="text-base text-gray-800">{data?.volumeInfo?.description}</p>
        </div>
        <a
          href={data?.volumeInfo?.infoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

export default SearchDetails
