const BASE_URL = "http://localhost:8000/api/v1";

export async function apiGet(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  return res.json();
}

export async function apiPost(endpoint: string, data: any) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}