import { Outlet } from "react-router";

export default function Summary() {
  return (
    <>
      <div>
        <h1>Resumen compra</h1>
        <button>Continuar</button>
      </div>
      <Outlet/>
    </>
  );
}