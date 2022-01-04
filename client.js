const employees = [
    {
      name: 'Atticus',
      employeeNumber: '2405',
      annualSalary: '47000',
      reviewRating: 3
    },
    {
      name: 'Jem',
      employeeNumber: '62347',
      annualSalary: '63500',
      reviewRating: 4
    },
    {
      name: 'Scout',
      employeeNumber: '6243',
      annualSalary: '74750',
      reviewRating: 5
    },
    {
      name: 'Robert',
      employeeNumber: '26835',
      annualSalary: '66000',
      reviewRating: 1
    },
    {
      name: 'Mayella',
      employeeNumber: '89068',
      annualSalary: '35000',
      reviewRating: 1
    }
  ];
  
  // YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
  
  // Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
  // This problem is massive! Break the problem down. Use the debugger.
  // What is the fewest lines of code I can write and test to get just a little closer?
  
  // This is not a race. Everyone on your team should understand what is happening.
  // Ask questions when you don't.
  

  console.log( employees );





function calcBonus(rating){
    let bonusPercentage = 0;
  if (rating<=2){
      bonusPercentage = 0;
  }
  else if (rating===3){
      bonusPercentage = .04;
  }
  else if (rating===4){
      bonusPercentage = .06;
  }
  else if (rating===5){
      bonusPercentage = .1;
  }
  return bonusPercentage;
}

function calcRealBonus(bonus,empNum,salary){
    if (empNum.length<=4){
        bonus += .05;
    }
    if (salary>65000){
        bonus -= .01;
    }
    if (bonus>.13){
        bonus=.13;
    }
    if (bonus<0){
        bonus=0;
    }
    return bonus
}

function calcTotalSalary(bonus,salary){
    bonus = bonus * salary;
    let total = bonus + salary;
    return total
}



function main(){
    let newEmployees = [];
    for (emp of employees){
        let name = emp.name;
        let bonusPercentage = calcBonus(emp.reviewRating);
        let annualSalary = parseInt(emp.annualSalary, 10);
        let actualBonusPercentage = calcRealBonus(bonusPercentage,emp.employeeNumber,annualSalary);
        let totalSalary = calcTotalSalary(actualBonusPercentage,annualSalary);
        let bonusRounded = (actualBonusPercentage * annualSalary).toFixed();
        
        newEmployees.push(
            {
                name: name,
                bonusPercentage: (actualBonusPercentage*100)+"%",
                totalCompensation: totalSalary,
                totalBonus: bonusRounded
            }
        )

    }
    return newEmployees;
}


console.log(main());
