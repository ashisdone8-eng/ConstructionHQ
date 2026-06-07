# ConstructionHQ

A multi-portal, role-based construction management platform built with Node.js, React, and Firebase.

## Features

- **Multi-Portal Architecture**: Owner/Admin, PM, Foreman, Worker, Subcontractor, and Client portals
- **Project Management**: Jobs, phases, milestones, dependencies, and progress tracking
- **Task Execution**: Smart task assignment, scheduling, and verification
- **Forms & Automation**: Reusable templates, document generation, and workflow automation
- **Financial Control**: Cost tracking, budgets, change orders, and RFIs
- **Field Operations**: Offline mode, GPS tagging, daily logs, and real-time updates
- **Communication**: In-app messaging, job channels, and notifications
- **Analytics**: Predictive scheduling, forecasting, and performance metrics

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: React
- **Database**: Firebase Firestore
- **Mobile**: Flutter
- **Hosting**: Firebase Hosting

## Project Structure

```
ConstructionHQ/
├── backend/                 # Node.js/Express API
├── frontend/                # React web application
├── mobile/                  # Flutter mobile app
├── firestore-schema/        # Database schema documentation
├── docs/                    # Project documentation
└── README.md
```

## Getting Started

See [docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md) for detailed setup instructions.

### Quick Start
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (in new terminal)
cd frontend
npm install
npm start
```

## Database Schema

See `firestore-schema/` for Firestore collection structure and documentation.

## Development

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT
