$(function(){
    const btn = $("#addList");
    const input = $("#input");
    
    btn.click(function(){
        let val = input.val();
        $('ul').append('<li>' + val + '<i class="fas fa-check"></i><i class="fas fa-trash"></i></li>');
    })

    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').remove();
    })

    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').toggleClass('active');
    })

})