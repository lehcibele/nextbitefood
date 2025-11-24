import { assets } from "@/assets/assets";
import { Pizza, StoreIcon, TruckIcon, UsersRound } from "lucide-react";

export default function SectionMaoNaMassa() {
    return (
        <section className="w-full bg-gray-200 py-16 ">
            <div className="w-full max-w-7xl flex flex-row gap-[5%] justify-between items-center mx-auto max-2xl:w-[90%] max-md:flex-col">
                <div className="w-1/2 max-md:w-[90%] max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
                    <div className="flex flex-row gap-8">
                        <StoreIcon className="w-12 h-12 text-green-600" />
                        <TruckIcon className="w-12 h-12 text-green-600" />
                        <UsersRound  className="w-12 h-12 text-green-600" />
                        <Pizza  className="w-12 h-12 text-green-600" />
                    </div>
                    
                    <div>
                        <h2 className="text-6xl font-extrabold text-gray-800 text-left max-w-4xl tracking-[1px] max-xl:text-4xl max-lg:text-2xl max-md:text-center">
                            BOTAMOS A MÃO NA MASSA PARA ALIMENTAR MAIS DE 6 MILHÕES DE FOMINHAS
                        </h2>

                        <p className="text-xl text-gray-600 mt-4 max-w-4xl text-left tracking-[1px] max-lg:text-[15px] max-md:text-justify">
                            O NextBite food acredita que só é bom quando é bom para todo mundo. E prova isso contribuindo com mais de 30 mil lojistas parceiros, transformando a economia local de mais de 700 cidades, oferecendo o melhor para todos os entregadores e construindo uma relação verdadeira com quem escolhe consumir com a gente.
                        </p>
                    </div>
                </div>
                
                <div className="w-1/2 flex justify-center items-center max-md:mt-[5%]">
                    <img 
                        src={assets.imagemMaonaMassa} 
                        alt="Imagem mão na massa" 
                        className="max-w-[460px] rounded-lg shadow-md transition-transform duration-600 transform hover:scale-105 max-xl:w-[400px] max-lg:w-[300px]"
                    />
                </div>
            </div>
        </section>
    )
}