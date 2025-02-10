function initMap(){
    var miLatLng ={lat:41.38440588884453,lng:2.144756599151743};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom:18,
        center:miLatLng,
        mapTypeId:"satellite",
        mapTypeControl:false
    });
    var marker = new google.maps.Marker({
        position:miLatLng,
        map:map,
        title:"Aqui estamos!"

    })

}
//iniciar api email
(function() {
    emailjs.init({
      publicKey: "ZVMjWxcdyCFjrTvXR",
    });
})();
//


//jquery
$(document).ready(function(){
    
    $(".box").on("mouseenter", function(event){
        $(this).addClass("selected")
    });
    $(".box").on("mouseleave",function(event){
        $(this).removeClass("selected")
    })

});

$(document).ready(function(){
    $("html").smoothScroll(500);
})


// dynamic options
$(document).ready(function(){
    const horario_MuayThai_LMV = ["10:00","18:45"];
    const horario_MuayThai_MJ =["11:15","17:00"];
    const horario_Boxeo_LMV = ["11:15"];
    const horario_Boxeo_MJ =["10:00"];
    const horario_BJJ_LMV = ["17:00","18:45"];
    const horario_BJJ_MJ =["18:15","17:00"];
    $('select[name = "clase"],select[name = "dia"]').on("change",function(){

       // vaciar cada vez
        $('option[name ="LMV"],option[name = "MJ"]').each(function(){
            $(this).remove();
        })
        //declaro dia y clase para que sea mas legible
        var dia =$('select[name = dia]').val();
        var clase =$('select[name = clase]').val();
        
        
        if(clase === "muay-thai" && (dia ==="lunes" ||dia ==="miercoles"||dia === "viernes")){

            //bucle poner opciones
            for(let i =0;i <horario_MuayThai_LMV.length;i++){
                $('select[name = "hora"]').append(`<option value="${horario_MuayThai_LMV[i]}" name ="LMV">${horario_MuayThai_LMV[i]}</option>`)
            } 
        }else if(clase === "muay-thai" && (dia ==="martes" ||dia ==="jueves")){

            //bucle poner opciones
            for(let i =0;i <horario_MuayThai_MJ.length;i++){
                $('select[name = "hora"]').append(`<option value="${horario_MuayThai_MJ[i]}" name ="MJ">${horario_MuayThai_MJ[i]}</option>`)
            } 
        }
        if(clase === "boxeo" && (dia ==="lunes" ||dia ==="miercoles"||dia === "viernes")){

            //bucle poner opciones
            for(let i =0;i <horario_Boxeo_LMV.length;i++){
                $('select[name = "hora"]').append(`<option value="${horario_Boxeo_LMV[i]}" name ="LMV">${horario_Boxeo_LMV[i]}</option>`)
            } 
        }else if(clase === "boxeo" && (dia ==="martes" ||dia ==="jueves")){

            //bucle poner opciones
            for(let i =0;i <horario_Boxeo_MJ.length;i++){
                $('select[name = "hora"]').append(`<option value="${horario_Boxeo_MJ[i]}" name ="MJ">${horario_Boxeo_MJ[i]}</option>`)
            } 
        }
        
        if(clase === "bjj" && (dia ==="lunes" ||dia ==="miercoles"||dia === "viernes")){

            //bucle poner opciones
            for(let i =0;i <horario_BJJ_LMV.length;i++){
                $('select[name = "hora"]').append(`<option value="${horario_BJJ_LMV[i]}" name ="LMV">${horario_BJJ_LMV[i]}</option>`)
            } 
        }else if(clase === "bjj" && (dia ==="martes" ||dia ==="jueves")){

            //bucle poner opciones
            for(let i =0;i <horario_BJJ_MJ.length;i++){
                $('select[name = "hora"]').append(`<option value="${horario_BJJ_MJ[i]}" name ="MJ">${horario_BJJ_MJ[i]}</option>`)
            } 
        }

       
    })
    
    
})


//  api mail + verificacion formulario
$(document).ready(function(){
    $("#email-form").submit(function(event){
        let isValid =true
        // validar input de texto
        $(":text").each(function(){
            if($(this).val()===""){
                alert($(this).attr("name")+ " esta vacio")
                isValid = false
                event.preventDefault();
            }
        })
        
        // validar input de select
        $("select").each(function(){
            if($(this).val()===""){
                alert($(this).attr("name")+ " esta vacio")
                isValid = false
                event.preventDefault();
            }
        })

        // enviar formulario
        if(isValid ===true){
            var username =$("input[name='name']").val();
            var mail =$("input[name='mail']").val();
            var clase =$("select[name='clase']").val();
            var dia =$("select[name='dia']").val();
            var hora =$("select[name='hora']").val();
    
            emailjs.send("service_d5y8a8s","template_e81zoog",{
                user_name:username,
                user_email:mail,
                user_clase:clase,
                user_dia:dia,
                user_hora:hora
                
            })

            alert("formulario enviado!")
            event.preventDefault()
            // limpiar formulario
            $('input[name = name]').val("");  
            $('input[name = full-name]').val("");
            $('input[name = mail]').val("");
            $('select[name = clase]').val("");  
            $('select[name = dia]').val("");
            $('select[name = hora]').val("");
              
            


        }
    })
})