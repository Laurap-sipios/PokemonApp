// shipitfile.js
module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)
  
    shipit.initConfig({
      default: {
        deployTo: '/var/apps/super-project-pokemon',
        repositoryUrl: 'https://github.com/Laurap-sipios/PokemonApp.git',
        key: '/Users/laurapedenaud/.ssh/aws-sipios.pem'
      },
      staging: {
        servers: 'ec2-13-38-217-227.eu-west-3.compute.amazonaws.com',
      },
    })
  }