var
  q = require('q');

module.exports = function AdminController (kuzzle) {

  this.deleteCollection = function (data) {
    var deferred = q.defer();

    kuzzle.emit('data:deleteCollection', data);

    deferred.resolve({});
    return deferred.promise;
  };

  this.putMapping = function (data) {
    var deferred = q.defer();

    kuzzle.emit('data:putMapping', data);

    deferred.resolve({});
    return deferred.promise;
  };

  this.getMapping = function (data) {
    return kuzzle.services.list.readEngine.getMapping(data);
  };

};