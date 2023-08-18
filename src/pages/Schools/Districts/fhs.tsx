import { createSignal } from 'solid-js';

export default function FHS() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-gray-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">FHS</h1>
      <p class="mt-4">This is the home page.</p>
    </section>
  );
}
