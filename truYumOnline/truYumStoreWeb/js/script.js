function validateForm() {

    if (document.getElementById('title').value == "")
    {
        alert('Title is required.');
        document.getElementById('title').focus();
        return false;
    }

    var fieldLength = document.getElementById('title').value.length;

    if (fieldLength < 2 || fieldLength > 65) {
        alert('You have entered name of ' + fieldLength + ' length.' + '\nTitle should have 2 to 65 characters.');
        document.getElementById('title').focus();
        return false;
    }

    if (document.getElementById('price').value == "") {
        alert('Price is required.');
        document.getElementById('price').focus();
        return false;
    }

    var price = document.getElementById('price').value;

    if (isNaN(price))
    {
        alert('Price has to be a number.');
        document.getElementById('price').focus();
        return false;
    }


    if (document.getElementById('dateOfLaunch').value == "") {
        alert('Date of Launch is required.');
        document.getElementById('dateOfLaunch').focus();
        return false;
    }

    if (document.getElementById('category').value == "Choose")
    {
        alert('Select one category.');
        document.getElementById('category').focus();
        return false;
    }
    
    return true;
}