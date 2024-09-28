import { Html } from '@elysiajs/html'
import Navbar, { NavItem } from '../components/navbar';

const converterPage = () => {
    return (
        <div class="bg-neutral-900">
            <Navbar currentNav={NavItem.Conversor} />
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    Hola gus
                </div>
            </div>
        </div >
    );
}

export default converterPage;
