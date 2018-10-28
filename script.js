var input=document.querySelectorAll('.input1');
var previous_click=false;
var previous_position;
function handle(e){
    if(e.shiftKey && this.checked)
    {
        var previous_click=false;
        input.forEach(click1 => {
            if(click1===this || click1===previous_position)
            {
                previous_click=!previous_click;
            }
            if(previous_click)
            {
                click1.checked=true;
            }
        });
    }
    previous_position=this;
}
input.forEach(click1 => click1.addEventListener('click',handle));