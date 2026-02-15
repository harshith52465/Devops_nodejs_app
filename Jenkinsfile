pipeline {
    agent any

    stages {

        stage('Verify Files') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-demo .'
            }
        }

        stage('Run Container') {
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
