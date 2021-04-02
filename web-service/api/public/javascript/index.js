
$(document).ready(function(){
    $('#res-container').text('try a blind SQLi payload, ex: 54 or 1=1#');
    open_ws();
    $( "#eID" ).on('keyup',function( event ) {
    	check_employee();
	});
});

function open_ws(){
	var HOST = location.origin.replace(/^http/, 'ws');
	window.ws = new WebSocket(HOST+'/ws');

	ws.onopen = function(event) {
		setInterval(ping, 30000);
	};

	ws.onmessage = function (event) {

		if (event.data == '__pong__') {
        	pong();
        	return;
    	}

		try{
			msg = JSON.parse(event.data);
			$('#res-container').html(msg.message);
		} catch(e){
			$('#res-container').html(event.data);
		}
			
	}

	ws.onerror = function(event){
		try{
			msg = JSON.parse(event.data);
			$('#res-container').text(msg.message);
		} catch(e){
			$('#res-container').text(event.data);
		}
	}

	ws.onclose = function(event){
		console.log('Connection closed!');
	}

}

function check_employee(){
	var eID = $("#eID").val();
	if(eID){
		$('#res-container').text('Processing..');
		
		var msg = JSON.stringify({ employeeID: eID });

		ws.send(msg);

		

	}
	

}

function ping() {
        ws.send('__ping__');
        tm = setTimeout(function () {

    }, 5000);
}

function pong() {
    clearTimeout(tm);
}