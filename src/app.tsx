import { Component, createSignal } from 'solid-js';
import { Link, useRoutes, useLocation } from '@solidjs/router';
import { routes } from './routes';
import './Assets/CSS/navbar.min.css';

interface DropdownRefProps {
  current: HTMLDivElement | null;
}

const App: Component = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = createSignal(false);

  const handleDropdownToggle = (event: Event) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen());
  };

  const handleOptionClick = () => {
    setIsDropdownOpen(false);
  };

  const handleClickOutsideDropdown = (event: MouseEvent) => {
    const dropdownRef = event.currentTarget as unknown as DropdownRefProps;
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const Route = useRoutes(routes);
  const [dropdownRef, setDropdownRef] = createSignal<HTMLDivElement | null>(
    null
  );

  window.addEventListener('click', handleClickOutsideDropdown);

  return (
    <>
      <nav class="bg-gray-200 text-gray-900 px-4">
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <Link href="/" class="no-underline hover:underline">
              Home
            </Link>
          </li>
          <li class="py-2 px-4 relative inline-block text-left">
            <button
              class="no-underline hover:underline focus:outline-none"
              onClick={handleDropdownToggle}
            >
              Schools
            </button>
            {isDropdownOpen() && (
              <div
                ref={setDropdownRef}
                class="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md"
              >
                <Link
                  href="/Schools/Districts/FHS"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleOptionClick}
                >
                  Franklin
                </Link>
                <Link
                  href="/Schools/Districts/DaytonHS"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleOptionClick}
                >
                  Dayton
                </Link>
                <Link
                  href="/Schools/Districts/HollySpringsHS"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleOptionClick}
                >
                  Holly Springs
                </Link>
              </div>
            )}
          </li>
          <li class="py-2 px-4">
            <Link href="/Other/Random" class="no-underline hover:underline">
              Random
            </Link>
          </li>
          <li class="text-sm flex items-center space-x-1 ml-auto">
            <span>URL:</span>
            <input
              class="w-75px p-1 bg-white text-sm rounded-lg"
              type="text"
              readOnly
              value={location.pathname}
            />
          </li>
        </ul>
      </nav>

      <main>
        <Route />
      </main>
    </>
  );
};

export default App;
