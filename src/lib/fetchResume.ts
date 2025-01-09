export async function fetchResume() {
    const response = await fetch('http://localhost:3000/resume.json');    
    return response.json();
}