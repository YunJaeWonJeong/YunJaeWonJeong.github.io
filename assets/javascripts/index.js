const callList = document.querySelectorAll(".wedding-tel");
const smsList = document.querySelectorAll(".wedding-sms");
callList.forEach(element => {
    element.addEventListener('click' , () => {
        const {tel} = element.dataset;
        const decodeTel = atob(tel);
        console.log(decodeTel)
        location.href = `tel:${decodeTel}`
    })
});

smsList.forEach(element => {
    element.addEventListener('click' , () => {
        const {sms} = element.dataset;
        const decodeSMS = atob(sms);
        console.log(decodeSMS)
        location.href = `sms:${decodeSMS}`
    })
});