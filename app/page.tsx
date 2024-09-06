"use client";

import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!auth?.currentUser) {
      router.push("/login");
    }
  }, [auth, router]);
  return (
    <div className="mt-4">
      <button onClick={()=> auth?.logout()}>log out</button>
    </div>
  );
}
