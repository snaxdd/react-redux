import { CounterClass, CounterFunction } from "./Components";

export default function App() {
  return (
    <>
      <CounterClass initialCount={5} />
      <CounterFunction initialCount={10} />
    </>
  );
}
