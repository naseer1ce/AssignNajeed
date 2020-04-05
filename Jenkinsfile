node{
    
stage('Build Docker Image'){
  sh 'docker build -t nodejs:build /home/ec2-user/Git/AssignNajeed'
  sh 'docker tag nodejs:build naseerce1/nodejs'
 }

stage('Push Docker Image'){
   withCredentials([string(credentialsId: 'Dockerpwd', variable: 'dockerpwd')]) {

    sh "docker login -u naseerce1 -p ${dockerpwd}"
   }    
     sh 'docker push naseerce1/nodejs'
  }
stage ('Run Container on DevEnv'){  
    
    def dockerrun = 'sudo docker run -d -p 3000:3000 --name myapp naseerce1/nodejs'
    
    sshagent(['deployinstance']) {
    sh "ssh -o StrictHostKeyChecking=no ec2-user@172.31.31.115 ${dockerrun}"
    }
  } 
}
