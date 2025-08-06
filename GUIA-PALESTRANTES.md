# 🎤 Guia para Palestrantes: Como Adicionar Sua Palestra

Olá, palestrante! 👋

Este guia te ajudará a personalizar sua palestra no site do evento "O Palco é Delas". Atualmente sua palestra aparece como placeholder, mas você pode torná-la única e representativa do seu trabalho!

## 🎯 O que você pode personalizar:

### 📝 **Informações da Palestra:**
- **Título** - Escolha um título impactante e relevante
- **Descrição** - Conte o que os participantes vão aprender
- **Tags/Categorias** - Ajude as pessoas a encontrar sua palestra

## 📍 Onde encontrar sua palestra:

Sua palestra está localizada no arquivo `script.js`, no array `talks`. Procure pelo seu nome para encontrar o objeto correto.

**🔍 Como localizar:**
1. Abra o arquivo `script.js`
2. Procure por `const talks = [`
3. Encontre o objeto com `speaker: "Seu Nome"`

## ✏️ Como editar sua palestra:

### **ANTES (placeholder atual):**
```javascript
{
    id: 1,
    time: "10:10 - 10:25",
    title: "Título da palestra será definido pela palestrante",
    speaker: "Seu Nome",
    description: "A palestrante adicionará a descrição de sua apresentação. Este é um placeholder do projeto open source para que cada participante possa personalizar sua palestra.",
    tags: ["A definir"],
    block: "morning",
    isPlaceholder: true
}
```

### **DEPOIS (personalizado):**
```javascript
{
    id: 1,
    time: "10:10 - 10:25",
    title: "Inteligência Artificial: Quebrando Barreiras no Mercado de Trabalho",
    speaker: "Seu Nome",
    description: "Vamos explorar como a IA está democratizando oportunidades e criando novos caminhos profissionais. Compartilharei minha jornada pessoal e estratégias práticas para mulheres se destacarem nesta área revolucionária.",
    tags: ["IA", "Carreira", "Mulheres na Tech", "Inovação"],
    block: "morning",
    isPlaceholder: false  // ← Mude para false quando personalizar
}
```

## 🎨 Dicas para uma palestra marcante:

### 📌 **Título Impactante:**
- ✅ Seja específica sobre o tema
- ✅ Use palavras que despertem curiosidade
- ✅ Mencione o benefício para o público
- ❌ Não seja muito genérica
- ❌ Evite jargões muito técnicos

**Exemplos de títulos inspiradores:**
- "De Zero a Hero: Minha Jornada em Segurança Cibernética"
- "UX Design: Como Criar Produtos que Mulheres Realmente Amam"
- "Blockchain Descomplicado: Oportunidades para Todas"

### 📖 **Descrição Envolvente:**
- ✅ Comece com uma pergunta ou problema
- ✅ Explique o que as pessoas vão aprender
- ✅ Mencione sua experiência pessoal
- ✅ Termine com o resultado/benefício esperado
- ❌ Não seja muito técnica ou abstrata

**Estrutura sugerida:**
1. **Hook inicial** (pergunta/problema)
2. **O que será abordado** 
3. **Sua experiência/credencial**
4. **Benefício para o público**

### 🏷️ **Tags Estratégicas:**
- ✅ Use 3-5 tags relevantes
- ✅ Misture tags técnicas e soft skills
- ✅ Considere o público-alvo
- ✅ Inclua palavras que pessoas buscariam

**Categorias populares:**
- **Técnicas:** IA, Frontend, Backend, Cloud, Mobile, Data Science
- **Soft Skills:** Liderança, Carreira, Comunicação, Networking
- **Temas:** Mulheres na Tech, Diversidade, Inovação, Empreendedorismo

## 🚀 Processo de contribuição:

1. **Fork** do repositório
2. **Edite** suas informações no `script.js`
3. **Teste** localmente (opcional)
4. **Commit** com mensagem clara
5. **Abra um Pull Request**

### 📝 **Mensagem de commit sugerida:**
```
Personaliza palestra: [Seu Nome] - [Título da Palestra]

- Atualiza título de placeholder para "[Novo Título]"
- Adiciona descrição personalizada sobre [tema principal]
- Define tags: [lista de tags]
- Remove flag isPlaceholder
```

## ⚠️ Importante - NÃO altere:

- ❌ **`id`** - Identificador único da palestra
- ❌ **`time`** - Horário já definido pela organização  
- ❌ **`speaker`** - Seu nome (já correto)
- ❌ **`block`** - Bloco manhã/tarde já distribuído

## 🔧 Validação - Checklist final:

Antes de enviar seu Pull Request, verifique:

- [ ] Título é claro e atrativo
- [ ] Descrição explica o valor da palestra
- [ ] Tags são relevantes e variadas (3-5 tags)
- [ ] `isPlaceholder: false` foi definido
- [ ] Sintaxe JSON está correta (vírgulas, aspas)
- [ ] Não alterei `id`, `time`, `speaker` ou `block`

## 💡 Inspiração - Exemplos reais:

### **Palestra Técnica:**
```javascript
{
    title: "DevOps na Prática: Automatizando Deploys com Confiança",
    description: "Vou compartilhar como implementei pipelines CI/CD que reduziram o tempo de deploy de 2 horas para 5 minutos. Você sairá sabendo criar automações seguras e confiáveis, mesmo sendo iniciante em DevOps.",
    tags: ["DevOps", "CI/CD", "Automação", "Carreira", "Boas Práticas"]
}
```

### **Palestra de Carreira:**
```javascript
{
    title: "Liderança Técnica Feminina: Quebrando o Teto de Vidro",
    description: "Como passei de desenvolvedora júnior a tech lead em 3 anos? Vou revelar estratégias práticas para assumir liderança, lidar com síndrome da impostora e construir times diversos e inclusivos.",
    tags: ["Liderança", "Carreira", "Mulheres na Tech", "Gestão", "Desenvolvimento Pessoal"]
}
```

### **Palestra Inspiracional:**
```javascript
{
    title: "Da Arte para o Código: Minha Transição de Carreira aos 35",
    description: "Nunca é tarde para recomeçar! Vou contar como migrei das artes visuais para UX Design e depois para desenvolvimento. Dicas práticas para quem quer mudar de área e superar o medo do 'já era tarde'.",
    tags: ["Transição de Carreira", "UX Design", "Motivação", "Recomeço", "Experiência"]
}
```

## 🆘 Precisa de ajuda?

- 📖 Consulte o [COMO-ATUALIZAR.md](COMO-ATUALIZAR.md) para instruções gerais
- 💬 Abra uma issue no repositório se tiver dúvidas
- 📧 Entre em contato com a organização do evento

---

**Vamos tornar este evento ainda mais incrível com sua contribuição única! 🌟**

*Lembre-se: sua palestra representa não apenas você, mas inspira outras mulheres na tecnologia. Seja autêntica e compartilhe sua paixão!*
