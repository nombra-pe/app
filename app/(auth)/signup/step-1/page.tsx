import { Step1TitularData } from "@/components/auth/signup-steps/step1-titular-data";
import { ProgressIndicator } from "@/components/auth/signup-steps/progress-indicator";

export default function SignUpStep1Route() {
  return (
    <>
      <ProgressIndicator />
      <Step1TitularData />
    </>
  );
}
