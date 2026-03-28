# VectorShift Technical Assessment – Pipeline Builder

A full-stack, node-based pipeline builder built as part of the VectorShift frontend technical assessment.  
This project enables users to visually create and validate pipelines using a drag-and-drop interface, with dynamic node logic and backend validation.

---

## Key Highlights

### Scalable Node Architecture
- Designed a reusable `BaseNode` component to eliminate code duplication
- Simplified creation of new nodes using a consistent structure
- Added 5 custom nodes:
  - API Node
  - Database Node
  - Transform Node
  - Condition Node
  - Webhook Node

---

### Modern UI/UX
- Clean and minimal interface
- Card-based node design with shadows and rounded corners
- Improved visual hierarchy for better usability
- Interactive and intuitive pipeline builder experience

---

### Smart Text Node
- Auto-resizing text area (width + height)
- Dynamic variable detection using `{{variable}}`
- Automatically creates input handles based on variables
- Enhances flexibility and real-time pipeline configuration

---

### Backend Integration & DAG Validation
- Connected frontend with FastAPI backend
- On submission:
  - Counts number of nodes
  - Counts number of edges
  - Validates if pipeline is a **Directed Acyclic Graph (DAG)**
- Displays results instantly using alert

---

## Tech Stack

**Frontend**
- React.js
- React Flow
- HTML, CSS

**Backend**
- Python
- FastAPI
- Uvicorn

---

### Features Overview

### Feature	Description
Node Abstraction	Reusable base component for all nodes
Dynamic Handles	Auto-generated inputs from text variables
Drag & Drop UI	Interactive pipeline creation
DAG Validation	Ensures pipeline correctness
API Integration	Frontend ↔ Backend communication

### Design Decisions
Focused on modularity and scalability
Kept logic simple and explainable for interview clarity
Prioritized user experience + clean UI
Built reusable components to reduce redundanc

----

### Future Improvements
Persistent pipeline storage
Improved UI animations
Error handling for invalid connections
Better visualization of DAG validation

### Conclusion

This project demonstrates:

Strong frontend architecture skills
Real-time dynamic UI handling
Backend integration
Problem-solving with graph validation logic
