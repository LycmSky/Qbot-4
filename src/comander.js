function filter(message, str) {
    if (message.indexOf(str+" -")===0) {return message.replace(str, "")} else {return false}
}

function parse(message) {
    let response = {};
    let args = message.split('-');
    for (i in args) {
        let arg = args[i].trim();
        if (arg!=="") {
            let pairs = arg.split(' ');
            if (pairs.length===1) { response[pairs[0]] = true }
            else if (pairs.length===2) { response[pairs[0]] = pairs[1] }
            else if (pairs.length>2) { key = pairs[0]; pairs.shift(); response[key] = pairs }
        }
    }
    return response
}

