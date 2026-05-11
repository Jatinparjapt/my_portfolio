import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';


const ProjectDetail = ({ project }) => {
  const router = useRouter();
  // console.log(project.image, "image")
  const { id } = router.query;

  if (!project) {
    return <p>Loading...</p>;
  }
  const canonicalUrl = `https://my-portfolio-three-green.vercel.app/project/${id}`;

  // ✅ JSON-LD Schema for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.seo_title || project.title,
    description: project.seo_description || project.Description,
    url: canonicalUrl,
    image:
      project.openGraph?.image ||
      project.image ||
      "https://my-portfolio-three-green.vercel.app/default-image.jpg",
    author: {
      "@type": "Person",
      name: "Jatin Kumar",
      url: "https://my-portfolio-three-green.vercel.app",
    },
    programmingLanguage: [
      ...(project.frontend?.map((f) => f.split(":")[0]) || []),
      ...(project.backend?.map((b) => b.split(":")[0]) || []),
    ],
    dateCreated: project.dateCreated || "2025-01-01",
    dateModified: project.dateModified || new Date().toISOString(),
    keywords: [
      ...(project.frontend?.map((f) => f.split(":")[0]) || []),
      ...(project.backend?.map((b) => b.split(":")[0]) || []),
      ...(project.additional_Tools?.map((t) => t.split(":")[0]) || []),
    ].join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };


  return (
    <>
         <Head>
        {/* ✅ Basic SEO */}
        <title>{project.seo_title || `${project.title} | My Portfolio`}</title>
        <meta
          name="description"
          content={
            project.seo_description ||
            project.Description?.slice(0, 155) ||
            "Project details and technologies used."
          }
        />
        <meta
          name="keywords"
          content={project.seo_keywords || ""}
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* ✅ Open Graph (Facebook / LinkedIn / WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={project.openGraph?.title || project.seo_title} />
        <meta property="og:description" content={project.openGraph?.description || project.seo_description} />
        <meta property="og:url" content={project.openGraph?.url || canonicalUrl} />
        <meta property="og:image" content={project.openGraph?.image} />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.openGraph?.title || project.seo_title} />
        <meta name="twitter:description" content={project.openGraph?.description || project.seo_description} />
        <meta name="twitter:image" content={project.openGraph?.image} />

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
    <div className="min-h-screen bg-slate-900 py-24 px-5 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Browser Mockup Frame */}
        <div className="w-full rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-800">
          {/* Browser Header */}
          <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 max-w-md mx-auto h-6 bg-slate-900/50 rounded flex items-center px-3 text-[10px] text-slate-500 font-mono truncate">
              {project.liveLink}
            </div>
          </div>
          {/* Iframe Content */}
          <div className="w-full lg:h-[75vh] h-[50vh] bg-slate-900">
            <iframe
              src={project.liveLink}
              className="w-full h-full border-none"
              title="Project Preview"
            />
          </div>
        </div>

        {/* Project Info Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                {project.Description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center gap-2"
              >
                Launch Live Site
              </Link>
              <Link
                href="/"
                className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-slate-500 transition-all"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>

          {/* Right: Tech Stack Grid */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-4">Frontend Architecture</h3>
              <ul className="space-y-3">
                {project.frontend?.map((item, index) => {
                  const [name, desc] = item.includes(':') ? item.split(':') : [item, ''];
                  return (
                    <li key={index} className="text-slate-300 text-sm">
                      <span className="text-white font-semibold">{name.trim()}</span>
                      {desc && <span className="text-slate-500">: {desc.trim()}</span>}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-4">Backend Infrastructure</h3>
              <ul className="space-y-3">
                {project.backend?.map((item, index) => {
                  const [name, desc] = item.includes(':') ? item.split(':') : [item, ''];
                  return (
                    <li key={index} className="text-slate-300 text-sm">
                      <span className="text-white font-semibold">{name.trim()}</span>
                      {desc && <span className="text-slate-500">: {desc.trim()}</span>}
                    </li>
                  );
                })}
              </ul>
            </div>

            {project.additional_Tools?.length > 0 && (
              <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-md">
                <h3 className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-4">Core Tools</h3>
                <ul className="space-y-3">
                  {project.additional_Tools.map((item, index) => {
                    const [name, desc] = item.includes(':') ? item.split(':') : [item, ''];
                    return (
                      <li key={index} className="text-slate-300 text-sm">
                        <span className="text-white font-semibold">{name.trim()}</span>
                        {desc && <span className="text-slate-500">: {desc.trim()}</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const filePath = path.join(process.cwd(), 'public', 'projects.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const projects = JSON.parse(fileContent);
    
    // Find the project with the matching ID
    const project = projects.find((p) => p.id === parseInt(id, 10)) || null;

    if (!project) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        project,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        project: null,
      },
    };
  }
}

export default ProjectDetail;
