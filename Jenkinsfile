pipeline {
    agent any

    environment {
        NODE_VERSION = '23.10.0' // Specify your Node.js version
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                git url: 'https://github.com/Shivansh-soni/Pokedex.git', branch: 'devel'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm dependencies
                //script {
                  //  def nodeTool = tool name: "Default", type: 'NodeJSInstallation'
                    //env.PATH = "${nodeTool}/bin:${env.PATH}"
                //}
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
                sh "cp dist /var/www/html/pokedex/dist -r"
                // Deploy the built application
                // This could be an FTP command, cloud deployment CLI, etc.
                // Example for deploying to Firebase:
                sh 'systemctl restart nginx' // Make sure to set FIREBASE_TOKEN in Jenkins credentials
            }
        }
    }

    triggers {
        // Trigger the pipeline on webhook events
        githubPush() // This will require the GitHub plugin to be installed
    }
}
