pipeline{
    agent{
        any
    }
    parameters{
        choice(
            name:'environment'
            choices:[
                'staging',
                'qa',
                'prod'
            ],
            description:'Used for changing env'
        )
        string(
            name:'worker_count',
            defaultValue:'10',
            description:'parallel worker list'
        )
    }
    stages{
        stage('environment file setup'){
            steps{
                scripts{
                def worker = "${params.worker_count}"
                "echo ${params.worker_count}"
                }
            }
        }
    }
}