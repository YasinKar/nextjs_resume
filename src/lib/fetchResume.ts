export async function fetchResume() {
    const response = await fetch(process.env.DOMAIN || 'http://localhost:3000/resume.json');
    return response.json();
}