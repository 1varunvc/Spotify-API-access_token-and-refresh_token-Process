https: //benwiz.com/blog/create-spotify-refresh-token/

  To get the access_token
for spotify API.:

  Step 1: Get clientId and clientSecrent from spotify dashboard by creating an app there.
    const clientId = "1d8f00df80744197bb5c03ef30dbde8c";
    const clientSecret = "71813a552f434f3493aaea1184f87abe";

  Step 2: Go to the following link and grant access.
    https: //accounts.spotify.com/authorize?response_type=code&client_id=$CLIENT_ID&scope=$SCOPE&redirect_uri=$REDIRECT_URI
    e.g.,
      https: //accounts.spotify.com/authorize?response_type=code&client_id=1d8f00df80744197bb5c03ef30dbde8c&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F

  Step 3: The link would generate the following URL.
    The link would be similar to:
      http: //localhost:3000/?code=$CODE

    Copy the code from there, it looks something like this:
    AQD9p5mVaHlBuVtgYx6QYl5DXR82DXhxAUakDqxQrJQgkGVxBhV1JmQ6l2tMzzgzqaLPiKbQcSMGFij8438Y1bFv9gw7v5E6VB3v8YrUO1oO3ANm9btk4148_JAXFI3itBODwJggi1aHdgIYfmQ0ldgBEtOhSsIU4QA

  Step 4: Run the following command in terminal or cmd.
    Copy and paste the following code in cmd:
      curl - d client_id = $CLIENT_ID - d client_secret = $CLIENT_SECRET - d grant_type = authorization_code - d code = $CODE - d redirect_uri = $REDIRECT_URI https: //accounts.spotify.com/api/token
    e.g.,
      curl - d client_id = 1 d8f00df80744197bb5c03ef30dbde8c - d client_secret = 71813 a552f434f3493aaea1184f87abe - d grant_type = authorization_code - d code = AQD9p5mVaHlBuVtgYx6QYl5DXR82DXhxAUakDqxQrJQgkGVxBhV1JmQ6l2tMzzgzqaLPiKbQcSMGFij8438Y1bFv9gw7v5E6VB3v8YrUO1oO3ANm9btk4148_JAXFI3itBODwJggi1aHdgIYfmQ0ldgBEtOhSsIU4QA - d redirect_uri = http % 3 A % 2 F % 2 Flocalhost % 3 A3000 % 2 F https: //accounts.spotify.com/api/token

    The following would be gerenated. {
      "access_token": "BQBJay7eIPDMrv8kVk1ZHe1e8pcZM2LG8ndU3Q-WvUmDYkRvi-yzeEwWW3vb_M0rWyyZzNHbtZ43YTH7Tbo0bmtss-_OBO1EmveV5RX0I-URdFN4CgJXKoGowGRbMtOkuPVLZwVe0SRzDP9aLuNMqQlk8qqLlpU2lw",
      "token_type": "Bearer",
      "expires_in": 3600,
      "refresh_token": ""
    }
