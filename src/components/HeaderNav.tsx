export default function HeaderNav() {
  return (
    <nav className="p-2 bg-slate-800 rounded-2xl [box-shadow:1px_1px_6px_2px_white]">
      <div className="flex gap-4 items-center">
        <img src="/imagenes/logo.png" alt="" className="size-10" />
        <p className="text-2xl font-semibold">Hosting</p>
      </div>
    </nav>
  );
}
