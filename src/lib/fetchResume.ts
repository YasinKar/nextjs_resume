export async function fetchResume() {
    const response = await fetch(process.env.DOMAIN || 'https://yasin.monster/resume.json');
    return response.json();
}