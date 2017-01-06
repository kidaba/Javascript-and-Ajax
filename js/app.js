function loadAjax() {
   var inputValue = document.getElementById('search').value;
   var myRegExp = new RegExp(inputValue, "i");
   var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var ajaxHTML = '<ul class="imagelist">';
                for (var i = 0; i < data.length; i++) {
                    if (data[i].name.search(myRegExp) !== -1 || data[i].bio.search(myRegExp) !== -1 || data[i].tags.search(myRegExp) !== -1) {
                        ajaxHTML += '<li><h2>' + data[i].name + '</h2>';
                        ajaxHTML += '<img src="../img/' + data[i].source + '.jpg" alt="'
                        + data[i].name + '">';
                        ajaxHTML += '<p class="bio">' + data[i].bio + '</p>';
                        ajaxHTML += '<p class="tag">Tags: ' + data[i].tags + '</p>';
                        ajaxHTML += '</li>'; 
                    }   // end of Reg Exp if statement
                }   // end of for loop
            ajaxHTML += '</ul>';
            var innerContents = document.getElementById('ajax');
            innerContents.innerHTML = ajaxHTML;
        }   // end of if statement
    };  // callback function
    xhr.open('GET', '../data/data.json');
    xhr.send(); 
}   // load Ajax function