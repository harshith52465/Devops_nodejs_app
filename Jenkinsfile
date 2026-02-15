pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies & Test') {
            agent {
                docker {
                    image 'node:18'
                    args '-u root:root'
                }
            }
            steps {
                dir('app') {
                    sh 'npm install'
                    sh 'npm test || true'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name node-app-container node-app || true'
            }
        }
    }
}
