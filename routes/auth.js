// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : 'your-secret-clientID-here', // your App ID
        'clientSecret'    : 'your-client-secret-here', // your App Secret
        'callbackURL'     : '/',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] // For requesting permissions from Facebook API

    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : '/'
    },

    'googleAuth' : {
        'clientID'         : process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
        'clientSecret'     : process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET,
        'callbackURL'      : `${process.env.LIBERTY_TREE_ROUTE || ""}/auth/google/callback`,
        'proxy'            : true,
        'passReqToCallback': true,
        'scope'            : ['email']
    }

};
