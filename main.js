function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7wzgeP-bl/model.json", modelLoaded);
}
function modelLoaded(){
    console.log("teachable machine model is loaded");
    classifier.classify(gotResults);
}
function gotResults(results){
    console.log("results");
    if(results[0].label == "barking"){
        document.getElementById("result_label").innerHTML = "I can hear- Barking";
        document.getElementById("animal_dog").src = "https://media2.giphy.com/media/hXIeQloDbnaE3BXtY9/giphy.gif?cid=ecf05e478sgaipv1wv678r6kpzzxue5vyvlw8orhgswti0bm&rid=giphy.gif&ct=g"
    }
    else if(results[0].label == "meow"){
        document.getElementById("result_label").innerHTML = "I can hear- Meowing";
        document.getElementById("animal_cat").src = "https://media1.giphy.com/media/iiE4JfK3mVdATsb2fx/giphy.gif?cid=ecf05e478l9feufsde2krzcrssa0d0gke4iu0ax7ezxseak9&rid=giphy.gif&ct=g"
    }
    else if(results[0].label == "quack"){
        document.getElementById("result_label").innerHTML = "I can hear- Quacking";
        document.getElementById("animal_duck").src = "https://media.tenor.com/1RPeT96JWtwAAAAM/duck-quack.gif"
    }
    else if(results[0].label == "chirping"){
        document.getElementById("result_label").innerHTML = "I can hear- Chirping";
        document.getElementById("animal_bird").src = "https://media1.giphy.com/media/efqBQ5OOnQehq/giphy.gif?cid=ecf05e470egqi11zvf6j6k17xc55hstg4ba89pof9du9iwbl&rid=giphy.gif&ct=g"
}

}