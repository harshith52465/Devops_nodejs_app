pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/YOUR-USERNAME/devops-nodejs-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'cd app && npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'cd app && npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-cicd-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker run -d -p 3000:3000 nodejs-cicd-app'
            }
        }
    }
}

