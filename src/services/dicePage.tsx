import { Html } from '@elysiajs/html'
import Dice from '../components/dice';

const dicePage = () => {
    return (
        <div class="h-full w-full">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    <Dice faces={4} />
                    <Dice faces={6} />
                    <Dice faces={8} />
                    <Dice faces={10} />
                    <Dice faces={12} />
                    <Dice faces={20} />
                    <Dice faces={1} />
                    <Dice faces={100} />

                </div>
            </div>
        </div >
    );
}

export default dicePage;
