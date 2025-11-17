import { Step1Credentials } from "@/components/auth/signup-steps/step1-credentials";
import { ProgressIndicator } from "@/components/auth/signup-steps/progress-indicator";

export default function SignUpRoute() {
  return (
    <>
      <ProgressIndicator />
      <Step1Credentials />
    </>
  );
}
