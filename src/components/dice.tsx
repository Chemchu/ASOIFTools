import { Html } from '@elysiajs/html'

const Dice = (props: { faces: number }) => {
    return (
        <div x-data="{ diceCount: 0, rollValue: 0,
            roll(nDices, faces) { if(nDices <= 0) { return 0;} return this.roll(nDices - 1, faces) + (Math.floor((Math.random() * faces)) + 1) } }">
            <audio x-ref={`diceAudioD${props.faces}`}>
                <source src="https://cdn.freesound.org/previews/575/575087_1417188-lq.mp3" type="audio/mpeg" />
            </audio>
            <div class="relative">
                <div class="relative h-72 w-full overflow-hidden rounded-lg bg-white text-gray-900">
                    <div class="w-full h-full flex flex-col gap-4 justify-center items-center">
                        <div class="w-full h-3/4 flex gap-4 justify-center items-center">
                            <button x-on:click="() => diceCount == 0 ? 0 : diceCount--">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" class="size-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                            <span class="text-4xl flex justify-center items-center cursor-pointer"
                                x-on:click="() => { if(diceCount <= 0) diceCount++ }">
                                    <span x-show="diceCount > 0" x-text="diceCount"/>
                                D{props.faces}</span>
                            <button x-on:click="() => diceCount++">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" class="size-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                        <span class="flex text-gray-900 text-3xl w-full h-1/4 justify-center items-center" x-cloak x-show="rollValue > 0 && diceCount > 0" x-text="rollValue" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 w-full h-full mt-4">
                <div class="text-gray-50">
                    <div class="cursor-default relative flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-2 text-sm font-medium"
                        x-show="diceCount <= 0"
                    >Seleccione num. de dados<span class="sr-only">, Seleccione num. de dados</span>
                    </div>

                    <div class="cursor-pointer relative flex items-center justify-center rounded-md border border-transparent bg-blue-600 hover:bg-blue-500 px-8 py-2 text-sm font-medium"
                        x-show="diceCount > 0"
                        x-on:click={`() => { rollValue = roll(diceCount, ${props.faces}); $refs.diceAudioD${props.faces}.play();  }`}
                    >
                            <svg class="stroke-black fill-white size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8H8.01M8 12H8.01M16 12H16.01M16 8H16.01M16 16H16.01M8 16H8.01M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        <span class="sr-only">Lanzar</span>
                    </div>
                </div>

                <div class="text-gray-100">
                    <div class="cursor-pointer relative flex items-center justify-center rounded-md border border-transparent bg-orange-600 hover:bg-orange-500 px-8 py-2 text-sm font-medium"
                        x-on:click={`() => { diceCount = 0; rollValue = 0;  }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="stroke-black fill-white size-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                        <span class="sr-only">Limpiar</span>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Dice;
