
import { Html } from '@elysiajs/html'

const notFound = () => {
    return (
        <main class="bg-gray-100 grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
                <p class="text-base font-semibold text-orange-600">404</p>
                <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no encontrada</h1>
                <p class="mt-6 text-base leading-7 text-gray-600">Vaya, parece que esa página no existe.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/dados" class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Volver a los dados</a>
                </div>
            </div>
        </main>
    )
};

export default notFound;

