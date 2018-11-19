var map = [[0,0,0],
           [0,0,0],
           [0,0,0]];

function show() {
for (var x=0; x<map.length; x++) {
  console.log(map[x]);
}
}

function runrun(a, b) {
  map[a][b]=1;
if (((a-1)>=0)&&(map[a-1][b]==0)) {
  runrun(a-1,b);
  }
if (((b+1)<=map[a].length-1)&&(map[a][b+1]==0)) {
    runrun(a,b+1);
  }
if (((a+1)<=map[a].length-1)&&(map[a+1][b]==0)) {
  runrun(a+1, b);
}
if (((b-1)>=0)&&(map[a][b-1]==0)) {
  runrun(a,b-1);
  }
}
runrun(1,1);
show();
