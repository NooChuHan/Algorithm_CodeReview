function solution(clothes) {
    let answer = 1;
    let ObjClothesInfo = {};
    let ArrClothesCountByCategory = [];
    
    clothes.forEach((cloth) => 
        ObjClothesInfo[cloth[1]] 
        ? (ObjClothesInfo[cloth[1]].push(cloth[1]))
        : (ObjClothesInfo[cloth[1]] = [cloth[1]])
    )
    
    ArrClothesCountByCategory = Object.values(ObjClothesInfo)
        .filter((arrCloth) => arrCloth.length !== 0)
        .map((arrCloth) => arrCloth.length)
    

    ArrClothesCountByCategory.forEach((countCloth) => 
        answer *= (countCloth + 1)
    )
    
    return answer - 1
   
}