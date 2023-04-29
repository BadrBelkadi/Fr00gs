var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://accounts-api.teamsnap.com/accounts/profile', true);
xhr.withCredentials = true;

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // Display the response on the page
        var responseDiv = document.getElementById('response');
        responseDiv.textContent = xhr.responseText;
    }
};

xhr.send();