pipeline {
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t nodejs:build .'
				sh 'docker tag nodejs:build naseerce1/nodejs'
            }
        }
		stage ('Push'){
		  steps {
                     withCredentials([string(credentialsId: 'Dockerpwd', variable: 'dockerpwd')])
		           sh "docker login -u naseerce1 -p ${dockerpwd}"
			   sh 'docker push naseerce1/nodejs'
			}
		}
        stage('Run') {
            steps {
                def dockerrun = 'sudo docker run -d -p 3000:3000 --name myapp naseerce1/nodejs'
				sshagent(['deployinstance']) {
                sh "ssh -o StrictHostKeyChecking=no ec2-user@172.31.31.115 ${dockerrun}"
            }
        }
    }
  }
}
