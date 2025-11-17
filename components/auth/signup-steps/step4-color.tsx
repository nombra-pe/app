"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useSignUp } from "../signup-context";
import { useRouter } from "next/navigation";
import { actions } from "@/actions";
import { useState } from "react";

const COLOR_PRESETS = [
  { name: "Blue", value: "#3b82f6" },
  { name: "Purple", value: "#8b5cf6" },
  { name: "Green", value: "#10b981" },
  { name: "Red", value: "#ef4444" },
  { name: "Orange", value: "#f59e0b" },
  { name: "Pink", value: "#ec4899" },
];

export function Step4Color() {
  const router = useRouter();
  const { formData, updateFormData, setCurrentStep } = useSignUp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.username);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("confirm-password", formData.confirmPassword);
      formDataToSend.append("companyName", formData.businessName);
      if (formData.logoFile) {
        formDataToSend.append("logo", formData.logoFile);
      }
      formDataToSend.append("color", formData.color);

      // Call the register action
      const result = await actions.auth.registerUserAction(
        { success: false, message: "" },
        formDataToSend
      );

      if (result.success) {
        // Redirect to dashboard or success page
        router.push("/dashboard");
      } else {
        setError(result.message || "An error occurred during registration");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setCurrentStep(3);
    router.push("/signup/step-3");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Brand Color</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Choose your primary brand color
          </p>
        </div>

        <Field>
          <FieldLabel>Color Presets</FieldLabel>
          <div className="grid grid-cols-3 gap-2">
            {COLOR_PRESETS.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => updateFormData({ color: preset.value })}
                className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all hover:border-primary ${
                  formData.color === preset.value
                    ? "border-primary"
                    : "border-muted"
                }`}
              >
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: preset.value }}
                />
                <span className="text-sm">{preset.name}</span>
              </button>
            ))}
          </div>
        </Field>

        <Field>
          <FieldLabel htmlFor="color">Custom Color</FieldLabel>
          <div className="flex items-center gap-4">
            <Input
              id="color"
              name="color"
              type="color"
              value={formData.color}
              onChange={(e) => updateFormData({ color: e.target.value })}
              className="h-12 w-20 cursor-pointer"
            />
            <Input
              type="text"
              value={formData.color}
              onChange={(e) => updateFormData({ color: e.target.value })}
              placeholder="#000000"
              className="flex-1"
            />
          </div>
          <FieldDescription>
            This color will be used throughout your dashboard.
          </FieldDescription>
        </Field>

        {error && (
          <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
            {error}
          </div>
        )}

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            className="flex-1"
            disabled={isSubmitting}
          >
            Back
          </Button>
          <Button type="submit" className="flex-1" disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
