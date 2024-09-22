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
                        <div class="w-full flex gap-4 justify-center items-center">
                            <button x-on:click="() => diceCount == 0 ? 0 : diceCount--">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" class="size-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                            <span class="text-6xl flex justify-center items-center cursor-pointer"
                                x-on:click="() => { if(diceCount <= 0) diceCount++ }">
                                    <span x-show="diceCount > 0" x-text="diceCount"/>
                                D{props.faces}</span>
                            <button x-on:click="() => diceCount++">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" class="size-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                        <span class="text-gray-900" x-show="rollValue > 0" x-text="rollValue" />
                    </div>
                </div>
            </div>
            <div class="text-gray-50 mt-6">
                <div class="cursor-pointer relative flex items-center justify-center rounded-md border border-transparent bg-blue-500 hover:bg-blue-600 px-8 py-2 text-sm font-medium"
                    x-on:click={`() => { rollValue = roll(diceCount, ${props.faces}); console.log(rollValue); $refs.diceAudioD${props.faces}.play();  }`}
                >Lanzar<span class="sr-only">, Lanzar</span>
                </div>
            </div>
        </div >
    );
}

export default Dice;
