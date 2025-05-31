"use client";
import type { ChangeEvent, FormEvent } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useFormStoreWithShallow } from "./formStore";

export default function Home() {
  const [email, senha, setField, reset] = useFormStoreWithShallow((state) => [
    state.email,
    state.senha,
    state.setField,
    state.reset,
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setField(e.target.name as "email" | "senha", e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, senha });
    // reset(); // descomente se quiser limpar após submit
  };

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
          onChange={handleChange}
          autoComplete="username"
        />
        <Input
          label="Senha"
          name="senha"
          type="password"
          value={senha}
          onChange={handleChange}
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
    </div>
  );
}
