const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function generateQrCode(){
    if(qrText.value){
        qrImage.src ='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
        imgBox.classList.add('show-img');
    } else{
        qrText.classList.add('error');
        qrText.style.border = "1px solid rgb(213, 68, 68)";
        setTimeout(()=>{
            qrText.classList.remove('error');
            qrText.style.border = "1px solid #ccc";
        }, 2000);
    }
}

