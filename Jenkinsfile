pipeline {
	agent any
           stage ('Deploy'){
		   steps{
			sshagent(['deployinstance']) {
			sh "scp -o StrictHostKeyChecking=no bash.sh ec2-user@172.31.31.115:/home/ec2-user/"
			script{
				try{
					sh "ssh ec2-user@172.31.28.81 sudo ./bash.sh"
				}catch(error){
					sh "ssh ec2-user@172.31.28.81 sudo ./bash.sh"
         }
       }
     }
   }
 }
}
