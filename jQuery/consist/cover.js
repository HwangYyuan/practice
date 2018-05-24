jQuery.fn.extend({
    h_main:function(){
        return this.each(function(){
            $.ajax({
                type:"get",
                url:"consist/cover.html",
                success:function(data){
                    $("body").append(data);
                    $("button").click(function(){
                        $(".a").show();
                        $(".b").show();
                    })
                    $('span').click(function(){
                        $(".a").hide();
                        $(".b").hide();
                    })
                }.bind(this)
            });
            $.ajax({
                type: "get",
                url: "consist/cover.css",
                success: function(data){
                    $("head style").append(data)
                }.bind(this)
            });
        });
    }
})