let name = prompt('Adiniz nedir ?')
document.querySelector('#myName').innerHTML = name;

function saat() {

    let clock = new Date();
    let day = new Date();

    clock = clock.getHours() + ':' + clock.getMinutes() + ':' + clock.getSeconds();
    day = day.getDay();

    let tomorrow;

    switch (day) {
        case 1:
            day = 'Pazartesi'
            tomorrow = 'Salı'
            break;
        case 2:
            day = 'Salı'
            tomorrow = 'Çarşamba'
            break;
        case 3:
            day = 'Çarşamba'
            tomorrow = 'Perşembe'
        case 4:
            day = 'Perşembe'
            tomorrow = 'Cuma'
            break;
        case 5:
            day = 'Cuma'
            tomorrow = 'Cumartesi'
            break;
        case 6:
            day = 'Cumartesi'
            tomorrow = 'Pazar'
            break;
        case 7:
            day = 'Pazar'
            tomorrow = 'Pazartes'
            break;
    }

    document.querySelector('#date').innerHTML = `
    <p style="color:#ffffd2;">${clock}</p> 
    <p>Ve Bugün günlerden <p style="color:#ffffd2;">${day}</p> Yarın </br>${tomorrow}</p>
    `;
}

saat();

setInterval('saat()', 1000);