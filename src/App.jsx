import GetGif from "./components/get";
import {GifProvider } from "./context";

const App = () => {
  return (
    <GifProvider>
      <GetGif />
    </GifProvider>
  );
};

export default App;
