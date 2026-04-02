export default function Plan() {
  return (
    <div className="bg-(--color-item) min-h-100 px-4 py-8">
      <h5 className="font-bold text-2xl">Starter</h5>
      <h5 className="font-bold text-2xl">$2.07 </h5>

      <div className="flex flex-col w-full">
        <div className="flex w-full">
          <p className="">Almacenamiento</p>
          <span className="ml-auto">10 GB SSD</span>
        </div>

        <div className="flex w-full">
          <p className="">Sitios</p>
          <span className="ml-auto">1</span>
        </div>

        <div className="flex w-full">
          <p className="">Ancho de band</p>
          <span className="ml-auto">100 GB</span>
        </div>

        <div className="flex w-full">
          <p className="">Email</p>
          <span className="ml-auto">1 Cuenta</span>
        </div>
      </div>
    </div>
  );
}
