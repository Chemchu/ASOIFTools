import { Html } from '@elysiajs/html'

export enum NavItem {
    Inicio = "/",
    Dados = "/dados",
    Conversor = "/conversor",
    Contacto = "/contacto",
}

const Navbar = (props: { currentNav: NavItem }) => {
    return (
        <nav class="bg-blue-700" x-data>
            <div class="h-16 flex w-full items-center justify-center space-x-6">
                <a href={NavItem.Inicio} class="px-3 py-2 text-sm font-medium text-gray-100"
                    x-bind:class={`'${props.currentNav.valueOf()}' == '${NavItem.Inicio.valueOf()}' ? 'border-b border-b-white text-white' : 'hover:border-b hover:border-b-white hover:text-white'`}
                >
                    Inicio
                </a>
                <a href={NavItem.Dados} class="px-3 py-2 text-sm font-medium text-gray-100"
                    x-bind:class={`'${props.currentNav.valueOf()}' == '${NavItem.Dados.valueOf()}' ? 'border-b border-b-white text-white' : 'hover:border-b hover:border-b-white hover:text-white'`}
                >
                    Dados
                </a>
                <a href={NavItem.Conversor} class="px-3 py-2 text-sm font-medium text-gray-100"
                    x-bind:class={`'${props.currentNav.valueOf()}' == '${NavItem.Conversor.valueOf()}' ? 'border-b border-b-white text-white' : 'hover:border-b hover:border-b-white hover:text-white'`}
                >
                    Conversor
                </a>
                <a href={NavItem.Contacto} class="px-3 py-2 text-sm font-medium text-gray-100"
                    x-bind:class={`'${props.currentNav.valueOf()}' == '${NavItem.Contacto.valueOf()}' ? 'border-b border-b-white text-white' : 'hover:border-b hover:border-b-white hover:text-white'`}
                >
                    Contacto
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
