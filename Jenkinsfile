pipeline {
    agent any

    environment {
        CI = 'true'  
    }

    stages {
        stage('Install Dependencies') {
            steps {
                dir('parabank')
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
                dir('parabank')
                sh 'npx cypress run'
            }
        }
    }
}
