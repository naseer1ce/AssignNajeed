pipeline {
    agent any

    stages {
        stage ('Clean') {

            steps {
                 sh 'mvn clean'
            }
        }

        stage ('Testing Stage') {

            steps {
                 sh 'mvn test'
             }
        }

        stage ('Package') {
            steps {
                    sh 'mvn package'
                }
            }
        }
}
