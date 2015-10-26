Meteor.methods({
  appAvailable: function(){
    try {
      check(CouchPotato.url, String);
      check(CouchPotato.port, Number);
      check(CouchPotato.api, String);
    } catch (e) {
      console.log(e.message);
      return false;
    }

    try {
      var response = HTTP.call("GET", CouchPotato.url + ":" + CouchPotato.port + "/" + CouchPotato.directory + "api/" + CouchPotato.api + "/app.available", {timeout: 2000} );
    } catch (e) {
      console.log(e);
      return false;
    }
    var status = (response.data) ? response.data.success : false;
    return status;
  }
});
