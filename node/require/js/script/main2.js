require(['config'],function(){
   require(['jquery'],function ($) {
         $(document).on('click','#contentBtn',function(){
            $('#messagebox').html('You have access Jquery by using require()');

            require(['./desc'],function(desc){
               console.log(JSON.stringify(desc));
            });

            require(['./alertdesc'],function(alertdesc){
              alertdesc();
            });

            console.log("loading...");
         });
   });
   console.log("require config..");
});

console.log("main2");
  