# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## GUIA DE INSTALAÇÃO DO REACT COM O VITE

Para a instalação do Vite, primeiro crie uma pasta na sua área de trabalho. Em seguida, abra o terminal e navegue até a pasta criada usando o comando `cd` seguido do caminho da pasta. 

**OBS.:** Esse caminho pode ser obtido no explorador de arquivos.

### 1. Instale o Vite e o React

Primeiro, acesse o site [Vite Guide](https://vite.dev/guide/).

**OBS.:** Para o React funcionar, é necessário ter o Node.js instalado na sua máquina.

#### 1.1. Instalação do Vite

No terminal, execute o seguinte comando:

```sh
npm create vite@latest Nome-do-seu-projeto -- --template react
```

Esse processo pode demorar um pouco. Após a conclusão, digite no terminal:

```sh
code .
```

**OBS.:** Certifique-se de estar na mesma pasta do projeto.

### 2. Finalização da Instalação no VSCode

Como você já criou uma pasta e dentro dela está o seu projeto, abra o terminal no VSCode com `Ctrl + Shift + '` e execute os seguintes comandos:

```sh
cd 'nome_da_pasta_do_projeto'
npm install
npm run dev
```

Para terminar a execução, use `Ctrl + C`.

### 3. Dicas

Caso você queira usar um arquivo Makefile, é aconselhável utilizá-lo para diminuir o tempo de execução no terminal.


