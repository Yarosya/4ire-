// //В одном городе есть электрическая сеть. К ней могут быть подключены:
// // - электростанции, вырабатывают мощность от 1 до 100 мегаватт
// // - солнечные панели, генерируют от 1 до 5 мегаватт днем 
// (в зависимости от вида панели, то есть некоторые панели генерируют 1 мегаватт, некоторые 2 и так далее) и 0 ночью
// // - жилые дома, в них от 1 до 400 квартир, потребляют 4 кВт на квартиру днем и 1 кВт ночью.
// // - линии электропередач, ведущие в другие города, по ним может подаваться недостающая или отдаваться лишняя энергия. 
// У линий есть свойство «мощность», которая определяет, сколько мегаватт можно передать по ней, а также «цена мегаватта», 
// которое показывает сколько можно получить или придется заплатить за переданный/полученный мегаватт. На разных линиях может быть разная цена.

// // Все данные генерировать рандомно в зависимости от граничных условий выше. Напиши программу,
//  рассчитывающую, сколько электричества необходимо закупить (или можно продать) днем и ночью для обеспечения баланса и сколько это будет
//   стоить (или принесет прибыли). Постарайся построить программу максимально модульно без лишних повторений.


 let [sunlightHour, nightHour,lengthDay, consumptionPerSunlightDay, consumptionPerNight] = [12,12,24,4,1]

const randomValue = (minValue, maxValue) => {
    return parseInt(Math.floor(Math.random()*(maxValue - minValue + 1) + minValue));
}

const powerPlants = (minNumberUnits=1, maxNumberUnits=5) =>{
    let arrPP = [];
    let totalEnergyGener = 0;
    arrPP.length = randomValue(minNumberUnits, maxNumberUnits)
    for(let i = 0; i<arrPP.length; i++){
        arrPP[i] =  randomValue(1000, 100000)
        totalEnergyGener += arrPP[i] * lengthDay;
    }
    return totalEnergyGener;
}
let p = powerPlants()
console.log(`power plant generated ${p} kWt per Day`);

const solarPanel = (minNumberUnits = 1,maxNumberUnits = 20 ) => {
    let arrSolar = [];
    let totalEnergyGener = 0;
    arrSolar.length = randomValue(minNumberUnits, maxNumberUnits);
    for (let j = 0; j< arrSolar.length; j++) {
        arrSolar[j] =  randomValue(1000, 5000)
        totalEnergyGener += arrSolar[j] * sunlightHour
    }
    return totalEnergyGener
}
let s = solarPanel()
console.log(`solar panel generated ${s} kWt per ${sunlightHour} hour`);

let house = (minNumberUnits = 1, maxNumberUnits = 500)=>{
    let arrHouse = [];
    arrHouse.length =  randomValue(minNumberUnits, maxNumberUnits);
    for(let i = 0; i < arrHouse.length; i++){
        apartmentsFlat = randomValue(1,400),
        arrHouse[i] = apartmentsFlat;
    }
    return arrHouse
}
let hArr = house()

const consumptionSunlightday = ()=>{
    let consumptionHouse = 0;
    hArr.forEach((apartFlat) => {
        return  consumptionHouse += (consumptionPerSunlightDay * sunlightHour) * apartFlat
       })
       return (p/2)+ s - consumptionHouse
}
const consumptionNight = ()=>{
    let consumptionHouse = 0;
    hArr.forEach((apartFlat) => {
        return  consumptionHouse += (consumptionPerNight * nightHour) * apartFlat
       })
       return (p/2) - consumptionHouse
}
const powerLines = (min=1, max=20) =>{
    let arrL = [];
    arrL.length = randomValue(min,max);
    for(let i = 0; i< arrL.length;i++){
        arrL[i] = {
            power: randomValue(1000,3000),
            price: randomValue(1,100)
        }
    }
    return arrL;

}
let pL = powerLines()

const [energyDay,energyNight] = [consumptionSunlightday(),consumptionNight()]
const getBalanceValue = (energy, arrLines) => {
    let money = 0;
    if (energy < 0) {
        arrLines.sort((prev, curr) => {
             return prev.price - curr.price
        })
    } else{
        arrLines.sort((prev, curr) =>{
            prev.price - curr.price
        });
    } 
    energy = Math.abs(energy);
    for (let i = 0; i < arrLines.length; i++) {
        if (energy > arrLines[i].power) {
            money += arrLines[i].power * arrLines[i].price;
            energy -= arrLines[i].power;  
        }
        if (energy < arrLines[i].power) {
            money += energy * arrLines[i].price;
            return money;
        }
    }
    return energy;
}

const day = getBalanceValue(energyDay, pL);
const night = getBalanceValue(energyNight, pL);

if(energyDay > 0){
    console.log(`Енергія за день: ${energyDay} kWt - профіт ${day} $`)
}else{
    console.log(`
Енергія за день: ${energyDay} kWt
затрати ${day}$
    `);
}
if(energyNight > 0){
    console.log(`Енергія за ніч: ${energyNight} kWt - профіт ${night} $`)
}else{
    console.log(`
Енергія за день: ${energyNight} kWt
затрати ${night}$
    `);
}






    
    

        
   
   
