// pages/api/data.js
import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  try {
    // Construct the path to the JSON file
    const filePath = path.join(process.cwd(), 'public', 'project.json');
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse the JSON content
    const data = JSON.parse(fileContent);
    
    // Send the JSON response
    res.status(200).json(data);
  } catch (error) {
    // Log the error to the server console
    console.error('Error reading or parsing the JSON file:', error);
    // Send a generic error message to the client
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
