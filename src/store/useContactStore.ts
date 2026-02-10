/**
 * Store Zustand para gerenciamento do formulário de contato
 * Utiliza Zod para validação de dados
 */
import { create } from 'zustand';
import { z } from 'zod';

// Schema de validação do formulário
const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'Assunto deve ter pelo menos 3 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactState {
  formData: ContactFormData;
  errors: Partial<Record<keyof ContactFormData, string>>;
  isSubmitting: boolean;
  setField: (name: keyof ContactFormData, value: string) => void;
  setErrors: (errors: Partial<Record<keyof ContactFormData, string>>) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
  validate: () => boolean;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const useContactStore = create<ContactState>((set, get) => ({
  formData: initialFormData,
  errors: {},
  isSubmitting: false,
  setField: (name, value) => 
    set((state) => ({ 
      formData: { ...state.formData, [name]: value },
      errors: { ...state.errors, [name]: undefined } 
    })),
  setErrors: (errors) => set({ errors }),
  setIsSubmitting: (isSubmitting) => set({ isSubmitting }),
  resetForm: () => set({ formData: initialFormData, errors: {}, isSubmitting: false }),
  validate: () => {
    try {
      contactSchema.parse(get().formData);
      set({ errors: {} });
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        err.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
          }
        });
        set({ errors: fieldErrors });
      }
      return false;
    }
  },
}));
