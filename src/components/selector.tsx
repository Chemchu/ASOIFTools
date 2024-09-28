import { Html } from '@elysiajs/html'

const Selector = (props: { descripcion: string }) => {
    return (
        <div x-data={"{ open: false, itemIndex: 0 }"}>
          <label id="listbox-label" class="block text-sm font-medium leading-6 text-gray-900">{props.descripcion}</label>
          <div class="relative mt-2">
            <button
              type="button"
              x-on:click="open = !open"
              class="relative w-full cursor-pointer rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
            >
              <span class="block truncate" x-text={"$data.monedas[itemIndex]"} />
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>

            <ul
              x-show="open"
              x-transition:enter="transition ease-out duration-100"
              x-transition:enter-start="opacity-0 scale-95"
              x-transition:enter-end="opacity-100 scale-100"
              x-transition:leave="transition ease-in duration-75"
              x-transition:leave-start="opacity-100 scale-100"
              x-transition:leave-end="opacity-0 scale-95"
              class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              tabindex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
            >
              <template x-for={`(item, index) in $data.monedas`}>
                  <li class="relative cursor-pointer select-none py-2 pl-8 pr-4 text-gray-900" id="listbox-option-0" role="option"
                    x-on:click="itemIndex = index">
                    <span class="block truncate" x-bind:class="itemIndex == index ? 'font-bold' : 'font-normal'" x-text="item" />
                    <span class="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600">
                      <svg x-show="index == itemIndex" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </li>
              </template>
            </ul>
          </div>
        </div>
    );
}

export default Selector;
