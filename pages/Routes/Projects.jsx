import React, { useState ,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        console.log(result, "reuslt")
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <Head>
        <title>Portfolio Page</title>
      </Head>
   <section className="pt-24 flex  justify-center flex-col ">
    <h1 className='flex justify-center items-center md:text-2xl font-semibold'>In-Depth Project Analysis  </h1>
    <div className="main md:w-[80%] flex flex-wrap justify-center pt-10  rounded-lg mx-auto ">
      {data.map((items, index)=>(
        <Link key={index} href={`/project/${items.id}`} > 
        <div  className={`first hover:shadow-2xl ${index=== 4 ? "md:-mt-10":""} hover:shadow-indigo-700 w-auto px-3 py-6 h-auto mx-4 rounded-xl my-4 md:min-w-48 md:max-w-72 bg-[#151347]`} >
        <div className="image h-auto mx-3 rounded-lg "><Image width={200} height={200} className='object-cover rounded-lg h-full  ' src={items.image} /></div>
        <div className="heading flex my-4 justify-center font-medium text-2xl ">{items.title}</div>
        <div className="desc">
      {items.Description}
        </div>
      </div>
        </Link>
      ))}
      
     
    </div>
</section>
    </>
  )
}

export default Portfolio