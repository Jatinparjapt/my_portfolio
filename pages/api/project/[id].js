// pages/api/projects/[id].js
import path from 'path';
import fs from 'fs/promises';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    // Construct the path to the JSON file
    const filePath = path.join(process.cwd(), 'public', 'projects.json');
    
    // Check if file exists
    try {
      await fs.access(filePath);
    } catch (error) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Read the file content
    const fileContent = await fs.readFile(filePath, 'utf8');
    
    // Parse the JSON content
    const projects = JSON.parse(fileContent);

    // Find the project with the matching ID
    const project = projects.find((project) => project.id === parseInt(id, 10));

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    // Log the error to the server console
    console.error('Error reading or parsing the JSON file:', error);
    // Send a generic error message to the client
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
