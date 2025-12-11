import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Clock, Dot, Send } from "lucide-react";

export default function ChatPage() {
  return (
    <MaxWidthWrapper className="h-full px-4 py-8">
      <Card className="mx-auto flex h-full max-w-3xl flex-col justify-between space-y-3 p-0">
        <CardHeader className="flex items-center justify-between border-b border-b-gray-200 py-5">
          <div className="flex items-center justify-center gap-2">
            <Dot
              size={15}
              strokeWidth={10}
              className="animate-pulse text-green-500/90"
            />
            <p className="font-bold">Asisten CatatIn</p>
            <p className="block rounded-full border border-blue-200/80 bg-blue-200/50 px-2 py-0.5 text-xs text-blue-700">
              Beta
            </p>
          </div>
          <div>
            <p className="text-sm">reset</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-blue-700">
            <Clock className="mb-2 h-10 w-10 animate-pulse" />
            <p className="text-lg font-semibold">Coming Soon</p>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-t-gray-200 py-5">
          <div className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-gray-100 px-4 py-2">
            <p className="text-gray-500">Ketik transaksi anda disini...</p>
            <Send
              className="rounded-sm bg-gray-200 p-1.5 text-white"
              size={28}
            />
          </div>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
}
