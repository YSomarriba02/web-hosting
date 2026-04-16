export default function BtnWhastApp() {
  const mensaje = "Hola, quiero información sobre sus servicios";
  return (
    <a
      style={{ viewTransitionName: "btnWhatsApp" }}
      href={`https://wa.me/50586556140?text=${mensaje}`}
      className="size-16 fixed -right-[14vw] z-20 bottom-30 lg:bottom-6 animate-BtnWhatsApp"
    >
      <img src="/icons/icon-whatsApp.png" alt="" className="w-full" />
    </a>
  );
}
