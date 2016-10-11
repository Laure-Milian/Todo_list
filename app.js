(function() {
	'use strict';
	
	//Création tableau vide et gestion du localStorage
	var tabTasks = [];
	var data = JSON.parse(localStorage.getItem('data'));
	if (data !== undefined && data !== null) {
		tabTasks = data;
		allTasks();
	}

	// Listener sur bouton add
	$('#add').on('click', function() {
		if($('#fieldInput').val()){			
			var indexTask = tabTasks.length;
			tabTasks[indexTask] = {
				title : $('input[name="todo"]').val(),
				status : false,
				list : $('.item.active').text(),
			};
			$('#fieldInput').val('');
			console.log(tabTasks);

			$('.tasks').append('<li><div class="ui checkbox"><input type="checkbox" data-index="'+ indexTask + '"><label data-index="'+ indexTask +'">'+ tabTasks[indexTask].title +'</label></div></li>');
			localStorage.setItem('data', JSON.stringify(tabTasks));
		}
	});

	// Clic sur vider la liste
	$('#clear').on('click', function(){
		$('.tasks').html('');
		localStorage.clear();
		tabTasks = [];
	});

	//Clic sur checkbox pour modifier class
	$('.tasks').on('click', 'input[type="checkbox"]', function(){
		var numInput = $(this).data('index');
		isChecked(numInput);
		localStorage.setItem('data', JSON.stringify(tabTasks));
		
	});

	//Listeners sur les filtres
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
		allTasks();
	});

	// Ajouter une liste
	$('#addList').on('click', function() {
		var listName = $('input[name="addList"]').val();
		$('#menuList').append('<a class="item"> ' + listName +' <i class="trash outline icon"></i><i class="write icon"></i><i class="empty star icon"></i></a>');
	});

	//Au clic sur un item du menu, changer la classe active A REPRENDRE
	$('.item').on('click', function(){
		if(!this.getAttribute('active')) {
			$(this).addClass('active');

		}
		else{

		}
	});



	function isChecked(numInput){
		if (!tabTasks[numInput].status){
			$('label[data-index="'+ numInput +'"]').addClass('checked');
			tabTasks[numInput].status = true;
			console.log('addClass');
		} else {
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

	function allTasks(){
		$('.tasks').html('');
		var len = tabTasks.length;
		for (var i = 0; i < len; i++) {
			if (tabTasks[i].status) {
				statusTrue(i);
			}
			else if (!tabTasks[i].status){
				statusFalse(i);
			}
		}
	}
})();