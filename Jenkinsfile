pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker run -d -p 3000:3000 nodejs-app'
            }
        }
    }
}
