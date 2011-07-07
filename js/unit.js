

const BOX_SIZE = 66;
const BOX_LIST_NUM = 50;
const LINE_LIST_NUM = 50;

const FPS_TIME			= 20;
const CPS_TIME			= 40;


const RADIUS_ANTIALIEN	= 80;
const K_A_ANTIALIEN		= 0.1;


const HSLA_LINE			= "hsla(0, 50%, 80%, 1)";
const HSLA_ANTIALIEN	= "hsla(30, 50%, 80%, 1)"; 



function isAntialienBoxes( box1, box2 ) {
	var dx2 = ( box1.x - box2.x ) * ( box1.x - box2.x )
	var dy2 = ( box1.y - box2.y ) * ( box1.y - box2.y )
	if ( RADIUS_ANTIALIEN*RADIUS_ANTIALIEN*4 > dx2 + dy2) {
		return true;
	}
	return false;
}