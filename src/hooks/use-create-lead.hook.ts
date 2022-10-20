import { HomerClient } from '../api/client/homer.client';import { getDefaultCountry } from '../helpers/countries.helper';
;

export const useCreateLead = () => {
  const getFunctionalArea = (functionalArea: string): string => {
    let formatedFunctionalArea = '';

    switch (functionalArea) {
      case 'Administrative':
        formatedFunctionalArea = 'Administrativo';
        break;
      case 'Board of Advisors':
        formatedFunctionalArea = 'Board / Conselho';
        break;
      case 'Commercial':
        formatedFunctionalArea = 'Comercial / Vendas';
        break;
      case 'Finance':
        formatedFunctionalArea = 'Finanças';
        break;
      case 'Full P&L (President / CEO)':
        formatedFunctionalArea = 'Full P&L (Presidente / CEO)';
        break;
      case 'Legal':
        formatedFunctionalArea = 'Jurídico';
        break;
      case 'Marketing':
        formatedFunctionalArea = 'Marketing';
        break;
      case 'Operations':
        formatedFunctionalArea = 'Operações';
        break;
      case 'R&D':
        formatedFunctionalArea = 'P&D';
        break;
      case 'Strategic Planning':
        formatedFunctionalArea = 'Planejamento estratégico';
        break;
      case 'Product':
        formatedFunctionalArea = 'Produto';
        break;
      case 'Human Resources':
        formatedFunctionalArea = 'Recursos Humanos';
        break;
      case 'Technology':
        formatedFunctionalArea = 'Tecnologia';
        break;
      default:
        formatedFunctionalArea = functionalArea;
        break;
    }

    return formatedFunctionalArea;
  };

  const getLevel = (level: string): string => {
    let formatedSeniority = '';

    switch (level) {
      case 'Intern | Trainee':
      case 'Estagiário | Trainee':
        formatedSeniority = 'Estagiário / Trainee';
        break;
      case 'Assistant':
        formatedSeniority = 'Assistente';
        break;
      case 'Analyst':
        formatedSeniority = 'Analista';
        break;
      case 'Specialist | Coordinator':
      case 'Especialista | Coordenador':
        formatedSeniority = 'Especialista / Coordenador';
        break;
      case 'Manager':
        formatedSeniority = 'Gerente';
        break;
      case 'Senior Manager':
        formatedSeniority = 'Gerente Sênior';
        break;
      case 'Head':
      case 'Superintendente | Head':
        formatedSeniority = 'Superintendente / Head';
        break;
      case 'Director':
        formatedSeniority = 'Diretor';
        break;
      case 'C-level | VPs':
      case 'C-level | VPs funcionais':
        formatedSeniority = 'C-level / (VPs funcionais)';
        break;
      case 'General Diretor | CEO | Managing Director':
      case 'Diretor Geral | CEO | Managing Director':
        formatedSeniority = 'Diretor Geral / CEO / Managing Director';
        break;
      case 'Board Member/Advisor':
        formatedSeniority = 'Conselheiro';
        break;
      case 'Founder | Partner':
      case 'Founder | Sócio':
        formatedSeniority = 'Founder / Sócio';
        break;
      default:
        formatedSeniority = level;
        break;
    }

    return formatedSeniority;
  };

  const getCountry = (country: string): string => {
    let formatedCountry = '';

    switch (country) {
      case 'Brasil':
      case 'Brazil':
        formatedCountry = 'Brazil';
        break;
      case 'Estados Unidos':
      case 'United States':
        formatedCountry = 'United States';
        break;
      default:
        formatedCountry = getDefaultCountry(country);
        break;
    }

    return formatedCountry;
  };

  const getOperation = (country: string): string => {
    let formatedOperation = '';

    switch (country) {
      case 'Brasil':
      case 'Brazil':
        formatedOperation = 'operation_br';
        break;
      case 'Estados Unidos':
      case 'United States':
        formatedOperation = 'operation_us';
        break;
      default:
        formatedOperation = '';
        break;
    }

    return formatedOperation;
  };

  const createLead = (
    firstName: string,
    lastName: string,
    email: string,
    functionalArea?: string,
    level?: string,
    country?: string,
    currentPosition?: string,
    currentCompany?: string,
  ): Promise<void> =>
    HomerClient.post('/sharp-spring/lead', {
      leads: [
        {
          email,
          first_name: firstName,
          last_name: lastName,
          country: country ? getCountry(country) : null,
          seniority: level ? getLevel(level) : null,
          functional_area: functionalArea
            ? getFunctionalArea(functionalArea)
            : null,
          operation: country ? getOperation(country) : null,
          source: 'Assinante',
          is_unsubscribed: 0,
          current_position: currentPosition || null,
          current_company: currentCompany || null,
        },
      ],
    });

  return { createLead };
};
