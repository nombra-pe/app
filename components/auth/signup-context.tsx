"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type PersonType = "natural" | "juridica" | "";
export type Nationality = "peruana" | "extranjera";
export type BusinessNameStatus = "tengo" | "busco" | "";
export type LogoStatus = "tengo" | "necesito" | "";
export type NameLanguage = "espanol" | "ingles" | "neutro" | "";

export type SignUpData = {
  // Paso 0: Credenciales
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

  // Paso 1: Datos del Titular
  businessName: string;
  personType: PersonType;
  documentNumber: string;
  phone: string;
  nationality: Nationality;
  address: string;
  district: string;
  province: string;
  department: string;
  legalRepresentative: string;
  industry: string;
  operationLocation: string;

  // Paso 2: Información del Negocio
  hasBusinessName: BusinessNameStatus;
  productService: string;
  targetAudience: string;
  brandValues: string;
  keyWord1: string;
  keyWord2: string;
  keyWord3: string;
  nameIdea: string;
  hasLogo: LogoStatus;
  salesLocation: string;
  nameLanguage: NameLanguage;

  // Paso 3: Pago (estos campos se pueden manejar de forma separada)
};

type SignUpContextType = {
  formData: SignUpData;
  updateFormData: (data: Partial<SignUpData>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  totalSteps: number;
};

const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

export function SignUpProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<SignUpData>({
    // Paso 0: Credenciales
    username: "",
    email: "",
    password: "",
    confirmPassword: "",

    // Paso 1: Datos del Titular
    businessName: "",
    personType: "",
    documentNumber: "",
    phone: "",
    nationality: "peruana",
    address: "",
    district: "",
    province: "Lima",
    department: "Lima",
    legalRepresentative: "",
    industry: "",
    operationLocation: "",

    // Paso 2: Información del Negocio
    hasBusinessName: "",
    productService: "",
    targetAudience: "",
    brandValues: "",
    keyWord1: "",
    keyWord2: "",
    keyWord3: "",
    nameIdea: "",
    hasLogo: "",
    salesLocation: "",
    nameLanguage: "",
  });

  const updateFormData = (data: Partial<SignUpData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <SignUpContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        setCurrentStep,
        totalSteps: 4,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
}

export function useSignUp() {
  const context = useContext(SignUpContext);
  if (context === undefined) {
    throw new Error("useSignUp must be used within a SignUpProvider");
  }
  return context;
}
