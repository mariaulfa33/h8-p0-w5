
function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if(arrPenumpang.length === 0){
        return 0
    }else{
        var arr = []
        for(i=0; i<arrPenumpang.length; i++){
            var obj = { penumpang: arrPenumpang[i][0], naikDari: arrPenumpang[i][1], tujuan: arrPenumpang[i][2], bayar: 0}
            for(j=0; j<rute.length; j++){
                var count = 0
                if(arrPenumpang[i][1] === rute[j]){
                    for(k=j+1; k<rute.length; k++){
                        if(arrPenumpang[i][2] !== rute[k]){
                            count ++
                        }else{
                            count++
                            obj.bayar = count * 2000
                        }
                    }
                    
                }
            }
            arr.push(obj)
        }
        
     
        return arr
    }
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]