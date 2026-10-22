# Node.js DevOps CI/CD Demo

A simple Express.js web application created to demonstrate a complete DevOps workflow with automated testing, Docker containerization, and GitHub Actions CI/CD.

## Features

- Express.js application served on port `3000`
- Static frontend assets served from the `public/` directory
- Automated Node.js test execution
- Docker image build using a lightweight Node.js Alpine image
- Continuous integration and delivery with GitHub Actions
- Automatic Docker Hub image publishing on pushes to the `main` branch

## Tech Stack

- **Runtime:** Node.js 18
- **Framework:** Express.js 4
- **Containerization:** Docker
- **CI/CD:** GitHub Actions
- **Image Registry:** Docker Hub

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── main.yml       # CI/CD workflow
├── public/                # Static frontend files
├── app.js                 # Express application entry point
├── test.js                # Test script
├── Dockerfile             # Docker image definition
├── package.json           # Project metadata and npm scripts
└── README.md              # Project documentation
```

## Prerequisites

Install the following tools before running the project locally:

- Node.js 18 or later
- npm
- Docker (optional, for containerized execution)

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Shivamtiwari-9235/devops-task-1.git
   cd devops-task-1
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   node app.js
   ```

4. Open the application at [http://localhost:3000](http://localhost:3000).

You can use a different port by setting the `PORT` environment variable:

```bash
PORT=8080 node app.js
```

## Run Tests

Run the test suite with:

```bash
npm test
```

## Run with Docker

Build the Docker image:

```bash
docker build -t nodejs-demo-app .
```

Run the container:

```bash
docker run --rm -p 3000:3000 nodejs-demo-app
```

Then open [http://localhost:3000](http://localhost:3000).

## CI/CD Pipeline

The workflow is defined in `.github/workflows/main.yml` and runs on every push to the `main` branch.

### Build and test job

1. Checks out the repository.
2. Sets up Node.js 18.
3. Installs npm dependencies.
4. Runs `npm test`.

### Docker build and push job

After the tests pass, the workflow:

1. Checks out the repository.
2. Logs in to Docker Hub.
3. Builds the Docker image.
4. Pushes the image as:

   ```text
   <DOCKER_USERNAME>/nodejs-demo-app:latest
   ```

