import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";
import SignOutButton from "./components/sign-out-button";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  /**
   * Se o usuário não estiver logado, redireciona para a página de autenticação.
   * Isso garante que apenas usuários autenticados possam acessar o dashboard.
   */
  if (!session?.user) {
    redirect("/authentication");
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h1>{session?.user?.name}</h1>
      <h1>{session?.user?.email}</h1>
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;
