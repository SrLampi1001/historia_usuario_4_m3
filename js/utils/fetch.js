export const URL = "http://localhost:3000"
const JSONFetch = async (path, options = {}) => {
    const res = await fetch(`${API}${path}`, {
        headers: { "Content-Type": "application/json", ...(options.headers || {}) },
        ...options
    });
    if (!res.ok) {
        //useful error message for debugging
        const body = await res.text().catch(() => "");
        throw new Error(`Request failed: ${options.method || "GET"} ${path} (${res.status}) ${body}`);
    }
    const text = await res.text();
    return text ? JSON.parse(text) : null;
}
export default JSONFetch;
