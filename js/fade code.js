<script type="text/javascript">
window.onload = fade
var i = 0
function fade() {
if (i < 100) {
i=i+10
}
var d = document.body.style
d.filter = "alpha(Opacity="+i+")"
d.opacity = i/100
var num = document.all ? 10 : 15
setTimeout("fade()",num)
}
</script>


PUT INTO HTML, NOT CSS.