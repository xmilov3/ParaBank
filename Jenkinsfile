pipeline {
    agent any

    environment {
        CI = 'true'  
    }

    stages {
        stage('Install Dependencies') {
            steps {
                
                sh 'npm install'
            }
        }

        stage('Start Application') {
            steps {
                
                sh 'npm start &'
                
                sh 'sleep 5'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
        }
    }
}
