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

### 🎤 **Palestras** (`script.js` - linha ~285)
- **Título da palestra** (`title`)
- **Descrição** (`description`)
- **Tags/categorias** (`tags`)
- **Remover flag placeholder** (`isPlaceholder: false`)

📖 **[Ver Guia Completo para Palestrantes](GUIA-PALESTRANTES.md)**

## 📂 Como encontrar suas informações:

### Palestras por bloco :

**🌅 BLOCO 1 - MANHÃ (10:10 - 12:40):**
1. Midian Brandão
2. Camila Marques de Oliveira
3. Gabriela Milet Matias
4. Laryssa Viana Rocha
5. Elizabeth Cristina de Souza
6. Bianca Pinto Cardoso
7. Juliana de Jesus de Oliveira
8. Marília Melo Favalesso
9. Ana Hashimoto
10. Andrea Simone

**🌇 BLOCO 2 - TARDE (14:00 - 16:30):**
11. Bruna Valentim
12. Cecilia Silva
13. Jessica Alexandra
14. Jessica Borges
15. Karina Kaori
16. Keline
17. Luciana Damasceno
18. Rhaissa Barbosa
19. Helena
20. Juliana Lisboa

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
