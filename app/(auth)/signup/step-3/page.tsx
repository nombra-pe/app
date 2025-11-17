import { Step3Payment } from "@/components/auth/signup-steps/step3-payment";
import { ProgressIndicator } from "@/components/auth/signup-steps/progress-indicator";

export default function SignUpStep3Route() {
  return (
    <>
      <ProgressIndicator />
      <Step3Payment />
    </>
  );
}
