pipeline {
    agent any

    environment {
        APP_NAME = "node-app"
        CONTAINER_NAME = "node-app-container"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    docker.image('node:18').inside {
                        dir('app') {
                            sh 'npm install'
                        }
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'npx jest test --passWithNoTests'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $APP_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f $CONTAINER_NAME || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name $CONTAINER_NAME $APP_NAME'
            }
        }
    }
}
