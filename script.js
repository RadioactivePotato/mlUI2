let livObj;
let currentEncodedScript = "YXN5bmMgZnVuY3Rpb24gbXVsdGlsaXZlcmllcygpIHsKCWxldCBlLCBpLCB0ID0gImh0dHBzOi8vYXJpYWtpbS10YWl5by5naXRodWIuaW8vTUxVSS8iLAoJCW8gPSAhMSwKCQluID0gZnVuY3Rpb24oKSB7fSwKCQlyID0gMCwKCQlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiYnV0dG9uIiksCgkJbCA9ICIiLAoJCWMgPSAhMTsKCWdlb2ZzLmFwaS5oYXNPd25Qcm9wZXJ0eSgiY2hhbmdlTW9kZWxUZXh0dXJlIikgfHwgKGdlb2ZzLmFwaS5jaGFuZ2VNb2RlbFRleHR1cmUgPSBmdW5jdGlvbihlLCBpLCB0KSB7CgkJaWYgKGUpCgkJCWlmIChlLmN1c3RvbVNoYWRlcikgZS5jdXN0b21TaGFkZXIuc2V0VW5pZm9ybSgidV9kaWZmdXNlIiwgbmV3IENlc2l1bS5UZXh0dXJlVW5pZm9ybSh7CgkJCQl1cmw6IGksCgkJCQltaW5pZmljYXRpb25GaWx0ZXI6IENlc2l1bS5UZXh0dXJlTWluaWZpY2F0aW9uRmlsdGVyLkxJTkVBUl9NSVBNQVBfTElORUFSCgkJCX0pKTsKCQkJZWxzZSB7CgkJCQl2YXIgbyA9IGUuX3JlbmRlcmVyUmVzb3VyY2VzLnRleHR1cmVzW3QgfHwgMF07CgkJCQlDZXNpdW0uUmVzb3VyY2UuZmV0Y2hJbWFnZSh7CgkJCQkJdXJsOiBpCgkJCQl9KS50aGVuKChmdW5jdGlvbihlKSB7CgkJCQkJby5jb3B5RnJvbSh7CgkJCQkJCXNvdXJjZTogZQoJCQkJCX0pLCBvLmdlbmVyYXRlTWlwbWFwKCkKCQkJCX0pKQoJCQl9Cgl9KSwgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCAoZnVuY3Rpb24oZSkgewoJCSJodHRwczovL2FyaWFraW0tdGFpeW8uZ2l0aHViLmlvIiAhPT0gZS5vcmlnaW4gJiBlLm9yaWdpbiAhPT0gdCB8fCAoInRlc3QiICE9PSBlLmRhdGEgPyBmdW5jdGlvbihlKSB7CgkJCWlmICgiaW52IiA9PT0gZSkgcmV0dXJuIGNvbnNvbGUubG9nKCJJbnZhbGlkIGNsaWVudCwgcGxlYXNlIHVzZSB0aGUgb3JpZ2luYWwgY29kZS4iKSwgdm9pZCB1aS5ub3RpZmljYXRpb24uc2hvdygiSW52YWxpZCBjbGllbnQsIHBsZWFzZSB1c2UgdGhlIG9yaWdpbmFsIGNvZGUuIik7CgkJCWlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoIj9jdXN0b20iKSA/IChjID0gITAsIGdlb2ZzLmZ4LmV4cE92ZXJsYXkudXBkYXRlKCkpIDogKGMgPSAhMSwgZ2VvZnMuZnguZXhwT3ZlcmxheS51cGRhdGUoKSksIGUudG9TdHJpbmcoKS5pbmNsdWRlcygiaHR0cHM6Ly8iKSkgewoJCQkJaWYgKDQxNDAgPT0gZ2VvZnMuYWlyY3JhZnQuaW5zdGFuY2UuaWQpIHsKCQkJCQlpZiAoZS50b1N0cmluZygpLmluY2x1ZGVzKCJ8IikpIHsKCQkJCQkJdmFyIGkgPSBlLnNwbGl0KCJ8IiksCgkJCQkJCQl0ID0gaVsxXSwKCQkJCQkJCW8gPSBpWzJdOwoJCQkJCQlnZW9mcy5hcGkuY2hhbmdlTW9kZWxUZXh0dXJlKGdlb2ZzLmFpcmNyYWZ0Lmluc3RhbmNlLmRlZmluaXRpb24ucGFydHNbMF1bIjNkbW9kZWwiXS5fbW9kZWwsIHQsIDIpLCBnZW9mcy5hcGkuY2hhbmdlTW9kZWxUZXh0dXJlKGdlb2ZzLmFpcmNyYWZ0Lmluc3RhbmNlLmRlZmluaXRpb24ucGFydHNbMF1bIjNkbW9kZWwiXS5fbW9kZWwsIG8sIDApLCBlID0gaVswXQoJCQkJCX0KCQkJCQlyZXR1cm4gdm9pZCBnZW9mcy5hcGkuY2hhbmdlTW9kZWxUZXh0dXJlKGdlb2ZzLmFpcmNyYWZ0Lmluc3RhbmNlLmRlZmluaXRpb24ucGFydHNbMF1bIjNkbW9kZWwiXS5fbW9kZWwsIGUsIDEpCgkJCQl9CgkJCQlnZW9mcy5hcGkuY2hhbmdlTW9kZWxUZXh0dXJlKGdlb2ZzLmFpcmNyYWZ0Lmluc3RhbmNlLmRlZmluaXRpb24ucGFydHNbMF1bIjNkbW9kZWwiXS5fbW9kZWwsIGUsIDApCgkJCX0gZWxzZSBnZW9mcy5haXJjcmFmdC5pbnN0YW5jZS5sb2FkTGl2ZXJ5KGUpCgkJfShlLmRhdGEpIDogci5wb3N0TWVzc2FnZShidG9hKG11bHRpbGl2ZXJpZXMudG9TdHJpbmcoKSksICIqIikpCgl9KSwgITEpLCBjb25zb2xlLmxvZygiTG9hZGluZy4uLiIpLCBhd2FpdCBmZXRjaCgiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1NwaWNlOS9HZW9mcy1NdWx0aWxpdmVyaWVzL21haW4vZGVwZW5kZW5jaWVzL2xpdmVyaWVzLmpzb24iKS50aGVuKChlID0+IGUuanNvbigpKSkudGhlbigoaSA9PiBlID0gaSkpLCBzLmlubmVySFRNTCA9ICdNdWx0aWxpdmVyaWVzPGkgY2xhc3M9Im1hdGVyaWFsLWljb25zIj5mbGlnaHRfbGFuZDwvaT4nLCBzLmlkID0gIm1sQnR0biIsIHMuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLCAoZnVuY3Rpb24oKSB7CgkJIm9iamVjdCIgPT0gdHlwZW9mIHIgJiYgci5jbG9zZWQgJiYgKG8gPSAhMSksIG8gPyB1aS5ub3RpZmljYXRpb24uc2hvdygiUGFuZWwgaXMgb3BlbiBpbiBhbm90aGVyIHdpbmRvdyIpIDogKHIgPSB3aW5kb3cub3Blbih0LCAiX2JsYW5rIiwgImhlaWdodD0xMDAwLHdpZHRoPTE1MDAiKSwgbyA9ICEwLCByICYmICFyLmNsb3NlZCAmJiB2b2lkIDAgIT09IHIuY2xvc2VkIHx8ICh1aS5ub3RpZmljYXRpb24uc2hvdygiUGxlYXNlIGFsbG93IHBvcHVwcyBvbiBHZW9GUyIpLCBvID0gITEpKQoJfSkpLCBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpOwoJbGV0IHUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibWxCdHRuIik7CgkwID09IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoImZtYy1idG4iKS5sZW5ndGggPyAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgiZ2VvZnMtdWktYm90dG9tIilbMF0uYXBwZW5kQ2hpbGQocyksIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoImdlb2ZzLXVpLWJvdHRvbSIpWzBdLmluc2VydEJlZm9yZSh1LCBzKSkgOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCJmbWMtcHJvZy1pbmZvIilbMF0uYXBwZW5kQ2hpbGQocyksIG4gPSAyLjkgPT0gZ2VvZnMudmVyc2lvbiA/IGZ1bmN0aW9uKCkgewoJCU9iamVjdC52YWx1ZXMobXVsdGlwbGF5ZXIudmlzaWJsZVVzZXJzKS5mb3JFYWNoKChmdW5jdGlvbihpKSB7CgkJCWEgPSBpLCBlLmFpcmNyYWZ0LmZvckVhY2goKGZ1bmN0aW9uKGUpIHsKCQkJCWEuY3VycmVudExpdmVyeSA9PSBwYXJzZUludChlLmxpdmVyeSkgJiYgZ2VvZnMuYXBpLk1vZGVsLnByb3RvdHlwZS5jaGFuZ2VUZXh0dXJlKGUubXB0eCwgMCwgbXVsdGlwbGF5ZXIudmlzaWJsZVVzZXJzW2EuaWRdLm1vZGVsKQoJCQl9KSkKCQl9KSkKCX0gOiBmdW5jdGlvbigpIHsKCQlPYmplY3QudmFsdWVzKG11bHRpcGxheWVyLnZpc2libGVVc2VycykuZm9yRWFjaCgoZnVuY3Rpb24oaSkgewoJCQlhID0gaSwgZS5haXJjcmFmdC5mb3JFYWNoKChmdW5jdGlvbihlKSB7CgkJCQlhLmN1cnJlbnRMaXZlcnkgPT0gcGFyc2VJbnQoZS5saXZlcnkpICYmIGdlb2ZzLmFwaS5jaGFuZ2VNb2RlbFRleHR1cmUobXVsdGlwbGF5ZXIudmlzaWJsZVVzZXJzW2EuaWRdLm1vZGVsLCBlLm1wdHgsIDApCgkJCX0pKQoJCX0pKQoJfSwgbXBSZWZyZXNoID0gc2V0SW50ZXJ2YWwoKGZ1bmN0aW9uKCkgewoJCW4oKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgiW2RhdGEtYWlyY3JhZnRdIikuZm9yRWFjaCgoZnVuY3Rpb24oZSkgewoJCQl2YXIgaSA9IGUub3V0ZXJUZXh0OwoJCQkoaS5pbmNsdWRlcygiQm9laW5nIDczNy04MDAgW1NwaWNlOV0gKGJ5IFNwaWNlXzkpIikgfHwgaS5pbmNsdWRlcygiQWlyYnVzIGEzMjBuZW8gKEliZXJpYSkgKGJ5IFNwaWNlXzkpIikgfHwgaS5pbmNsdWRlcygiQm9laW5nIDczNyBNYXggOCAoVFVJKSAoYnkgU3BpY2VfOSkiKSB8fCBpLmluY2x1ZGVzKCJCb2VpbmcgNzg3LTEwIERyZWFtbGluZXIgKEV0aWhhZCkgKGJ5IFNwaWNlXzkpIikgfHwgaS5pbmNsdWRlcygiQWlyYnVzIEEzMTkgKEZpbm5haXIpICAoYnkgR1QtVlJBKSIpKSAmJiAoZS5pbm5lckhUTUwuaW5jbHVkZXMoIk11bHRpbGl2ZXJpZXMiKSB8fCAoZS5pbm5lckhUTUwgPSBlLmlubmVySFRNTCArICIgW011bHRpbGl2ZXJpZXMgRnJhbWVdIikpCgkJfSkpCgl9KSwgNWUzKSwgY29uc29sZS5sb2coIkxvYWRlZCEiKSwgYXdhaXQgZmV0Y2goImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9TcGljZTkvR2VvZnMtTXVsdGlsaXZlcmllcy9tYWluL2RlcGVuZGVuY2llcy9jb250cmlidXRvcnMudHh0IikudGhlbigoZSA9PiBlLmpzb24oKSkpLnRoZW4oKGUgPT4gaSA9IGUpKSwgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7CgkJY29uc29sZS5sb2coIkNvZGUgYnkgU3BpY2U5IGFuZCBBcmlha2ltVGFpeW8sIGxpdmVyeSBjb250cmlidXRpb25zIGJ5OiIpLCBpLmZvckVhY2goKGZ1bmN0aW9uKGUpIHsKCQkJIiIgPT09IGwgPyBsICs9IGUgOiBsID0gaVtpLmxlbmd0aCAtIDFdID09PSBlID8gbCArICIsIGFuZCAiICsgZSA6IGwgKyAiLCAiICsgZQoJCX0pKSwgY29uc29sZS5sb2cobCkKCX0pLCAxZTMpLCBnZW9mc1sib3ZlcmxheS5nbHNsIl0gPSAiXG4gIHVuaWZvcm0gc2FtcGxlcjJEIGNvbG9yVGV4dHVyZTtcbiAgdW5pZm9ybSBzYW1wbGVyMkQgd2F0ZXJtYXJrO1xuICB1bmlmb3JtIGJvb2wgaXNFbmFibGVkO1xuICB2YXJ5aW5nIHZlYzIgdl90ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIHZvaWQgbWFpbigpIHtcbiAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh3YXRlcm1hcmssIHZfdGV4dHVyZUNvb3JkaW5hdGVzKTtcbiAgICBpZiAoY29sb3IuciA+IDAuMCAmJiBpc0VuYWJsZWQpIHtcbiAgICAgIGdsX0ZyYWdDb2xvciA9IG1peCh0ZXh0dXJlMkQoY29sb3JUZXh0dXJlLCB2X3RleHR1cmVDb29yZGluYXRlcyksIGNvbG9yLCAwLjUpO1xuICAgIH0gZWxzZSB7XG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKGNvbG9yVGV4dHVyZSwgdl90ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfVxuICAiLCBnZW9mcy5meC5leHBPdmVybGF5ID0gewoJCWNyZWF0ZTogZnVuY3Rpb24oKSB7CgkJCWdlb2ZzLmZ4LmV4cE92ZXJsYXkuc2hhZGVyID0gbmV3IENlc2l1bS5Qb3N0UHJvY2Vzc1N0YWdlKHsKCQkJCWZyYWdtZW50U2hhZGVyOiBnZW9mc1sib3ZlcmxheS5nbHNsIl0sCgkJCQl1bmlmb3JtczogewoJCQkJCXdhdGVybWFyazogImh0dHBzOi8vMTM4NzcyOTQ4LTIyNzAxNTY2NzQ3MDYxMDM0MC5wcmV2aWV3LmVkaXRteXNpdGUuY29tL3VwbG9hZHMvMS8zLzgvNy8xMzg3NzI5NDgvb3ZlcmxheS5wbmciLAoJCQkJCWlzRW5hYmxlZDogITEKCQkJCX0KCQkJfSksIGdlb2ZzLmFwaS52aWV3ZXIuc2NlbmUucG9zdFByb2Nlc3NTdGFnZXMuYWRkKGdlb2ZzLmZ4LmV4cE92ZXJsYXkuc2hhZGVyKQoJCX0sCgkJdXBkYXRlOiBmdW5jdGlvbigpIHsKCQkJZ2VvZnMuZnguZXhwT3ZlcmxheS5zaGFkZXIudW5pZm9ybXMuaXNFbmFibGVkID0gYwoJCX0KCX0sIGdlb2ZzLmZ4LmV4cE92ZXJsYXkuY3JlYXRlKCksIGdlb2ZzLmFpcmNyYWZ0LkFpcmNyYWZ0LnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbihlLCBpLCB0LCBvKSB7CgkJYyA9ICExLCBnZW9mcy5meC5leHBPdmVybGF5LnVwZGF0ZSgpOwoJCXZhciBuID0gdGhpczsKCQlyZXR1cm4gZSA9IGUgfHwgdGhpcy5haXJjcmFmdFJlY29yZC5pZCwgKHQgPSB0aGlzLmxvYWQoZSwgdGhpcy5nZXRDdXJyZW50Q29vcmRpbmF0ZXMoKSwgdCwgbykpLnRoZW4oKGZ1bmN0aW9uKCkgewoJCQluLmxvYWRMaXZlcnkoaSkKCQl9KSksIGdlb2ZzLmFwaS5hbmFseXRpY3MuZXZlbnQoImFpcmNyYWZ0IiwgZ2VvZnMuYWlyY3JhZnRMaXN0W2VdLm5hbWUpLCB0Cgl9Cn0=";
let liveryPanelInit = document.getElementById("liveryPanel");
let liveryPanelML = document.createElement("div");
let isValidClient = false;
liveryPanelML.id = "liveryPanelML";
liveryPanelML.className = "liveryPanelML";

 async function fetchLiv() {await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/liveries.json")
 .then(res => res.json())
 .then(data => livObj = data) 
 .then(function(){appendLiveries()})
  }
fetchLiv();

function resetPanel() {
  liveryPanelML.innerHTML = `
  <h2 style="text-align: center;";>Liveries:</h2>
  `
}

resetPanel();
liveryPanelInit.style.display = "flex";
liveryPanelInit.append(liveryPanelML);


function initiateSearch(type) {
  if (type == 'airline') {
    Object.values(document.getElementsByClassName("airframeButtons")).forEach(function(e) {
      e.style.display = "none";
    })
    document.getElementById("trueSearchBar").style.display = "inline";
  }
  if (type == 'airframe') {
    document.getElementById("trueSearchBar").style.display = "none";
    Object.values(document.getElementsByClassName("airframeButtons")).forEach(function(e) {
      e.style.display = "flex";
    })
  }
}



function appendLiveries() {
  try {
  livObj.aircraft.forEach(function(e){
    var image = e.thumb;
    var liveryMessage = ""
    if (e.hasOwnProperty("pbrComposite")) {
      liveryMessage = e.livery + "|" + e.pbrComposite + "|" + e.normalMap;
    } else {
      liveryMessage = e.livery;
    }
    var onclickevent = `window.opener.postMessage('${liveryMessage}', ${"'" + "*" + "'"});`
      var currentObject = document.createElement("div")
      currentObject.innerHTML = `<div class="livGallery" onclick="${onclickevent}"><a target="_blank" >
    <img src="${image}" alt="Cinque Terre" width="600" height="400">
  </a>
    <div class="livDesc">${e.name}</div>
  </div>`
    var target = document.getElementById("liveryPanelML");
    target.appendChild(currentObject);
    })
  }
  catch(error) {
    console.log(error);
  }
}

function appendSearchLiveries(arr) {
  toggleLiveryPanel();
  try {
    var target = document.getElementById("liveryPanelML");
    target.innerHTML = "";
  arr.forEach(function(e){
    var image = e.mptx;
    var onclickevent = `window.opener.postMessage('${e.livery}', ${"'" + "*" + "'"});`
      var currentObject = document.createElement("div")
      currentObject.innerHTML = `<div class="livGallery" onclick="${onclickevent}"><a target="_blank" >
    <img src="${image}" alt="Cinque Terre" width="600" height="400">
  </a>
    <div class="livDesc">${e.name}</div>
  </div>`
    
    target.appendChild(currentObject);
    
    })
  }
  catch(error) {
    console.log(error);
  }
  
}

function getAirframes(airframe) {
  
}

function isHidden(el) {
    return (el.offsetParent === null)
}

function hideAll() {
  var panel = document.getElementById("liveryPanel");
  var panel1 = document.getElementById("searchBar");
  var panel2 = document.getElementById("creditsPanel");
  var panel3 = document.getElementById("importPanel");
    panel.style.display = "none";
    panel1.style.display = "none";
    panel2.style.display = "none";
    panel3.style.display = "none";

}

function hideOthers(current) {
  var panel = document.getElementById("liveryPanel");
  var panel1 = document.getElementById("searchBar");
  var panel2 = document.getElementById("creditsPanel");
  var panel3 = document.getElementById("importPanel");

  if (current == 0) {
    panel1.style.display = "none";
    panel2.style.display = "none";
    panel3.style.display = "none";
  }
  if (current == 1) {
    panel.style.display = "none";
    panel2.style.display = "none";
    panel3.style.display = "none";
  }
  if (current == 2) {
    panel.style.display = "none";
    panel1.style.display = "none";
    panel3.style.display = "none";
  }
  if (current == 3) {
    panel.style.display = "none";
    panel1.style.display = "none";
    panel2.style.display = "none";
  }
}

function toggleLiveryPanel() {
  var panel = document.getElementById("liveryPanel");
  hideOthers(0);
  if (isHidden(panel)) {
    panel.style.display = "inline";
  } else {
    panel.style.display = "none";
  }
}

function toggleSearchPanel() {
  var panel = document.getElementById("searchBar");
  hideOthers(1);
  if (isHidden(panel)) {
    panel.style.display = "inline";
  } else {
    panel.style.display = "none";
  }
}

function toggleCreditsPanel() {
  var panel = document.getElementById("creditsPanel");
  hideOthers(2);
  if (isHidden(panel)) {
    panel.style.display = "inline";
  } else {
    panel.style.display = "none";
  }
}

function toggleUploadPanel() {
  var panel = document.getElementById("importPanel");
  hideOthers(3);
  if (isHidden(panel)) {
    panel.style.display = "inline";
  } else {
    panel.style.display = "none";
  }
}


var searchModal = document.getElementById("searchBar");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  searchModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == searchModal) {
    searchModal.style.display = "none";
  }
}

function doSearch() {
  var result = [];
  var query = document.getElementById("query").value;
    livObj.aircraft.forEach(function(e) {
      if(typeof e.name === "string") {
        if (e.name.toString().toLowerCase().includes(query.toLowerCase())) {
          result.push(e);
        }
      }
    })
  console.log(result)
  searchModal.style.display = "none";
  appendSearchLiveries(result);
};

function doAirframeSearch(airframe) {
  var result = [];
    livObj.aircraft.forEach(function(e) {
      if(typeof e.name === "string") {
        if (e.name.toString().toLowerCase().includes(airframe.toLowerCase())) {
          result.push(e);
        }
      }
    })
  console.log(result)
  searchModal.style.display = "none";
  appendSearchLiveries(result);
}

document.getElementById("importSubmit").addEventListener("click", function() {
  isValidClient = false;
  var customUrl = document.getElementById("importUrl").value;
  checkIntegrity();
   window.opener.postMessage(customUrl + "?custom", "*");
});

hideAll()
let runs = 0
window.addEventListener('message', (e) => {
  if (e.data !== currentEncodedScript) {
    console.log("FAIL: " + e.data);
    isValidClient = false;
    window.opener.postMessage(1, "*");
    window.opener.postMessage("inv", "*");
  } else {
    console.log("PASS: " + e.data);
    isValidClient = true;
  }
});

function checkIntegrity() {
  window.opener.postMessage("test", "*");
}
var integrityInt = setInterval(function(){checkIntegrity()}, 2000);
