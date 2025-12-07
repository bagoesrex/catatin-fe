import { Card, CardContent, CardFooter } from "@/components/ui/card";
import RegisterForm from "../_components/register-form";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center bg-linear-to-br from-blue-500/10 via-white to-white">
      <MaxWidthWrapper className="py-8">
        <div className="mx-auto flex max-w-xl flex-col items-center space-y-3 text-center">
          <h1 className="text-xl font-bold">
            Catat<span className="text-blue-700">In</span>
          </h1>
          <div>
            <h2 className="text-2xl font-semibold">Daftar Sekarang</h2>
            <p className="text-gray-600">
              Kelola bisnis jasa Anda dengan mudah
            </p>
          </div>
          <Card className="mt-5 w-full max-w-md text-start">
            <CardContent>
              <RegisterForm />
            </CardContent>
            <CardFooter>
              <p className="w-full text-center text-sm">
                Sudah punya akun?
                <Link
                  className="ml-1 text-blue-700 hover:underline"
                  href={"/auth/login"}
                >
                  Masuk
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
