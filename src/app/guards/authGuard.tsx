"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthStore, useAuthStore } from "../store";

export default function AuthGuard({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const user = useAuthStore((state:AuthStore) => state.user)
    const router = useRouter();
    
    
    useEffect(() => {
        
        if (!user) {
          return router.push('/auth');
        }
    }, []);

    return (
        <>
            
            {children}
                   
        </>
    );
  }
  