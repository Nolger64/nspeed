import Speed from "./Speed";
import useSpeed from "./hooks/useSpeed";
const App = () => {
  const { downloadSpeed } = useSpeed();
  return (
    <>
      <h1>Speed Test</h1>
      <p>{downloadSpeed}</p>
    </>
  );
};
export default App;
