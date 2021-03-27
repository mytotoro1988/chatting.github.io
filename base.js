var checkAuthen = function(){
    let loc = localStorage.getItem('token');
    if(loc = null){
        location.replace("./login.html");
    }
    console.log("hi: "+ loc);
}
