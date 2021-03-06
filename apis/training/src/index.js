/**
 * TrainingApi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountModel', 'model/AccountQuotaModel', 'model/ApiKeysModel', 'model/CreateBatch', 'model/CreateImageResultModel', 'model/CreateImageSummaryModel', 'model/DomainModel', 'model/ImageIdCreateBatch', 'model/ImageLabelModel', 'model/ImageModel', 'model/ImageTagListModel', 'model/ImageTagModel', 'model/ImageTagPerformanceModel', 'model/ImageUrlCreateBatch', 'model/ImportBatch', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2003Images', 'model/InlineResponse2004', 'model/InlineResponse2004Results', 'model/InlineResponse2004Token', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2007PerTagPerformance', 'model/InlineResponse2008', 'model/InlineResponse2008Tags', 'model/InlineResponse200Keys', 'model/InlineResponse200KeysTrainingKeys', 'model/InlineResponse200Quotas', 'model/InlineResponse200QuotasPerProject', 'model/InlineResponse200QuotasProjects', 'model/IterationModel', 'model/IterationPerformanceModel', 'model/KeyPairModel', 'model/PerProjectQuotaModel', 'model/PredictionModel', 'model/PredictionQueryModel', 'model/PredictionQueryTokenModel', 'model/PredictionTagModel', 'model/ProjectModel', 'model/ProjectSettingsModel', 'model/ProjectsSettings', 'model/ProjectsprojectIdimagestaggedLabels', 'model/ProjectsprojectIdimagestaggedPredictions', 'model/QueryToken', 'model/QuotaModel', 'model/UpdatedIteration', 'model/UpdatedProject', 'model/UpdatedTag', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccountModel'), require('./model/AccountQuotaModel'), require('./model/ApiKeysModel'), require('./model/CreateBatch'), require('./model/CreateImageResultModel'), require('./model/CreateImageSummaryModel'), require('./model/DomainModel'), require('./model/ImageIdCreateBatch'), require('./model/ImageLabelModel'), require('./model/ImageModel'), require('./model/ImageTagListModel'), require('./model/ImageTagModel'), require('./model/ImageTagPerformanceModel'), require('./model/ImageUrlCreateBatch'), require('./model/ImportBatch'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2003Images'), require('./model/InlineResponse2004'), require('./model/InlineResponse2004Results'), require('./model/InlineResponse2004Token'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/InlineResponse2007PerTagPerformance'), require('./model/InlineResponse2008'), require('./model/InlineResponse2008Tags'), require('./model/InlineResponse200Keys'), require('./model/InlineResponse200KeysTrainingKeys'), require('./model/InlineResponse200Quotas'), require('./model/InlineResponse200QuotasPerProject'), require('./model/InlineResponse200QuotasProjects'), require('./model/IterationModel'), require('./model/IterationPerformanceModel'), require('./model/KeyPairModel'), require('./model/PerProjectQuotaModel'), require('./model/PredictionModel'), require('./model/PredictionQueryModel'), require('./model/PredictionQueryTokenModel'), require('./model/PredictionTagModel'), require('./model/ProjectModel'), require('./model/ProjectSettingsModel'), require('./model/ProjectsSettings'), require('./model/ProjectsprojectIdimagestaggedLabels'), require('./model/ProjectsprojectIdimagestaggedPredictions'), require('./model/QueryToken'), require('./model/QuotaModel'), require('./model/UpdatedIteration'), require('./model/UpdatedProject'), require('./model/UpdatedTag'), require('./api/DefaultApi'));
  }
}(function(ApiClient, AccountModel, AccountQuotaModel, ApiKeysModel, CreateBatch, CreateImageResultModel, CreateImageSummaryModel, DomainModel, ImageIdCreateBatch, ImageLabelModel, ImageModel, ImageTagListModel, ImageTagModel, ImageTagPerformanceModel, ImageUrlCreateBatch, ImportBatch, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2003Images, InlineResponse2004, InlineResponse2004Results, InlineResponse2004Token, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2007PerTagPerformance, InlineResponse2008, InlineResponse2008Tags, InlineResponse200Keys, InlineResponse200KeysTrainingKeys, InlineResponse200Quotas, InlineResponse200QuotasPerProject, InlineResponse200QuotasProjects, IterationModel, IterationPerformanceModel, KeyPairModel, PerProjectQuotaModel, PredictionModel, PredictionQueryModel, PredictionQueryTokenModel, PredictionTagModel, ProjectModel, ProjectSettingsModel, ProjectsSettings, ProjectsprojectIdimagestaggedLabels, ProjectsprojectIdimagestaggedPredictions, QueryToken, QuotaModel, UpdatedIteration, UpdatedProject, UpdatedTag, DefaultApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var TrainingApi = require('index'); // See note below*.
   * var xxxSvc = new TrainingApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new TrainingApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new TrainingApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new TrainingApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccountModel model constructor.
     * @property {module:model/AccountModel}
     */
    AccountModel: AccountModel,
    /**
     * The AccountQuotaModel model constructor.
     * @property {module:model/AccountQuotaModel}
     */
    AccountQuotaModel: AccountQuotaModel,
    /**
     * The ApiKeysModel model constructor.
     * @property {module:model/ApiKeysModel}
     */
    ApiKeysModel: ApiKeysModel,
    /**
     * The CreateBatch model constructor.
     * @property {module:model/CreateBatch}
     */
    CreateBatch: CreateBatch,
    /**
     * The CreateImageResultModel model constructor.
     * @property {module:model/CreateImageResultModel}
     */
    CreateImageResultModel: CreateImageResultModel,
    /**
     * The CreateImageSummaryModel model constructor.
     * @property {module:model/CreateImageSummaryModel}
     */
    CreateImageSummaryModel: CreateImageSummaryModel,
    /**
     * The DomainModel model constructor.
     * @property {module:model/DomainModel}
     */
    DomainModel: DomainModel,
    /**
     * The ImageIdCreateBatch model constructor.
     * @property {module:model/ImageIdCreateBatch}
     */
    ImageIdCreateBatch: ImageIdCreateBatch,
    /**
     * The ImageLabelModel model constructor.
     * @property {module:model/ImageLabelModel}
     */
    ImageLabelModel: ImageLabelModel,
    /**
     * The ImageModel model constructor.
     * @property {module:model/ImageModel}
     */
    ImageModel: ImageModel,
    /**
     * The ImageTagListModel model constructor.
     * @property {module:model/ImageTagListModel}
     */
    ImageTagListModel: ImageTagListModel,
    /**
     * The ImageTagModel model constructor.
     * @property {module:model/ImageTagModel}
     */
    ImageTagModel: ImageTagModel,
    /**
     * The ImageTagPerformanceModel model constructor.
     * @property {module:model/ImageTagPerformanceModel}
     */
    ImageTagPerformanceModel: ImageTagPerformanceModel,
    /**
     * The ImageUrlCreateBatch model constructor.
     * @property {module:model/ImageUrlCreateBatch}
     */
    ImageUrlCreateBatch: ImageUrlCreateBatch,
    /**
     * The ImportBatch model constructor.
     * @property {module:model/ImportBatch}
     */
    ImportBatch: ImportBatch,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2003Images model constructor.
     * @property {module:model/InlineResponse2003Images}
     */
    InlineResponse2003Images: InlineResponse2003Images,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2004Results model constructor.
     * @property {module:model/InlineResponse2004Results}
     */
    InlineResponse2004Results: InlineResponse2004Results,
    /**
     * The InlineResponse2004Token model constructor.
     * @property {module:model/InlineResponse2004Token}
     */
    InlineResponse2004Token: InlineResponse2004Token,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The InlineResponse2007PerTagPerformance model constructor.
     * @property {module:model/InlineResponse2007PerTagPerformance}
     */
    InlineResponse2007PerTagPerformance: InlineResponse2007PerTagPerformance,
    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008: InlineResponse2008,
    /**
     * The InlineResponse2008Tags model constructor.
     * @property {module:model/InlineResponse2008Tags}
     */
    InlineResponse2008Tags: InlineResponse2008Tags,
    /**
     * The InlineResponse200Keys model constructor.
     * @property {module:model/InlineResponse200Keys}
     */
    InlineResponse200Keys: InlineResponse200Keys,
    /**
     * The InlineResponse200KeysTrainingKeys model constructor.
     * @property {module:model/InlineResponse200KeysTrainingKeys}
     */
    InlineResponse200KeysTrainingKeys: InlineResponse200KeysTrainingKeys,
    /**
     * The InlineResponse200Quotas model constructor.
     * @property {module:model/InlineResponse200Quotas}
     */
    InlineResponse200Quotas: InlineResponse200Quotas,
    /**
     * The InlineResponse200QuotasPerProject model constructor.
     * @property {module:model/InlineResponse200QuotasPerProject}
     */
    InlineResponse200QuotasPerProject: InlineResponse200QuotasPerProject,
    /**
     * The InlineResponse200QuotasProjects model constructor.
     * @property {module:model/InlineResponse200QuotasProjects}
     */
    InlineResponse200QuotasProjects: InlineResponse200QuotasProjects,
    /**
     * The IterationModel model constructor.
     * @property {module:model/IterationModel}
     */
    IterationModel: IterationModel,
    /**
     * The IterationPerformanceModel model constructor.
     * @property {module:model/IterationPerformanceModel}
     */
    IterationPerformanceModel: IterationPerformanceModel,
    /**
     * The KeyPairModel model constructor.
     * @property {module:model/KeyPairModel}
     */
    KeyPairModel: KeyPairModel,
    /**
     * The PerProjectQuotaModel model constructor.
     * @property {module:model/PerProjectQuotaModel}
     */
    PerProjectQuotaModel: PerProjectQuotaModel,
    /**
     * The PredictionModel model constructor.
     * @property {module:model/PredictionModel}
     */
    PredictionModel: PredictionModel,
    /**
     * The PredictionQueryModel model constructor.
     * @property {module:model/PredictionQueryModel}
     */
    PredictionQueryModel: PredictionQueryModel,
    /**
     * The PredictionQueryTokenModel model constructor.
     * @property {module:model/PredictionQueryTokenModel}
     */
    PredictionQueryTokenModel: PredictionQueryTokenModel,
    /**
     * The PredictionTagModel model constructor.
     * @property {module:model/PredictionTagModel}
     */
    PredictionTagModel: PredictionTagModel,
    /**
     * The ProjectModel model constructor.
     * @property {module:model/ProjectModel}
     */
    ProjectModel: ProjectModel,
    /**
     * The ProjectSettingsModel model constructor.
     * @property {module:model/ProjectSettingsModel}
     */
    ProjectSettingsModel: ProjectSettingsModel,
    /**
     * The ProjectsSettings model constructor.
     * @property {module:model/ProjectsSettings}
     */
    ProjectsSettings: ProjectsSettings,
    /**
     * The ProjectsprojectIdimagestaggedLabels model constructor.
     * @property {module:model/ProjectsprojectIdimagestaggedLabels}
     */
    ProjectsprojectIdimagestaggedLabels: ProjectsprojectIdimagestaggedLabels,
    /**
     * The ProjectsprojectIdimagestaggedPredictions model constructor.
     * @property {module:model/ProjectsprojectIdimagestaggedPredictions}
     */
    ProjectsprojectIdimagestaggedPredictions: ProjectsprojectIdimagestaggedPredictions,
    /**
     * The QueryToken model constructor.
     * @property {module:model/QueryToken}
     */
    QueryToken: QueryToken,
    /**
     * The QuotaModel model constructor.
     * @property {module:model/QuotaModel}
     */
    QuotaModel: QuotaModel,
    /**
     * The UpdatedIteration model constructor.
     * @property {module:model/UpdatedIteration}
     */
    UpdatedIteration: UpdatedIteration,
    /**
     * The UpdatedProject model constructor.
     * @property {module:model/UpdatedProject}
     */
    UpdatedProject: UpdatedProject,
    /**
     * The UpdatedTag model constructor.
     * @property {module:model/UpdatedTag}
     */
    UpdatedTag: UpdatedTag,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
