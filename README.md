# Structural Fabrication Workshop Job Planning & Monitoring Application

A comprehensive full-stack application for managing structural fabrication workshop operations with AI-powered features, Excel integration, and mobile-first design.

## 🚀 Features

### Core Functionality
- **Job Planning & Progress Tracking**: Plan and monitor fabrication jobs across multiple beds
- **Material Management**: Track free-issue and own-purchase materials with reconciliation
- **Photo Documentation**: Upload and manage progress photos with optimization
- **Excel Integration**: Import/export data via Excel templates
- **Mobile-First Design**: Responsive UI optimized for mobile devices

### AI-Powered Features
- **AI Chatbot ("Boat")**: Natural language assistance for data entry and queries
- **Smart Suggestions**: AI-powered form auto-fill and suggestions
- **Predictive Analytics**: Delay prediction and productivity insights
- **Natural Language Reporting**: AI-generated plain English summaries

### User Experience
- **Single Sign-On (SSO)**: Google/Microsoft OAuth integration
- **Modern Dashboard**: Interactive charts and KPI visualization
- **Voice-to-Text**: Hands-free data entry capabilities
- **Real-time Updates**: Live data synchronization

## 🏗️ Architecture

```
structural-fabrication-app/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── controllers/     # API controllers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Authentication & validation
│   │   ├── services/       # Business logic
│   │   └── utils/          # Helper functions
│   ├── uploads/            # File uploads
│   └── package.json
├── frontend/               # React/React Native app
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── hooks/         # Custom hooks
│   │   ├── utils/         # Helper functions
│   │   └── styles/        # CSS/SCSS files
│   └── package.json
├── database/              # Database schema & migrations
└── docs/                 # Documentation
```

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Passport.js with JWT
- **File Processing**: Multer, Sharp (image optimization)
- **Excel Processing**: xlsx, exceljs
- **AI Integration**: OpenAI GPT API
- **Real-time**: Socket.io

### Frontend
- **Framework**: React with TypeScript
- **UI Library**: Material-UI (MUI) / Ant Design
- **Charts**: Recharts, ECharts
- **State Management**: Redux Toolkit
- **Mobile**: React Native (for mobile app)
- **Image Processing**: browser-image-compression

### DevOps
- **Deployment**: Vercel (Frontend), Render (Backend)
- **Database**: PostgreSQL (Supabase/Railway)
- **File Storage**: AWS S3 / Cloudinary

## 📊 Database Design

### Core Entities
- **Users**: Authentication and role management
- **Jobs**: Fabrication job details and planning
- **Beds**: Workshop bed/workstation management
- **Progress**: Daily progress tracking with photos
- **Materials**: Material inventory and consumption
- **Skills**: Worker skill categories
- **Workers**: Employee management

### Key Relationships
- Jobs belong to Beds
- Progress entries belong to Jobs
- Materials are consumed by Jobs
- Workers are assigned to Jobs
- Photos are attached to Progress entries

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd structural-fabrication-app
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Configure environment variables
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
cp .env.example .env
# Configure environment variables
npm start
```

4. **Database Setup**
```bash
cd backend
npx prisma migrate dev
npx prisma generate
```

## 📱 Mobile App

The application includes a React Native mobile app for on-the-go data entry:
- Camera integration for photo uploads
- Offline data entry with sync
- Voice-to-text capabilities
- Touch-optimized interface

## 🔐 Authentication

- **SSO Integration**: Google and Microsoft OAuth
- **Role-based Access**: Admin, Site User, Viewer
- **JWT Tokens**: Secure API authentication
- **Session Management**: Persistent login states

## 📊 Dashboard Features

- **Real-time KPIs**: Productivity, utilization, delays
- **Interactive Charts**: Plan vs Progress, material consumption
- **Drill-down Capabilities**: Detailed analysis by bed, worker, skill
- **Export Options**: Excel and PDF reports
- **AI Summaries**: Natural language insights

## 🤖 AI Features

- **Chatbot Assistance**: Natural language queries and help
- **Smart Form Filling**: AI-powered auto-completion
- **Predictive Analytics**: Delay and productivity forecasting
- **Voice Commands**: Hands-free operation

## 📈 Excel Integration

- **Template Downloads**: Pre-formatted Excel templates
- **Bulk Import**: Batch data upload with validation
- **Export Capabilities**: Download any data as Excel
- **Error Handling**: Detailed validation feedback

## 🎨 UI/UX Features

- **Mobile-First Design**: Responsive across all devices
- **Modern Aesthetics**: Clean, professional interface
- **Accessibility**: WCAG compliant design
- **Performance**: Optimized for speed and efficiency

## 📝 API Documentation

Comprehensive API documentation available at `/api/docs` when running the backend.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please contact the development team or create an issue in the repository. 