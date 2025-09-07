import Image from "next/image";

export default function Home() {
  return (
    <>
      <main><h1>Hello</h1></main>
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  )
}
