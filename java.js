var x=[0,0,0,0,0];
var a= document.querySelector('#cat-1');
var b= document.querySelector('#cat-2');
var c= document.querySelector('#cat-3');
var d= document.querySelector('#cat-4');
var e= document.querySelector('#cat-5');
function expand_a()
{
    if(x[0]===0)
    {
        a.style.display = 'block';
        x[0]=1;
        document.querySelector('#expand_a').style.content="url('open.png')";
    }
    else{
        a.style.display='none';
        x[0]=0;
        document.querySelector('#expand_a').style.content="url('close.png')";
    }   
}
function expand_b(){
    if(x[1]===0)
    {
        b.style.display='block';
        x[1]=1;
        document.querySelector('#expand_b').style.content="url('open.png')";
    }
    else{
        b.style.display='none';
        x[1]=0;
        document.querySelector('#expand_b').style.content="url('close.png')";
    }
}
function expand_c(){
    if(x[2]===0)
    {
        c.style.display='block';
        x[2]=1;
        document.querySelector('#expand_c').style.content="url('open.png')";
    }
    else{
        c.style.display='none';
        x[2]=0;
        document.querySelector('#expand_c').style.content="url('close.png')";
    }
}
function expand_d(){
    if(x[3]===0)
    {
        d.style.display='block';
        x[3]=1;
        document.querySelector('#expand_d').style.content="url('open.png')";
    }
    else{
        d.style.display='none';
        x[3]=0;
        document.querySelector('#expand_d').style.content="url('close.png')";
    }
}
function expand_e(){
    if(x[4]===0)
    {
        e.style.display='block';
        x[4]=1;
        document.querySelector('#expand_e').style.content="url('open.png')";
    }
    else{
        e.style.display='none';
        x[4]=0;
        document.querySelector('#expand_e').style.content="url('close.png')";
    }
}

