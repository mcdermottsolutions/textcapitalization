$(document).ready(function(){

	// on formsubmit 
	// $('#submit').click(function(){
	$('input[type=radio]').change(function() {
        // if (this.value == 'uppercase') {
        //     uppercase();
        // }
        // else if (this.value == 'transfer') {
        //     alert("Transfer Thai Gayo");
        // }

		// vars init
		var textEntry,
			whichMethod = null;
		var textEntry = $('#textEntry').val();
		var whichMethod = $('form input[name="capChoice"]:checked').val();

		// textarea error check
		if ( textEntry == '' ) { 
			$('#textError')
				.show()
				.find('p').html('Please enter text here');
		}
		// radios error check
		// if ( $('form input[name="capChoice"]:checked').length < 1 ) {
		// 	$('#radioError')
		// 		.show()
		// 		.find('p').html('Please select desired style');
		// }
		
		switch(this.value) {
			case 'uppercase':
			  $('#textEntry').val( textEntry.toUpperCase() );
			  break;
			case 'lowercase':
			  $('#textEntry').val( textEntry.toLowerCase() );
			  break;
			 case 'normalcase':
			 	$('#textEntry').val( capitalizeSentences(textEntry) );
			 	break;
			 case 'firstletter':
			 	$('#textEntry').val( ucwords(textEntry) );
			 	break;
		}

		return false;
	});

	//  hide error messages when input is inputted
	$('#textEntry').bind('input propertychange', function() {
		var textEntry = $('#textEntry').val();
		if ( textEntry != '' ) {
			$('#textError').hide(); 
		}
	});
	$('form .radio-button').click(function() {
		if ( $('form input[name="capChoice"]:checked').length > 0 ) {
			$('#radioError').hide();
		}
	});

});


function capitalizeSentences(capText){

	capText = capText.toLowerCase();
	capText = capText.replace(/\n/g,"[-<br>-]");
	var sentenceArray = capText.split(/\.\s/);
	var numSentences = sentenceArray.length;
	for ( x=0;x<numSentences;x++ ) {
		sentenceArray[x] = sentenceArray[x].replace(sentenceArray[x].charAt(0),sentenceArray[x].charAt(0).toUpperCase());
		if (x==0) {
		capText = sentenceArray[x]+". ";
		} else if (x != numSentences -1) {
			capText = capText+sentenceArray[x]+". ";
		} else if (x == numSentences -1){
			capText = capText+sentenceArray[x];
		}
	}
	capText = capText.replace(/\[-<br>-\]/g,"\n");

	var paragraphArray = capText.split(/\n/);
	var numParagraphs = paragraphArray.length;
	for ( x=0;x<numParagraphs;x++ ) {
	 	paragraphLength = paragraphArray[x].length;
		if (paragraphLength > 0) {
			paragraphArray[x] = paragraphArray[x].replace(paragraphArray[x].charAt(0),paragraphArray[x].charAt(0).toUpperCase());
			if (x==0) {
				capText = paragraphArray[x]+"\n";
			} else if (x != numParagraphs -1) {
				capText = capText+paragraphArray[x]+"\n"; 
			} else if (x == numParagraphs -1){
				capText = capText+paragraphArray[x];
			}
		} else {
			capText = capText+"\n"; 
		}
	}

	capText = capText.replace(/ i /g," I ");

	return capText;
}

/* from http://stackoverflow.com/a/7875638 */
function ucwords(str,force){
    str=force ? str.toLowerCase() : str;
    str = str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
    function(firstLetter){
    	return firstLetter.toUpperCase();
    });

	var paragraphArray = capText.split(/\n/);
	var numParagraphs = paragraphArray.length;
	for ( x=0;x<numParagraphs;x++ ) {
	 	paragraphLength = paragraphArray[x].length;
		if (paragraphLength > 0) {
			paragraphArray[x] = paragraphArray[x].replace(paragraphArray[x].charAt(0),paragraphArray[x].charAt(0).toUpperCase());
			if (x==0) {
				capText = paragraphArray[x]+"\n";
			} else if (x != numParagraphs -1) {
				capText = capText+paragraphArray[x]+"\n"; 
			} else if (x == numParagraphs -1){
				capText = capText+paragraphArray[x];
			}
		} else {
			capText = capText+"\n"; 
		}
	}

    return str;
}