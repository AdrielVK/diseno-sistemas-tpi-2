"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthStore, useAuthStore } from "../store";

export default function AtencionGuard({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const user = useAuthStore((state:AuthStore) => state.user)
    const router = useRouter();
    
    
    useEffect(() => {
        
        if (!user || user.role === "MECANICO") {
          return router.push('/auth');
        }
    }, [user, router]);

    return (
        <>
            
            {children}
                   
        </>
    );
  }
  