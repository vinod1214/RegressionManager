pipeline {
	agent {
		node {
			label 'Slave1'
		}
	}
	options {
		timestamps()
    }
	stages {
		stage('Checkout') {
			steps {
				git("https://github.com/vinod1214/RegressionManager.git")
			}
		}
		stage('Test') {
			steps {
				script {
					bat(/mvn clean test -Dorg.freemarker.loggerLibrary=none /)
				}
			}
		}
		stage('Report') {
			steps {
				cucumber  fileIncludePattern: '**/*.json', jsonReportDirectory: 'target\\cucumber-reports\\'
			}
		}
		stage('Email Notification') {
			steps {
				emailext (to: 'vinod.duddukuri@oracle.com', subject: "Email Report from - '${env.JOB_NAME}' ",
				body: readFile("target/cucumber-reports/report.html"), 
				mimeType: 'text/html');
			}
		}
	}
}
