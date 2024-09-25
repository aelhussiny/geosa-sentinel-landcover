let heightIsSet = false;

$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const locale = urlParams.get("locale");
    let hash = "#mapCenter=46.72840%2C24.70325%2C9.91866162359561";
    if (window.location.hash.length > 0) {
        hash = window.location.hash;
    }
    console.log("HASH", hash);
    history.pushState(
        {},
        "",
        window.location.href.substring(
            0,
            window.location.href.indexOf("#") > -1
                ? window.location.href.indexOf("#")
                : null
        ) + hash
    );
    if (!locale || locale === "en") {
        $("#header").attr("src", "./GeoSA-Ar.html");
        $("#content").attr("src", `./landcover-explorer/index.html${hash}`);
    } else {
        $("#header").attr("src", "./GeoSA-Ar.html");
        $("#content").attr("src", `./landcover-explorer/index.html${hash}`);
    }
});

$("#header").ready(function () {
    setHeaderHeight();
});

function setHeaderHeight() {
    if (!heightIsSet) {
        window.setTimeout(() => {
            console.log("HEADER READY!");
            let height = getHeaderHeight();
            if (height !== null) {
                height = height - 110;
                $(".header-section.wow.fadeIn", $("#header").contents()).css(
                    "padding-top",
                    "0px"
                );
                heightIsSet = true;
                console.log("HEADER HEIGHT: " + height);
                $("#header").css("height", height + "px");
                $("#content").css("top", height + "px");
                $("#content").css("height", "calc(100% - " + height + "px)");
            } else {
                console.log("HEADER HEIGHT: NULL");
                setHeaderHeight();
            }
        }, 100);
    }
}

function getHeaderHeight() {
    const height = $(".inner-page-title", $("#header").contents())[0]
        ? $(".inner-page-title", $("#header").contents()).outerHeight(true)
        : null;

    console.log("HEIGHT IS", height);
    return height;
}

$(window).on("message", function (e) {
    var data = e.originalEvent.data;
    if (data.source && data.source == "header") {
        let curURL = new URL(window.location.href);
        let newURL = `${curURL.protocol}//${curURL.host}${curURL.pathname}?locale=${data.locale}${curURL.hash}`;
        window.location.href = newURL;
    }
});
