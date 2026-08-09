# Car Bank — Prévia (Filial Paraná)

Site novo, gerado a partir do mesmo modelo das outras filiais. Já vem com:
- **Gerenciar GCMs** direto no Admin (adicionar/remover)
- **Editar prévia** já enviada (ícone ✎ na tabela do Admin)
- Aceita valores **zero** em Aprovadas/Pagas
- Ao gerar a imagem, os registros são **zerados automaticamente**
- Lista inicial de 20 GCMs já cadastrada

⚠️ **Este site ainda não tem um banco de dados próprio.** Antes de publicar,
você precisa criar um projeto Firebase (gratuito) e colar as credenciais no
`index.html`. Veja o passo a passo abaixo.

## Passo 1 — Criar o projeto Firebase

1. Acesse https://console.firebase.google.com e clique em **Adicionar projeto**
2. Nome sugerido: `carbank-pr` (pode ser outro nome — não precisa ser igual)
3. Pode desativar o Google Analytics (não é necessário)
4. Clique em **Criar projeto**

## Passo 2 — Criar o Realtime Database

1. No menu lateral, vá em **Build → Realtime Database**
2. Clique em **Criar banco de dados**
3. Escolha a localização (qualquer uma serve, ex: `us-central1`)
4. Em **Regras de segurança**, comece em **modo de teste** (dá para restringir depois)

## Passo 3 — Registrar um app Web e pegar as credenciais

1. Na página inicial do projeto, clique no ícone **`</>`** (Adicionar app → Web)
2. Dê um apelido, ex: `carbank-pr-web`
3. **Não** marque "Configurar também o Firebase Hosting"
4. Clique em **Registrar app**
5. O Firebase vai mostrar um bloco parecido com este:
```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "carbank-pr.firebaseapp.com",
  databaseURL: "https://carbank-pr-default-rtdb.firebaseio.com",
  projectId: "carbank-pr",
  storageBucket: "carbank-pr.firebasestorage.app",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
}
```
6. Copie esses valores

## Passo 4 — Colar as credenciais no index.html

1. Abra o `index.html` deste pacote em um editor de texto
2. Procure por `firebaseConfig` (perto do final do arquivo)
3. Substitua os textos:
   - `COLE_AQUI_A_apiKey_DO_SEU_PROJETO_FIREBASE` → sua `apiKey`
   - `COLE_AQUI_O_messagingSenderId` → seu `messagingSenderId`
   - `COLE_AQUI_O_appId` → seu `appId`
   - Confira também se `authDomain`, `databaseURL` e `projectId` batem com o
     nome do projeto que você criou (se você usou `carbank-pr`, já está certo)
4. Salve o arquivo

## Passo 5 — Publicar no GitHub Pages

1. Acesse https://github.com/new e crie um repositório **público**, ex: `carbank-parana`
2. Suba os 5 arquivos deste pacote (`index.html`, `manifest.json`, `sw.js`, os dois `.png`)
3. Vá em **Settings → Pages** → Source: **Deploy from a branch** → branch `main`, pasta `/ (root)`
4. Aguarde 1–2 minutos. Link final: `https://SEU_USUARIO.github.io/carbank-parana/`

## Observação sobre segurança
Como o repositório é público, a senha de admin (`@1234`, fixa no código) fica
visível a quem olhar o código-fonte. Se quiser mais segurança, dá para trocar
depois pelas regras do próprio Firebase Realtime Database.
