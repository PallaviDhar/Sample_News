$(document).ready(function(){
		//alert("jQuery is working");
		$('#search').click(function(){
			var term=$('#search_term').val();
			$.ajax({
				url:'https://newsapi.org/v2/everything?q=' + term +'&apiKey=94badee24432439e820d135370e30ade',
				success:function(data){
					$('#result').empty();
					for (var i in data.articles){
					//console.log(data.articles[i].title);
					$('#result').append('<div class="col-md-6" style="margin-top: 20px"><div class="card"><div class="card-body"><img src="' + data.articles[i].urlToImage +'" class="card-img-top width=50 height=150"><h4 class="card-title">'+ data.articles[i].title +'</h4><p class="card-text">' + data.articles[i].description +'</p><a href="' + data.articles[i].url + '" class="btn btn-danger btn-block" target="_blank">Read More</a></div></div></div>');
				}
				},
				error:function(){
					alert("Some Error occured!!!");
				}
			})
		})
		$.ajax({
			url:"https://newsapi.org/v2/top-headlines?country=us&apiKey=94badee24432439e820d135370e30ade",
			success:function(data){

				for (var i in data.articles){
					//console.log(data.articles[i].title);

					$('#result').append('<div class="col-md-6" style="margin-top: 20px"><div class="card"><div class="card-body" data-toggle="collapse"><img src="' + data.articles[i].urlToImage +'" class="card-img-top width=50 height=150"><h4 class="card-title">'+ data.articles[i].title +'</h4><p class="card-text" data-toggle="collapse">' + data.articles[i].description +'</p><a href="' + data.articles[i].url + '" class="btn btn-danger btn-block" target="_blank">Read More</a></div></div></div>');
				}
			},
			error:function(){
				alert('Some error occured');
			}
		})
	})
function country_fetch(value){
	var cntry=value;
	$.ajax({
				url:'https://newsapi.org/v2/top-headlines?country=' + cntry +'&apiKey=94badee24432439e820d135370e30ade',
				success:function(data){
					$('#result').empty();
					for (var i in data.articles){
					//console.log(data.articles[i].title);
					$('#result').append('<div class="col-md-6" style="margin-top: 20px"><div class="card" ><div class="card-body"><img src="' + data.articles[i].urlToImage +'" class="card-img-top width=50 height=150"><h4 class="card-title" data-toggle="collapse">'+ data.articles[i].title +'</h4><p class="card-text" data-toggle="collapse">' + data.articles[i].description +'</p><a href="' + data.articles[i].url + '" class="btn btn-danger btn-block" target="_blank">Read More</a></div></div></div>');
				}
				},
				error:function(){
					alert("Some Error occured!!!");
				}
			})
}

function dark_mode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
    }