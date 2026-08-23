---
layout: default
title: "2025w16 - Intervalls"
---

# #1 Personal ✒️ {color="green_bg"}
## Personal Note
If you are following this blog you might have recognized that I love to do research on topics that I find interesting. Most of the topics that I researched in the private part of my life have made it to this blog. It helps me to write about the learnings and the research because then I can ask the right questions for the next step. 
Additionally I get to know if I have understood it. If I can write and describe a topic then I am confident I can memorize and use it - even if I can’t remember all details I can search for it in my second brain or in this blog and do a recap - it is saved forever in my personal knowledge management. 
Since I started this blog AI gets more and more helpful to me. It helps me get the sources for research, rephrase texts and generate short summaries for me. So this week it was just natural to start on something new and use AI for generating some code to help with a side project.
More learnings this week about my body and Intervall training and new techniques for solving the Rubik’s Cube
**Enjoy reading and don’t forget to leave some feedback.**
---
## CFOP 🎲
Once you have solved the **Rubik’s Cube** and be able to do it over and over again you ask yourself - “How fast would I be able to do it?”. To be honest I have not timed my solving times - I just do it for fun and keep my brain actively processing. But still I am looking to get more effective and do less moves to solve the cube. Until now I used a method that is called the “beginners method”, which consists of five steps:
1. Create the bottom cross
2. solve the first layer
3. solve the second layer
4. get the top surface
5. solve the top corners
### CFOP - reduces it to 4 steps:
1. **C**ross
2. **F**irst 2 Layers \[F2L\]
3. **O**rienting the last Layer \[OLL\]
4. **P**ermutate the last layer \[PLL\]
The hardest part to learn here is the F2L because it combines the steps 2. and 3. from the beginners method. The other parts to my knowledge now are quite the same. As you can sense I am still working on and learning F2L. At least when you have the basics and you make a mistake during the F2L part you can “repair” it and do not have to restart from the beginning. That is quite a satisfying feeling.
If you want to get to the next level in solving a Rubik’s Cube here is a good explanations for F2L:
<unknown url="https://app.notion.com/p/1d8b04fbcf9580ad824bc2897ff783e3#1dab04fbcf958002aaf6c2fbc0b21cf7" alt="bookmark"/>
# #2 Tech 💻 {color="blue_bg"}
## Multi Company Configuration App with help of Copilot
Everybody these days is talking about Agentic AI and the possible obsoletions of developers. I doubt that this will happen over night. But in order to learn how far the technology is I wanted to give it a try.
I decided to start a side project which is building a Multi Company Configuration App for Business Central. Basically it should - based on configuration - export certain records - mainly configuration and administration data. The data should be transferred to specified companies in the same environment (later in others as well). Then with the help of a task scheduler a processor will insert or modify the data from the configuration in the specific company, making sure the right record triggers are fired (insert, modify, validate).
My approach to see how helpful AI could be with this task:
1. Record an audio memo with the rough outline and process (you already know this is going automatically transcribed into my second brain as a note)
2. Use the memo within a prompt and ask the AI to create a requirement sheet (this might be helpful to structure future ideas into the same way)
3. Use the requirement sheet in an empty AL:Go project to ask the vscode Copilot the create an app based on the requirements
I am not a superhero at prompting yet and I did not re-iterate on the initial prompts. So far I can say this approach will save a lot of time and you will get a structured output - every time you put in a different memo.
Nice, but this is not the holy grail. When asking the Copilot to create the app it did it basically. The structure of the app looked right and there was a ready to be implemented outline. But this was far from being ready to be deployed.
---
My take on this is that I will use it more often from now on to see how it evolves. I need to work on the prompt for the requirements sheet. That will help me to create and give instructions to developers in my team. 
The Copilot in vscode was helpful if you give it concise instructions. It helped to create the exporting functionality. I can say the code quality got way better from last time I used it and that was just a couple weeks ago. I believe it is a massive time saver but you still need to know how to code and structure applications properly. Specifically the code completions are really helpful when creating tables and pages. I used Claude 3.5 Sonnet as a model - I might try others the next week while working on this side project.
**What is your experience with AI helping in coding?**
# #3 Sports, Food & Health 🏋️🥦 {color="orange_bg"}
## Intervalls 🏃
Recently I notices that my fitness is not where I want it to be - yes I am eager to get fitter and I have an opinion in mind how fit I want to be. It is not about looking fit - that is just a side effect - it is more about what my body is able to do. I love doing sports and also participate in challenges and little competitions. I still have 2 goals in running - run a 20 minute 5K and finish a half marathon.
Getting better does not come from just more training but from the right type of training. If you want to get better at running -  guess what you have to run more. But there is different type of running that helps you get better and faster. First you have to do the ground work and improve endurance - level 2 training (keeping the heartrate in zone 2 - which is low - medium effort) is quite effective here. Then when you have a baseline Intervall Training helps you to get faster.
So that is the plan for the next weeks. I’m going to learn how my body reacts to Intervall Training. We have quite some days with bad weather here but that should not be an excuse - I own an AirBike which is also perfect for Intervalls. As I want to get also better at longer biking distances this might be a win-win situation. Today my Garmin says that I would need \~ 25min for 5K and my V0²-Max is at 48.
I have seen better numbers so I need to get to work. I will need to figure out what are the best Intervalls for this purpose. Let’s dig into resources and get on the track to find out. I will keep you posted.
# #4 Inside AI 🤖 {color="gray_bg"}
## Transformer Architecture
Last week I wanted to learn more about the structures of modern AI. Basically look deeper into how generative AI and LLM’s are working. You did not miss anything, because I did not find the time to get into the topic. This week is different - so lets have a deeper dive in the architecture and let’s look at something that is called “Transformer Architecture”. If you read about LLM’s and Neuronal Networks you will stumble upon this topic as it plays a big role on why todays AI has become a hype.
The Transformer Architecture is like an artificial brain which helps AI to understand and generate language. It was invented 2017 and from then on revolutionized the AI world.
It is so mighty because it works with **attention** of words. It tries to learn the connection between words and with the ability to “look” at all words at the same time - basically in parallel - it can find out how the words are connected or interact with each other. 
How does this process work? Well we have heard about tokens - if not, go back 2 weeks and read my blog article about it. Once the tokens are derived from the sentence they are set in connection to each other based on the weights that are gained in the training.
This was the short version of how I understood it - pretty neat.
<details>
<summary>If you are interested in a longer more deeper and technical explanation then hit the toggle …</summary>
	<callout icon="/icons/robot_gray.svg" color="gray_bg">
		the following section was generated while chatting with [Claude](https://claude.ai/chat)
	</callout>
	### Self-Attention: How Words "Talk" to Each Other
	Let's use this sentence as an example: "The dog, which has been playing in the garden for an hour, is barking because it saw a cat."
	### How Self-Attention Works:
	1. **Dividing into Tokens**: The sentence is broken down into individual words or subwords.
	2. **Each Token Asks Three Questions**:
		- "What am I?" (Query)
		- "What can I offer?" (Key)
		- "What information do I contain?" (Value)
	3. **The "Conversation" Between Tokens**:<br>Let's take the word "barking" in our example sentence:
		- "Barking" asks every other token: "How important are you to me?"
		- It compares its own query with the keys of all other tokens
		- It discovers that "dog" is very important (high score) because dogs bark
		- "Cat" also gets a high score because it's the reason for the barking
		- Words like "for" or "an" receive lower scores
	4. **Weighting the Information**:
		- "Barking" creates a weighted sum of all the values from the other tokens
		- The most important tokens (dog, cat) have the greatest influence
		- The result is a new representation of "barking" that now contains the context: "A dog is barking because of a cat"
	### Why This Is So Cool:
	In older AI models, the word "barking" could only see its direct neighbors. It would hardly understand that it's connected to "dog" at the beginning of the sentence or that the "cat" at the end is the reason for the barking.
	With self-attention, each token can directly interact with every other token, no matter how far apart they are in the sentence. It's like a big conversation where everyone can talk to everyone else at the same time!
	### Mathematically Speaking (Simplified):
	1. Each token is converted into three vectors: Query, Key, and Value
	2. For each token, we calculate the similarity between its Query and all Keys
	3. These similarities are converted into weights (using a Softmax function)
	4. The weights determine how strongly the Values of the other tokens influence it
	This creates a new vector for each word that takes into account the context of the entire sentence!
</details>
---
# #5 Song of the week 🎶 {color="red_bg"}
## **Empire State of Mind by Alicia Keys**
**About the Artist:**<br>Alicia Keys is a renowned R&B and soul artist hailing from New York City. Known for her powerful vocals and soulful piano melodies, Alicia Keys has won numerous Grammy Awards and has become an icon in the music industry. Her career is marked by her ability to blend classical piano training with contemporary R&B, creating a unique and captivating sound.
**Background of the Song:**<br>"Empire State of Mind" was released in 2009 and is part of the album "The Element of Freedom". The song is a tribute to New York City, capturing the spirit and energy of the city that never sleeps. Co-written with Jay-Z, the track features his rap verses, adding a dynamic layer to Alicia Keys' soulful vocals. The song quickly became an anthem for New Yorkers and music lovers worldwide.
**Listen to the Song:**
<unknown url="https://app.notion.com/p/1d8b04fbcf9580ad824bc2897ff783e3#1d8b04fbcf95804eb0bbf3b62f0adb9f" alt="bookmark"/>
<empty-block/>
**My Personal Story with This Song:**
This song, "Empire State of Mind" by Alicia Keys, holds a special place for me. **Alicia Keys' powerful voice** and the **inspiring lyrics** always uplift me. Her music makes me feel **invincible**, and this track is no different; it's an **anthem that resonates with my soul**. It reminds me to **tackle challenges and aim high**, which aligns with my interest in personal growth and embracing new challenges. Listening to it gives me **new energy and motivation** \[similar to descriptions of music's effect, e.g.\].
# Feedback {color="purple_bg"}
Here you can give me feedback, send ideas or just connect with me. Just leave a comment.
<embed src="https://tally.so/embed/waKjo9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&week_hidden=2025w16"></embed>
---
<database url="https://app.notion.com/p/1d8b04fbcf958053b14ccd5bb1170209" inline="true"></database>
---
©️ Christian Czupras - 2025
