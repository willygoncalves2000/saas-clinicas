"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              // Redireciona para a página de autenticação após o logout
              router.push("/authentication");
            },
          },
        })
      }
    >
      Sair
    </Button>
  );
};

export default SignOutButton;
