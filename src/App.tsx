import Footer from '@components/footer';
import Header from '@components/header';
import Home from '@pages/Home';

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
