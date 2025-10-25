function Header() {
  return <header><h1>Website Header</h1></header>;
}

function Sidebar() {
  return <aside><p>This is the sidebar</p></aside>;
}

function Content() {
  return <section><p>Main content area</p></section>;
}

function Footer() {
  return <footer><p>Website Footer</p></footer>;
}

function PageStructure() {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default PageStructure;
