pipeline {
    agent any
    stages {
        stage ('Compile') {

            steps {
                sh 'mvn compile'
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
