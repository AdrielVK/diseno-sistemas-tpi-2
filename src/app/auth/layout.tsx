"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthStore, useAuthStore } from "../store";

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    let user = useAuthStore((state:AuthStore) => state.user)
    console.log(user)
    const router = useRouter(); 

    
    useEffect(() => {
        if (user) {
          router.push('/');
        }
    }, [user]);

    return (
        <>
            
            {children}
            
        </>
    );
  }
  