(function() {
	'use strict';
	
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

		$('.tasks').append('<li><div class="ui checkbox"><input type="checkbox" data-index="'+ indexTask + '"><label data-index="'+ indexTask +'">'+ tabTasks[indexTask].title +'</label></div></li>');
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
				statusTrue(i);
			}
		}
	});

	$('#tasksToDo').on('click', function() {
		$('.tasks').html('');
		var len = tabTasks.length;
		for (var i = 0; i < len; i++) {
			if (!tabTasks[i].status) {
				statusFalse(i);
			}
		}
	});

	$('#allTasks').on('click', function() {
		$('.tasks').html('');
		var len = tabTasks.length;
		for (var i = 0; i < len; i++) {
			if (tabTasks[i].status) {
				statusTrue(i);
			}
			else {
				statusFalse(i);
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

function statusFalse(index){
	$('.tasks').append('<li><div class="ui checkbox"><input type="checkbox" data-index="' + index + '"><label data-index="' + index +'">' + tabTasks[index].title + '</label></div></li>');
}

function statusTrue(index){
	$('.tasks').append('<li><div class="ui checkbox"><input type="checkbox" checked="checked" data-index="' + index + '"><label data-index="' + index +'">' + tabTasks[index].title + '</label></div></li>');
	$('label[data-index="'+ index +'"]').addClass('checked');
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