import Footer from '@components/footer';
import { Routes, Route } from 'react-router';
import Header from '@components/header';
import { routes } from '@routes/index';

function App() {
  return (
    <>
      <Header />
      <main className="mb-44">
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
