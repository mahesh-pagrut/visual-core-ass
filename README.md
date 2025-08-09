# Products Catalog Pro

A modern, responsive product catalog application built with React and Tailwind CSS, featuring advanced filtering, sorting, and pagination capabilities.

## Introduction

Products Catalog Pro is a sophisticated web application designed to showcase and manage product listings with a professional and user-friendly interface. It offers seamless product browsing with advanced filtering and sorting capabilities, making it ideal for e-commerce platforms and product showcases.

## Use Cases

- **E-commerce Platforms**: Ideal for online stores needing a robust product display system
- **Product Showcases**: Perfect for businesses wanting to showcase their product catalog
- **Inventory Management**: Useful for managing and displaying product inventories
- **Digital Marketplaces**: Suitable for multi-vendor platforms displaying various products

## Homepage Layout
## 📸 Screenshots

## 🖥 Desktop View
<p align="center">
  <img src="https://github.com/user-attachments/assets/a310e9c9-14a6-41a5-8048-8110dcfd687a" alt="Desktop View" width="90%" />
</p>

---

## 💻 Tablet View
<p align="center">
  <img src="https://github.com/user-attachments/assets/d393d4d0-627e-4ea2-9765-68a63369e050" alt="Tablet View - Filters Visible" width="45%" />
  <img src="https://github.com/user-attachments/assets/e0bb67dc-f648-4145-9e62-5838de681dbd" alt="Tablet View - Product Grid" width="45%" />
</p>

---

## 📱 Mobile View
<p align="center">
  <img src="https://github.com/user-attachments/assets/fd16ea33-6bfb-461e-ad94-171c2628267c" alt="Mobile View - Collapsible Filter Panel" width="45%" />
  <img src="https://github.com/user-attachments/assets/29e907ed-6319-41c2-b1f0-ef8057db176b" alt="Mobile View - Stacked Product Cards" width="45%" />
</p>






## Key Functionalities

### 1. Advanced Filtering System
- Category-based filtering
- Price range selection
- Real-time filter updates
- Filter reset capability

### 2. Smart Sorting Options
- Price sorting (High to Low, Low to High)
- Name-based sorting (A to Z, Z to A)
- Multi-criteria sorting support

### 3. Responsive Layout
- Mobile-first design approach
- Adaptive layout for all screen sizes
- Collapsible filter panel on mobile
- Optimized viewing experience

### 4. User Interface Features
- Modern, clean design
- Intuitive navigation
- Interactive filter controls
- Smooth animations and transitions
- Professional product card layout

### 5. Performance Features
- Efficient pagination system
- Optimized state management
- Responsive image handling
- Smooth user interactions

## Tools & Technologies

### Frontend
- **React**: Core framework
- **Tailwind CSS**: Styling and design system
- **Hero Icons**: Modern icon system
- **JavaScript (ES6+)**: Programming language

### Development Tools
- **Vite**: Build tool and development server
- **PostCSS**: CSS processing
- **ESLint**: Code quality maintenance
- **npm**: Package management

### Key Features
- **Responsive Design**: Built with Tailwind CSS
- **Component Architecture**: Modular React components
- **State Management**: React hooks and context
- **Modern UI/UX**: Contemporary design patterns

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Clone & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/mahesh-pagrut/visual-core-ass.git
   cd visual-core-ass
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

### Project Structure
```
visual-core-ass/
├── src/
│   ├── components/        # React components
│   ├── assets/           # Static assets
│   ├── utils/            # Utility functions
│   ├── productsData/     # Product data
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── public/              # Public assets
├── index.html          # HTML template
└── package.json        # Project configuration
```

## Integration Guide

### 1. Adding Custom Products
- Update the `products.json` file in the `src/productsData/` directory
- Follow the existing product schema:
  ```json
  {
    "id": "unique_id",
    "name": "Product Name",
    "price": number,
    "category": "Category Name",
    "image": "image_url"
  }
  ```

### 2. Customizing Filters
- Modify filter components in `src/components/`
- Adjust filter logic in `src/utils/filterUtils.js`

### 3. Styling Customization
- Update Tailwind configuration in `tailwind.config.js`
- Modify component styles using Tailwind classes

### 4. Component Customization
- All components are modular and can be customized
- Located in `src/components/` directory
- Follow React and Tailwind CSS patterns
