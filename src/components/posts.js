import fetcher from "../lib/fetcher";

export default function posts() {
  const { data, isLoading, isError } = fetcher("api/posts");
  console.log(data)

  return (
    <div>
      {data?.map((value, index) => (
        <Cake data={value} key={index}></Cake>
      ))}
    </div>
  );
}

function Cake({ data }) {
  const { id, title } = data;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
