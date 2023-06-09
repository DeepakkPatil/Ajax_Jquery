
function fetchData(){

    var req= new XMLHttpRequest() ;
    req.onload= function()
    {
        let data= JSON.parse(req.response) ;
        let url= data.message ;
        $('#imgDog').attr('src',url) ;
        console.log(data) ;
    }
    req.open('get','https://dog.ceo/api/breeds/image/random',true) // async means wait nhi krna chahiye 
    req.send() ;

}

// Method 2
// using ajax keyword

function fetchData2()
{
    $.ajax({
    url: 'https://dog.ceo/api/breeds/image/random',
    method: 'GET',
    success: function(response) {
        // handle success response
        console.log(response);
        $('#dogName').text(response.message);
        $('#imgDog').attr('src', response.message);
    },
    error: function(error) {
        // handle error response
        console.log(error);
    }
    });
}


function fetchData3()
{

    $.get('https://dog.ceo/api/breeds/image/random', function(response) {
        // handle success response
        console.log(response);
        $('#dogName').text(response.message);
        $('#imgDog').attr('src', response.message);
    })

}


// dynamic updation of img

function fetchData4()
{

    $.get('https://dog.ceo/api/breeds/image/random', function(response) {
        // handle success response
       const data= response.message ;
        console.log("4",data)
        $('<img>',{
            src: data,
            style: "width: 300px; height: 300px; object-fit:'cover'"
         }).appendTo('#container')
    })

}



$('#fetch').click(fetchData4) ;