# My E-Commerce Website

This project is a mobile-first eCommerce website built using React, TypeScript, and Vite. It integrates with the Mock.shop API to provide full store capabilities, including product listings, shopping cart functionality, and user authentication.

## Features

- **Responsive Design**: Optimized for mobile devices with a clean and modern UI.
- **Product Listings**: Fetch and display products from the Mock.shop API.
- **Shopping Cart**: Add, remove, and update items in the cart.
- **User Authentication**: Secure login and registration system.
- **Fast and Efficient**: Built with Vite for fast development and optimized builds.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A build tool that provides a fast development environment.
- **Axios**: A promise-based HTTP client for making API requests.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/my-ecommerce-website.git
   cd my-ecommerce-website
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

## Expanding the ESLint Configuration

For a production application, consider updating the ESLint configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
- Optionally add `...tseslint.configs.stylisticTypeChecked`.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  settings: { react: { version: "18.3" } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
