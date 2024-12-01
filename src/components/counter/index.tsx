import { createSignal, type Component, type JSX } from 'solid-js';

type CounterProps = {
  initialCount: number;
  children?: JSX.Element;
};

export const Counter: Component<CounterProps> = (prop) => {
  const [count, setCount] = createSignal(prop.initialCount);

  return (
    <>
      {prop.children}
      <div class='flex p-2 space-x-4 items-center'>
        <button class='p-2 bg-blue-600 rounded' onClick={() => setCount((prev) => prev + 1)}>
          Increment
        </button>
        <p>{count()}</p>
        <button class='p-2 bg-green-600 rounded' onClick={() => setCount((prev) => prev - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
};
