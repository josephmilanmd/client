import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Home, Login, SearchMechanic, ServiceRequest, Signup } from 'components/pages';
import { initialLoad } from 'service/Service';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="search-mechanics" element={<SearchMechanic />} />
          <Route path="service-requests" element={<ServiceRequest />} />
          {/* <Route path="*"  /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
