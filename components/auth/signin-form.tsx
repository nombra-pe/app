"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { actions } from "@/actions";
import { useActionState } from "react";
import { FormState } from "@/validations/auth";
import Link from "next/link";

const INITIAL_STATE: FormState = {
  success: false,
  message: undefined,
  strapiErrors: null,
  zodErrors: null,
  data: {
    password: "",
    email: "",
  },
};
export function SignInForm() {
  const [formState, formAction] = useActionState(
    actions.auth.loginUserAction,
    INITIAL_STATE,
  );
  console.log(formState);

  return (
    <form action={formAction} className={cn("flex flex-col gap-6")}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Sign In to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="/"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" name="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>

          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <Link
              type="button"
              href="/signup"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
