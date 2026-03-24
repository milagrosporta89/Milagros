"use client";

import { FormEvent, useState } from "react";

type FormData = {
  nombre: string;
  empresa: string;
  mensaje: string;
};

const initialState: FormData = {
  nombre: "",
  empresa: "",
  mensaje: ""
};

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initialState);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = [
      "Hola Widdu, quiero mas informacion.",
      `Nombre: ${data.nombre}`,
      `Empresa: ${data.empresa}`,
      `Mensaje: ${data.mensaje}`
    ].join("\n");

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-white/20 bg-white/5 p-5 md:p-6">
      <input
        required
        type="text"
        placeholder="Nombre"
        value={data.nombre}
        onChange={(e) => setData((prev) => ({ ...prev, nombre: e.target.value }))}
        className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-[#BBEB09]"
      />
      <input
        required
        type="text"
        placeholder="Empresa"
        value={data.empresa}
        onChange={(e) => setData((prev) => ({ ...prev, empresa: e.target.value }))}
        className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-[#BBEB09]"
      />
      <textarea
        required
        rows={5}
        placeholder="Mensaje"
        value={data.mensaje}
        onChange={(e) => setData((prev) => ({ ...prev, mensaje: e.target.value }))}
        className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-[#BBEB09]"
      />
      <button
        type="submit"
        className="w-full rounded-xl bg-[#BBEB09] px-5 py-3 font-bold text-[#212028] transition hover:brightness-95"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
}
