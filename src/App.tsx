import { Header } from './containers/header';
import { Home } from './containers/home';
import { HeaderBanner } from './containers/headerBanner';

export default function App() {
  return (
    <main className="flex flex-col h-screen overflow-auto md:overflow-hidden min-w-[376px]">
      <Header />
      <div className="relative flex-1 overflow-visible md:overflow-y-scroll">
        <HeaderBanner />
        <Home />
      </div>
    </main>
  );
}
