const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();/* ดึงปีปัจจุบันมาใช้ */
const newYearTime = new Date(`January 01 ${currentYear+1} 00:00:00`); /* ดึงวันที่ 1 มค.ปีถัดไป สามารถกำหนดวันเวลาได้*/

function updateCountDown(){
    const currentTime = new Date()
    const difference = newYearTime-currentTime;
    const d=Math.floor(difference/1000/60/60/24)
    const h=Math.floor(difference/1000/60/60%24)
    const m=Math.floor(difference/1000/60)%60;
    const s=Math.floor(difference/1000)%60;
    /* 1.เก็บข้อมูลว่าเหลืออีกกี่วัน 
       2.ใช้ Math.floor ปัดเศษลง 
       3.เอาค่า difference หาร 1000มิลลิวินาที หาร 60 นาที หาร 60 วินาที หาร 24 ชม.*/
    days.innerHTML=d<10?'0'+d:d;
    hours.innerHTML=h<10?'0'+h:h;
    minutes.innerHTML=m<10?'0'+m:m;
    seconds.innerHTML=s<10?'0'+s:s;
    /* เป็นการเช็คว่าถ้าค่าของ d h m s มีค่าน้อยกว่า 10 จะให้ใส่เลข 0 นำหน้า เป็นการลดรูปการเขียน if else*/
}

setInterval(updateCountDown,1000);