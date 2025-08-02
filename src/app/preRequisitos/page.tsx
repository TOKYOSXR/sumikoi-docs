import Documentos from "../components/Documentos";


export default function PreRequisitos() {
    return (
        <div className="flex justify-center items-center pt-20 flex-col gap-20 mb-40">
            <Documentos id="" Titulo="Sistemas operacionais compativeis" Conteudo="" />
            <div className="text-center text-lg text-gray-700 dark:text-gray-300">
                <ul className="flex justify-center gap-4 text-8xl">
                    <li><i className="bx bxl-windows"></i></li>
                    <li><i className="bx bxl-apple"></i></li>
                    <li><i className="bx bxl-android"></i></li>
                    <li><i className='bx bxs-navigation'></i></li>
                </ul>
            </div>


            <Documentos id="RequisitosMinimos" Titulo="Requisitos mínimos" Conteudo="" />


            <div className="overflow-x-auto w-full flex justify-center">

                <table className="min-w-[600px] border border-gray-300 rounded-lg text-sm">
                    <thead>
                        <tr className="bg-[#d81e1e] text-white">
                            <th className="border border-gray-300 px-4 py-2 text-left">Sistema operacional</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Tipo</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Versão</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">MacOS</td>
                            <td className="border border-gray-300 px-4 py-2">Desktop</td>
                            <td className="border border-gray-300 px-4 py-2">MacOS 11 ou superior</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Windows</td>
                            <td className="border border-gray-300 px-4 py-2">Desktop</td>
                            <td className="border border-gray-300 px-4 py-2">Windows 10, versão 21H2 ou superior, Windows Server 2016</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Android</td>
                            <td className="border border-gray-300 px-4 py-2">Mobile</td>
                            <td className="border border-gray-300 px-4 py-2">Android 8 ou superior</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Chrome</td>
                            <td className="border border-gray-300 px-4 py-2">WEB</td>
                            <td className="border border-gray-300 px-4 py-2">As duas últimas versões principais no Canal Stable Estendido</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Firefox, Brave, Microsoft Edge</td>
                            <td className="border border-gray-300 px-4 py-2">WEB</td>
                            <td className="border border-gray-300 px-4 py-2">As duas últimas versões principais</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}