        $(document).ready(function(){
            $('#carrosel-imagens').slick({
                autoplay: true
            });
            $('.menu-hamburguer').click(function(){
                $('nav').slideToggle();
            });
            $('#telefone').mask('(00) 00000-0000');
            $('form').validate({
                rules: {
                    nome:{
                        required: true
                    },
                    email:{
                        required: true,
                        email:true
                    },
                    telefone: {
                        required:true
                    },
                    veiculo:{
                        required: true
                    },
                    mensagem:{
                        required: true
                    }
                },
                messages:{
                    nome: 'Por favor, insira o seu nome!',
                    email: 'Por favor, insira seu E-mail!',
                    telefone: 'Por favor insira seu telefone!',
                    veiculo: 'Digite o nome do veiculo que você tem interesse',
                    mensagem: 'Digite sua mensagem'
                },
                submitHandler:function(form){
                    alert('Enviado com sucesso');   
                },
                invalidHandler:function(evento, validador){
                    let camposIncorretos = validador.numberOfInvalids();
                    if (camposIncorretos){
                        alert(`Existem ${camposIncorretos} campos não preenchidos.`);
                    }
                }
            });
        });
$('.lista-veiculos button').click(function(){
    const destino  = $('#contato');
    const carro = $(this).parent().find('h3').text()
    $('html').animate({
        scrollTop:  destino.offset().top
    }, 1000);
    $('#veiculo-interesse').val(carro);
});