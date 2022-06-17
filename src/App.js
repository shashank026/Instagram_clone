import { Routes, Route } from "react-router-dom";
import Index from '../src/Component/Home';
import Comments from '../src/Component/Comments'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:code" element={<Comments />} />
        </Routes>
    </>
  );
}

export default App;