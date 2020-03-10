let A = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ],
    R  = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ],
  Alength = A.length;

document.querySelector('.nombre-a').addEventListener('input', function () {
  let nombreArabe = document.querySelector('.nombre-a').value;
  let nombreRomain = convertirEnNombreRomain (nombreArabe);
  document.querySelector('.nombre-r').value = nombreRomain;
});

document.querySelector('.nombre-r').addEventListener('input', function () {
  let nombreRomain = document.querySelector('.nombre-r').value;
  let nombreArabe = convertirEnNombreArabe (nombreRomain);
  document.querySelector('.nombre-a').value = nombreArabe;
});


function convertirEnNombreRomain (nombreArabe){

  var x = parseInt( nombreArabe, 10 ) || 1,
		resultatEnNombreRomain = "";

	if ( x < 1 ){
		x = 1;
	} else if ( x > 3999 ){
		x = 3999;
	}

  for ( var i = 0; i < Alength; ++i ){
    while ( x >= A[ i ] ){
      x -= A[ i ];
      resultatEnNombreRomain += R[ i ];
    }

    if ( x == 0 ){
      break;
    }
  }
  return resultatEnNombreRomain;
}

function convertirEnNombreArabe(nombreRomain){

  if ( ( typeof nombreRomain != "string" ) || ( nombreRomain.length < 1 ) ) return;

  var resultatEnNombreArabe = 0,
    item = "";

  for ( var i = 0; i < Alength; ++i ){

    while ( nombreRomain.length >= R[ i ].length ){
      item = nombreRomain.slice( 0, R[ i ].length );

      if ( R[ i ] == item ){
        resultatEnNombreArabe += A[ i ];
        nombreRomain = nombreRomain.substring( R[ i ].length );
      } else {
        break;
      }
    }
  }

  return resultatEnNombreArabe;
}
