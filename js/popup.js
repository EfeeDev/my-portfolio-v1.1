var c = 0;
var z = 0;

function popup(){
    if(c == 0){
        document.getElementById('box').style.opacity = '1';
        document.getElementById('box').style.display = 'block';
        c = 1;
    }else{
        document.getElementById('box').style.display = 'none';
        c = 0;
    }
}

function popuplang(){
    if(z == 0){
        document.getElementById('boxsecond').style.opacity = '1';
        document.getElementById('boxsecond').style.display = 'block';
        z = 1;
    }else{
        document.getElementById('boxsecond').style.display = 'none';
        z = 0;
    }
}
