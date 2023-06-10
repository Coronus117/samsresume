## Welcome

Hello! Thank you for viewing my project, I hope you enjoy it. I recreated my resume in React. I completed it in about 4 hours.

Technologies I used are:

- React
- Next.js
- TypeScript
- Git
- GitHub
- TailwindCSS
- Docker

## Run This App Locally

To view this application locally you can run it using Docker.

1. Download and unzip this whole project to your computer.
2. Open a command line inside the top layer of this application
3. Build the docker image named "samsresume". Execute this command:
   > docker build -t samsresume .
4. Run a container named "SamsResume" from the image named "samsresume". Execute this command:
   > docker run -p 3000:3000 --name SamsResume -d samsresume
5. Open a web browser and go to this address: [http://localhost:3000](http://localhost:3000)
6. (Optional) You can make sure the container is running by executing this command:
   > docker container ls
