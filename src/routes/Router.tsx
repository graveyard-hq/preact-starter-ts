import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
