(function() {
	console.log('coucou');
	//alert('Bienvenue dans ma super liste !');

	$('.container').append('<p>Pourquoi ?</p>');
	
	//Création tableau vide
	var tabTasks = [];

	// Listener sur bouton add
	$('#add').on('click', function() {
		var indexTask = tabTasks.length;
		tabTasks[indexTask] = {
			title : $('input[name="todo"]').val(),
			status : false
		};
		console.log(tabTasks);

		$('.tasks').append('<label data-index="'+ indexTask +'"><input type="checkbox" data-index="'+ indexTask + '">'+ tabTasks[indexTask].title +'</label>');
	});

	//Clic sur checkbox pour modifier class
	$('.tasks').on('click', 'input[type="checkbox"]', function(){
		var numInput = $(this).data('index');
		isChecked(numInput);
		
	});

	$('#tasksDone').on('click', function() {
		$('.tasks').html('');
		var len = tabTasks.length;
		for (var i = 0; i < len; i++) {
			if (tabTasks[i].status) {
				$('.tasks').append('<label data-index="' + i +'"><input type="checkbox" checked="checked" data-index="' + i + '">' + tabTasks[i].title + '</label>');
				$('label[data-index="'+ i +'"]').addClass('checked');
			}
		}
	});

	$('#tasksToDo').on('click', function() {
		$('.tasks').html('');
		var len = tabTasks.length;
		for (var i = 0; i < len; i++) {
			if (!tabTasks[i].status) {
				$('.tasks').append('<label data-index="' + i +'"><input type="checkbox" data-index="' + i + '">' + tabTasks[i].title + '</label>');
			}
		}
	});

	$('#allTasks').on('click', function() {
		$('.tasks').html('');
		var len = tabTasks.length;
		for (var i = 0; i < len; i++) {
			if (tabTasks[i].status) {
				$('.tasks').append('<label data-index="' + i +'"><input type="checkbox" checked="checked" data-index="' + i + '">' + tabTasks[i].title + '</label>');
				$('label[data-index="'+ i +'"]').addClass('checked');
			}
			else {
				$('.tasks').append('<label data-index="' + i +'"><input type="checkbox" data-index="' + i + '">' + tabTasks[i].title + '</label>');
			}
		}
	});




function isChecked(numInput){
	if (!tabTasks[numInput].status){
			$('label[data-index="'+ numInput +'"]').addClass('checked');
			tabTasks[numInput].status = true;
			console.log('addClass');
		} else{
			$('label[data-index="'+ numInput +'"]').removeClass('checked');
			tabTasks[numInput].status = false;
			console.log('removeClass');
	}
}




	/*$('.tasks').append('<label><input type="checkbox">Sortir le chien</label>');


		//Au click sur Ajouter, on ajoute la tache à la liste
		$('#add').on('click', function(){
			var newTask = $('input[name="todo"]').val();
			var $label = $("label");
			var next_num = $label.length + 1;
			console.log('Next_num = ' + next_num);
			$('.tasks').append('<label id="task' + next_num + '"><input data-num="' + next_num + '" type="checkbox">' + newTask + '</label>');


			//Au click sur une checkbox, on active ou désactive la tache
			$('input[type="checkbox"]').on('click', function(){
				console.log('Au click sur la tache');
				var numInput = $(this).data('num');
				console.log("numInput" + numInput);
				isChecked(numInput);
			});

		});

		//Fonction qui active ou désactive la tache
		function isChecked(numeroTask) {
			if ($('input[data-num="'+ numeroTask +'"]').is(':checked')) {
				$('#task' + numeroTask).addClass("checked");
				console.log('checked donc Je change la classe');
			} else {
				$('#task' + numeroTask).removeClass("checked");
				console.log('unchecked donc je change la classe');
			}
		}*/



	})();