$(function () {
    $('#btnAdd').on('click', function () {
        var name, country, id;
        id = $("#txtId").val();
        name = $("#txtName").val();
        address = $("#txtAddress").val();
        email =  $("#txtEmail").val();
        var edit = "<a class='edit' href='JavaScript:void(0);' >Edit</a>";
        var del = "<a class='delete' href='JavaScript:void(0);'>Delete</a>";

        if (name == "" || address == "") {
            alert("Name and Address fields required!");
        } else {
            var table = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + address + "</td><td>" + edit + "</td><td>" + del + "</td></tr>";
            $("#tblCustomers").append(table);
        }
        id = $("#txtId").val("");
        name = $("#txtName").val("");
        address = $("#txtAddress").val("");
        email = $("#txtEmail").val();
        Clear();
    });

    $('#btnUpdate').on('click', function () {
        var name, address, id;
        id = $("#txtId").val();
        name = $("#txtName").val();
        address = $("#txtAddress").val();
        email =  $("#txtEmail").val();

        $('#tblCustomers tbody tr').eq($('#hfRowIndex').val()).find('td').eq(1).html(name);
        $('#tblCustomers tbody tr').eq($('#hfRowIndex').val()).find('td').eq(2).html(address)

        $('#btnAdd').show();
        $('#btnUpdate').hide();
        Clear();
    });

    $("#tblCustomers").on("click", ".delete", function (e) {
        if (confirm("Are you sure want to delete this record!")) {
            $(this).closest('tr').remove();
        } else {
            e.preventDefault();
        }
    });

    $('#btnClear').on('click', function () {
        Clear();
    });

    $("#tblCustomers").on("click", ".edit", function (e) {
        var row = $(this).closest('tr');
        $('#hfRowIndex').val($(row).index());
        var td = $(row).find("td");
        $('#txtId').val($(td).eq(0).html());
        $('#txtName').val($(td).eq(1).html());
        $('#txtAddress').val($(td).eq(2).html());
        $("#txtEmail").val($(td).eq(2).html());
        $('#btnAdd').hide();
        $('#btnUpdate').show();
    });
});
function Clear() {
    $("#txtId").val("");
    $("#txtName").val("");
    $("#txtAddress").val("");
    $("#txtEmail").val("");
    
    $("#hfRowIndex").val("");
}