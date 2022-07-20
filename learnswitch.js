const color ='red'
switch(color) {
    case 'red':

    console.log('çolor is red');
    break;

    case 'green':
    console.log('color is green');
    break;

    case 'blue':
    console.log('color is blue');
    break;
    default:
    console.log('color is not red, blue, or green');
}

const grade ='70'
switch(true) {
    case (grade >= 70 && grade <= 100):

    console.log('Excellent');
    break;

    case(grade >= 60 && grade <=69):
    console.log('Very good');
    break;

    case (grade >= 50 && grade <= 59):
    console.log('Good');
    break;
    default:
    console.log('Grade not excellent, Very good or good');
}