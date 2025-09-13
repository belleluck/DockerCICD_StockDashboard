# 📊 Stock Dashboard (Fullstack Demo with .NET, React, Docker, CI/CD)

This is a demo project that shows how to build a full-stack application using **C\# .NET 8 (Web API)** + **React.js (Frontend UI)** + **Docker** + **CI/CD (GitHub Actions)**.

### Features

- The backend provides a stock price API (returns a random price for demonstration purposes).
- The frontend offers a simple UI where you can enter a stock symbol and get its price.
- The project includes **automated tests** (backend xUnit + frontend Jest).
- Use Docker to launch the frontend and backend with a single command.
- Uses GitHub Actions for a CI/CD pipeline (automated build, test, and packaging).

---

## 🗂 Project Structure

```
DockerCICD_StockDashboard/
├── StockApi/             # Backend (.NET Web API)
│   ├── Controllers/
│   │   └── StockController.cs
│   ├── Program.cs
│   ├── Dockerfile
│   └── ...
│
├── StockApi.Tests/       # Backend tests (xUnit)
│   ├── StockControllerTests.cs
│   └── ...
│
├── stock-frontend/       # Frontend (React.js)
│   ├── src/
│   │   ├── App.js
│   │   └── test/
│   │       ├── App.test.js
│   │       └── ...
│   └── Dockerfile
│
├── docker-compose.yml    # One-click launch for frontend and backend
│
└── .github/workflows/ci.yml # CI/CD configuration
```

---

## 🚀 How to Run Locally (Development Mode)

### 1️⃣ Start the Backend (.NET Web API)

```bash
cd StockApi
dotnet run
```

This command compiles and runs the Web API, which will be available at `http://localhost:5075/stock/AAPL` by default.

### 2️⃣ Start the Frontend (React.js)

```bash
cd stock-frontend
npm install   # Required for the first run to install dependencies
npm start
```

`npm start` launches the frontend development server, which will be available at `http://localhost:3000` by default.

---

## 🐳 How to Run with Docker (Recommended)

From the project's root directory, run the following command:

```bash
docker-compose up --build
```

This command will start both services (backend and frontend). The `--build` flag forces a rebuild of the images, ensuring any code updates are included.

Once the services are running, you can access them at:

- **Frontend:** `http://localhost:3000`
- **Backend:** `http://localhost:5075/stock/AAPL`

To stop the containers, use:

```bash
docker-compose down
```

`docker-compose down` will shut down and clean up the containers but will not delete the images.

---

## 🧪 How to Run Tests

### 1️⃣ Backend Tests (.NET xUnit)

```bash
cd StockApi.Tests
dotnet test
```

This command automatically finds and runs all test methods marked with `[Fact]` or `[Theory]` in the test project.

### 2️⃣ Frontend Tests (React Jest)

```bash
cd stock-frontend
npm test
```

This command runs the React tests, automatically discovering all `*.test.js` files.

---

## ⚙️ CI/CD (GitHub Actions)

This project includes a CI pipeline (`.github/workflows/ci.yml`). When you push to GitHub, the following steps will automatically execute:

- **Build Backend (.NET)**

  - `dotnet build`
  - `dotnet test`
  - Ensures the backend code compiles and passes tests.

- **Build Frontend (React)**

  - `npm install`
  - `npm test`
  - `npm run build`
  - Ensures the frontend code compiles and passes tests.

- **Build Docker Images**

  - `docker-compose build`
  - Confirms the container configuration is correct.

A test report will be uploaded as an artifact to the GitHub Actions page for download and review.

---

## 🖥️ Running the Project on a New Machine

### Environment Setup

- Install **Git**.
- Install **Docker Desktop**.
- (Optional) Install the **.NET 8 SDK** and **Node.js 18** if you plan to debug locally.

### Clone and Run

```bash
git clone https://github.com/<your-username>/DockerCICD_StockDashboard.git
cd DockerCICD_StockDashboard
docker-compose up --build
```

You can then access the:

- **Frontend:** `http://localhost:3000`
- **Backend:** `http://localhost:5075/stock/AAPL`

---

## 📖 Command Reference Sheet

| Command                     | Purpose                                   |
| --------------------------- | ----------------------------------------- |
| `dotnet run`                | Runs the .NET Web API locally             |
| `dotnet test`               | Runs the backend tests (xUnit)            |
| `npm start`                 | Starts the React development server       |
| `npm test`                  | Runs the frontend tests (Jest)            |
| `docker build -t name .`    | Builds a Docker image                     |
| `docker-compose up --build` | Starts all services and builds the images |
| `docker-compose down`       | Stops and cleans up containers            |
| `git push`                  | Pushes code to GitHub (triggers CI/CD)    |

---

## 🌟 Project Highlights

- Uses **.NET 8 Web API** to build the backend service.
- Uses **React.js** to build the frontend UI.
- Integrates **xUnit** (backend) and **Jest** (frontend) for automated testing.
- Uses Docker multi-stage builds for lightweight and efficient images.
- Uses `docker-compose` for one-click startup of the frontend and backend.
- Integrates **GitHub Actions CI/CD** for automated builds and testing.
