/**
 * Testes para o store de contato (Zustand)
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { useContactStore } from '../useContactStore';

describe('useContactStore', () => {
  beforeEach(() => {
    // Reset store antes de cada teste
    useContactStore.getState().resetForm();
  });

  it('initializes with empty form data', () => {
    const { formData } = useContactStore.getState();
    expect(formData.name).toBe('');
    expect(formData.email).toBe('');
    expect(formData.subject).toBe('');
    expect(formData.message).toBe('');
  });

  it('updates field correctly', () => {
    const { setField } = useContactStore.getState();
    setField('name', 'John Doe');
    
    const { formData } = useContactStore.getState();
    expect(formData.name).toBe('John Doe');
  });

  it('clears error when field is updated', () => {
    const { setErrors, setField } = useContactStore.getState();
    
    setErrors({ name: 'Nome inválido' });
    expect(useContactStore.getState().errors.name).toBe('Nome inválido');
    
    setField('name', 'Valid Name');
    expect(useContactStore.getState().errors.name).toBeUndefined();
  });

  it('validates form correctly with valid data', () => {
    const { setField, validate } = useContactStore.getState();
    
    setField('name', 'John Doe');
    setField('email', 'john@example.com');
    setField('subject', 'Test Subject');
    setField('message', 'This is a test message with enough characters');
    
    const isValid = validate();
    expect(isValid).toBe(true);
    expect(useContactStore.getState().errors).toEqual({});
  });

  it('validates form correctly with invalid data', () => {
    const { setField, validate } = useContactStore.getState();
    
    setField('name', 'J'); // Too short
    setField('email', 'invalid-email'); // Invalid email
    setField('subject', 'Hi'); // Too short
    setField('message', 'Short'); // Too short
    
    const isValid = validate();
    expect(isValid).toBe(false);
    
    const { errors } = useContactStore.getState();
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.subject).toBeDefined();
    expect(errors.message).toBeDefined();
  });

  it('resets form correctly', () => {
    const { setField, resetForm } = useContactStore.getState();
    
    setField('name', 'John Doe');
    setField('email', 'john@example.com');
    
    resetForm();
    
    const { formData, errors, isSubmitting } = useContactStore.getState();
    expect(formData.name).toBe('');
    expect(formData.email).toBe('');
    expect(errors).toEqual({});
    expect(isSubmitting).toBe(false);
  });

  it('sets submitting state correctly', () => {
    const { setIsSubmitting } = useContactStore.getState();
    
    setIsSubmitting(true);
    expect(useContactStore.getState().isSubmitting).toBe(true);
    
    setIsSubmitting(false);
    expect(useContactStore.getState().isSubmitting).toBe(false);
  });
});
