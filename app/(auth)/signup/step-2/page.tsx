import { Step2Company } from "@/components/auth/signup-steps/step2-company";
import { ProgressIndicator } from "@/components/auth/signup-steps/progress-indicator";

export default function SignUpStep2Route() {
  return (
    <>
      <ProgressIndicator />
      <Step2Company />
    </>
  );
}
