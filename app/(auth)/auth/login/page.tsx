import { Card, CardContent, CardFooter } from "@/components/ui/card";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import LoginForm from "../_components/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center bg-linear-to-br from-blue-500/10 via-white to-white">
      <MaxWidthWrapper className="py-8">
        <div className="mx-auto flex max-w-xl flex-col items-center space-y-3 text-center">
          <h1 className="text-xl font-bold">
            Catat<span className="text-blue-700">In</span>
          </h1>
          <div>
            <h2 className="text-2xl font-semibold">Selamat Datang Kembali</h2>
            <p className="text-gray-600">Masuk ke akun CatatIn Anda</p>
          </div>
          <Card className="mt-5 w-full max-w-md text-start">
            <CardContent>
              <LoginForm />
            </CardContent>
            <CardFooter>
              <p className="w-full text-center text-sm">
                Belum punya akun?
                <Link
                  className="ml-1 text-blue-700 hover:underline"
                  href={"/auth/register"}
                >
                  Daftar
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
