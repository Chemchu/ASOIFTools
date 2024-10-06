import { Html } from '@elysiajs/html'
import Dice from '../components/dice';
import Navbar, { NavItem } from '../components/navbar';

const dicePage = () => {
    return (
        <div class="h-full w-full">
            <Navbar currentNav={NavItem.Dados} />
            <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    <Dice faces={4} />
                </div>
            </div>
        </div >
    );
}

export default dicePage;
