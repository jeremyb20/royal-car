const express = require('express'),
      app = express(),
      router = express.Router(),
      path = require('path');


      var admin = require('firebase-admin');

router.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: 'royal-car-3673e',
    clientEmail: 'royalcarserver@royal-car-3673e.iam.gserviceaccount.com',
    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDciZiHj0e2plug\nWKw1iLAxB4ma4QF0G64kX9euVsNCV16XJOy1TIK1t4F+8p6zTSc3ZGzWoYZ56mZT\nz+vw3caHjl7gCCa9KNWRPViodNIMOwyzzntbUJ+23jlo86iWqhUEtlL+oToNQszm\nzfxJx686kpVVbHAMTDFIsWd+OCacIp+3iaNfEk39iULgYAZHt4WuL32rIizXBI9w\n/rU6/2/yAFtAbZf1IrrrhJVgjon3Dz31K9sCTUpIpQq8WE0EtXHZ/EaI6ZCJrSTY\nyPa53gtZckb6A9kBUaSV5ld+N6GeMCFsWTAhxD5azdqQia4irRmW96e8rpnpZuJQ\nDP0C3gpzAgMBAAECggEAZLM7f6KwBzm9GuGCeMtaUHj1n0/gnwjIonlU/ZlGfXNx\nkKheoYY3JQyOx823I342SvfDLtoAkoiygtCtFoXd0iXzMm7maXdM1Y3ifsEg7E7G\nRRAiiZat5w1fv4mK0IkHIeiyyuwJmuaGs1kZOwNAAwnNwHzMSQE9e8jtzdeL4byg\nU8alYoO2Wo+DsDp6Xjc0LB57S089Uv0P0y6ik2L1BRjzftFKmfvIhSHOutuKV+QD\nPPcOgDzHmFtZtwVmfB/GFlmfPQnN66G0YMeBpKBz/SWk3BigEIWpqjLjSO3yjwK+\n1zx/bUAn7QfPeyxRpW90omH4xaZ28avn8jnE+l4TkQKBgQD6JYVpQxf1wCcSg3+C\nJLgptSsu17ehVzdqj9pNEUK9K2hDMGkCmFfe+gTgKrv3cfnurX3O55Vg+btns62D\nRxxhN0uN1NPLfk1S0KpPwHI/TvpypFRzWzoJ6MiH0dDsyOB1efo98jlne3oKu408\ndd/Dlv/ah6kCXiBPu+N9E/OOWwKBgQDhsrROsvn4Kv31rfue94jdUTxukM34lBkw\nRbLynMj0KuYBXD4GWdIVZcfGJJUdD1MQqw66juouKf2uEPbX/zF7jSS6Hi4o2T8x\nUZAggpP9irttxA3Sm+fmx7voKJrtw+iHV11xe2rv8dVgk/ag3W0e0sSo/4tU1Ura\na5BXxIbfyQKBgQDirTWkGYSQ0buWb0sQqC2qvd2P6TMiJWK2Uf1EcSvFOJyWpjvC\nekLGcFISwSbsKICP5O9omzsmUaedZZkKqVnyTqVMtVvnv2Bad3SeKIpfDDavxHIy\nxqxlZmixi1SD/dRJIGu/zsxuFdqV9zcZXseS+jaH1P82gg1Ns7mGEppWmQKBgQDe\nQ7rFdgQtnUkUVQ5i8qraKVI2IGx2zIIxw7ICstxDeKuh01FRt8roP5+JRiWCxMCs\nvYh3uJ5ub/PfI92zwSDd55WvpGEY4TkWPJiPK4jKO4FxC44BRoAOCczHSJWqaS/p\neOQRCdW6DpJv1ccfjHAV1sLNGzv/gz1/9EXl6ShZ4QKBgQCDBTelttzLr+hOObDn\ngS8UQ2qHe4sImXTYcBuyKGEvYXnknrZo5yIPjuG37wP0EqYSyTVcc69+agN6GpRG\nt/q3hR7btN4AQnICLq1cYe+6D8yZ+Zb0SOPtcHRtLkobChkNnfQgBvEOfmSXyw6n\nPeqwH3wwrMxVsGVoFOnK/NIhJg==\n-----END PRIVATE KEY-----\n'
  }),
  databaseURL: 'https://royal-car-3673e.firebaseio.com'
});

//metodo post

app.post("/token-device", function(request, response){
  var token = request.body.token;

  var db = firebase.database();
  var tokenDevices = db.ref("token-device").push();

  tokenDevices.set({
    token: token
  });

  response.send(request.body.token);
})


module.exports = router;