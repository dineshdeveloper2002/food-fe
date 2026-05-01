pipeline {
   agent any
    
    parameters{
        string(name: 'list', defaultValue: '', description: 'Enter value')
        string(name:'BRANCH',defaultValue:'',description:'Used to define branch name')
           choice(
            name: 'BASE_URL',
            choices: [
                'https://qa.rfpio.com/',
                'https://dev1.rfpio.com/',
                'https://staging.rfpio.com/',
                'https://prod.rfpio.com/',
                'https://pre-release.rfpio.com/',
                'https://hotfix.rfpio.com/'
            ],
            description: 'Select the environment to run tests against'
        )
    }
    
    environment {
        repourl = "https://github.com/dineshdeveloper2002/food-fe.git"
    }

    stages {
        stage('Clean Workspace') {
    steps {
        deleteDir()
    }
        }
      stage('Gitoperation') {
            steps {
                echo "fetching the branch ${params.list}"
                echo "fetching the branch ${params.BASE_URL}"
            }
        }
          stage('Git fetch latest branch') {
            steps {
                echo "fetching the branch ${params.list}"
                git branch: "${params.BRANCH}", url: "${repourl}"
            }
        }

        stage('Install dependencies') {
            steps {
                dir('my-app'){
                     bat 'npm install'
                }
               
            }
        }

}
}