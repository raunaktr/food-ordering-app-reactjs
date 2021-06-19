let fetchDataMethod = (reqObject, data, callback, extra) => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let responseHeaders = xhr.getAllResponseHeaders();

            let responseHeaderMap = {};

            if (this.status !== 0) {
                let arr = responseHeaders.trim().split(/[\r\n]+/);
                arr.forEach(function (line) {
                    let parts = line.split(": ");
                    let header = parts.shift();
                    let value = parts.join(": ");
                    responseHeaderMap[header] = value;
                });

                callback(
                    this.status,
                    JSON.parse(this.responseText),
                    responseHeaderMap,
                    extra
                );
            } else {
                callback(this.status, null, responseHeaderMap, extra);
            }
        }
    });

    xhr.open(reqObject.method, reqObject.url);
    xhr.setRequestHeader("Content-Type", "application/json");
    if (reqObject.headers) {
        Object.keys(reqObject.headers).forEach(function (key) {
            xhr.setRequestHeader(key, reqObject.headers[key]);
        });
    }

    xhr.send(JSON.stringify(data));
};

let getDataMethod = (reqObject, data, callback, extra) => {
    reqObject.method = "GET";
    fetchDataMethod(reqObject, data, callback, extra);
};

let postDataMethod = (reqObject, data, callback, extra) => {
    reqObject.method = "POST";
    fetchDataMethod(reqObject, data, callback, extra);
};

let putDataMethod = (reqObject, data, callback, extra) => {
    reqObject.method = "PUT";
    fetchDataMethod(reqObject, data, callback, extra);
};

let getLoggedinUserMethod = () => {
    let user = localStorage.getItem("user-info");
    if (user) user = JSON.parse(user);
    return user;
};

let setUserSessionMethod = (response, accessToken) => {
    let user = {
        access_token: accessToken,
        firstname: response.first_name,
        lastname: response.last_name,
    };
    localStorage.setItem("user-info", JSON.stringify(user));
    return user;
};

let logoutUserMethod = () => {
    localStorage.removeItem("user-info");
    window.location.reload();
};

let utility = {
    getData: getDataMethod,
    postData: postDataMethod,
    putData: putDataMethod,
    getLoggedinUser: getLoggedinUserMethod,
    setUserSession: setUserSessionMethod,
    logoutUser: logoutUserMethod,
};

export default utility;
