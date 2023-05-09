import Head from "next/head";

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Bake Bites</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
