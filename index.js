$(document).ready(function(){
  $.getJSON('data.json', function(array){
    var h1 = $('<h1>title</h1>')
    var ul = $('<ul id="paper"></ul>');
    var a = $('<a href="">link</a>');

    array.forEach(function(item,index){
      var $li = $('<li>' + (index+1) + '</li>');
      ul.append($li);
    });
    $('body').append(ul,h1,a);

    $('li').on('click',function(){
      var num = +$(this).text();
      var index = (num-1);
      $('body').css({'background-image' : 'url('+ array[index].src +')'});
      h1.text(array[index].title);
      a.text('photo by: ' + array[index].author).attr('href',array[index].link);
      $('li').removeClass('active');
      $(this).addClass('active');
    });



    $('li').first().trigger("click");

  });
});
