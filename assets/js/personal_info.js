var personal_pic = document.getElementsByClassName("modal-content");
var personal_name = document.getElementById("modal_header");
var personal_info = document.getElementById("personnel_info");

var buttonClicked;

  // christine identity
var personal_array = [

    {
      class_Name:"christine_butt",
      name: "Christine Madonis",
      info: "Growing up in a Portage, Michigan, Christine always found soccer to be a great way to make friends and stay fit. Her competitive spirit earned her a full scholarship to Robert Morris University in Chicago where she was voted team captain in 2009, 2010 and 2011. With Christine at the helm, RMU earned a spot in the NAIA national tournament, competing against the elite 8 teams in the nation in 2011. When Christine wasn’t practicing on the field, she was putting her energy into the Fulton Fit House. Honing in on her true passion, Christine earned her bachelors degree in Applied Health Science with a concentration in Personal Training. She is CPR/AED certified and ACE certified. Health and fitness is truly embedded into Christine's lifestyle, and her SPUNK and positive attitude are contagious."
    },

    {
      class_Name:"mike_butt",
      name: "Mike Madonis",
      info: "Since 2008, Mike has implemented successful fitness programs for hundreds of clients. After battling weight problems of his own following two knee surgeries, Mike committed himself to a regimen of functional fitness and lost 62 lbs. Through this dramatic change, he discovered a passion for helping others achieve their goals. He believes fitness is for everyone and that is has the ability to literally change - and save - lives. Today, Mike creates custom workout plans for both private and group classes and incorporates his own personal style into everything at Fulton Fit House."
    },

    {
      class_Name:"joseph_butt",
      name: "Joseph Leli",
      info: "nothing yet"
    },

    //Paul Kahan
    {
      class_Name:"paul_butt",
      name: "Paul Kahan",
      info: "As a professional chef, diet and exercise is challenging. At 48 years old I needed to make a commitment to live a long, healthy life. Fulton Fit House is that commitment."
    },

    {
      class_Name:"rick_butt",
      name: "Rick Pettit",
      info: "Working out at Fulton Fit House under the instruction of Mike has changed my life. I have lost over 50 lbs. since I started. I not only look better and have more strength and endurance than when I started, I’ve learned how to eat right, which will allow me to keep the weight off."
    },

    {
      class_Name:"marla_butt",
      name: "Marla Sedler",
      info: "Fulton Fit House has changed my life. They are the real deal when it comes to fitness. Every day I am challenged to go outside of my comfort zone to get the BEST workout."
    }

  ]

  $("button").click(function() {
      buttonClicked = this.id;

  for(p = 0; p < personal_array.length; p += 1){
    var personalObject = personal_array[p].class_Name;
    var personalInfo = personal_array[p].info;
    var personalname = personal_array[p].name;
    if( buttonClicked === personalObject){
        personal_name.innerHTML += personalname;
        personal_info.innerHTML += personalInfo;
    }
  }
});



// Problem: I have a modal that needs diffrent info for all of the personal in the gym
// 1.1 I need to capture which person is connected to which button
// 1.2 I need to then grab that persones name + there bio + then there title (all diffrent elements and tags)
// 1.3 then those elements need to be put into the modal CORRECTLY i.e. (the title of the modal needs to say the name of the personal)
