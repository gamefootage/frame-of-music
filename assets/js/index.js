$(document).ready(function() {

    $("#random-songs-form").on("submit", function(e) {
        e.preventDefault();
        form = $(this);
        var activeFilters = form.find(".form-group:not(.inactive)");
        var formData = {};

        activeFilters.each(function() {
            let field = $(this).data("field");
            if (field == "hasLyrics") {
                var value = $(this).find(`#random-songs-${field}`).prop("checked") ? 1 : 0;
            } else {
                var value = $(this).find(`#random-songs-${field}`).val();
            }
            formData[field] = value;
        });

        console.log(formData);
        getRandomSongs(formData);
    });

    $("button.filter-btn").on("click", function() {
        var active = !($(this).data("active"));
        $(this).data("active", active);
        // Split name at first "-" to get filter field
        var filterField = $(this).attr("name").split("-")[0];

        if (active) {
            $(this).removeClass("btn-outline-success");
            $(this).addClass("btn-outline-danger");
            $(this).find(".fa-check").hide();
            $(this).find(".fa-times").show();

            $(`[data-field="${filterField}"]`).removeClass("inactive");
        } else {
            $(this).removeClass("btn-outline-danger");
            $(this).addClass("btn-outline-success");
            $(this).find(".fa-times").hide();
            $(this).find(".fa-check").show();

            $(`[data-field="${filterField}"]`).addClass("inactive");
        }
    });
});