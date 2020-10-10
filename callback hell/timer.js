var h1 = document.createElement("h1")
document.body.appendChild(h1)
    /* h1.innerText="timer"
    h1.addEventListener("click" function(a,b){
        let a=console.log("10"); 

    })*/

const timer = () => {
    setTimeout(() => {
        h1.innerText = "10"
        setTimeout(() => {
            h1.innerText = "9"
            setTimeout(() => {
                h1.innerText = "8"
                setTimeout(() => {
                    h1.innerText = "7"
                    setTimeout(() => {
                        h1.innerText = "6"
                        setTimeout(() => {
                            h1.innerText = "5"
                            setTimeout(() => {
                                h1.innerText = "4"
                                setTimeout(() => {
                                    h1.innerText = "3"
                                    setTimeout(() => {
                                        h1.innerText = "2"
                                        setTimeout(() => {
                                            h1.innerText = "1"
                                            setTimeout(() => {
                                                h1.innerText = "Happy independence day"
                                            }, 1000)
                                        })
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}
timer();