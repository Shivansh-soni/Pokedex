pipeline {
    agent any

    environment {
        NODE_VERSION = '18.20.1' // Specify your Node.js version
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                git url: 'https://your-repo-url.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm dependencies
                script {
                    def nodeTool = tool name: "NodeJS ${NODE_VERSION}", type: 'NodeJSInstallation'
                    env.PATH = "${nodeTool}/bin:${env.PATH}"
                }
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the Vite application
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the built application
                // This could be an FTP command, cloud deployment CLI, etc.
                // Example for deploying to Firebase:
                sh 'firebase deploy --token $FIREBASE_TOKEN' // Make sure to set FIREBASE_TOKEN in Jenkins credentials
            }
        }
    }

    triggers {
        // Trigger the pipeline on webhook events
        githubPush() // This will require the GitHub plugin to be installed
    }
}
