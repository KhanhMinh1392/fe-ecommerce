import Footer from '@components/footer';
import Header from '@components/header';
import Home from '@pages/Home';

function App() {
  return (
    <>
      <Header />
      <main className="mb-44">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
