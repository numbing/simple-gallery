$(document).ready(function(){
  $.getJSON('data.json', function(array){
    var h1 = $('<h1>title</h1>')
    var ul = $('<ul id="paper"></ul>');

    array.forEach(function(item,index){
      var $li = $('<li>' + (index+1) + '</li>');
      ul.append($li);
    });
    $('body').append(ul,h1);
    $('li').on('click',function(){
      var num = +$(this).text();
      var index = (num-1);
      $('body').css({'background-image' : 'url('+ array[index].src +')'});

      $( "h1" ).text(array[index].title);


    });
  });
});
