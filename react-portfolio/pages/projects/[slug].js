import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectDetail from '../../components/ProjectDetail';
import { getContentBySlug } from '../../lib/markdown';

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Get project data
  const project = slug ? getContentBySlug('projects', slug) : null;

  return (
    <div className="min-h-screen bg-navy">
      <Head>
        <title>
          {project ? `${project.title} - Gopalakrishnan Thirunellai Venkitachalam` : 'Project - Gopalakrishnan Thirunellai Venkitachalam'}
        </title>
        <meta 
          name="description" 
          content={project ? project.content.substring(0, 160) + '...' : 'Project details'} 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </div>
  );
}

