module.exports = {
    apps: [{
        name: "ai-assitant",
        script: "src/server.js",
        instances: "max",
        exec_mode: "cluster",
        env: {
            NODE_ENV: "development"
        },
        env_production: {
            NODE_ENV: "production"
        }
    }],
    deploy: {
        production: {
            user: "ubuntu",
            host: "13.60.36.169",
            ref: "origin/main",
            repo: "https://github.com/jagan786786/pm2test.git",
            path: "/var/www/twilio-backend",
            "post-deploy":
                "npm install && pm2 reload ecosystem.config.js --env production",

        }
    }
};