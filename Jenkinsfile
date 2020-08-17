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
		stage('Checkout, Test & Publish') {
			steps {
				git("https://github.com/vinod1214/RegressionManager.git")
				script {
					bat(/mvn clean test -Dorg.freemarker.loggerLibrary=none /)
				}
				step([$class: 'Publisher', fileIncludePattern: '**/*.json'])
			}
		}
    }
}
