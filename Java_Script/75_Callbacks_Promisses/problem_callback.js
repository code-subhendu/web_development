const loadScript = (link, callback) => {
    let sc = document.createElement("script");
    sc.src = link;
    sc.onload = function () {
        callback(null, link);  //can take argument also  //no error-then error=null
        console.log("Loaded script with src:" + link)
    }
    sc.onerror = function () {
        console.log("Error loading with src:" + link)
        callback(new Error("link got some error"))
    }
    document.body.append(sc);
}
/*
function GoodMorning(err, a) {
    if (err) {
        console.log("dj " + err)
        sendEmergencyMessageToCeo();
        return
    }
    alert("Good Morning! " + a);
}
loadScript("hello.js", GoodMorning) 
*/
//we can write the same thing in this way--
/*
loadScript("hello.js",function GoodMorning(err, a) {
    if (err) {
        console.log("dj " + err)
        sendEmergencyMessageToCeo();
        return
    }
    alert("Good Morning! " + a);
}) 
*/

//problemb in call backs-->1.  Callbacks inherently asynchronous flow of code execution, meaning they do not guarantee that the code will be executed sequentially. This can cause erratic behavior, particularly in complex asynchronous operations. Ensuring proper control flow is a big challenge in these cases, and this usually leads to spaghetti code.
//-->2. 'Pyramid of Doom' / 'Callback hell'-->when we have callbacks inside callbacks,the code gets difficult to manage

    //Pyramid of Doom' / 'Callback hell'
loadScript("hello.js", function GoodMorning(err, a) {
    if (err) {
        console.log("dj " + err)
        sendEmergencyMessageToCeo();
        return
    }
    loadScript("hello1.js", function GoodMorning(err, a) {
        if (err) {
            console.log("dj " + err)
            sendEmergencyMessageToCeo();
            return
        }
        loadScript("hello2.js", function GoodMorning(err, a) {
            if (err) {
                console.log("dj " + err)
                sendEmergencyMessageToCeo();
                return
            }
            loadScript("hello3.js", function GoodMorning(err, a) {
                if (err) {
                    console.log("dj " + err)
                    sendEmergencyMessageToCeo();
                    return
                }

            })
        })
    })
}) 