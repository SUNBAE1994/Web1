var Change = {
  back : function(color){
    // var target = document.querySelector('body');
    // target.style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  },
  letter : function(color){
    // document.getElementById('boody').style.color = color;
    $('#boody').css("color",color);
  }
}
var Link = {
  _change : function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color',color);
  }

}

function Color_UpDown(self){
  var target = document.querySelector('body');
  if(document.querySelector('#Sky_mode').value === 'Sky_mode'){
    Change.back('black');
    self.value = 'white_mode';
    Change.letter('white');
    Link._change('#0000C9');
  }
  else{
    Change.back('white');
    self.value = 'Sky_mode';
    Change.letter('black');
    Link._change('black');
  }
}
