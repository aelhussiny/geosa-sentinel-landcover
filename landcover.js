$(document).ready(() => {
    $.getJSON("config.json", function (config) {
        console.log("Config data:", config);
        if (config.portalUrl && config.landcoverAppId) {
            require([
                "esri/portal/Portal",
                "esri/identity/OAuthInfo",
                "esri/identity/IdentityManager",
            ], function (Portal, OAuthInfo, esriId) {
                const info = new OAuthInfo({
                    appId: config.landcoverAppId,
                    popup: false,
                    portalUrl: config.portalUrl,
                });
                esriId.registerOAuthInfos([info]);

                esriId
                    .checkSignInStatus(info.portalUrl + "/sharing")
                    .then(() => {
                        handleSignedIn();
                    })

                    .catch(() => {
                        handleSignedOut();
                    });

                esriId.getCredential(info.portalUrl + "/sharing");

                function handleSignedIn() {
                    const portal = new Portal();
                    portal.load().then(() => {
                        document
                            .getElementById("container")
                            .setAttribute(
                                "src",
                                "./landcoverapp.html"
                            );
                    });
                }
            });
        } else {
            window.setTimeout(() => {
                console.log("HERE");
                console.log($("#loadMsg", $("#container").contents()));
                $("#loadMsg", $("#container").contents()).text(
                    "Configuration error!"
                );
            }, 1000);
        }
    });
});
