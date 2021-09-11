var image = [
  "https://miro.medium.com/max/4000/1*yjJc2XLxczdoyW0hfSrNQQ.jpeg",
  "https://images.theconversation.com/files/372277/original/file-20201201-15-1l4iewv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip"
];
var fav = [
  "My Favourite Hobby is Writing Short Stories/Creative Writing",
  "My Favourite Character is Sherlock Holmes"
];

var writingpart11 = [
  "Have you ever tried, or even wondered what it's like to write short stories? I have! And, I have to tell you, that it's actually more exciting than it seems to be! I feel like writing short stories is very interesting, because it has many genres- Fantasy, Sci-Fi, Historical Fiction, Mystery, Drama, Fiction, Horror, Non-fiction and many more! The genres which I mostly write in, are definetely gonna be Fantasy, Sci-Fi, Mystery and Fiction! I love creative writing, because I can pen down my thoughts and it also increases my vocabulary! You should also try starting with Daily Journaling, because it improves your expression and helps you express your emotions even better!",
  "You must've come here from the page about my favourite hobby- Creative Writing, right? Well, hello again! I'm glad you wanted to read about my favourite character as well! As you can see, my favourite character is Sherlock Holmes! Yes, it's the one who solves cases easily, by just sitting on his chair, asking questions about the case and gathering clues! Oh, and how could I forget about his smoking pipe-"
];

var writingpart22 = [
  "Can you guess which type of writing was this?... It's a written monologue! A monologue is a piece of writing in which there is only one speaker, who's telling the audience or anyone about something. A monologue can either be written or oral. A dialogue is a piece of writing in which there are two, or more people talking to each other. Now, can you guess the difference between class discussions and lectures? You're right! Class discussions is a type of dialogue, while lectures is a type of monologue! Okay, I'm not gonna make this long and I don't even want to make creative writing boring, so I'm just gonna stop writing now!! If you're planning on starting daily journaling...",
  "Many people these days, say that smoking is injurious to health. At the same time, the same people admire Sherlock Holmes sitting on his chair and smoking? These poeple don't care about their favourite character's health or what!? Even though Sherlock Holmes is a fictional character, I think he still deserves to have good health. And no, don't worry I'm not gonna go out and protest about it.. And yes, I do feel like we're getting off the subject a bit, so I'm just going to talk about Sherlock Holmes now, and not give 'A Boring Advisory About Smoking'. So, as I said, Sherlock Holmes is my favourite character. The way he solves cases so simply is just fascinating! Oh, and his partener, Dr. Watson is also such an interesting character because if we see it from an author's view, I think it's simply amazing that instead of making Sherlock Holmes the narrator, the author has made Dr. Watson the narrator which is quite an interesting way to tell a reader about the story. Okay, I'm now gonna get back to finish reading the book- 'The Case Book Of Sherlock Holmes' because I also plan on writing about Dr. Watson as one of my favourite characters soon, so Stay Tuned!"
];

var writingconclusionn = ["Happy Writing!!!", "Thank you for reading!!!"];

var buttontxt = [
  "Click on this button to read about my favourite character!",
  "Click on this button to read about my hobby!"
];

var i = 0;

function changeslide() {
  document.getElementById("imgs").src = image[i];
  document.getElementById("favtitle").innerHTML = fav[i];
  document.getElementById("writingpart1").innerHTML = writingpart11[i];
  document.getElementById("writingpart2").innerHTML = writingpart22[i];
  document.getElementById("writingconclusion").innerHTML =
    writingconclusionn[i];
  document.getElementById("button1").innerHTML = buttontxt[i];
  i++;
  if (i == 2) {
    i = 0;
  }
}
