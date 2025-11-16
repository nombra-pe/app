"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { actions } from "@/actions"
import { useActionState } from "react"
import { type FormState } from "@/validations/auth";
import Link from "next/link"

const INITIAL_STATE: FormState = {
    success: false,
    message: undefined,
    strapiErrors: null,
    zodErrors: null,
    data: {
        username: '',
        password: '',
        email: ''
    }
}
export function SignUpForm() {
    const [formState, formAction] = useActionState(actions.auth.registerUserAction, INITIAL_STATE)
    console.log(formState)
    return (
        <form action={formAction}
            className={cn("flex flex-col gap-6")}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">Create your account</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        Fill in the form below to create your account
                    </p>
                </div>
                <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <Input id="username" name="username" type="text" placeholder="John Doe" required />
                </Field>
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                    <FieldDescription>
                        We&apos;ll use this to contact you. We will not share your email
                        with anyone else.
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" name="password" type="password" required />
                    <FieldDescription>
                        Must be at least 8 characters long.
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
                    <Input id="confirm-password" name="confirm-password" type="password" required />
                    <FieldDescription>Please confirm your password.</FieldDescription>
                </Field>
                <Field>
                    <Button type="submit">Create Account</Button>
                </Field>
                <Field>

                    <FieldDescription className="px-6 text-center">
                        Already have an account?{" "}
                        <Link
                            type="button"
                            href="/signin"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Sign in
                        </Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}
