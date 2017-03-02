    $("#submit").on("click", function(event) {
      event.preventDefault();

      // Here we grab the form elements
      var newDriverPost = {
        //Depart/Arrival Information
        depart_address: $("#depart-Address").val().trim(),
        arrival_address: $("#arrival-Address").val().trim(),
        depart_time: $("#depart-Time").val().trim(),
        //Return Arrival/Depart Information
        return_depart_address: $("#return-depart-Address").val().trim(),
        return_arrival_address: $("#return-arrival-Address").val().trim(),
        return_depart_time: $("#return-depart-Time").val().trim(),
        //Number of seats/cost/any notes
        seats: $("#seats").val().trim(),
        cost: $("#cost").val().trim(),
        notes: $("#notes").val().trim(),
        car: $("#car-Make").val().trim()
      };
      console.log("newDriverPost");
      console.log(newDriverPost);

      // This line is the magic. It"s very similar to the standard ajax function we used.
      // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
      // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
      // depending on if a tables is available or not.

      $.post("/api/postride", newDriverPost,
        function(data) {

        });

        // Clear the form when submitting
        // $("#depart-Address").val("");
        // $("#arrival-Address").val("");
        // $("#depart-Time").val("");
        // //Return Arrival/Depart Information
        // $("#return-depart-Address").val("");
        // $("#return-arrival-Address").val("");
        // $("#return-depart-Time").val("");
        // //Number of seats/cost/any notes
        // $("#seats").val("");
        // $("#cost").val("");
        // $("#notes").val("");
        // $("#car-Make").val("");

    });
