//react-router
import { Route, Routes } from "react-router-dom";
//layout
import RootLayout from "./ui/pages/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/excercises" element={<p>Excercises</p>} />
        <Route path="/workouts" element={<p>Workouts</p>} />
        <Route path="/creator" element={<p>Workout Creator</p>} />
      </Route>
    </Routes>
  );
}

export default App;
