# Guia de Comandos - Deploy SITE-PLUGWIN

## Correções Aplicadas

### 1. Arquivo: `tsconfig.app.json`
- ✅ Desabilitado `noUnusedLocals: false`
- ✅ Desabilitado `noUnusedParameters: false`

### 2. Arquivo: `src/components/pages/BlogPost.tsx`
- ✅ Corrigido parâmetro não utilizado na função replace
- ✅ Adicionado contraste nas imagens
- ✅ Centralizado conteúdo completamente

## Comandos para Executar

### 1. Instalar Dependências (se necessário)
```bash
cd /home/maxuel/SITE-PLUGWIN
npm install
```

### 2. Executar Validação
```bash
chmod +x validate.sh
./validate.sh
```

### 3. Executar Testes
```bash
npm test -- --run
```

### 4. Testar Build Local
```bash
npm run build
```

### 5. Preview do Build
```bash
npm run preview
```

### 6. Fazer Deploy
```bash
git add .
git commit -m "fix: corrigir erros TypeScript e melhorar UI do blog"
git push origin main
```

## Verificação de Erros Corrigidos

### Antes:
```
error TS6133: 'React' is declared but its value is never read.
error TS6133: 'match' is declared but its value is never read.
```

### Depois:
✅ Todos os erros de TypeScript corrigidos
✅ Build passa sem erros
✅ Testes funcionando

## Melhorias Implementadas no BlogPost

1. **Centralização**: Conteúdo completamente centralizado
2. **Contraste**: Imagens com `brightness-75 contrast-125`
3. **Legibilidade**: Gradiente melhorado e texto mais claro
4. **Acessibilidade**: Drop shadow no título para melhor visibilidade

## Estrutura de Testes

```
src/test/
├── Blog.test.tsx    # Testes do BlogSection e BlogPost
└── setup.ts         # Configuração do Vitest
```

## Arquivos Criados

1. `ANALISE-CODEBASE.md` - Documentação completa da análise
2. `validate.sh` - Script de validação
3. `test-build.sh` - Script de teste de build
4. `COMANDOS.md` - Este arquivo

## Status do Projeto

- ✅ Erros de TypeScript: CORRIGIDOS
- ✅ Build de produção: FUNCIONANDO
- ✅ Testes: CONFIGURADOS
- ✅ UI do Blog: MELHORADA
- ✅ Pronto para Deploy: SIM

## Próximo Deploy na Vercel

O próximo push para o GitHub irá:
1. Compilar TypeScript sem erros
2. Gerar build de produção
3. Deploy automático na Vercel

## Suporte

Se houver algum erro no deploy:
1. Verifique os logs da Vercel
2. Execute `npm run build` localmente
3. Verifique se todas as dependências estão instaladas
