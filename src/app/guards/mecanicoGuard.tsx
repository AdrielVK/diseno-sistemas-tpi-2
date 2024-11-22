"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthStore, useAuthStore } from "../store";

export default function MecanicoGuard({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const user = useAuthStore((state:AuthStore) => state.user)
    const router = useRouter();
    
    
    useEffect(() => {
        
        if (!user || user.role === "ATENCION") {
          return router.push('/auth');
        }
    }, [user, router]);

    return (
        <>
            
            {children}
                   
        </>
    );
  }
  