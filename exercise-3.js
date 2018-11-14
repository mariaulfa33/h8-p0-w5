function highestScore (students) {
    // Code disini
    // if(students.length === 0){
    //     return {}
    // }else{
        //var obj = { class: { name: '<name>', score: 0}  }


        var obj = {} //bikin objek dulu, kan diminta outputnya object

        for(i=0; i<students.length; i++){ //trus di looping semuanya biar tau ada kelas apa aja, trus bikin objek dalemnya

        obj[students[i].class] = {
                                 name : [], 
                                 score: 0
                                }

                var scoreMax = 0 //counter max harus diluar looping supaya angkanya keganti
                for(j=0; j< students.length; j++){ //kan mau inputnya macem macem, kalo di looping yang sama nanti ketimpa, jadi bikin loopin lain aja, biar gak nimpa
                    if(students[j].score > scoreMax && students[i].class === students[j].class){ //bikin kondisi kalo scorenya lebih besar dan kelasnya sama, pake student i soalnya mau disamapin sama kelas yang di looping i, nah nama kelasnya itu student[i].class, kalo pake obj[students[i].class] nanti hasilnya objek, jadi gabakl sama.
                        obj[students[i].class].name = students[j].name
                        obj[students[i].class].score = students[j].score
                        scoreMax = students[j].score
                    }
                }
        } 
        return obj
    //}
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}