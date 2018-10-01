$(document).ready(function() {
    $("#search").click(function(){
        var username = $('#usr').val();
        $.ajax({
            type: 'GET',
            url: "https://api.github.com/users/"+username+"/repos",
            data: { get_param: 'value' },
            dataType: 'json',
            success: function (result) {
                $(".repos").html("");
                var key, count = 0;
                var i=0;
                for(key in result) {
                    if(i==0) {
                        $(".repos").append("<tr class='danger'>\
                            <td>"+result[count].name+"</td>\
                            <td>"+result[count].description+"</td>\
                            <td>"+result[count].watchers+"</td>\
                          </tr>");

                        count++
                        i++;
                    }
                    else if(i==1) {
                        $(".repos").append("<tr class='info'>\
                            <td>"+result[count].name+"</td>\
                            <td>"+result[count].description+"</td>\
                            <td>"+result[count].watchers+"</td>\
                          </tr>");

                        count++
                        i=0;
                    }


                }

            }
        });
    });


});