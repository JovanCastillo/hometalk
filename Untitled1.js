// JavaScript File

<script language="JavaScript">
function doCalcAvg(inpNum1, inpNum2, inpNum3, inpNum4)
{
var ans;
ans = (Number(inpNum1) + Number(inpNum2) + Number(inpNum3) + Number(inpNum4)) / 4;
return (ans);
}

var inpNum1 = ;
var inpNum2 = ;
var inpNum3 = ;
var inpNum4 = ;
numAvg = doCalcAvg(inpNum1, inpNum2, inpNum3, inpNum4);
document.write("The average of the four numbers you entered is: " + numAvg);
</script>
