const Page = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <h1>Page</h1>
      <p>{params.id}</p>
    </main>
  )
}

export default Page
