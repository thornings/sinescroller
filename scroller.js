	var time;
	var target;  
	var letters;
	var scrollText;
	var spread;
	var waveSpread;
	var waveHeight;
	var startY;
	
  function addCharacters() {
	for(var i = 0; i < letters.length; i++){
		target.innerHTML += '<div id="letter-'+i+'">'+letters[i]+'</div>';
	}	  
  }
  
  function initialize() {
	this.scrollText = 'Velkommen til thornings.dk  -  I still like Amiga games  -  YEEEAAAHHHHH ';
	this.time = Date.now();
	this.target = document.getElementById('scroller');  
	this.letters = scrollText.split(""); 
	this.spread = 0.2;
	this.waveSpread = 2;
	this.waveHeight = 30;
	this.startY = 50;
	this.addCharacters();
  }
  
  function scrollTheText(){
	var timeSinceLast = Date.now()-time;
    var y = Math.floor(timeSinceLast/10) / 30;
    
    for(var i = 0; i < letters.length; i++){
      var letter = document.getElementById('letter-'+i);
	
      letter.style.right  = (y-(i/this.spread))+'%';
      letter.style.top = (startY+((Math.sin(y+(i/this.waveSpread)))*this.waveHeight))+'%';  	  
	  letter.style.fontSize = (100+(Math.sin(y)*50))+'px';

      if(i == (letters.length-1)){
        if(y+-(i/this.spread) > 100){
          time = Date.now();
        }
      }
    }
    setTimeout(scrollTheText,0.5); 
  }
  
  initialize();
  scrollTheText();
	
