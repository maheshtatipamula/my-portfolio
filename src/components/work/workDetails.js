const ProjectCardData = [
  {
    id: 1,
    imgsrc: "ecom.png",
    title: "Ecommerce",
    technologies: "Redux/toolkit,api,Tailwind Css, Html",
    desc: `
      I have implemented Redux Toolkit for efficient state management in the application. Users can seamlessly enhance their shopping experience with features such as adding products to their wishlist and cart. By clicking the "Add to Wishlist" button on any product page, users can curate a personalized wishlist. Additionally, the "Add to Cart" button simplifies the process of selecting items for purchase. Moreover, users have the flexibility to manage multiple addresses and can conveniently choose a preferred address during the checkout process.`,
    lis: [
      { p1: `I have utilized Redux Toolkit for state management` },
      {
        p1: `Users can easily add products to their wishlist,
      Simply click the "Add to Wishlist" button on any product page.`,
      },
      {
        p1: `Users can easily add products to their Cart,
          Simply click the "Add to Cart" button on any product page`,
      },
      {
        p1: "Users can add multiple addresses and select one address during checkout.",
      },
    ],
    view: "https://ecom-react-maheshtatipamula.vercel.app",
    github: "https://github.com/maheshtatipamula/Ecom-React",
  },
  {
    id: 2,
    imgsrc: "Backend_Ecom.png",
    title: "backend_Ecom",
    desc: `
      The application incorporates secure user authentication through the utilization of JSON Web Token (jsonwebtoken). Additionally, it enhances user experience with a built-in email feature, where users receive detailed order information via email upon successful order completion. Furthermore, the application provides a wishlist feature, allowing users to curate and manage a list of desired products. Additionally, the Cart feature enables users to conveniently add products to their shopping cart for streamlined and efficient shopping experiences.`,
    technologies: "Node.js,MongoDb,Express.js",
    lis: [
      { p1: "For authentication, I have used JSON Web Token (jsonwebtoken)." },
      {
        p1: "It has an email feature: On successful orders, the user will be sent an email including the order details.",
      },
      { p1: " it has wishlist feature, user can add products to wishlist" },
      { p1: "it has Cart feature, user can add products to Cart" },
    ],
    view: "https://ecom-backend-maheshtatipamula.vercel.app",
    github: "https://github.com/maheshtatipamula/Ecom_backend",
    postman: "https://documenter.getpostman.com/view/27009787/2s9Ykn8ghc",
  },
  {
    id: 3,
    imgsrc: "instashare.png",
    title: "INSTASHARE",
    technologies: `HTML, CSS, JavaScript, React JS, Bootstrap, React Slick,
      Figma, client storage`,
    desc: `
      Implemented responsive Streaming Application like Instagram Clone where users
      can log in and see a list of stories and posts, user can also search posts with post
      caption, user can be able to like and dislike the post and also view the user
      specific posts.`,
    lis: [
      {
        p1: `Implemented different routes for features like login, home, user profile,
  profile by using React Router components Route, Switch, Link.`,
      },
      {
        p1: `Implemented horizontal scrolling (In stories section) using React Third
  Party library called React Slick.`,
      },
      {
        p1: `Used Figma mockups to implement UI-rich and pixel-perfect React
  components.`,
      },
      {
        p1: `Used fetch to call REST APIs for authentication, list of posts, user profile,
  and posts search APIs.`,
      },
      {
        p1: `Implemented username and password authentication and persisted login
    state using client storage.`,
      },
      {
        p1: `Implemented a protected route to ensure only authenticated users can
      access the pages like user profile, Home, etc`,
      },
    ],
    view: "https://instasharemahi.ccbp.tech",
    github: "",
  },
  {
    id: 4,
    imgsrc: "blog.png",
    title: "blog",
    technologies: "React,local storage,apis,Node.js,MySql",
    desc: `The blog app provides a user-friendly platform for individuals to share their thoughts and experiences. Users can log in to the application, allowing them to personalize their content. The app supports the creation of blogs with the option to include photos, fostering a visually appealing and engaging experience. Users have the flexibility to update their blogs or photos at any time, ensuring that their content remains current.
  
      Furthermore, the app promotes interaction within the community by enabling users to view and comment on each other's blogs. This feature encourages meaningful discussions, fostering a sense of connection among users. Additionally, users can manage their content by deleting blogs or photos as needed. The app aims to create a dynamic and collaborative environment for individuals passionate about sharing their stories and engaging with others in the community.`,
    lis: [
      {
        p1: `Users have the ability to create new blogs,
      Blogs can be updated or edited at any time to keep content current.`,
      },
      {
        p1: `The option to include photos in blog posts for a visually rich experience.`,
      },
      {
        p1: `Users can explore and view blogs shared by other community members.`,
      },
      {
        p1: `Users can comment on blogs,Users can delete their blogs or photos as needed for content management.`,
      },
    ],
    view: "https://blog-front-end-maheshtatipamula.vercel.app/",
    github: "https://github.com/maheshtatipamula/blog_front_end",
    backend: "https://github.com/maheshtatipamula/my_sql_node_blog",
  },
  {
    id: 5,
    imgsrc: "nxtwatch.png",
    title: "nxtwatch",
    technologies: "React",
    desc: "video viewing app",
    view: "https://nxtwatchmahesh.ccbp.tech",
    github: "",
  },
  {
    id: 6,
    imgsrc: "nxttrends.png",
    title: "nxttrends",
    technologies: `HTML, CSS, JavaScript, React JS, Bootstrap, React Slick,
      Figma, client storage`,
    desc: `
      Rolled out an innovative e-commerce platform patterned after Amazon and
      Flipkart.`,
    lis: [
      {
        p1: `Designed pages for Login, Products, and Product details with React
      Router and React components`,
      },
      {
        p1: `Ensured user security through JWT tokens, REST API calls, and local
      storage`,
      },
    ],
    view: "https://maheshgoud.ccbp.tech",
    github: "",
  },
  {
    id: 7,
    imgsrc: "jobby.png",
    title: "jobby",
    technologies: `HTML, CSS, JavaScript, React JS, Bootstrap, React Slick,
      Figma, client storage`,

    desc: `
      Brought to life an all-encompassing job search platform, Jobby App.`,
    lis: [
      {
        p1: `Created pages for Login, Home, Jobs, and Job item details with React
      components, form inputs, and event handlers`,
      },
      {
        p1: `Secured user information with JWT tokens, REST API calls, and local
      storage.`,
      },
      {
        p1: `Utilized React Router for protected routes and persisted login state.`,
      },
    ],

    view: "https://maheshjobapp.ccbp.tech",
    github: "",
  },
  {
    id: 8,
    imgsrc: "task.png",
    title: "task",
    technologies: "React,Node.js,MongoDb",
    desc: `users can add task`,
    view: "https://taskmahesh-maheshtatipamula.vercel.app",
    github: "https://github.com/maheshtatipamula/taskfrontend",
    backend: "https://github.com/maheshtatipamula/task_nodejs",
  },
];

export default ProjectCardData;
