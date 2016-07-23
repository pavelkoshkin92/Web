var req_r = new XMLHttpRequest;
function news_list(){
    var req_l = new XMLHttpRequest;
    req_l.open('GET', 'https://www.ukr.net/', true);
    req_l.getAllResponseHeaders();
    req_l.send();
    req_l.onreadystatechange = function(){
        if(this.readyState = 4){
            document.getElementById('left').innerText = this.responseText;
        }
    }
}
window.onload = news_list();