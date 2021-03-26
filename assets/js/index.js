$(document).ready(function() {

    $("#rm-filters-btn").prop("disabled", true);

    $("#random-songs-form").on("submit", function(e) {
        e.preventDefault();
        let form = $(this);
        let activeFilters = form.find(".form-group:not(.inactive)");
        let formData = {};
        let valid = true;

        activeFilters.each(function() {
            let field = $(this).data("field");
            let value;
            if (field == "favourite") {
                value = $(this).find(`#random-songs-${field}`).prop("checked") ? 1 : 0;
            } else if (field == "results") {
                value = ($(this).find(`#random-songs-${field} input[type=radio]:checked`).val() == "true");
            } else if (field == "genre") {
                let name = $(this).find(`#random-songs-${field}`).val();
                let genre = window.genres.find(item => Object.keys(item)[0] == name);
                if (genre) {
                    value = genre[name];
                } else {
                    alert("Invalid Genre! Please choose a valid answer.");
                    return valid = false;
                }
            } else if(field == "lyrics") {
                let str = $(this).find(`#random-songs-${field}`).val();
                value = str.replace(/ /g, "%20");
            } else {
                value = $(this).find(`#random-songs-${field}`).val();
            }
            formData[field] = value;
        });

        console.log(formData);
        if (valid)
            getRandomSongs(formData);
    });

    $("button.filter-btn").on("click", function() {
        let active = !(this.dataset.active === "true");
        this.dataset.active = active;
        // Split name at first "-" to get filter field
        let filterField = $(this).attr("name").split("-")[0];

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

    $(".filter-btn").each(function () {
        let target = this;
        const observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            console.log(mutation);

            if (mutation.attributeName == "data-active") {
                const elements = $(".filter-btn");
                let active = [];
                let inactive = [];

                elements.each(function () {
                    if (this.dataset.active === "true" || this.dataset.active === true) {
                        active.push(this);
                    } else {
                        inactive.push(this);
                    }
                });

                if (active.length > 0) {
                    $("#rm-filters-btn").prop("disabled", false);
                    if (inactive.length == 0)
                        $("#add-filters-btn").prop("disabled", true);
                }
                if (inactive.length > 0) {
                    $("#add-filters-btn").prop("disabled", false);
                    if (active.length == 0)
                        $("#rm-filters-btn").prop("disabled", true);
                }
            }
          });
        });
      
        observer.observe(target, { attributes: true });
    });

    $(".filter-toggle").on("click", function() {
        let activate = ($(this).attr("id").includes("add"));
        if (activate) {
            let buttons = $("button.filter-btn[data-active=false]");
            buttons.each(function() {
                $(this).click();
            });
        } else {
            let buttons = $("button.filter-btn[data-active=true]");
            buttons.each(function() {
                $(this).click();
            });
        }
    });
});

const spinner = {
    start: function() {
        $(".sk-folding-cube").show();
        $("body").append("<div class='modal-backdrop custom'></div>");
        $("body").addClass("modal-open");
    },
    stop: function() {
        $(".sk-folding-cube").hide();
        $("body .modal-backdrop").remove();
        $("body").removeClass("modal-open");
    }
};

$(document)
  .ajaxStart(function () {
    spinner.start();
  })
  .ajaxStop(function () {
    spinner.stop();
  });