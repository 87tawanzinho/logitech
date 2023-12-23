export default function FirstSection() {
  return (
    <div className="flex justify-between items-center sectionOneComputer text-white mt-20 relative ">
      <div className="flex flex-col">
        <p className="text-xs">/ Produtos / Mouses Para Jogos / Pro Hero</p>
        <p>IMAGEM TODO </p>
      </div>

      <div className="flex flex-col w-80 items-start absolute right-0 top-12 ">
        <p className="bg-white text-black px-2 text-xs flex items-center justify-center gap-1">
          <span className="font-bold text-lg">PRO</span> SÉRIES
        </p>
        <h1 className="text-3xl mt-8">PRÓ GAMING MOUSE</h1>
        <p className="text-sm mt-4">Mouse profissional para jogos</p>
        <button className="w-80 bg-blue-900 p-4 mt-4">
          COMPRAR DE LOGI LOJA {">"}
        </button>
      </div>
    </div>
  );
}
