$(document).ready(function () {
    jQuery.expr[':'].Contains = function (a, i, m) {
        return (a.textContent || a.innerText || '').toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
    // cache current expanded item
    var expandedItems;

    // no search, show all and re-expand
    function clearSearchResult() {
        if (!expandedItems) expandedItems = $('nav > li > input[type=checkbox]:checked');

        $('nav > li:not(.group)').show();
        $('nav > li:not(.group) > ul li').show();

        $('nav > li:not(.group) > input[type=checkbox]').each(function () {
            $(this).prop('checked', false);
        });

        if (expandedItems) expandedItems.each(function () {
            $(this).prop('checked', true)
        });

        expandedItems = undefined;
    }

    function find(search) {
        if (!expandedItems) expandedItems = $('nav > li > input[type=checkbox]:checked');

        //set all checkbox checked
        $('nav > li > input[type=checkbox]').each(function () {
            $(this).prop('checked', true)
        });

        //we are searching
        //show all parents
        $('nav > li').show();

        //hide all results
        $('nav > li:not(.group) > ul li').hide();

        //show results matching filter
        $('nav > li:not(.group) > ul li').find(`a:Contains(${search})`).parent().parent().show();

        //hide parents without children
        $('nav > li:not(.group, .nav-home-link)').each(function () {
            if ($(this).find(`a:Contains(${search})`).length == 0) {
                $(this).hide();
            }
        });
    }


    //on typing search
    $('#nav-search').on('keyup', function (event) {
        var search = $(this).val();


        if (!search) {
            clearSearchResult()

        } else {
            find(search);
        }
    });

    // check user clicked pseudo cancel button
    $('#nav-search').on('search', function (event) {
        if (this.value === '') {
            clearSearchResult();
        } else {
            find(this.value);
        }
    });
});