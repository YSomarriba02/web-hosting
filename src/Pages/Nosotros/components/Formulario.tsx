import BtnEnviarMensaje from "./BtnEnviarMensaje";
import InputFloating from "./InputFloating";
import ReCAPTCHA from "react-google-recaptcha";

export default function Formulario() {
  return (
    <form
      action="https://api.staticforms.xyz/submit"
      method="POST"
      className="p-4 w-full rounded-2xl flex flex-col gap-4 border border-slate-300 md:gap-6 md:w-2/3 self-center"
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-[22px]">Envianos un Mensaje</h3>
        <p className="text-sm md:text-lg brightness-75 lg:text-[16px]">
          Completa el formulario y te responderemos lo antes posible.
        </p>
      </div>

      <input
        type="hidden"
        name="accessKey"
        value="sf_2b221fc83fb44c82c573bb29"
      />

      <InputFloating label="Nombre Completo" name="name" />
      <InputFloating label="Email" name="email" />
      <InputFloating label="Asunto" name="subject" />
      <textarea
        name="message"
        placeholder="Describe tu consulta..."
        className={`w-full p-2 rounded-md border-slate-500 border`}
      />
      <input type="hidden" name="redirectTo" value="false"></input>
      <ReCAPTCHA sitekey="6Le4-K0sAAAAAPQGEYyoW_jJ3tkXofF9YKbf5hfF" />

      <BtnEnviarMensaje />
    </form>
  );
}
