pipeline {
    agent any

   // tools {
     //   nodejs 'NodeJS-22'
   // }

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

        stage('Skip Auto Commit') {
            steps {
                script {
                    def msg = sh(
                        script: 'git log -1 --pretty=%s',
                        returnStdout: true
                    ).trim()

                    if (msg.startsWith('Update image tag to')) {
                        currentBuild.result = 'NOT_BUILT'
                        error('Skipping Jenkins generated commit')
                    }
                }
            }
        }

        stage('Build, Push & Update Helm') {
            steps {

                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    ),
                    usernamePassword(
                        credentialsId: 'github-creds',
                        usernameVariable: 'GITHUB_USER',
                        passwordVariable: 'GITHUB_TOKEN'
                    )
                ]) {

                    sh '''
                        node -v
                        npm -v
                       
                        npm install
                        npm run build

                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                        docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                        docker push ${IMAGE_NAME}:${IMAGE_TAG}
                        docker logout

                        sed -i "s/tag:.*/tag: ${IMAGE_TAG}/" k8s/portfolio-chart/values.yaml

                        git config user.name "Jenkins"
                        git config user.email "jenkins@local"

                        git remote set-url origin https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/amankumawat89/devops-portfolio.git

                        git fetch origin
                        git checkout -B main origin/main

                        git add k8s/portfolio-chart/values.yaml

                        if ! git diff --cached --quiet; then
                            git commit -m "Update image tag to ${IMAGE_TAG}"
                            git push origin HEAD:main
                        else
                            echo "No Helm changes."
                        fi
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed!"
        }
        aborted {
            echo "Pipeline skipped."
        }
    }
}
