// pages/project/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';


const ProjectDetail = ({ project }) => {
  const router = useRouter();
  console.log(project.image, "image")
  const { id } = router.query;

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-24 px-5">
      <div className="main flex justify-center flex-col">
      <div className="image shadow-2xl shadow-indigo-700  w-[100%] lg:h-[80vh] h-[100vh] mx-3 rounded-lg ">
<iframe
        src={project.liveLink} // Replace with the URL of the live site you want to embed
        className='h-full overflow-hidden w-full rounded-lg'
        title="Live Website"
      />
</div>
<div className="container">
      <h1 className="md:text-4xl text-xl my-10 font-bold mb-8"> {project.title}</h1>
      <p className="md:text-lg text-sm leading-relaxed mb-4">{project.Description}</p>
      <div>
       <ul>
        <h3 className='text-xl my-2 font-medium ' >Fronted Tech </h3>
        {project.frontend.map((item, index) => {
  const techName = item.split(':')[0].trim();
  const description = item.split(':')[1].trim();

  return (
    <li key={index}>
      <strong>{techName}</strong>: {description}
    </li>
  );
})}
        </ul>  

        <ul>
          <h3 className='text-xl my-2 font-medium' >Backend Tech</h3>
          {project.backend.map((item, index) => {
  const techName = item.split(':')[0].trim();
  const description = item.split(':')[1].trim();

  return (
    <li key={index}>
      <strong>{techName}</strong>: {description}
    </li>
  );
})}
        </ul> 
        <ul>
          <h3 className='text-xl my-2 font-medium' >Additonal Tools </h3>
          {project.additional_Tools.map((item, index) => {
  const techName = item.split(':')[0].trim();
  const description = item.split(':')[1].trim();

  return (
    <li key={index}>
      <strong>{techName}</strong>: {description}
    </li>
  );
})}
        </ul> 
      </div>
      <div>

      <Link href={project.liveLink} target="_blank"
    rel="noopener noreferrer" className='bg-blue-700 text-xl px-4 mt-6 rounded-xl py-2 hover:shadow-2xl hover:shadow-indigo-700 ' type="button">Live Link</Link>
    <Link href={"/"} className='bg-blue-700 text-xl px-4 mt-6 rounded-xl py-2 hover:shadow-2xl mx-4 hover:shadow-indigo-700 '  >Go Back
    </Link>
    </div>
</div>


      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const fetchProjectById = async (id) => {
    // Replace this with your actual data fetching logic
    const response = await fetch(`https://my-portfolio-three-green.vercel.app/api/project/${id}`);
    const project = await response.json();
    console.log(project , "from id")
    return project;
  };
  // Fetch the project details using the ID
  const project = await fetchProjectById(id);

  return {
    props: {
      project,
    },
  };
}

export default ProjectDetail;
