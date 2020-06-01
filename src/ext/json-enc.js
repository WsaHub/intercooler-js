htmx.defineExtension('json-enc', {
    encodeParameters : function(headers, parameters, elt) {
        headers["Content-Type"] = "application/json";
        return (JSON.stringify(parameters));
    }
});