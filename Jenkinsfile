pipeline {
    agent any

    
    stages {
        stage('Clone Repository') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                // Build the Vite application
                sh 'npm run build'
            }
        }

        stage('Deploy Application') {
            steps {
                // Deploy the built files to your desired location
                // For example, you might copy to a static server or push to an S3 bucket
                // Uncomment and modify the following line as per your deployment strategy
                
                // Example for copying to a remote server via SSH
                // sh 'scp -r dist/* user@192.168.0.111:/path/to/deploy'

                // Example for deploying to AWS S3 (requires AWS CLI configured)
                // sh 'aws s3 sync dist/ s3://your-s3-bucket-name/ --delete'
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
