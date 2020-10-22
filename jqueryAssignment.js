$('document').ready(()=>{

      $('#skill').hide();
    $('#shw').click(()=>
    {
        let a =$('#pass').attr("type");
        
        if(a ==="password")
        {
            $('#pass').attr('type','text');
        }
        else
        {
            $('#pass').attr('type','password');
        }
    })
        $('#cpass').blur(()=>{
        $('#t').empty();
        if($('#pass').val()==$('#cpass').val())
        {
            $('#t').append("password matches");
            
            $('#t').css("color","green");
        }
        else
        {
            $('#t').append("password does not match");
            
            $('#t').css("color","red");
        }
      
      });
      $('#myInput').keyup(()=>
      {
        debugger;
        var input, filter, ul, li, a, i;
        input = $("#myInput");
        filter = input.val().toLowerCase();
        console.log(filter);
        // div = document.getElementById("myDropdown");
        a = $("a");
        for (i = 0; i < a.length; i++) 
        {
          if(input.val()!="")
          {
          txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toLowerCase().indexOf(filter) > -1) 
          {
            $('#skill').show();
            a[i].style.display = "";
          }
           else 
           {
            a[i].style.display = "none";
          }
        }
        else
        {
            $('#skill').hide();
        }
        }

      });
})