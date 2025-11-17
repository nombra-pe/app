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
import { CreditCard, Lock } from "lucide-react";
import { useState } from "react";

export function Step3Payment() {
  const router = useRouter();
  const { formData, setCurrentStep } = useSignUp();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de procesamiento de pago
    console.log("Procesando pago...");
    // Por ahora, solo redirigimos a una página de éxito
    alert("¡Registro completado exitosamente!");
  };

  const handleBack = () => {
    setCurrentStep(2);
    router.push("/signup/step-2");
  };

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const groups = numbers.match(/.{1,4}/g);
    return groups ? groups.join(" ") : numbers;
  };

  const formatExpiryDate = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + "/" + numbers.slice(2, 4);
    }
    return numbers;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.replace(/\s/g, "").length <= 16) {
      setCardNumber(formatted);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    if (formatted.replace(/\//g, "").length <= 4) {
      setExpiryDate(formatted);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, "");
    if (numbers.length <= 4) {
      setCvv(numbers);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="bg-primary/10 text-primary rounded-full p-3 mb-2">
            <CreditCard className="size-6" />
          </div>
          <h1 className="text-2xl font-bold">Información de Pago</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Completa el proceso de registro
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 border">
          <div className="flex items-center gap-2 mb-2">
            <Lock className="size-4 text-muted-foreground" />
            <span className="text-sm font-medium">Pago seguro</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Tu información de pago está protegida con encriptación SSL de 256
            bits
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="cardNumber">Número de Tarjeta *</FieldLabel>
          <Input
            id="cardNumber"
            name="cardNumber"
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
          />
          <FieldDescription>
            Visa, Mastercard, American Express
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="cardName">
            Nombre en la Tarjeta *
          </FieldLabel>
          <Input
            id="cardName"
            name="cardName"
            type="text"
            placeholder="JUAN PEREZ"
            value={cardName}
            onChange={(e) => setCardName(e.target.value.toUpperCase())}
            required
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="expiryDate">Vencimiento *</FieldLabel>
            <Input
              id="expiryDate"
              name="expiryDate"
              type="text"
              placeholder="MM/AA"
              value={expiryDate}
              onChange={handleExpiryChange}
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="cvv">CVV *</FieldLabel>
            <Input
              id="cvv"
              name="cvv"
              type="text"
              placeholder="123"
              value={cvv}
              onChange={handleCvvChange}
              required
            />
          </Field>
        </div>

        <div className="bg-background border rounded-lg p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">S/ 99.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">IGV (18%)</span>
            <span className="font-medium">S/ 17.82</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-primary">S/ 116.82</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            className="flex-1"
          >
            Atrás
          </Button>
          <Button type="submit" className="flex-1">
            Pagar y Completar
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Al completar el pago, aceptas nuestros términos y condiciones
        </p>
      </FieldGroup>
    </form>
  );
}
