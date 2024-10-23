$(document).ready(function () {
    $('#telefone').mask('(00) 0000-0000', {
    })

    $('form').validate({
        rules : { 
            name: {
                required: true
            },
            email: {
                required: true
            },
            mensage: {
                required: true
            }
        }
    })
})