var key = config.SECRET_KEY;

//Will be used for every day parsing
//Need to first train on thousands of data
function updateQueryStringParameter(url, key, value) {
    if (!url) url = window.location.href;

    var regex = new RegExp("([?&])" + key + "=.*?(&|#|$)", "i");

    var hashParts = url.split('#');

    if (regex.test(hashParts[0])) {
        //UPDATE
        return url.replace(regex, '$1' + key + "=" + value + '$2');
    } else {
        //ADD
        var separator = hashParts[0].indexOf('?') !== -1 ? '&' : '?';

        url = hashParts[0] + separator + key + '=' + value;
        if (typeof hashParts[1] !== 'undefined' && hashParts[1] !== null)
            url += '#' + hashParts[1];

        return url;
    }
}

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': key,
  'begin_date': '20080101',
  'page': '1'
});


function returnData(handleData) {
  $.ajax({
    url: url,
    method: 'GET',
    success:function(data) {
      handleData(data);
    }
  });
}
pageno = 1
checkmaster = []
while(pageno<3) {
  console.log("PAGE NUMBER IS... "+pageno);

  checkmaster.push(returnData(function(output) {
    checker = []
    objects = output.response.docs;
    for (var row in objects) {
        checker.push(objects[row])
        console.log(objects[row])


    } return checker;
   }))
   pageno++;
   url = updateQueryStringParameter(url, 'page', pageno)


}
console.log(checkmaster[0])
