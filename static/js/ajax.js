var animalContainer = document.getElementById("product-latest");
var moreProdcut = document.getElementById("product-More");
window.addEventListener("load", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://raw.githubusercontent.com/Theemiss/JSON-testfiles/main/test.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data) {
    var htmlStringLast = "";
    for (i = data.length - 1; i >= 0; i--) {
        htmlStringLast += '<div class="col-md-6 col-lg-4 mb-4"><div class="card listing-preview"><img class="card-img-top" src=' + data[i].thumbPic + ' alt=""><div class="card-img-overlay"><h2>  <span class="badge badge-secondary text-white"> ' + data[i].price + '</span></h2></div><div class="card-body"><div class="listing-heading text-center"><h4 class="text-primary"> ' + data[i].title + '</h4><p><i class="fas fa-map-marker "></i> ' + data[i].place + '</p></div><hr><div class="row py-2 text-s"><div class="col-6"><i class="fas fa-th-large"></i>' + data[i].sqt + '</div><div class="col-6"><i class="fas fa-user"></i> info:' + data[i].info + '</div></div><div class="row py-2 text-s"><div class="col-6"><i class="fas fa-user"></i> info: ' + data[i].info + '</div><div class="col-6"><i class="fas fa-user"></i> info: ' + data[i].info + '</div></div><hr><div class="row py-2 text-s"><div class="col-6"><i class="fas fa-user"></i> ' + data[i].sellername + '</div></div><div class="row text-s pb-2"><div class="col-6"><i class="fas fa-clock"></i>' + data[i].date + '</div></div><hr><a href=' + data[i].link + 'class="btn btn-primary btn-block">More Info</a></div></div></div></div></div>';
        if (i == data.length - 3) {
            break;
        }
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlStringLast);
    var htmlStringMore = "";
    for (i = 0; i < data.length; i++) {
        if (data[i].place.match(/Nabeul/g)) {
            htmlStringMore += '<div class="col-md-6 col-lg-4 mb-4"><div class="card listing-preview"><img class="card-img-top" src=' + data[i].thumbPic + ' alt=""><div class="card-img-overlay"><h2>  <span class="badge badge-secondary text-white"> ' + data[i].price + '</span></h2></div><div class="card-body"><div class="listing-heading text-center"><h4 class="text-primary"> ' + data[i].title + '</h4><p><i class="fas fa-map-marker text-secondary"></i> ' + data[i].place + '</p></div><hr><div class="row py-2 text-secondary"><div class="col-6"><i class="fas fa-th-large"></i>' + data[i].sqt + '</div><div class="col-6"><i class="fas fa-user"></i> info:' + data[i].info + '</div></div><div class="row py-2 text-secondary"><div class="col-6"><i class="fas fa-user"></i> info: ' + data[i].info + '</div><div class="col-6"><i class="fas fa-user"></i> info: ' + data[i].info + '</div></div><hr><div class="row py-2 text-secondary"><div class="col-6"><i class="fas fa-user"></i> ' + data[i].sellername + '</div></div><div class="row text-secondary pb-2"><div class="col-6"><i class="fas fa-clock"></i>' + data[i].date + '</div></div><hr><a href=' + data[i].link + 'class="btn btn-primary btn-block">More Info</a></div></div></div></div></div>';
        }

    }
    moreProdcut.insertAdjacentHTML('beforeend', htmlStringMore)



}