$(document).ready(greetingReady);

function greetingReady(){
    console.log("greeting ready !!!!");
    $('.tabHome').click(homeClicked);
    $('.tabProfile').click(profileClicked);
    $('.tabMessages').click(messagesClicked);
    
    $('.tabHome').addClass('active');
    $('.panelHome').show();
    $('.panelProfile').hide();
    $('.panelMessages').hide();
    
    $('.panel-heading').click(headingClicked);
    $('#submitButton').click(submitClicked);
}

function submitClicked(event){  
    $('#myModal').modal('show');    
}

function headingClicked(){
    $('.panel-body').toggle();
}

function homeClicked(event){
    event.preventDefault();
    event.stopPropagation();
    $('.panelHome').show();
    $('.panelProfile').hide();
    $('.panelMessages').hide();
    $('.tabHome').addClass('active');
    $('.tabProfile').removeClass('active');
    $('.tabMessages').removeClass('active');
}
    
function profileClicked(event){
    event.preventDefault();
    event.stopPropagation();
    $('.panelHome').hide();
    $('.panelProfile').show();
    $('.panelMessages').hide();    
    $('.tabHome').removeClass('active');
    $('.tabProfile').addClass('active');
    $('.tabMessages').removeClass('active');
}

function messagesClicked(event){
    event.preventDefault();
    event.stopPropagation();
    $('.panelHome').hide();
    $('.panelProfile').hide();
    $('.panelMessages').show();    
    $('.tabHome').removeClass('active');
    $('.tabProfile').removeClass('active');
    $('.tabMessages').addClass('active');
}
