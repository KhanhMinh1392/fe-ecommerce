import { Routes, Route } from 'react-router';
import { routes } from './routes';
import Header from './components/header';
import ScrollToTopOnMount from './components/scroll-to-top';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <main className="mb-44">
        <ScrollToTopOnMount />
        <Routes>
          {routes.map(({ path, component }) => (
            <Route path={path} key={path} Component={component} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
