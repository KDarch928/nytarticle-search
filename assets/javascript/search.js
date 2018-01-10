function createUrlSearch(url, api, q, page, end, start) {
    var finalSerachTerm = url + "?api-key=" + api + "&q=" + q;

    if (page !== "") {
        finalSerachTerm = finalSerachTerm + "&page=" + page;
    }
    if (end !== "") {
        finalSerachTerm = finalSerachTerm + "&end_date=" + end;
    }
    if (start !== "") {
        finalSerachTerm = finalSerachTerm + "&begin_date=" + start;
    }

    return finalSerachTerm
}

$("").on("click", function (event) {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var apiKey = "8c51ce3efd564cb8bba94e84340e5384";
    var q = "";
    var page = "";
    // some var + "1201"
    var endDate = "1201";
    // some var + "0101"
    var startDate = "";

    var querySearch = createUrlSearch(url, apiKey, q, page, endDate, startDate);
    $.ajax({
        url: querySearch,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
        var headline = result.response.docs[0].headline.main;
        var author = result.response.docs[0].byline.original;
        var snip = result.response.docs[0].snippet;
        console.log(headline);
        console.log(author);
        console.log(snip);
    }).fail(function(err) {
        throw err;
    });
})
