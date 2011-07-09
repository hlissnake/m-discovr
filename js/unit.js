

const BOX_SIZE = 66;
const BOX_LIST_NUM = 50;
const LINE_LIST_NUM = 50;

const FPS_TIME			= 20;
const CPS_TIME			= 40;


const RADIUS_ANTIALIEN	= 60;
const K_V_ANTIALIEN		= 0.4;

const LINE_WANT_L		= 180;
const K_V_HUKE			= 0.4;

const HSLA_LINE			= "hsla(0, 50%, 80%, 1)";
const HSLA_ANTIALIEN	= "hsla(60, 50%, 80%, 1)"; 


function distance( z1, z2 ) {
	tmp_unit_zx = z1.x-z2.x;
	tmp_unit_zy = z1.y-z2.y;
	return Math.sqrt( tmp_unit_zx*tmp_unit_zx + tmp_unit_zy*tmp_unit_zy );
}

function isAntialienBoxes( box1, box2 ) {
	tmp_unit_zx = box1.x-box2.x;
	tmp_unit_zy = box1.y-box2.y;
	var dis = Math.sqrt( tmp_unit_zx*tmp_unit_zx + tmp_unit_zy*tmp_unit_zy );
	
	if ( RADIUS_ANTIALIEN*2 > dis ) {
		return true;
	}
	return false;
}

function slopeRoles( r1, r2 ) {
	tmp_unit_zx = r2.x-r1.x;
	tmp_unit_zy = r2.y-r1.y;
	var at = Math.atan2(tmp_unit_zy,tmp_unit_zx);
	var z = 3.1416 + at;
	
	return Math.round(z*10000);
}