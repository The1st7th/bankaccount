function Bankaccount(name, initial){
  this.name = name;
  this.initial= initial;
  this.current = initial;
};

Bankaccount.prototype.withdrawal = function(wamount){

  var current = this.current - wamount;
  return current;
}
Bankaccount.prototype.deposit= function(damount){

  var current = this.current + damount;
  return current;
}

function resetFields() {
    $("#name").val("");
    $("#initial").val("");
}



var newAccount;
$(document).ready(function(){
  $("body").keypress(function(e){
    if(e.keyCode == 13){
      if ($("#name").val()){
        var name = $("#name").val();
        var initial = parseInt($("#initial").val());
        newAccount = new Bankaccount(name, initial);
        var test = {key: "hello"};

        $("#balance").text(newAccount.current);
        resetFields();

      }
      if($("#deposit").val()){
        newAccount.current = newAccount.deposit(parseInt($("#deposit").val()));
        $("#balance").text(newAccount.current);
      }
      if($("#withdrawal").val()){
        newAccount.current = newAccount.withdrawal(parseInt($("#withdrawal").val()));
        $("#balance").text(newAccount.current);
      }
      }
  });
});
