Food Kingdom 🍽️

Welcome to Food Kingdom, a comprehensive Restaurant Management website designed to enhance your dining experience and streamline restaurant operations. Built using the MERN stack, this platform offers a user-friendly interface for customers and staff alike.

🚀 Live Site

##Client side link : https://restaurant-project-virid.vercel.app

Server side link : https://restaurant-management-server-rouge.vercel.app

📜 Project Purpose

Food Kingdom aims to:

Enhance the restaurant's online presence.

Improve customer interaction with intuitive features.

Streamline internal management processes for efficiency.

🛠️ Key Features

🔒 Authentication System

Login Page:

Email and password-based login.

Google/GitHub login.

Error validation for incorrect input.

Register Page:

Fields: Name, Email, Photo URL, Password.

Password validation (uppercase, lowercase, minimum 6 characters).

Toast notifications for success or errors.

🏠 Home Page

Banner Section:

A slider with heading, description, and a button linking to All Foods.

Top Foods Section:

Displays 6 top-selling food items.

"See All" button redirects to All Foods.

Extra Sections:

Two additional engaging and relevant sections.

🍔 All Foods Page

Search functionality for foods by name.

Pagination for browsing food items.

Displays food cards with details and "Details" button.

📖 Single Food Page

Detailed information about a selected food item.

Purchase Button: Redirects to Food Purchase Page.

🛒 Food Purchase Page (Private)

Form with food name, price, quantity, buyer info, and buying date.

Disables purchase if the quantity is zero or exceeds available stock.

Toast notifications for successful orders.

📷 Gallery Page

Displays a lightbox gallery with at least 10 images.

Infinite scrolling with animations.

🍽️ My Foods Page (Private)

Displays food items added by the logged-in user.

Update functionality with a modal or separate page.

➕ Add Food Page (Private)

Form to add new food items with fields like name, image, category, price, origin, and description.

Toast notifications for successful additions.

🛍️ My Orders (Private)

Displays orders made by the logged-in user.

Includes delete functionality.

Shows buying date in a human-readable format using Moment.js.

🔍 Search and Filtering

Search foods by name.

Server-side filtering with MongoDB operators.

🌗 Theme Customization

Toggle between light and dark themes.

🔐 JWT Authentication

Secure token generation for private routes.

🖼️ Layout & Page Structure

Navbar:

Website logo/name.

Links: Home, All Foods, Gallery, Conditional Login/Logout.

Profile Image with dropdown for My Foods, Add Food, My Orders.

Footer:

Eye-catching design with relevant information.

🌟 Deployment Guidelines

Ensure the server works perfectly in production without errors.

Fix any CORS/404/504 errors.

Add Firebase domain authorization for deployment platforms like Netlify/Surge.

Private routes must not redirect logged-in users to login on reload.

🔧 Technologies Used

Frontend: React.js, Tailwind CSS, Daisy UI.

Backend: Node.js, Express.js.

Database: MongoDB.

Authentication: Firebase.

State Management: Context API.

Styling: Custom CSS, Animate.css.

Libraries:

Yet-Another-React-Lightbox for gallery.


Tanstack Query for API data fetching and mutations.

✨ Additional Features

Spinner for loading states.


🎨 Design Philosophy

Responsive design for mobile, tablet, and desktop.

Pleasing color contrast and proper alignment.

Modern, recruiter-friendly UI.


## 📖 How to Run
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up `.env` files for client and server.
4. Run the server: `npm run start`.
5. Run the client: `npm start`.

---

## 🙌 Acknowledgments
- Thanks to the community for the libraries and frameworks used in this project.

---

**Food Kingdom** is not just a website; it's a digital dining experience! 🍴
