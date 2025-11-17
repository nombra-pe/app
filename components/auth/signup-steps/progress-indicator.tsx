"use client";
import { cn } from "@/lib/utils";
import { useSignUp } from "../signup-context";

export function ProgressIndicator() {
  const { currentStep, totalSteps } = useSignUp();

  return (
    <div className="flex flex-col gap-3 mb-6">
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => i).map((step) => (
          <div
            key={step}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              step === currentStep
                ? "w-8 bg-primary"
                : step < currentStep
                  ? "w-2 bg-primary/50"
                  : "w-2 bg-muted"
            )}
          />
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground">
        Paso {currentStep + 1} de {totalSteps}
      </p>
    </div>
  );
}
