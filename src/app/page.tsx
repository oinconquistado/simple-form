"use client";
import { type ChangeEvent, type FormEvent, useCallback } from "react";
import { Button } from "./Button";
import { useFormStore } from "./formStore";
import { Input } from "./Input";

export default function Home() {
  // Selecionar cada parte do estado individualmente para evitar re-renderizações desnecessárias
  const email = useFormStore((state) => state.email);
  const senha = useFormStore((state) => state.senha);
  const setField = useFormStore((state) => state.setField);

  // Memoizar os handlers com useCallback
  const handleEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setField("email", e.target.value);
    },
    [setField]
  );

  const handleSenhaChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setField("senha", e.target.value);
    },
    [setField]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log({ email, senha });
      // reset(); // descomente se quiser limpar após submit
    },
    [email, senha]
  );

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow bg-white">
      <h2 className="text-center mb-6 text-2xl font-bold text-gray-800">
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="E-mail"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="username"
        />
        <Input
          label="Senha"
          name="senha"
          type="password"
          value={senha}
          onChange={handleSenhaChange}
          autoComplete="current-password"
        />
        <div className="flex gap-3 mt-6">
          <Button type="submit" variant="primary">
            Entrar
          </Button>
          <Button type="button" variant="secondary">
            Registrar
          </Button>
        </div>
      </form>
      <div>
        <p className="mt-4 text-sm text-gray-600">
          Email: {email || "Nenhum email informado"}
        </p>
        <p className="text-sm text-gray-600">
          Senha: {senha || "Nenhuma senha informada"}
        </p>
      </div>
    </div>
  );
}
