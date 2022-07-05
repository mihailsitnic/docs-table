import { lazy, Suspense } from "react";
import Loader from "components/reusable/loader";

const Header = lazy(() => import("components/header"));
const Body = lazy(() => import("components/home"));

function Home() {
  const MainComponent = () => (
    <Suspense fallback={<Loader />}>
      <Header />
      <Body />
    </Suspense>
  );

  return MainComponent();
}

export default Home;
