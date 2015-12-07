var personal_pic = document.getElementsByClassName("modal-content");
var personal_title = document.getElementsByClassName("modal-header");
var personal_info = document.getElementsByClassName("personnel-info");

  // christine identity
  christine = {
    name: "Christine Madonis",
    title: "Co-founder/Coach",
    info: "Growing up in a Portage, Michigan, Christine always found soccer to be a great way to make friends and stay fit. Her competitive spirit earned her a full scholarship to Robert Morris University in Chicago where she was voted team captain in 2009, 2010 and 2011. With Christine at the helm, RMU earned a spot in the NAIA national tournament, competing against the elite 8 teams in the nation in 2011. When Christine wasn’t practicing on the field, she was putting her energy into the Fulton Fit House. Honing in on her true passion, Christine earned her bachelors degree in Applied Health Science with a concentration in Personal Training. She is CPR/AED certified and ACE certified. Health and fitness is truly embedded into Christine's lifestyle, and her SPUNK and positive attitude are contagious."
  },

  mike = {
    name: "Mike Madonis",
    title: "Co-founder/Coach",
    info: "Since 2008, Mike has implemented successful fitness programs for hundreds of clients. After battling weight problems of his own following two knee surgeries, Mike committed himself to a regimen of functional fitness and lost 62 lbs. Through this dramatic change, he discovered a passion for helping others achieve their goals. He believes fitness is for everyone and that is has the ability to literally change - and save - lives. Today, Mike creates custom workout plans for both private and group classes and incorporates his own personal style into everything at Fulton Fit House."
  },

  joseph = {
    name: "Joseph Leli",
    title: "Director of Operations/Lead Coach",
    info: "nothing yet"
  },

  //Paul Kahan
  paul = {
    name: "Paul Kahan",
    title: "Executive Chef/Partner",
    info: "As a professional chef, diet and exercise is challenging. At 48 years old I needed to make a commitment to live a long, healthy life. Fulton Fit House is that commitment."
  },

  rick = {
    name: "Rick Pettit",
    title: "Corporate Client- Vail Systems",
    info: "Working out at Fulton Fit House under the instruction of Mike has changed my life. I have lost over 50 lbs. since I started. I not only look better and have more strength and endurance than when I started, I’ve learned how to eat right, which will allow me to keep the weight off."
  },

  marla = {
    name: "Marla Sedler",
    title: "Super Mom",
    info: "Fulton Fit House has changed my life. They are the real deal when it comes to fitness. Every day I am challenged to go outside of my comfort zone to get the BEST workout."
  }
]

for (prop in personal) {



}
document.getElementsByClassName('btn').onclick = function() {
  alert('click!')
}




// Problem: I have a modal that needs diffrent info for all of the personal in the gym
// 1.1 I need to capture which person is connected to which button
// 1.2 I need to then grab that persones name + there bio + then there title (all diffrent elements and tags)
// 1.3 then those elements need to be put into the modal CORRECTLY i.e. (the title of the modal needs to say the name of the personal)
