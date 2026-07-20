/* ============================
   Shahzaib Salon AI Assistant
============================ */


const aiButton = document.querySelector(".ai-button");
const aiBox = document.querySelector(".ai-box");
const sendButton = document.querySelector(".ai-input button");
const userInput = document.querySelector(".ai-input input");



/* Open / Close Chat */


if(aiButton){

aiButton.addEventListener("click",()=>{

    if(aiBox.style.display === "block"){

        aiBox.style.display="none";

    }

    else{

        aiBox.style.display="block";

    }

});


}




/* Send Message */


if(sendButton){


sendButton.addEventListener("click",sendMessage);


}




if(userInput){


userInput.addEventListener("keypress",(e)=>{


if(e.key==="Enter"){

sendMessage();

}


});


}





function sendMessage(){


let message = userInput.value.toLowerCase();


if(message.trim()===""){

return;

}



addUserMessage(userInput.value);



let reply = getAIResponse(message);



setTimeout(()=>{


addBotMessage(reply);


},700);



userInput.value="";


}







/* Add User Message */


function addUserMessage(message){


let chatArea=document.querySelector(".ai-box");


let div=document.createElement("div");


div.className="user-chat";


div.innerHTML=message;



chatArea.appendChild(div);


}







/* Add AI Message */


function addBotMessage(message){


let chatArea=document.querySelector(".ai-box");


let div=document.createElement("div");


div.className="ai-message";


div.innerHTML=message;



chatArea.appendChild(div);


}








/* AI Knowledge Base */


function getAIResponse(message){



if(
message.includes("hello") ||
message.includes("hi") ||
message.includes("salam")
){

return "Hello 👋 Welcome to Shahzaib Salon. How can I help you today?";


}





if(
message.includes("location") ||
message.includes("address") ||
message.includes("where")
){

return "Our salon is located at Al Rehman Garden Phase 4, Lahore, Pakistan. 📍";


}





if(
message.includes("price") ||
message.includes("cost") ||
message.includes("rate")
){

return "Our prices depend on the service you choose. We provide Haircuts, Beard Styling, Hair Styling and Grooming services. Please tell me which service you need.";


}





if(
message.includes("haircut")
){

return "Yes, we provide modern haircut services. You can book your appointment through our booking page or WhatsApp. ✂️";


}





if(
message.includes("beard")
){

return "We provide professional beard shaping and styling services. Our experts will give you a perfect look.";


}





if(
message.includes("appointment") ||
message.includes("booking")
){

return "Sure! You can book your appointment from our Appointment page or contact us on WhatsApp: +92 325 4216171";


}





if(
message.includes("whatsapp") ||
message.includes("contact")
){

return "You can contact Shahzaib Salon on WhatsApp: +92 325 4216171 📱";


}





if(
message.includes("instagram")
){

return "Follow Shahzaib Salon on Instagram for latest styles and updates. 📸";


}







return "Thank you for contacting Shahzaib Salon. Our team will help you with your request. You can also book an appointment through WhatsApp.";

}