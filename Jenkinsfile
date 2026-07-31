pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    environment {
        IMAGE_NAME = "aman07cr/devops-portfolio"
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                """
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo "$DOCKER_PASS" | docker login \
                    -u "$DOCKER_USER" \
                    --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh """
                docker push ${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
        }

        stage('Update Helm values.yaml') {
            steps {
                sh """
                sed -i 's/tag:.*/tag: ${IMAGE_TAG}/' k8s/portfolio-chart/values.yaml
                cat k8s/portfolio-chart/values.yaml
                """
            }
        }

        stage('Commit & Push Helm Changes') {
            steps {

                withCredentials([usernamePassword(
                    credentialsId: 'github-creds',
                    usernameVariable: 'GITHUB_USER',
                    passwordVariable: 'GITHUB_TOKEN'
                )]) {

                    sh '''
                        # Configure Git
                        git config user.name "Jenkins"
                        git config user.email "jenkins@local"

                        # Create local main branch from origin/main
                        git fetch origin
                        git checkout -B main origin/main

                        # Update values.yaml again after checkout
                        sed -i "s/tag:.*/tag: ${BUILD_NUMBER}/" k8s/portfolio-chart/values.yaml

                        git add k8s/portfolio-chart/values.yaml

                        git commit -m "Update image tag to ${BUILD_NUMBER}" || echo "Nothing to commit"

                        git remote set-url origin https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/amankumawat89/devops-portfolio.git

                        git push origin main
                    '''
                }
            }
        }
    }

    post {

        success {
            echo "======================================="
            echo "Pipeline completed successfully!"
            echo "Docker Image: ${IMAGE_NAME}:${IMAGE_TAG}"
            echo "GitHub updated."
            echo "Argo CD will now sync automatically."
            echo "======================================="
        }

        failure {
            echo "Pipeline Failed!"
        }
    }
}
