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
import { useState } from "react";
import Image from "next/image";

export function Step3Logo() {
  const router = useRouter();
  const { formData, updateFormData, setCurrentStep } = useSignUp();
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateFormData({ logoFile: file });

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(4);
    router.push("/signup/step-4");
  };

  const handleBack = () => {
    setCurrentStep(2);
    router.push("/signup/step-2");
  };

  const handleSkip = () => {
    updateFormData({ logoFile: null });
    setCurrentStep(4);
    router.push("/signup/step-4");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Company Logo</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Upload your company logo
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="logo">Logo</FieldLabel>
          <Input
            id="logo"
            name="logo"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="cursor-pointer"
          />
          <FieldDescription>
            Upload your company logo (PNG, JPG, or SVG format).
          </FieldDescription>
        </Field>

        {preview && (
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-32 h-32 border-2 border-muted rounded-lg overflow-hidden">
              <Image
                src={preview}
                alt="Logo preview"
                fill
                className="object-contain"
              />
            </div>
            {formData.logoFile && (
              <p className="text-sm text-muted-foreground">
                {formData.logoFile.name}
              </p>
            )}
          </div>
        )}

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            className="flex-1"
          >
            Back
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={handleSkip}
            className="flex-1"
          >
            Skip
          </Button>
          <Button type="submit" className="flex-1">
            Next
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
