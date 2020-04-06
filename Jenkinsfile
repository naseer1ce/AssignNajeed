pipeline {
	agent any
        stages{
           stage ('Deploy'){
		   steps{
			sshagent(['deployinstance']) {
			sh "scp -o StrictHostKeyChecking=no bash.sh ec2-user@172.31.31.115:/home/ec2-user/"
			sh "ssh ec2-user@172.31.31.115 sudo ./bash.sh"
			
       }
     }
   }
 }
}

