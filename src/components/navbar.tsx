import { Html } from '@elysiajs/html'

export enum NavItems {
    Inicio = "/",
    Dados = "/dados",
    Conversor = "/conversor",
    Contacto = "/contacto",
}

const Navbar = (props: { currentNav: NavItems }) => {
    return (
        <nav class="bg-neutral-900">
            <div class="h-16 flex w-full items-center justify-center space-x-6">
                <a href={NavItems.Inicio} class="px-3 py-2 text-sm font-medium text-gray-300 hover:border-b hover:border-b-white hover:text-white">Inicio</a>
                <a href={NavItems.Dados} class="px-3 py-2 text-sm font-medium text-gray-300 hover:border-b hover:border-b-white hover:text-white">Dados</a>
                <a href={NavItems.Conversor} class="px-3 py-2 text-sm font-medium text-gray-300 hover:border-b hover:border-b-white hover:text-white">Conversor</a>
                <a href={NavItems.Contacto} class="px-3 py-2 text-sm font-medium text-gray-300 hover:border-b hover:border-b-white hover:text-white">Contacto</a>
            </div>
        </nav>
    );
}

export default Navbar;
