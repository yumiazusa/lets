$(function(){$(document).on("click","[data-toggle-group] [data-action]",function(){const t=$(this),o=t.closest("[data-toggle-group]"),d=t.attr("data-action");var a=o.attr("data-id"),n=o.attr("data-toggle-group");return window.MS.api.post(n,{action:d,id:a},function(t){window.MS.api.defaultCallback(t,{success:function(t){switch(d){case"toggle":o.attr("data-status","is_toggle");break;case"untoggle":o.attr("data-status","not_toggle")}if(t.data&&t.data.update)for(var a in t.data.update)$("[data-"+a+"]").html(t.data.update[a])}})}),!1})});