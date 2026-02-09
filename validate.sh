#!/bin/bash

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     VALIDAÇÃO FINAL - SITE PLUGWIN                         ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contador de erros
ERRORS=0

echo "📋 Checklist de Validação:"
echo ""

# 1. Verificar se node_modules existe
echo -n "1. Verificando dependências... "
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
    echo "   Execute: npm install"
    ERRORS=$((ERRORS + 1))
fi

# 2. Verificar arquivos de configuração
echo -n "2. Verificando configurações... "
if [ -f "tsconfig.json" ] && [ -f "vite.config.ts" ] && [ -f "package.json" ]; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 3. Verificar estrutura de diretórios
echo -n "3. Verificando estrutura... "
if [ -d "src/components" ] && [ -d "src/data" ] && [ -d "public" ]; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 4. Contar arquivos TypeScript
echo -n "4. Contando arquivos TypeScript... "
TS_FILES=$(find src -name "*.tsx" -o -name "*.ts" | wc -l)
echo -e "${GREEN}${TS_FILES} arquivos${NC}"

# 5. Verificar arquivo principal
echo -n "5. Verificando App.tsx... "
if [ -f "src/App.tsx" ]; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 6. Verificar BlogPost
echo -n "6. Verificando BlogPost.tsx... "
if [ -f "src/components/pages/BlogPost.tsx" ]; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
    ERRORS=$((ERRORS + 1))
fi

echo ""
echo "════════════════════════════════════════════════════════════"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✓ Todas as verificações passaram!${NC}"
    echo ""
    echo "Próximos passos:"
    echo "1. Execute: npm run build"
    echo "2. Verifique o build: npm run preview"
    echo "3. Faça commit: git add . && git commit -m 'fix: corrigir erros de build'"
    echo "4. Push: git push origin main"
    echo ""
    exit 0
else
    echo -e "${RED}✗ ${ERRORS} erro(s) encontrado(s)${NC}"
    echo ""
    echo "Corrija os erros antes de fazer deploy."
    exit 1
fi
