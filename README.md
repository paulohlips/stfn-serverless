<h1 align="center">
<br>
stfn-serverless
</h1>

<p align="center">A serverless project based in AWS Lambda Functions used to apply CRUD operations over "Employee" entity.</p>

</p>


## Serveless Archtecture
[//]: # (Add your gifs/images here:)
<div align="center">
  <img src="https://miro.medium.com/max/1400/1*enySPc_XesSQCUWc8i579Q.png" alt="demo" >
</div>
<h5>Image Source: <a>https://medium.com/swlh/rest-api-using-aws-api-gateway-lambda-and-dynamodb-bc87fd695c5d</a></h5>

<hr />

## Tools

[//]: # "Add the features of your project here:"


- **AWS API Gateway** 
- **AWS LambdaFunctions** 
- **AWS DynamoDB** 
- **NodeJS**
- **TypeScript**
- **Swagger**
- **Serverless Framework** 

## Docs

With this link bellow all enpoints and CRUD operations will be expose for remote testers.


Swagger: https://app.swaggerhub.com/apis-docs/paulohlips/stfn-serverless-docs/1.0.0

Postman's Collection: https://www.postman.com/solar-shadow-696468/workspace/stfn-serverless-collection/


## Getting started

Clone repo:

```
$ git clone https://github.com/paulohlips/stfn-serverless
```

Inside of project folder, install all dependencies:

```
$ yarn (or npm install)
```

To start new deploy on AWS:

```
$ yarn deploy
```

To test locally (this option will start the project at http://localhost:3000 and their requests will be integrated with AWS Architecture):

```
$ serverless offline
```

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
