$(document).ready(function() {

    $("#random-songs-form").on("submit", function(e) {
        e.preventDefault();
        var form = $(this);
        var activeFilters = form.find(".form-group:not(.inactive)");
        var formData = {};

        activeFilters.each(function() {
            let field = $(this).data("field");
            if (field == "favourite") {
                var value = $(this).find(`#random-songs-${field}`).prop("checked") ? 1 : 0;
            } else if (field == "results") {
                var value = ($(this).find(`#random-songs-${field} input[type=radio]:checked`).val() == "true");
            } else if (field == "genre") {
                var name = $(this).find(`#random-songs-${field}`).val();
                var genre = window.genres.find(item => Object.keys(item)[0] == name);
                if (genre) {
                    var value = genre[name];
                } else {
                    alert("Invalid Genre! Please choose a valid answer.");
                    return false;
                }
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
            $(`[data-field="${filterField}"]`).find("input").prop("required", true);

            $(`[data-field="${filterField}"]`).removeClass("inactive");
        } else {
            $(this).removeClass("btn-outline-danger");
            $(this).addClass("btn-outline-success");
            $(this).find(".fa-times").hide();
            $(this).find(".fa-check").show();
            $(`[data-field="${filterField}"]`).find("input").prop("required", false);

            $(`[data-field="${filterField}"]`).addClass("inactive");
        }
    });
});