Meteor.methods({
  profileList: function(){
    try {
      check(CouchPotato.url, String);
      check(CouchPotato.port, Number);
      check(CouchPotato.api, String);
    } catch (e) {
      console.log(e.message);
      return false;
    }

    var result = [];

    //Workaround to allow self-signed SSL certs, however can be dangerous and should not be used in production, looking into better way
    //But it's possible there's nothing much I can do
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    
    try {
      var response = HTTP.call("GET", CouchPotato.url + ":" + CouchPotato.port + CouchPotato.directory + "/api/" + CouchPotato.api + "/profile.list", {timeout: 2000} );
    } catch (e) {
      console.log(e);
      return false;
    }
    // console.log(response.data.media.info);

    if (response.data.success) {
      response.data.list.forEach(function (p) { 
        if(!p.core) {
          result.push({
            id: p._id,
            label: p.label,				  
          })
        }
      });		
    } else {
      result.status = "false";
    }
	
    return result;
  }
});
