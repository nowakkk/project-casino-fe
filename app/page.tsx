import Image from "next/image";

import { Button } from "primereact/button";

export default function Home() {
  return (
      <main className="flex justify-center items-center h-screen">
        <Button label="ALL IN" severity="danger" />
      </main>
  );
}
