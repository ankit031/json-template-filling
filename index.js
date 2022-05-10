const messagetemplates = require('./template.json');
const pushnotification = messagetemplates.templates;
const fillTemplate = (template, message) => {
    let filledTemplate = template.replace(/{([^{}]+)}/g, function (keyExpr, key) {
        return message[key] || "";
    });
    return filledTemplate;
}

let message = {
    templatetype: "dummy",
    purposename: "learning"
}

let processmessage = fillTemplate(pushnotification.reason, message);

console.log("processmessage : ",processmessage);