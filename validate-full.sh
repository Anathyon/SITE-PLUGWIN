#!/bin/bash

# ============================================
# Script de Validação Completa - Plugwin Sistemas
# ============================================

echo "🚀 Iniciando validação completa do projeto..."
echo ""

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contador de erros
ERRORS=0

# 1. Verificar Node.js e npm
echo "📦 Verificando Node.js e npm..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js não encontrado${NC}"
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ Node.js $(node --version)${NC}"
fi

if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm não encontrado${NC}"
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ npm $(npm --version)${NC}"
fi
echo ""

# 2. Instalar dependências
echo "📥 Instalando dependências..."
if npm install; then
    echo -e "${GREEN}✅ Dependências instaladas${NC}"
else
    echo -e "${RED}❌ Erro ao instalar dependências${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 3. Executar linting
echo "🔍 Executando ESLint..."
if npm run lint; then
    echo -e "${GREEN}✅ Linting passou${NC}"
else
    echo -e "${YELLOW}⚠️  Avisos de linting encontrados${NC}"
fi
echo ""

# 4. Executar testes
echo "🧪 Executando testes..."
if npm run test -- --run; then
    echo -e "${GREEN}✅ Todos os testes passaram${NC}"
else
    echo -e "${RED}❌ Alguns testes falharam${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 5. Build de produção
echo "🏗️  Criando build de produção..."
if npm run build; then
    echo -e "${GREEN}✅ Build criado com sucesso${NC}"
else
    echo -e "${RED}❌ Erro no build${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 6. Verificar arquivos importantes
echo "📄 Verificando arquivos importantes..."
FILES=(
    "public/.htaccess"
    "README.md"
    ".env.example"
    "vite.config.ts"
    "tsconfig.json"
    "package.json"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file${NC}"
    else
        echo -e "${RED}❌ $file não encontrado${NC}"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# 7. Verificar tamanho do build
if [ -d "dist" ]; then
    echo "📊 Tamanho do build:"
    du -sh dist
    echo ""
fi

# Resultado final
echo "============================================"
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ Validação completa! Projeto pronto para deploy.${NC}"
    exit 0
else
    echo -e "${RED}❌ Validação falhou com $ERRORS erro(s).${NC}"
    exit 1
fi
