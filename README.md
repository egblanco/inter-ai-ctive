## Technical Test for AI Chat Application - Frontend Developer Position 📝

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project structure 💻 

- ### NextJs Architecture
The APP Router is used to manage routes as well as the implementation of internal Services for integration with OpeanAi API and AWS.

- ### Specific Architecture
  📁 components: It contains all the components related to the visual representation of general elements such as Lists, Images, Text Boxes, Chat Elements, among others.
    
  📁 components/ui: It contains all the components related to the visual identity of the project such as header, loaders, cards among others.

  📁 contexts: Contains the domains of the contexts and their related implementations, such as chat-messages
  
  📁 types: Contains types related to data models such as messages and OpeanAi responses
  
  📁 utils: Contains the horizontal functions used by different implementations such as working with dates and texts.

- ### Integrations
  🤖 Opean AI:
    
    - Integration with Openai `gpt-4-turbo` models for message chat with questions and answers.
    
    - Integration with Openai `gpt-4-vision-preview` models to analyze and describe uploaded images..
    

