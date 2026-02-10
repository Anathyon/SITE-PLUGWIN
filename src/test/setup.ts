/**
 * Configuração de testes com Vitest
 * Estende matchers do Testing Library e configura cleanup automático
 */
import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Estende expect com matchers do jest-dom
expect.extend(matchers);

// Limpa o DOM após cada teste
afterEach(() => {
  cleanup();
});
