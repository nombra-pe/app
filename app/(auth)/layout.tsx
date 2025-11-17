"use client";
import { GalleryVerticalEnd } from "lucide-react";
import { usePathname } from "next/navigation";
import { SignupSummary } from "@/components/auth/signup-steps/signup-summary";
import { SignUpProvider } from "@/components/auth/signup-context";

export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSignupFlow = pathname?.startsWith("/signup");

  const content = (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            dod
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>

      {isSignupFlow ? (
        <SignupSummary />
      ) : (
        <div className="bg-muted relative hidden lg:block">
          <img
            src="/globe.svg"
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      )}
    </div>
  );

  if (isSignupFlow) {
    return <SignUpProvider>{content}</SignUpProvider>;
  }

  return content;
}