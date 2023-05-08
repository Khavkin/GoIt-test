import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Tweets } from '../../pages/Tweets/Tweets';
import Home from '../../pages/Home';
import { Container } from '@mui/material';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    // <div className="App">
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" />
    </Container>
    // </div>
  );
}

export default App;
