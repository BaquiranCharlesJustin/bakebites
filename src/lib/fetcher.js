import useSWR from "swr";

const baseURL = "https://bakebites.vercel.app/";
// const baseURL = "http://localhost:3000/";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function useFetcher(endpoint) {
  const url = `${baseURL}${endpoint}`;
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
