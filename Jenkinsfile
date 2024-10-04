pipeline {
    agent any

    tools {
        nodejs 'Node16'  // Use the Node.js version you configured in Jenkins
    }

    environment {
        CYPRESS_CACHE_FOLDER = ".cache/Cypress"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing project dependencies...'
                    sh 'npm install'
                    sh 'npm install --save-dev mocha-junit-reporter'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    echo 'Running Cypress tests...'
                    // Run Cypress tests in headless mode
                    sh 'npx cypress run --headless --browser chrome'
                }
            }
        }

        stage('List Test Results') {
            steps {
                script {
                    echo 'Listing test results...'
                    sh 'ls -R cypress/reports'
                }
            }
        }

        stage('Publish Test Results') {
            steps {
                echo 'Publishing test results...'
                // Publish test results if they are in JUnit format
                junit 'cypress/reports/junit/*.xml'
            }
        }
    }

    post {
       success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed.'
            // Send notifications for failure
            mail to: 'your_email@example.com',
                 subject: "Build #${currentBuild.number} - ${currentBuild.result}",
                 body: "Build failed. Check Jenkins for details."
        }
        always {
            echo 'Cleaning up...'
            cleanWs()
        }
    }
}
