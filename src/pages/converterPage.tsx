import { Html } from '@elysiajs/html'
import Navbar, { NavItem } from '../components/navbar';
import Selector from '../components/selector';

// Codigo para la conversion de monedas de Westeros
//case Divisa.CopperStar:
//                if (monedaFinal == Divisa.SilverStag) return valorInicial / 7;
//                if (monedaFinal == Divisa.GoldenDragon) return valorInicial / 1470;
//                break;
//
//            case Divisa.SilverStag:
//                if (monedaFinal == Divisa.CopperStar) return valorInicial * 7;
//                if (monedaFinal == Divisa.GoldenDragon) return valorInicial / 210;
//                break;
//
//            case Divisa.GoldenDragon:
//                if (monedaFinal == Divisa.SilverStag) return valorInicial * 210;
//                if (monedaFinal == Divisa.CopperStar) return valorInicial * 1470;
//                break;

enum Moneda {
    CopperStar = "Copper Star",
    SilverStag = "Silver Stag",
    GoldenDragon = "Golden Dragon"
}

const converterPage = () => {
    return (
        <div x-data={`{ monedas: ['${Moneda.CopperStar.valueOf()}',
                '${Moneda.SilverStag.valueOf()}', '${Moneda.GoldenDragon.valueOf()}'] }`}>
            <Navbar currentNav={NavItem.Conversor} />
            <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="mt-8 grid grid-cols-1 gap-y-6 gap-x-4 md:gap-x-6 md:grid-cols-3 xl:gap-x-8">
                    <div>
                        <label class="block text-sm font-medium leading-6 text-gray-900">Importe</label>
                        <input type="text" class="border border-gray-300 rounded-md w-full px-3 py-2" />
                    </div>

                    <Selector descripcion="Moneda inicial" />
                    <Selector descripcion="Moneda final" />
                </div>
            </div>
        </div >
    );
}

export default converterPage;
