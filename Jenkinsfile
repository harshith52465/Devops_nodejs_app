pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify Project Structure') {
            steps {
                sh 'ls -la'
                sh 'ls -la app'
                sh 'ls -la test'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('app') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('app') {
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-demo .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker stop nodejs-demo || true
                docker rm nodejs-demo || true
                docker run -d -p 3000:3000 --name nodejs-demo nodejs-demo
                '''
            }
        }
    }
}
