// För CRUD-möjligheter med wp-databasen
class saveWork {
    constructor() {
        this.events();
    }

    // Event för knappar som startar metoder
    events() {
        $(".deleteWork").on("click", this.deleteWork);
        // $(".editWork").on("click", this.editWork.bind(this));
        // $(".saveUpdateWork").on("click", this.updateWork.bind(this));
        // $(".submitWork").on("click", this.saveWork.bind(this));
    }

    // Metoder 
    // För att radera min post_type "work" från front-end
    deleteWork(event) {
        var thisWork = $(event.target).parents("li");
        if (confirm("Vill du verkligen radera?")) {

            // jQuery Ajax (kontrollera request)
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', workData.nonce);
                },
                url: workData.root_url + '/wp-json/wp/v2/work/' + thisWork.data('id'),
                type: 'DELETE',
                success: (response) => {
                    // thisWork.slideUp();
                    // Skriv ut vid lyckat anrop
                    console.log("Det lyckades!");
                    console.log(response);
                    location.reload();
                },
                error: (response) => {
                    // Vid misslyckat anrop 
                    console.log("Det misslyckades tyvärr!");
                    console.log(response);
                    location.reload();

                }
            });
        }
    }


    /*
    // För att skapa nya work-inlägg
    saveWork(event) {

        var theNewWork = {
            'title': $(".newTitle").val(),
            'kundnamn': $(".newKundnamn").val(),
            'adress': $(".newAdress").val(),
            'datum': $(".newDatum").val(),
            'typ av arbete': $(".newTypAvArbete").val(),
            'produkter': $(".newProdukter").val(),
            'beskrivning': $(".newBeskrivning").val(),
            'status': 'publish',
        }

        // jQuery Ajax (kontrollera request)
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', workData.nonce);
            },
            url: workData.root_url + '/wp-json/wp/v2/work/',
            type: 'POST',
            data: theNewWork,
            success: (response) => {
                $(".newTitle").val('');
                $(".kundnamn").val('');
                $(".newAdress").val('');
                $(".newDatum").val('');
                $(".newTypAvArbete").val('');
                $(".newProdukter").val('');
                $(".newBeskrivning").val('');

                // Skriv ut vid lyckat anrop
                console.log("Inlägget skickades!");
                console.log(response);
                alert("Inlägget publicerades!")
            },
            error: (response) => {
                // Vid misslyckat anrop 
                console.log("Inlägget skickades!");
                console.log(response);
                alert("Publiceringen misslyckades! Vänligen försök igen.")
            }
        });
    }


    // För att uppdatera inlägg och skicka AJAX-anrop med jQuery för POST
    updateWork(event) {
        var thisWork = $(event.target).parents("li");


        var ourUpdatedPost = {
            'kundnamn': thisWork.find('input[name="kundnamn"]').val(),
            'title': thisWork.find(".singleField").val(),
        }


        // jQuery Ajax (kontrollera request)
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', workData.nonce);
            },
            url: workData.root_url + '/wp-json/wp/v2/work/' + thisWork.data('id'),
            type: 'PUT',
            data: ourUpdatedPost,
            "meta": {
                "kundnamn": find(".newKundnamn"),
            },
            success: (response) => {
                this.makeWorkReadOnly(thisWork);
                // Skriv ut vid lyckat anrop
                console.log("Inlägget uppdaterades!");
                console.log(response);
                location.reload();

            },
            error: (response) => {
                // Vid misslyckat anrop 
                console.log("Inlägget uppdaterades inte!");
                console.log(response);
                location.reload();

            }
        });

    }

    // För att redigera och uppdatera work frontend
    editWork(event) {
        var thisWork = $(event.target).parents("li");
        if (thisWork.data("state") == "editable") {
            // Innehållet ska ej gå att ändra 
            this.makeWorkReadOnly(thisWork);
        } else {
            // Innehållet ska gå att ändra
            this.makeWorkEditable(thisWork);
        }
    }

    // Här ska knappen göra så att det går att redigera innehållet på min single-work sida
    makeWorkEditable(thisWork) {
        thisWork.find(".editWork").html('<i class="fa fa-times" aria-hidden="true"></i> Avbryt');
        thisWork.find(".singleField, .singleTextArea").removeAttr("readonly").addClass("editWork");
        thisWork.find(".saveUpdateWork").addClass("updateWorkVisible");
        thisWork.data("state", "editable");
    }

    // Knappen avbryt ska göra så att det endast går att läsa innehållet, ej redigera
    makeWorkReadOnly(thisWork) {
        thisWork.find(".editWork").html('<i class="fa fa-pencil" aria-hidden="true"></i> Ändra');
        thisWork.find(".singleField, .singleTextArea").attr("readonly", "readonly").removeClass("editWork");
        thisWork.find(".saveUpdateWork").removeClass("updateWorkVisible");
        thisWork.data("state", "cancel");
    }
*/

}

var savework = new saveWork();