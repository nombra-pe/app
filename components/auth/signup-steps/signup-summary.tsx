"use client";
import { useSignUp } from "../signup-context";
import { CheckCircle2, Circle } from "lucide-react";

export function SignupSummary() {
  const { formData, currentStep } = useSignUp();

  const steps = [
    {
      number: 0,
      title: "Credenciales",
      fields: [
        { label: "Usuario", value: formData.username },
        { label: "Email", value: formData.email },
      ],
    },
    {
      number: 1,
      title: "Datos del Titular",
      fields: [
        { label: "Nombre o Razón Social", value: formData.businessName },
        {
          label: "Tipo de Persona",
          value:
            formData.personType === "natural"
              ? "Persona Natural"
              : formData.personType === "juridica"
                ? "Persona Jurídica"
                : "",
        },
        { label: "DNI o RUC", value: formData.documentNumber },
        { label: "Email", value: formData.email },
        { label: "Teléfono/WhatsApp", value: formData.phone },
        {
          label: "Nacionalidad",
          value:
            formData.nationality === "peruana"
              ? "Peruana"
              : formData.nationality === "extranjera"
                ? "Extranjera"
                : "",
        },
        { label: "Dirección", value: formData.address },
        { label: "Distrito", value: formData.district },
        { label: "Provincia", value: formData.province },
        { label: "Departamento", value: formData.department },
        {
          label: "Representante Legal",
          value: formData.legalRepresentative,
          conditional: formData.personType === "juridica",
        },
        { label: "Rubro o Industria", value: formData.industry },
        { label: "Ubicación de Operación", value: formData.operationLocation },
      ],
    },
    {
      number: 2,
      title: "Información del Negocio",
      fields: [
        {
          label: "¿Ya tienes nombre?",
          value:
            formData.hasBusinessName === "tengo"
              ? "Ya tengo nombre"
              : formData.hasBusinessName === "busco"
                ? "Busco uno nuevo"
                : "",
        },
        { label: "Producto/Servicio", value: formData.productService },
        { label: "Público Objetivo", value: formData.targetAudience },
        { label: "Valores de Marca", value: formData.brandValues },
        {
          label: "Palabras Clave",
          value: [formData.keyWord1, formData.keyWord2, formData.keyWord3]
            .filter(Boolean)
            .join(", "),
        },
        { label: "Idea de Nombre", value: formData.nameIdea },
        {
          label: "Logo",
          value:
            formData.hasLogo === "tengo"
              ? "Ya tengo logo"
              : formData.hasLogo === "necesito"
                ? "Necesito ayuda"
                : "",
        },
        { label: "Dónde Vendes", value: formData.salesLocation },
        {
          label: "Idioma del Nombre",
          value:
            formData.nameLanguage === "espanol"
              ? "Español"
              : formData.nameLanguage === "ingles"
                ? "Inglés"
                : formData.nameLanguage === "neutro"
                ? "Neutro"
                : "",
        },
      ],
    },
    {
      number: 3,
      title: "Pago",
      fields: [],
    },
  ];

  return (
    <div className="bg-muted relative hidden lg:flex">
      <div className="flex flex-col gap-6 p-8 overflow-y-auto w-full">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Resumen de Registro</h2>
          <p className="text-muted-foreground text-sm">
            Revisa la información que has proporcionado
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => {
            const isCompleted = currentStep > step.number;
            const isCurrent = currentStep === step.number;
            const hasContent = step.fields.some(
              (field) =>
                (!field.conditional || field.conditional) && field.value
            );

            return (
              <div
                key={step.number}
                className={`rounded-lg border p-4 transition-all ${
                  isCurrent
                    ? "border-primary bg-background shadow-sm"
                    : hasContent
                      ? "bg-background/50"
                      : "opacity-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  {isCompleted ? (
                    <CheckCircle2 className="size-5 text-green-600" />
                  ) : (
                    <Circle
                      className={`size-5 ${isCurrent ? "text-primary" : "text-muted-foreground"}`}
                    />
                  )}
                  <h3 className="font-semibold">
                    Paso {step.number}: {step.title}
                  </h3>
                </div>

                {hasContent && (
                  <div className="ml-7 space-y-2">
                    {step.fields.map(
                      (field, idx) =>
                        (!field.conditional || field.conditional) &&
                        field.value && (
                          <div key={idx} className="text-sm">
                            <span className="text-muted-foreground">
                              {field.label}:
                            </span>{" "}
                            <span className="font-medium">{field.value}</span>
                          </div>
                        )
                    )}
                  </div>
                )}

                {!hasContent && step.number < currentStep && (
                  <p className="ml-7 text-sm text-muted-foreground italic">
                    Sin información adicional
                  </p>
                )}

                {!hasContent && step.number === currentStep && (
                  <p className="ml-7 text-sm text-muted-foreground italic">
                    Completa este paso...
                  </p>
                )}

                {!hasContent && step.number > currentStep && (
                  <p className="ml-7 text-sm text-muted-foreground italic">
                    Pendiente
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
