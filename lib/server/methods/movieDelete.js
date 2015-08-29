Meteor.methods({
  movieDelete: function(media){
    try {
      check(CouchPotato.url, String);
      check(CouchPotato.port, Number);
      check(CouchPotato.api, String);
      check(media, String);
    } catch (e) {
      console.log(e.message);
      return false;
    }
    try {
      var response = HTTP.call("GET", CouchPotato.url + ":" + CouchPotato.port + "/api/" + CouchPotato.api + "/movie.delete?id=" + media + "&delete_from=wanted", {timeout: 2000} );
    } catch (e) {
      console.log(e);
      return false;
    }
    console.log(response);
    return response.data.success;
  }
});
