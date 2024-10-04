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
                    // Install project dependencies (including Cypress)
                    sh 'npm install'
                    sh 'npm install --save-dev mocha-junit-reporter'

                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Run Cypress tests in headless mode
                    sh 'npx cypress run --headless --browser chrome'
                }
            }
        }

        stage('Publish Test Results') {
            steps {
                // Publish test results if they are in JUnit format
                junit 'cypress/reports/*.xml'
            }
        }
    }

    post {
        always {
            // Archive test reports and videos (optional)
            archiveArtifacts artifacts: '**/cypress/screenshots/*, **/cypress/videos/*'
        }
    }
}
