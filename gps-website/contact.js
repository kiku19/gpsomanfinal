var apply1 = document.querySelectorAll(".apply1")
var apply2 = document.querySelectorAll(".apply2")
console.log("apply1");
var ismobile = /iPhone|iPad|iPaod|Android/i.test(navigator.userAgent);
if(ismobile)
{
  for (var p=0;p<apply1.length;p++)
  {
    apply1[p].style.display = "none";
    apply2[p].style.display = "inline";
    console.log("mobile")
  }
}

else
{
  for (var p=0;p<apply1.length;p++)
  {
    apply2[p].style.display = "none";
    apply1[p].style.display = "inline";
    console.log("window")
  }
}