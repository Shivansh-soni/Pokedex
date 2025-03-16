pipeline {
    agent any 

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                npm i --legacy-peer-deps
                npm run build
                // Add build commands here
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // Add test commands here
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                systemctl restart nginx
                // Add deployment commands here (e.g., copy files to Nginx directory)
            }
        }
    }
}
