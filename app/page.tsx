'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Button } from "primereact/button";

export default function Home() {
  const router = useRouter();

  return (
      <main className="flex justify-center items-center h-screen">
        <Button label="ALL IN" severity="danger" onClick={() => router.push('/main')} />
      </main>
  );
}
