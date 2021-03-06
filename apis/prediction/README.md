# prediction_endpoint

PredictionEndpoint - JavaScript client for prediction_endpoint
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install prediction_endpoint --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/prediction_endpoint
then install it via:

```shell
    npm install YOUR_USERNAME/prediction_endpoint --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PredictionEndpoint = require('prediction_endpoint');

var api = new PredictionEndpoint.DefaultApi()

var projectId = "projectId_example"; // {String} The project to evaluate against

var imageData = "/path/to/file.txt"; // {File} 

var opts = { 
  'iterationId': "iterationId_example", // {String} Optional. Specifies the id of a particular iteration to evaluate against.              The default iteration for the project will be used when not specified.
  'application': "application_example" // {String} Optional. Specifies the name of application using the endpoint.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.predictImage(projectId, imageData, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PredictionEndpoint.DefaultApi* | [**predictImage**](docs/DefaultApi.md#predictImage) | **POST** /{projectId}/image | Predict an image
*PredictionEndpoint.DefaultApi* | [**predictImageUrl**](docs/DefaultApi.md#predictImageUrl) | **POST** /{projectId}/url | Predict an image url


## Documentation for Models

 - [PredictionEndpoint.ImagePredictionResultModel](docs/ImagePredictionResultModel.md)
 - [PredictionEndpoint.ImageTagPrediction](docs/ImageTagPrediction.md)
 - [PredictionEndpoint.ImageUrl](docs/ImageUrl.md)
 - [PredictionEndpoint.InlineResponse200](docs/InlineResponse200.md)
 - [PredictionEndpoint.InlineResponse200Predictions](docs/InlineResponse200Predictions.md)


## Documentation for Authorization

 All endpoints do not require authorization.

