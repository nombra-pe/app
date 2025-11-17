"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSignUp } from "../signup-context";
import { useRouter } from "next/navigation";

export function Step2Company() {
  const router = useRouter();
  const { formData, updateFormData, setCurrentStep } = useSignUp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
    router.push("/signup/step-3");
  };

  const handleBack = () => {
    setCurrentStep(1);
    router.push("/signup/step-1");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Información del Negocio</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Cuéntanos sobre tu marca y negocio
          </p>
        </div>

        <Field>
          <FieldLabel>
            1. ¿Tu negocio ya tiene nombre o estás buscando uno nuevo? *
          </FieldLabel>
          <RadioGroup
            value={formData.hasBusinessName}
            onValueChange={(value: "tengo" | "busco") =>
              updateFormData({ hasBusinessName: value })
            }
            required
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tengo" id="has-name" />
              <Label htmlFor="has-name">Ya tengo nombre</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="busco" id="need-name" />
              <Label htmlFor="need-name">Busco uno nuevo</Label>
            </div>
          </RadioGroup>
        </Field>

        {formData.hasBusinessName === "tengo" && (
          <Field>
            <FieldLabel htmlFor="currentBusinessName">
              ¿Cuál es el nombre actual de tu negocio? *
            </FieldLabel>
            <Input
              id="currentBusinessName"
              name="currentBusinessName"
              type="text"
              placeholder="Nombre de tu negocio"
              value={formData.currentBusinessName}
              onChange={(e) =>
                updateFormData({ currentBusinessName: e.target.value })
              }
              required
            />
          </Field>
        )}

        <Field>
          <FieldLabel htmlFor="productService">
            2. ¿Qué producto o servicio ofreces? *
          </FieldLabel>
          <Textarea
            id="productService"
            name="productService"
            placeholder="Describe brevemente tu oferta..."
            value={formData.productService}
            onChange={(e) => updateFormData({ productService: e.target.value })}
            required
            rows={3}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="targetAudience">
            3. ¿A quién te diriges? (público objetivo) *
          </FieldLabel>
          <Textarea
            id="targetAudience"
            name="targetAudience"
            placeholder="Edad, sexo, ubicación, intereses..."
            value={formData.targetAudience}
            onChange={(e) => updateFormData({ targetAudience: e.target.value })}
            required
            rows={2}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="brandValues">
            4. ¿Qué valores o ideas quieres transmitir con tu marca? *
          </FieldLabel>
          <Textarea
            id="brandValues"
            name="brandValues"
            placeholder="Confianza, innovación, calidad..."
            value={formData.brandValues}
            onChange={(e) => updateFormData({ brandValues: e.target.value })}
            required
            rows={2}
          />
        </Field>

        <Field>
          <FieldLabel>5. Escribe 3 palabras que definan tu negocio *</FieldLabel>
          <div className="space-y-2">
            <Input
              placeholder="Palabra 1"
              value={formData.keyWord1}
              onChange={(e) => updateFormData({ keyWord1: e.target.value })}
              required
            />
            <Input
              placeholder="Palabra 2"
              value={formData.keyWord2}
              onChange={(e) => updateFormData({ keyWord2: e.target.value })}
              required
            />
            <Input
              placeholder="Palabra 3"
              value={formData.keyWord3}
              onChange={(e) => updateFormData({ keyWord3: e.target.value })}
              required
            />
          </div>
        </Field>

        <Field>
          <FieldLabel htmlFor="nameIdea">
            6. ¿Tienes alguna idea de nombre o palabra clave?
          </FieldLabel>
          <Input
            id="nameIdea"
            name="nameIdea"
            type="text"
            placeholder="Opcional"
            value={formData.nameIdea}
            onChange={(e) => updateFormData({ nameIdea: e.target.value })}
          />
        </Field>

        <Field>
          <FieldLabel>
            7. ¿Tienes logotipo o quieres ayuda con eso también? *
          </FieldLabel>
          <RadioGroup
            value={formData.hasLogo}
            onValueChange={(value: "tengo" | "necesito") =>
              updateFormData({ hasLogo: value })
            }
            required
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tengo" id="has-logo" />
              <Label htmlFor="has-logo">Ya tengo logo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="necesito" id="need-logo" />
              <Label htmlFor="need-logo">Necesito ayuda</Label>
            </div>
          </RadioGroup>
        </Field>

        {formData.hasLogo === "tengo" && (
          <Field>
            <FieldLabel htmlFor="logoFile">
              Sube tu logo *
            </FieldLabel>
            <FieldDescription>
              Formatos aceptados: PNG, JPG, SVG (máx. 5MB)
            </FieldDescription>
            <Input
              id="logoFile"
              name="logoFile"
              type="file"
              accept="image/png,image/jpeg,image/svg+xml"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                if (file && file.size > 5 * 1024 * 1024) {
                  alert("El archivo no debe superar 5MB");
                  e.target.value = "";
                  return;
                }
                updateFormData({ logoFile: file });
              }}
              required
            />
          </Field>
        )}

        <Field>
          <FieldLabel htmlFor="salesLocation">8. ¿Dónde vendes? *</FieldLabel>
          <Input
            id="salesLocation"
            name="salesLocation"
            type="text"
            placeholder="Ciudad, país, online..."
            value={formData.salesLocation}
            onChange={(e) => updateFormData({ salesLocation: e.target.value })}
            required
          />
        </Field>

        <Field>
          <FieldLabel>
            9. ¿Prefieres un nombre en español, inglés o neutro? *
          </FieldLabel>
          <Select
            value={formData.nameLanguage}
            onValueChange={(value: "espanol" | "ingles" | "neutro") =>
              updateFormData({ nameLanguage: value })
            }
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="espanol">Español</SelectItem>
              <SelectItem value="ingles">Inglés</SelectItem>
              <SelectItem value="neutro">Neutro</SelectItem>
            </SelectContent>
          </Select>
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
