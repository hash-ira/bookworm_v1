import React from 'react'
import { useParams } from 'react-router-dom';

function SearchDetails({arrData}) {

  const { id } = useParams();

  const selectedItem = arrData.find((item) => item.id === id);

  const [data , setData] = React.useState([]);

  React.useEffect(() => {

    // fetching book details from the object self link
      fetch("https://www.googleapis.com/books/v1/volumes/8Pr_kLFxciYC")
            .then(res =>res.json())
            .then(data => setData(data))
    }, []);

  console.log(data?.volumeInfo?.imageLinks.large , "data i got");

  return (
    <div className="h-[40vh] flex flex-col lg:flex-row mt-4">
      <div className="lg:w-1/2 w-full">
        <img src={data?.volumeInfo?.imageLinks?.extraLarge} className="bg-cover"/>
      </div>
      <div>
        <h1 className="text-2xl">{data?.volumeInfo?.title}</h1>
        <h1 className="text-xl">{data?.volumeInfo?.subtitle}</h1>
        <h1 className="text-lg">{data?.volumeInfo?.authors[0]}</h1>
        <p className='text-lg'>Publisher : {data?.volumeInfo?.publisher}</p>
        <p className='text-lg'>Date Published : {data?.volumeInfo?.publishedDate}</p>
        <br/>
        {/* <p>{data?.volumeInfo?.description}</p> */}
      </div>
    </div>
  )
}

export default SearchDetails
