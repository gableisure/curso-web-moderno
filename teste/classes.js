const nums = [162, 149, 148, 172, 168, 154, 170, 163, 154, 171,
    164, 165, 159, 175, 155, 163, 171, 165, 175, 172,
    170, 157, 176, 157, 157, 172, 158, 157, 157, 158,
    160, 158, 163, 165, 164, 177, 150, 158, 165, 168,
    166, 169, 152, 170, 172, 174, 162, 169, 170, 164]

function classe(nums) {
let class1 = 0, class2= 0, class3= 0, class4= 0, class5 = 0, class6 = 0
for(let i = 0; i < nums.size(); i++){
  if(num[i] <= 148 && num[i] < 153){
    console.log(`classe 1 ${num}`)
    class1++
  }else if(num[i] >= 153 && num[i] < 158){
    class2++
  }else if(num[i] >= 158 && num[i] < 163){
    class3++
  }else if(num[i] >= 163 && num[i] < 168){
    class4++
  }else if(num[i] >= 168 && num[i] < 173){
    class5++
  }else{
    class6++
    
  } 

}
console.log(class1, class2, class3, class4, class5, class6)
}

classe(nums)