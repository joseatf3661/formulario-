$(document).ready(function() {
    $('#registroForm').on('submit', function(event) {
        event.preventDefault();

        $.ajax({
            url: 'process.php',
            type: 'POST',
            data: new FormData(this),
            processData: false,
            contentType: false,
            success: function(response) {
                $('#message').html(response);
            },
            error: function(xhr, status, error) {
                console.error('Error al enviar el formulario:', error);
                $('#message').html('<h3 class="bad">¡UPS HA OCURRIDO UN ERROR!</h3>');
            }
        });
    });

    $('#borrarButton').on('click', function() {
        $('#registroForm')[0].reset();
        $('#message').html('');
    });
});
