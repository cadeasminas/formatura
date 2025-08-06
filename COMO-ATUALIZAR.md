# 📝 Como Atualizar Suas Informações no Site

Olá, alunas do programa "O Palco é Delas"! 👋

Este site é **open source** e cada uma de vocês pode atualizar suas próprias informações. Atualmente o site possui placeholders com seus nomes reais, mas as informações profissionais são genéricas.

## 🚀 Contribuindo:

1. Fork do repositório
2. Edite suas informações
3. Abra um Pull Request
4. Suas mudanças serão revisadas e aprovadas

## 🎯 O que você pode personalizar:

### 👩‍💼 **Seção de Palestrantes** (`script.js` - linha ~285)
- **Cargo atual** (`role`)
- **Empresa** (`company`) 
- **Bio pessoal** (`bio`)
- **Áreas de expertise** (`expertise`)
- **Links para redes sociais** (`social`)

### 🎤 **Palestras** (`script.js` - linha ~490)
- **Título da palestra** (`title`)
- **Descrição** (`description`)
- **Tags/categorias** (`tags`)

## 📂 Como encontrar suas informações:

### Palestras por bloco :

**🌅 BLOCO 1 - MANHÃ (10:00 - 13:00):**
1. Midian Brandão - IA e Futuro do Trabalho
2. Camila Marques de Oliveira - Frontend Moderno
3. Gabriela Milet Matias - Segurança Cibernética
4. Laryssa Viana Rocha - DevOps e Cloud
5. Elizabeth Cristina de Souza - Data Science
6. Bianca Pinto Cardoso - UX/UI Design
7. Juliana de Jesus de Oliveira - Blockchain
8. Marília Melo Favalesso - Mobile Development
9. Ana Hashimoto - IoT
10. Andrea Simone - Arquitetura de Software

**🌇 BLOCO 2 - TARDE (14:00 - 17:00):**
11. Bruna Valentim - Quantum Computing
12. Cecilia Silva - VR/AR
13. Jessica Alexandra - Metodologias Ágeis
14. Jessica Borges - Big Data
15. Karina Kaori - Automação e Robótica
16. Keline - Liderança Técnica
17. Luciana Damasceno - Open Source
18. Rhaissa Barbosa - Sustentabilidade
19. Helena - Empreendedorismo
20. Juliana Lisboa - Futuro das Mulheres na Tech

## 🔧 Como editar:

1. **Encontre seu nome** no arquivo `script.js`
2. **Localize seu objeto** na array `speakers` (para informações pessoais)
3. **Encontre sua palestra** na array `talks` (para informações da apresentação)
4. **Edite os campos** desejados
5. **Mantenha a estrutura** do JSON

## 💡 Exemplo de personalização:

**ANTES (placeholder):**
```javascript
{
    id: 1,
    name: "Midian Brandão",
    role: "Tech Lead",
    company: "A definir",
    bio: "Informações serão atualizadas pela própria palestrante...",
    expertise: ["IA", "Machine Learning", "Python"],
    // ...
}
```

**DEPOIS (personalizado):**
```javascript
{
    id: 1,
    name: "Midian Brandão",
    role: "Desenvolvedora Full Stack",
    company: "TechCorp",
    bio: "Desenvolvedora apaixonada por IA com 5 anos de experiência em Python e Machine Learning. Amo resolver problemas complexos com tecnologia.",
    expertise: ["Python", "TensorFlow", "React"],
    social: {
        linkedin: "https://linkedin.com/in/midian-brandao",
        twitter: "https://twitter.com/midian_dev",
        github: "https://github.com/midian-brandao"
    }
    // ...
}
```

## 🎨 Dicas importantes:

- ✅ **Mantenha** a estrutura JSON
- ✅ **Use** seus links reais do LinkedIn, GitHub, etc.
- ✅ **Seja autêntica** na sua bio
- ✅ **Escolha** expertise que representa você
- ❌ **Não altere** o `id` nem o `name`
- ❌ **Não quebre** a sintaxe do JavaScript



---

**Vamos juntas tornar este site ainda mais incrível! 💪✨**

*Este projeto representa nossa jornada no "O Palco é Delas" e cada uma de vocês faz parte desta história.*
