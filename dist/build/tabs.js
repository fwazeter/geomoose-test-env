function showTab(e,a){for(var t="show",s=function(e,a){e.className+=" "+a},n=function(e,a){e.className=e.className.replace(" "+a,"")},c=document.getElementsByClassName("tab-content"),o=0;o<c.length;o++)n(c[o],t);if(a&&a.currentTarget){var l=document.getElementsByClassName("tab");for(o=0;o<l.length;o++)n(l[o],t);s(a.currentTarget,t)}s(document.getElementById(e),t)}function showTabByName(e){showTab(e,{currentTarget:document.getElementById(e+"-tab")})}function toggleTabs(){var e=document.getElementsByTagName("body")[0];e.className.indexOf("tabs-closed")>=0?e.className=e.className.replace(" tabs-closed",""):e.className+=" tabs-closed",window.dispatchEvent(new Event("resize"))}