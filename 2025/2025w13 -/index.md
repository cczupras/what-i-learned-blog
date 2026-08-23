---
layout: default
title: "2025w13 -"
---

# #1 Personal ✒️ {color="green_bg"}
## **Personal Relationships**
Last week, I was reminded of the importance of personal relationships. I spent the weekend in Berlin with my fellow students, engaging in many meaningful conversations and sharing personal experiences. It was incredibly valuable to spend time together, listen to each other, and hear different perspectives. The experience was truly enriching.
The following week, I stayed overnight with a friend. We spent the evening discussing various topics, which was both enjoyable and thought-provoking. These interactions highlighted the significance of nurturing friendships. While it can be challenging to maintain these connections in our daily lives, making a conscious effort to stay committed is crucial. Face-to-face interactions are far more valuable than communicating through phones, social media, or text messages.
Moving forward, I am determined to prioritize meeting with friends and fostering personal interactions. Additionally, while exchanging ideas with AI can be beneficial, especially in technical or business contexts, it should not replace the depth of human connection. Engaging in critical discussions and seeking diverse viewpoints remains essential.
<callout icon="/icons/robot_gray.svg" color="gray_bg">
	transcribed and improved with the help of openAI and mistral.ai
</callout>
---
As I am focusing on getting the speeches prepared and helping in a go-live at a customer I have not spend so much time on learning new technical skills. So you will find only some thoughts and non technical learnings this week.
One of my highlights this week was a visit of the local skate park. In my youth I have spend hours and hours on Inline Skates - riding mini ramps and grinding hand rails. I still have a pair of skates and ride occasionally. Yesterday a friend and me spend 2 hours in the skatepark. It was so much fun and with some tries we were also able to recover some old tricks from memory. Of course it felt a bit more stiff then 20 years ago but we can still do it. So much fun - can’t say that enough. It was definitely not our last ride.
**Enjoy reading and don’t forget to leave some feedback.**
# #2 Tech 💻 {color="blue_bg"}
## Catching Errors
If you follow my blog you will notice that I wrote already a lot about Errors and handling them. I think it is a big part in software development to think about what errors can occur and be able to handle them.
Last week I have been helping with a Go-Live and assisted the Level 2 support. It was sometimes hard to get behind the errors. Because what most people do not understand is the importance of reporting an error properly. The better an error that occurred is described the faster it can be resolved.
If a developer gets all the information how to reproduce the error then it will be easier to implement a fix for it. Sometimes there might be multiple errors within a process then it will also be important to describe the process that leads to the error.
In my opinion Microsoft has done a good job the last years to enhance the error handling, catching and displaying for the user.
I am still struggling to implement all of the error features properly in my apps, but this is mostly due to the lack of time at the moment. I am able to catch the errors properly, sometimes even twice which is not the desired behavior. Also they are not saved in the history journal as I would like to.
To be continued ….
# #3 Sports, Food & Health 🏋️‍♀️ {color="orange_bg"}
## Challenges
I love challenges, especially challenging my self. Last week on our Berlin trip I got hooked by a friend in a pushup challenge, we also added some pullups to it. It felt great although my rep numbers were not high and it was not very easy. However after the sore muscles felt good again I started again to do some pushups - a bit less because I want to start slow and progress over time. When I’m at home I want to add pullups as well - may be when travelling I also find a pullup-bar to do some as well.
If that goes well like the streak on learning Swedish then over time it will build up and I would be able to do some more reps by the end of the year.
It also does not take too much time every second or third day.
The pattern is the following
5 rounds of pushups with a 60-90 seconds break in between the sets. The first round should be a round where you can do all the reps unbroken. In the second round you add 2-3 reps more, then 5 reps. The last 2 rounds you deduct 2 reps each round.
If it feels good over some weeks you can also increase the steps and add more reps. Each time you can start with 1 one more rep than the last time.
Take a day off if the muscles are still sore but do not take a break longer than 3 days.
**And always strive for good reps with excellent execution - no cheating.**
# #4 Misc 🤖 {color="gray_bg"}
## What exactly is AI?
### And how does it even work?
These are all questions you have asked yourself in the last month, right?
Well I am in the same boat and during last weekend we had a lot of talks about AI in our study group. I feel it also gets more focus in the business world and my work.
So as you know I want to learn a lot and I am eager to do research and dig deep for knowledge.
Last week I wrote that the #4 Misc section could become something different. Well the idea I currently have is to answer the question in the heading bit by bit every week. Not only for you, but mainly for me to get deep knowledge about this technology which most of you did not know is already pretty old. It seem quite new but this is only because it got to a new level with the generative AI where it got available to a broad audience.
---
<details color="green_bg">
<summary>Read more about what a “**token**” is and how it works… </summary>
	### What is a Token?
	In natural language processing (NLP), a token is a fundamental unit of text. It can be a word, a part of a word, or even a character, depending on how the text is segmented. Tokens are the building blocks that LLMs use to process and generate text.
	### Tokenization Process
	1. **Text Segmentation**: The process of breaking down text into tokens is called tokenization. For example, the sentence "Hello, world!" might be tokenized into \["Hello", ",", "world", "!"\].
	2. **Subword Tokenization**: Some tokenizers break words into smaller subwords or even characters. This is useful for handling out-of-vocabulary words. For instance, "unhappiness" might be tokenized into \["un", "##happy", "##ness"\].
	3. **Special Tokens**: Some tokens have special meanings, such as `[CLS]` for classification tasks or `[SEP]` to separate sentences in certain models.
	### How Tokens Work in Generating Answers
	When an LLM generates text, it processes tokens in a sequence to predict the next token(s) in the sequence. Here's a step-by-step illustration:
	1. **Input Processing**: The input text is tokenized into a sequence of tokens. Each token is then converted into a numerical representation using an embedding layer.
	2. **Context Understanding**: The model processes these tokens to understand the context. It uses mechanisms like attention to weigh the importance of each token in relation to others.
	3. **Next Token Prediction**: Based on the context, the model predicts the probability distribution of the next possible tokens. The token with the highest probability is typically chosen as the next token in the sequence.
	4. **Iterative Generation**: This process is repeated iteratively. The newly generated token is appended to the sequence, and the model predicts the next token based on the updated sequence.
	5. **Stopping Criteria**: The generation process continues until a stopping criterion is met, such as generating a special end-of-sequence token or reaching a maximum length.
	### Example
	Let's say you ask the model, "What is the capital of France?"
	- **Input**: "What is the capital of France?"
	- **Tokenization**: \["What", "is", "the", "capital", "of", "France", "?"\]
	- **Generation**: The model processes these tokens and predicts the next token as "The", then "capital", then "of", then "France", and finally "is" followed by "Paris".
	### How Tokenization Works
	1. **Text Input**: When you input a sentence or a phrase into a language model, the first step is tokenization. The text is split into tokens.
	2. **Tokenization Process**: The tokenizer breaks down the text based on predefined rules. For example, the sentence "What is the capital of France?" might be tokenized into:
		- \["What", "is", "the", "capital", "of", "France"\]
		- Or, if using subword tokenization (like Byte Pair Encoding), it might break down "capital" into \["cap", "##ital"\] if "capital" wasn't in the tokenizer's vocabulary.
	3. **Token IDs**: Each token is then converted into a corresponding numerical ID based on the tokenizer's vocabulary. These IDs are what the model actually processes.
	4. **Model Processing**: The sequence of token IDs is fed into the language model, which processes them to generate a response. The model uses these IDs to predict the next token(s) in the sequence, effectively generating text.
	5. **Detokenization**: Once the model generates token IDs as output, these IDs are converted back into human-readable text.
	### Importance of Tokens
	- **Vocabulary Size**: Tokens help manage the vocabulary size. Instead of having a separate entry for every possible word (which would be enormous), tokenization allows for a more compact representation.
	- **Handling Unknown Words**: Tokenization strategies like subword tokenization can handle out-of-vocabulary words by breaking them down into known subwords.
	- **Efficiency**: Tokens make the processing more efficient by reducing the dimensionality of the input data.
	### Example
	If you input the sentence "What is the capital of France?" into a language model:
	- The tokenizer might break it down into tokens like \["What", "is", "the", "capital", "of", "France"\].
	- These tokens are converted into IDs, such as \[200, 345, 123, 678, 90, 456\].
	- The model processes these IDs and generates a response, which is then converted back into text.
	This process allows the model to understand and generate human language effectively.
</details>
---
As you can see “**tokens**” play a crucial role in text generation. To be honest I’m not quite sure yet if it possible with this knowledge to generate better prompts? But you might know there is a token limit for each model and of course if your input already consumes a lot of tokens the output might be limited - in some cases the model might also cut some tokens in the input which can lead to wrong answers or wrong context. I guess I have to do a little more research on this topic which in the beginning felt small and simple.
---
You can also see how it works with this little tool “TikTokenizer”:
<unknown url="https://app.notion.com/p/1c3b04fbcf9580a18311f3646069933d#1c5b04fbcf9580119afbf839ba144639" alt="bookmark"/>
---
# #5 Song of the week 🎶 {color="red_bg"}
## **“Uprising” by Muse**
<empty-block/>
**About the Artist:**<br>Muse is a progressive/symphonic rock artist/band from Teignmouth, Devon, England. Known for their spectacular live shows and broad sound, Muse has won numerous awards, including two Grammy Awards, two Brit Awards, five MTV Europe Music Awards, and eight NME Awards. In 2012, they received the Ivor Novello Award for International Achievement from the British Academy of Songwriters, Composers, and Authors. The band, consisting of Matt Bellamy, Chris Wolstenholme, and Dominic Howard, has had a career marked by outstanding news and happenings, such as headlining the Glastonbury Festival in 2004 and being named the Billboard Alternative Songs and Rock Songs artist for 2010 with "Uprising," "Resistance," and "Undisclosed Desires" achieving top spots on the year-end Alternative Song chart.
<empty-block/>
**Background of the Song:**<br>"Uprising" was released on 4 August 2009 and is part of the album "The Resistance." The song is about protesting against the banking situation and political control, with Matt Bellamy describing it as a protest song. Interestingly, the synth melody in "Uprising" is similar to the theme from the UK TV show "Doctor Who," and the song features a Buchla synthesizer that was used for the first and only time in this track. "Uprising" reached number 37 on the US Billboard Hot 100 and was certified platinum in the UK, gold in four countries, and double platinum in the United States, making it Muse's best-selling single.
<empty-block/>
**Listen to the Song:**
<unknown url="https://app.notion.com/p/1c3b04fbcf9580a18311f3646069933d#1c5b04fbcf9580abab39c94dc3c5142b" alt="bookmark"/>
<empty-block/>
**My Personal Story with This Song:**<br>I stumbled upon the band while shuffling a playlist on Spotify and was directly hooked by their broad sound.
---
# Feedback {color="purple_bg"}
Here you can give me feedback, send ideas or just connect with me. Just leave a comment.
<embed src="https://tally.so/embed/waKjo9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&week_hidden=2025w13"></embed>
---
<database url="https://app.notion.com/p/1c3b04fbcf9580b6ada0f7bec2d75248" inline="true"></database>
---
©️ Christian Czupras - 2025
