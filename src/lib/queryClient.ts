import { QueryClient } from "@tanstack/react-query";

export async function apiRequest(
  url: string,
  options?: { method?: string; body?: string | FormData | object },
): Promise<Response> {
  const method = options?.method || 'GET';
  const requestData = options?.body;
  
  const headers: Record<string, string> = {};
  
  if (requestData && !(requestData instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const token = localStorage.getItem('auth_token');
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method,
    headers,
    body: requestData instanceof FormData ? requestData : 
          typeof requestData === 'string' ? requestData :
          requestData ? JSON.stringify(requestData) : undefined,
  });

  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
  
  return res;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
