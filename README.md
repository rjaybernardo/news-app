# NextJS with Typescript News Website

Deployed app to Vercel [Demo App](https://news-app-ten-theta.vercel.app/)

<p align="center">
      <img width="600"  src="./news-webpage.png">
</p>

- This website is created using NextJS
- Styling with Bootstrap and CSS modules
- Implementation of typescript
  - For Type safety and catch errors earlier
  - Improved code readability and maintainability
  - Better scalability and code reusability
- Use of NextJS pages structure and NextJS Routing
  - From `pages` directory Next.js will automatically create a URL path for that page.
- Fetch data from external API
  - from https://newsapi.org/
- Client Side Rendering
  - allows for dynamic and interactive user experiences by rendering pages on the client-side using JavaScript frameworks like React, while still providing some of the benefits of server-side rendering like SEO optimization and initial load speed.
- Use of Dynamic Routes
  - Next.js allow you to create pages with dynamic URLs that can contain parameters or variables.
  - This enables you to create flexible and reusable page components that can display different content depending on the URL.
- getStaticProps
  - Is a function that allows you to fetch data at build time and pass it as props to a page component.
- getStaticPaths
  - is a Next.js function that allows you to specify dynamic routes for pre-rendering at build time with getStaticProps.
- Incremental Static Generation
  - a feature in Next.js that allows you to re-generate specific pages or sections of a page at runtime, rather than pre-generating the entire site at build time. This results in faster and more efficient updates to your site, as you only need to generate new content when it changes, rather than rebuilding the entire site from scratch.
- 400/500 Error pages
  - Create custom 400 (client-side) and 500 (server-side) error pages to provide a better user experience when errors occur.
- Use of NextJS Progress Bar
  - Display of Loading Bar while app is fetching data or while the webpage is loading
- Image Optimization using NextJS image component
  - a built-in feature in Next.js that provides optimized image loading and resizing capabilities.
  - It allows you to easily add images to your site while ensuring that they are loaded efficiently and at the appropriate size for the device and screen resolution.
- Deploy to Vercel
