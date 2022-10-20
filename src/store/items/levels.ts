import { SelectItem } from "../select.store";

export const levels = [
  {
    label: "Estagiário | Trainee",
    value: { pt_br: "Estagiário | Trainee", en_us: "Intern | Trainee" },
  },
  { label: "Assistente", value: { pt_br: "Assistente", en_us: "Assistant" } },
  { label: "Analista", value: { pt_br: "Analista", en_us: "Analyst" } },
  {
    label: "Especialista | Coordenador",
    value: {
      pt_br: "Especialista | Coordenador",
      en_us: "Specialist | Coordinator",
    },
  },
  {
    label: "Gerente | Associate",
    value: { pt_br: "Gerente | Associate", en_us: "Manager | Associate" },
  },
  {
    label: "Gerente Sênior",
    value: { pt_br: "Gerente Sênior", en_us: "Senior Manager" },
  },
  {
    label: "Superintendente | Head",
    value: { pt_br: "Superintendente | Head", en_us: "Head" },
  },
  { label: "Diretor", value: { pt_br: "Diretor", en_us: "Director" } },
  {
    label: "C-level | VPs funcionais",
    value: { pt_br: "C-level | VPs funcionais", en_us: "C-level | VPs" },
  },
  {
    label: "Diretor Geral | CEO | Managing Director",
    value: {
      pt_br: "Diretor Geral | CEO | Managing Director",
      en_us: "General Diretor | CEO | Managing Director",
    },
  },
  {
    label: "Conselheiro",
    value: { pt_br: "Conselheiro", en_us: "Board Member | Advisor" },
  },
  {
    label: "Founder | Sócio",
    value: { pt_br: "Founder | Sócio", en_us: "Founder | Partner" },
  },
] as SelectItem[];