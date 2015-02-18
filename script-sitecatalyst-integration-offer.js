<script type="text/javascript">
/*T&T to SiteCat v4 ==>Response Plugin*/
window.s_tnt = window.s_tnt || '', tntVal = 
'${campaign.id}:${campaign.recipe.id}:${campaign.recipe.trafficType},';
if (window.s_tnt.indexOf(tntVal) == -1) {
   window.s_tnt += tntVal
}
if (mboxCurrent.getFetcher().getType() == 'ajax' && (window.s && window.s.tl)) {
   s.tl('TnT', 'o', 'TnT');
}
</script>