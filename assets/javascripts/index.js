const callList = document.querySelectorAll(".wedding-tel");
const smsList = document.querySelectorAll(".wedding-sms");
callList.forEach(element => {
  const {tel} = element.data;
    const decodeTel = atob(tel);

    location.href = `tel:${decodeTel}`
});

smsList.forEach(element => {
    const {sms} = element.data;
    const decodeSMS = atob(sms);
    location.href = `sms:${decodeSMS}`
});