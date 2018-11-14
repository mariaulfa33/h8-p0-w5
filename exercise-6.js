function meleeRangedGrouping (str) {
    //your code here
    if(str.length === 0){
        return []
    }else{
        var arr = [[],[]]
        var koma = str.split(',')
        for(i=0; i<koma.length; i++){
            var heroes = koma[i].split('-')
            if(heroes[1] === 'Ranged'){
                arr[0].push(heroes[0])
            }else{
                arr[1].push(heroes[0])
            }
        }
        
      return arr
    }
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []