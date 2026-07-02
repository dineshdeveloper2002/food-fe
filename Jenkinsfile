pipeline{
    agent any
   
    parameters {
        choice(
            name: 'BASE_URL',
            choices: [
                'https://staging.rfpio.com/',
                'https://pre-release.rfpio.com/',
                'https://hotfix.rfpio.com/',
                'https://dev1.rfpio.com/',
                'https://app.rfpio.com/',
                'https://qa.rfpio.com/',
                'https://sb01.rfpio.com/',
                'https://oci-sb.rfpio.com/',
                'https://google-sb.rfpio.com/',
                'https://ms-sb.rfpio.com/'
            ],
            description: 'Select the environment to run tests against'
        )
    }

    stages{
        stage('checkout code'){
            steps{
                 checkout scm
            }
        }

        stage('install depedencies'){
            steps{
                dir('playwright_framework'){
                  echo "dependency installtion started"
                  bat 'npm install'
                }
            }
        }

        stage('create env file'){
            steps{
                script {
                    writeFile file: '.env', text:"""
                    COMPANY_ID: 1234
                    BASE_URL:${params.BASE_URL}

                    """
                }   
            }
        }

    }
}