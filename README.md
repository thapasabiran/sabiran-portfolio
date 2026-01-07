# Sabiran Portfolio

A modern, responsive personal portfolio website built with React and Sanity.io.

## 🛠 Tech Stack

### Frontend
- **Framework**: [React](https://reactjs.org/)
- **Styling**: [SCSS](https://sass-lang.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

### Backend
- **CMS**: [Sanity Studio v3](https://www.sanity.io/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sabiran-portfolio
   ```

2. **Setup Backend (Sanity)**
   Navigate to the backend directory and install dependencies:
   ```bash
   cd backend_sanity
   npm install
   ```

3. **Setup Frontend (React)**
   Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend_react
   npm install
   ```

## 💻 Usage

### Development Server

**Backend (Sanity Studio):**
```bash
cd backend_sanity
npm run dev
# Studio will be running at http://localhost:3333
```

**Frontend (React App):**
```bash
cd frontend_react
npm start
# Application will be running at http://localhost:3000
```

### Production Build

**Backend:**
```bash
cd backend_sanity
npm run build
```

**Frontend:**
```bash
cd frontend_react
npm run build
```