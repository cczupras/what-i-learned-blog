---
layout: default
title: "2025w18 - Cast Away"
---

# #1 Personal ✒️ {color="green_bg"}
## Personal Note
Cast away while writing this post from the beautiful island of Amrum. Yes, it is time for some vacation again. Which means spending more time out in the nature (hopefully the weather is nice to us) and more time for reading and letting the mind relax and flow.
But it is also time for me to try new things, get into new habits - let see what this will bring.
However without writing too much contentless words go ahead and check your favorite section - somehow I was able to produce again a lot of content now looking at this page full of text.
<empty-block/>
**Enjoy reading and don’t forget to leave some feedback.**
---
## NotebookLM (again 😉)
This week, I'm diving back into the fascinating world of Notebook LM, a feature that's truly a game-changer. I recently watched a series by Tiago Forte where he seamlessly integrated content from his journal into the platform. Inspired, I decided to experiment with my own approach—spot reading. I wondered if I could input my blog and ask the same introspective questions, gaining insights about myself in the process. And indeed, the results were amazing.
<unknown url="https://app.notion.com/p/1e5b04fbcf9580caba95cf99d9c2cbfb#1e9b04fbcf9580bd916fd680a15ff321" alt="bookmark"/>
Notebook LM allows you to add multiple sources and ask general questions, but it doesn't stop there. You can also create audio summary - a podcast-like file where two hosts discuss the topics from your sources. Before generating this audio, you can specify questions or highlight particular points, resulting in a six to ten-minute audio file that's both informative and engaging.
This feature is incredibly useful when you want to delve into a new topic. Instead of sifting through 15-20 source (websites, videos, PDF and text files), you can get a quick start in just a few minutes. Listen to the audio on the go, and once you're familiar with the topic, you can dive deeper into the sources if needed. It's a time-saving, efficient way to get up to speed on any subject. I highly recommend giving it a try!
---
A new cool feature they have added is the “discover sources” - you can just type in a topic you are interested about and then the search goes through the web - we all know Google is able to search the web quite well - and suggests 10 sources. If you take those over you already have a starting point for your new topic in seconds. After that the notebook is ready to be fired with questions and all the other functionality.
I actually used this feature to dig deeper into this weeks topic about meditation and the brain found in section <mention-page url="https://app.notion.com/p/1e5b04fbcf9580caba95cf99d9c2cbfb#1e5b04fbcf958005975edd7f4cf57425">#3 Sports, Food & Health 🏋️🏃🚴🥦</mention-page> 
# #2 Tech 💻 {color="blue_bg"}
## Refactoring with Copilot
In our company - more specific in my team - we are starting to reflect on the learnings from last year. We have build several apps that build up a module that extends the Microsoft Business Central ERP System with several functionalities for the shipping industry. Together with our clients we implemented the solutions, tested them and took them live in production. All these Apps that we build of course need maintenance in the future to comply with updates from Microsoft and new functionality or legal obligations.
Right now we then have to implement the new feature or do a fix and then role out the new App to our clients manually by uploading it to the different customer environments. The more clients we onboard the more work it will be for us to do all the updates uploading the right files to the right environments.
What would be a solution to streamline this? Could the customer update on their own if they have the proper staff for the task?
The answer to this is yes - if you move the Apps to the AppSource a marketplace for Apps.
So we decided to start moving some of our Apps to the AppSource which requires some refactoring to comply to the guidelines of AppSource and also to our internal guidelines we have set for AppSource Apps. 
There is not much about refactoring the code itself, that will stay the same - unless the AppSource Code Cop says otherwise (it is a bit different from the per-tenant extension \[PTE\] code cop). Most of the things we need to change is the object names, filenames and object numbers (yes these still exist in BC - unfortunately).
And of course my initial thought was to ask Copilot if it can do this job for me. Well, it can but it was kind of slow - might be my fault to not use it the right way. With the “agent mode” it was able to change the files. But in the end I used the search and replace with regular expressions. This was a bit faster I felt I had more control over what I have changed.
The next step would was reorganizing things - like first all the global methods/variable, then local and internal things. This is where Copilot did a great job - this would be really hard to do with regular expressions or manually.
Finally my the last thing to try (which is still open) is to create and enhance the automated tests - a topic I want to look more into because it is sometimes neglected because it seems to be a lot of work in the beginning.
I’ll keep you posted on how this journey went.
# #3 Sports, Food & Health 🏋️🏃🚴🥦 {color="orange_bg"}
## Meditation and the Brain
Lately I was watching a documentary about the brain. It was quite interesting. They also mentioned meditation and how it can positively influence the brain power. 
So that got me hooked and I did some research and read some articles. There's definitely some correlation between meditation and memory in the brain, especially the short memory. It might be that practice mindfulness while meditating and therefor you can focus better. 
Studies show that practicing mindfulness and also applying breathing techniques can lead to significant increases in gray matter concentration within the left hippocampus.
Some years ago I read the book “On Intelligence” and was fascinated on how our brain seems to work. Now that we have AI rising and the baseline are neuronal networks there are so many similarities - may be that is why I am so interested in this topic. It is just fascinating - and yes I am repeating myself here - how nature designed all this and how it is evolving. I want to again dig deeper into that topic and see what you can actually do to improve life. If you are interested in the book, here is a link:
<unknown url="https://app.notion.com/p/1e5b04fbcf9580caba95cf99d9c2cbfb#1e9b04fbcf9580aeaa98ed2deb331e84" alt="bookmark"/>
If you have read the blog from the beginning, you have read that I missed to cancel the subscription for the meditation app. So now after actually seeing there might be a benefit for better (short term) memory , I should start to implement it a bit more often.
In the App there are different courses and trainings. I'm playing around with what fits me, what can I implement in my daily routine. I don't know if I can make it daily.
What I learned to far using the meditation sessions is that I start to concentrate, get into the meditation, thoughts are floating by, but then after five, six, seven minutes it loses me. I get lost in thoughts again and that's not the idea of meditation. Guess I have to practice a bit more.
Meditation should free up head space to get rid of thoughts. But yeah, let's see how that evolves. So I'll keep you posted, but it's quite interesting. 
Here are some sources about the correlation between meditation and brain improvements:
<unknown url="https://app.notion.com/p/1e5b04fbcf9580caba95cf99d9c2cbfb#1e9b04fbcf958019a578e22452d59d7e" alt="bookmark"/>
<unknown url="https://app.notion.com/p/1e5b04fbcf9580caba95cf99d9c2cbfb#1e9b04fbcf9580fca009d9537f522c1a" alt="bookmark"/>
<unknown url="https://app.notion.com/p/1e5b04fbcf9580caba95cf99d9c2cbfb#1e9b04fbcf9580859714d7b5e0a2c4f2" alt="bookmark"/>
# #4 Inside AI 🤖 {color="gray_bg"}
## Can AI memorize conversations?
The short answer is **no** - not by default and not by how an LLM works.
In the following video which is the latest of the series I wrote about last week the author describes how memory could be interpreted in an LLM. But this kind of memory is build during the learning process not constantly by chatting with the model:
<unknown url="https://app.notion.com/p/1e5b04fbcf9580caba95cf99d9c2cbfb#1e9b04fbcf9580029a43e7596d5f8905" alt="bookmark"/>
Basically what the author is referring to is what some researchers from Google DeepMind reported on their work regarding this question in December of the previous year where their general conclusion was that facts seem to **"live" in a specific part** of these networks, specifically the **Multi-Layer Perceptrons (MLPs)**. These MLPs are also referred to as feed-forward layers.
In the MLP step, unlike Attention, the vectors **do not interact with each other**. Instead, they all go through the **same operation in parallel, **meaning that all the input is processed in a similar way in parallel. This non-linear activation functions within the MLP block are sometimes referred to as the network's "neurons" in this context.
In summary, according to video, research suggests that MLPs are a primary location where LLMs store factual information learned during training, operating by transforming each vector individually through learned layers and non-linearities to enrich its meaning and potentially incorporate facts, although the precise mechanism of fact storage within these blocks is still an active area of research.
---
So the questions is then how does an AI chatbot memorize things and can related to earlier conversations? Well the answer is additional context. When you ask the chatbot something you might already know that there is also a system prompt applied in the background which alters your prompt so that it fits better to the specific LLM and also adds system or master context. All of the modern AI chatbots have either a profile or preferences where you can add personal context for all prompts. I wrote about this last week when talking about master prompts. But all of them also save conversation history in a separate memory so it would be able to use more context based on historic conversations. As the context windows get bigger and bigger these days the AI bot can remember more and more things. I does not feel like the bot is losing the red line. 
Who knows if the scientists invent a technique that can instantly learn and apply context to the model. May be like a personal extension with your data. This could tailor the model more to your benefits. It could act like a clone of yourself - much like the idea of the second brain. I would be nice if you can talk to your brain and get the information you need in an instant.
It is also kind of spooky because others would be able to look deeply inside yourself - or would it be beneficial so we understand each other better? Sort of a philosophical question.
**What’s your opinion about it - comment below and let me know your thoughts.**
---
# #5 Song of the week 🎶 {color="red_bg"}
**So Long by Donots feat. Frank Turner**
**About the Artist:**<br>Donots is a punk rock band from Ibbenbüren, Germany. Known for their high-energy performances and catchy melodies, Donots has been a staple in the European punk scene since their formation in 1993. The band has released numerous albums and has gained a dedicated following through their passionate live shows and relatable lyrics.
**Background of the Song:**<br>"So Long" was released in 2012 and is part of the album "Wake the Dogs". The song is about standing up for yourself and making difficult choices to move forward in life, reflecting themes of personal growth and determination. "Wake the Dogs" was a significant album in their discography, representing their continued success as an independent band after establishing their own label Solitary Man Records. 
The energetic delivery and meaningful lyrics in "So Long" resonated with fans and demonstrated why Donots has maintained their relevance in the German punk rock scene for decades.
The song is a collaboration with Frank Turner, a renowned folk-punk singer-songwriter from the UK. This track blends the raw energy of Donots with Turner's distinctive vocals, creating a powerful and memorable anthem. The song explores themes of perseverance and the passage of time, resonating with fans of both artists.
**Listen to the Song:**
<unknown url="https://app.notion.com/p/1e5b04fbcf9580caba95cf99d9c2cbfb#1e9b04fbcf9580d5b944fdd48e88e06b" alt="bookmark"/>
**My Personal Story with This Song:**<br>Every second year, Donots play a massive concert near their hometown, and one of my friends is a die-hard fan. He once invited some of us to join him, and since then, our group has made it a tradition to travel to Münster for this special event. The atmosphere is electric, and the energy among the crowd is unmatched. I love their punk rock style; it's exhilarating to dive into the crowd, especially the pit. Donots always have surprises and special guests in store, making each concert a unique experience. "So Long" captures that spirit perfectly, and hearing it live is an unforgettable moment.
# Feedback {color="purple_bg"}
Here you can give me feedback, send ideas or just connect with me. Just leave a comment.
<embed src="https://tally.so/embed/waKjo9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&week_hidden=2025w18"></embed>
---
<database url="https://app.notion.com/p/1e5b04fbcf958071a0e0e199884048f9" inline="true"></database>
---
©️ Christian Czupras - 2025
