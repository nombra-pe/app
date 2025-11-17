"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSignUp } from "../signup-context";
import { useRouter } from "next/navigation";

export function Step1TitularData() {
  const router = useRouter();
  const { formData, updateFormData, setCurrentStep } = useSignUp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
    router.push("/signup/step-2");
  };

  const handleBack = () => {
    setCurrentStep(0);
    router.push("/signup");
  };

  const getDocumentLabel = () => {
    if (formData.personType === "natural") return "DNI";
    if (formData.personType === "juridica") return "RUC";
    return "DNI o RUC";
  };

  const getDocumentPlaceholder = () => {
    if (formData.personType === "natural") return "12345678";
    if (formData.personType === "juridica") return "20123456789";
    return "Seleccione tipo de persona primero";
  };

  const validatePhone = (phone: string) => {
    return /^9\d{8}$/.test(phone);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Datos del Titular</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Información legal y de contacto
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="businessName">
            Nombre o Razón Social *
          </FieldLabel>
          <Input
            id="businessName"
            name="businessName"
            type="text"
            placeholder="Ej: Juan Pérez o Acme S.A.C."
            value={formData.businessName}
            onChange={(e) => updateFormData({ businessName: e.target.value })}
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="personType">Tipo de Persona *</FieldLabel>
          <Select
            value={formData.personType}
            onValueChange={(value: "natural" | "juridica") =>
              updateFormData({ personType: value })
            }
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="natural">Persona Natural</SelectItem>
              <SelectItem value="juridica">Persona Jurídica</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel htmlFor="documentNumber">
            {getDocumentLabel()} *
          </FieldLabel>
          <Input
            id="documentNumber"
            name="documentNumber"
            type="text"
            placeholder={getDocumentPlaceholder()}
            value={formData.documentNumber}
            onChange={(e) =>
              updateFormData({ documentNumber: e.target.value })
            }
            disabled={!formData.personType}
            required
            maxLength={formData.personType === "natural" ? 8 : 11}
            pattern={
              formData.personType === "natural" ? "\\d{8}" : "\\d{11}"
            }
          />
          <FieldDescription>
            {formData.personType === "natural"
              ? "DNI de 8 dígitos"
              : formData.personType === "juridica"
                ? "RUC de 11 dígitos"
                : "Seleccione primero el tipo de persona"}
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="phone">Teléfono/WhatsApp *</FieldLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="912345678"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            required
            maxLength={9}
            pattern="9\d{8}"
          />
          <FieldDescription>Formato: 9XXXXXXXX (9 dígitos)</FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="nationality">Nacionalidad *</FieldLabel>
          <Select
            value={formData.nationality}
            onValueChange={(value: "peruana" | "extranjera") =>
              updateFormData({ nationality: value })
            }
            required
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="peruana">Peruana</SelectItem>
              <SelectItem value="extranjera">Extranjera</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel htmlFor="address">Dirección Completa *</FieldLabel>
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="Calle, número, referencia"
            value={formData.address}
            onChange={(e) => updateFormData({ address: e.target.value })}
            required
          />
        </Field>

        <div className="grid grid-cols-1 gap-4">
          <Field>
            <FieldLabel htmlFor="district">Distrito *</FieldLabel>
            <Input
              id="district"
              name="district"
              type="text"
              placeholder="Ej: Miraflores"
              value={formData.district}
              onChange={(e) => updateFormData({ district: e.target.value })}
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="province">Provincia *</FieldLabel>
            <Input
              id="province"
              name="province"
              type="text"
              value={formData.province}
              onChange={(e) => updateFormData({ province: e.target.value })}
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="department">Departamento *</FieldLabel>
            <Input
              id="department"
              name="department"
              type="text"
              value={formData.department}
              onChange={(e) => updateFormData({ department: e.target.value })}
              required
            />
          </Field>
        </div>

        {formData.personType === "juridica" && (
          <Field>
            <FieldLabel htmlFor="legalRepresentative">
              Representante Legal
            </FieldLabel>
            <Input
              id="legalRepresentative"
              name="legalRepresentative"
              type="text"
              placeholder="Nombre completo del representante"
              value={formData.legalRepresentative}
              onChange={(e) =>
                updateFormData({ legalRepresentative: e.target.value })
              }
            />
            <FieldDescription>Solo para personas jurídicas</FieldDescription>
          </Field>
        )}

        <Field>
          <FieldLabel htmlFor="industry">Rubro o Industria *</FieldLabel>
          <Input
            id="industry"
            name="industry"
            type="text"
            placeholder="Ej: Tecnología, Alimentos, Servicios"
            value={formData.industry}
            onChange={(e) => updateFormData({ industry: e.target.value })}
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="operationLocation">
            ¿Dónde opera o planea operar? *
          </FieldLabel>
          <Input
            id="operationLocation"
            name="operationLocation"
            type="text"
            placeholder="Ciudad, región o país"
            value={formData.operationLocation}
            onChange={(e) =>
              updateFormData({ operationLocation: e.target.value })
            }
            required
          />
        </Field>

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
            Siguiente
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
