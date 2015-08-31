var imgAnimate = (function(data){

    var timer;
   
    var className = "img-a";

    var statusClass = "img-status";
  
    var max;
   
    function init(){
        var div = $("<div class='img-status'></div>");
        if(data){
            for(var a = 0; a < data.length; a++){
                $(".img-main").append($('<a href="' + data[a].link + '" target="_blank"><img title="' + data[a].title + '" src="' + data[a].imgUrl + '" /></a>'));
            }
        }
        max = $(".img-main a").each(function(index, value){
           
            $(this).addClass(className + index)
                .data("index", index)
                .css({"left": ($(".img-main").width() - 1920) / 2, "c-index": 0});
           
            var span = $("<span class='status-noselect'></span>")
            span.data("index", index)
                .addClass("img-status" + index)
                .addClass(index == 0 ? "status-select" : "status-noselect");

            div.append(span);
            span.hover(function(){
                toImg(getImg($(this).data("index")));
            }, function(){});
        }).size() - 1;
   
        div.css("left", ($(".img-main").width() - (22 * (max + 1))) / 2) - 22;
        $(".img-main").append(div);

    }
    $(".img-main a").eq(0).css("z-index", 3);

    function initOffset(){
        $(".img-status").css("left", ($(".img-main").width() - (22 * (max + 1))) / 2) - 22;
    }
    function getImg(index){
        if(max < index){
            return getImg(0);
        }
        return $("." + className + index);
    }

    function getImgStatus(index){
        return $("." + statusClass + index);
    }

    function start(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            toImg();
        }, 4000);
    }

    var toTimer;

    function toImg(node){
        clearTimeout(toTimer);
        clearTimeout(timer);

        toTimer = setTimeout(function(){
            var oldNode = $(".select-img");

            oldNode = oldNode.size() == 0 ? getImg(0) : oldNode;

            node = node || getImg(oldNode.data("index") + 1);
            if(oldNode.data("index") == node.data("index")){
                start();
                return;
            }
            selectStatus(node.data("index"));
            node.css("z-index", 2);
            $(".img-main a").not(node).not(oldNode).css("z-index", 1);
            $(".img-main a").stop();
            oldNode.fadeTo(500, 0.00, function(){
                $(".select-img").removeClass("select-img");
                node.addClass("select-img").css("z-index", 3);
                oldNode.css({"z-index": 1, "opacity": 1});
                start();
            });
        }, 150)


    }


    function selectStatus(index){
        $(".status-select").addClass("status-noselect").removeClass("status-select");
        getImgStatus(index).addClass("status-select").removeClass("status-noselect");
    }

    $(window).resize(function(){
        initOffset();
        $(".img-main a").each(function(){
            $(this).css({"left": ($(".img-main").width() - 1920) / 2});
        });
    });

    init();
    $(start);
	
	

});



	
	
