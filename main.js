function getpara()
{
    var inputs = []

    for(var i = 1 ; i <=6 ; i++)
    {
        var sentence = document.getElementById("input_" + i).value;
        inputs.push(sentence);
    }

    document.getElementById("showpara").innerHTML = inputs.join(". ");
}
