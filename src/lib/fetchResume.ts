export async function fetchResume() {
    const response = await fetch('https://yasin.monster/resume.json');
    return response.json();
}