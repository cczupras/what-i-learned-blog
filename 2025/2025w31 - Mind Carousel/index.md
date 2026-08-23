---
layout: default
title: "2025w31 - Mind Carousel"
---

# #1 Personal ✒️ {color="green_bg"}
## Personal Note
Sometimes it feels like being trapped in a **thought or mind carousel**, where the same worries and considerations keep circling in your head without leading to any real results. You might know the feeling: your head is full, but you don't really make any progress. 
I came to this topic as I know it by myself but this week I listened to a podcast where this topic was addressed and the insights are quite helpful. Find a link to the podcast (german) in the <mention-page url="https://app.notion.com/p/242b04fbcf958147925cf79659e0ef33#242b04fbcf958127aadcc0b11e732dc2">#5 Media of the week 🎶📺</mention-page>. In this podcast you hear about **how our brain deals with these loops** and what science has to say about it. This week I used the tips from last weeks video by Andrej Karpathy and used a Google NotebookLM to revise the podcast. I took a transcript, add some of the sources linked in the show notes and asked some specific questions to the sources to better understand the content.
It is fascinating to see how concepts from the AI world, such as context and model behavior, can also be applied to our own thinking. The continuous learning and adapting that I document in my blog is not limited to technical skills but also extends to understanding our own mental processes. It is a constant debugging of life, as I called it in week 25 <mention-page url="https://app.notion.com/p/219b04fbcf95809893d8e3be0bc14151"/> .
Despite the turbulent week and the many appointments, I managed to gather some valuable insights that I would like to share with you today. As always, writing this blog has helped me organize my thoughts and **connect the dots** <mention-page url="https://app.notion.com/p/1ccb04fbcf958062b070e3acb16eb0ed"/> .
**Enjoy reading and don’t forget to leave some feedback.**
# #2 Tech 💻 {color="blue_bg"}
### Code Review
As promised last week I gave a shot at letting GitHub Copilot review the Business Central DMS (Document Management System) App I was working on the last weeks. And what can I say the results are quite good and helpful. 
I did not ask Copilot to rewrite my code. I could have easily done that, but that was not the intention. I wanted to see if it can assist me in code review - hopefully even while I am working on a project. This time I am doing this after finishing the final internal tests. The ones with the customer are about to start. So it is not too late to refactor code - well it is never too late to refactor.
So what did I do? Well, first I switched the Copilot to “Ask” mode rather than Agent, second I added the whole workspace as context (@workspace) and then asked for a code review and improvement suggestions.
At first the outcome positively rated the architecture with interfaces a pattern that allows for flexible implementations and good separation of concerns. It also gave me the strength in bullet points which is quite a nice overview and I am thinking to put that into the readme file as guidelines for future adaptions by other people.
Then for me the most interesting and valuable part was the improvement suggestions - there are plenty. First - of course - documentation. I have not really heavily documented the code - but hey as AI understands my code even better than I do after couple weeks - this will be the first low hanging fruit for the Agent mode - run over the procedures and create documentation headers for each, well after a second thought - may be it should be the last step after the other refactoring because otherwise I might end up in doing it twice and need to revisit the documentation.
It also suggested better and more consistent naming together with reducing code duplication and consolidated error handling. All valid and good points. We all know it, being deep in the code in the need of another procedure - we use quite the same parameters, but in a different order and a little bit different naming. Some weeks later when the need arises for the next feature it is hard to follow. So this is quite a good learning that I take here to let AI check for consistency and apply some re-sorting and re-naming for a better structure.
Copilots conclusion after the improvement suggestions:
> Implementing these suggestions will improve maintainability, readability, and robustness. The primary focus should be on adding comprehensive documentation, standardizing error handling, and reducing code duplication.
Sounds great - I will do that.
Another thing that came to my mind was code discoverability - you don’t know what I am talking about? Read my blog about it: <mention-page url="https://app.notion.com/p/1a3b04fbcf95801190daf70ba7c6646d"/>.
So I asked Copilot to suggest a different folder structure, it went to work and gave me a nice result. I do not fully agree with all the details but it is a start which I will start moving on this week. Overall it sums the intention up to the following
> **Key Benefits of the new Structure**
	1. **Logical Grouping**: Related components are grouped together
	2. **Clear Implementation Paths**: Easy to find implementations of interfaces
	3. **Microsoft Alignment**: Similar to Microsoft's module-based approach
	4. **Better Discoverability**: Clearer navigation for developers
After all this was only a quick shot with simple prompts - now it is time to work on refining the prompts, save those for later in a code review prompt file I can use anytime and most important of course carry out the recommended actions with careful consideration.
**Do you like the idea of having AI as your code reviewer? Tell me what you think.**
# #3 Sports, Food & Health 🏋️🚴🥦 {color="orange_bg"}
### Breaking the Loop: Understanding and Countering Your Repetitive Negative Thoughts
This section is about health and I have not written a lot about it so far. This week will be a change and I will write a bit about mental health - heavily inspired by the podcast I just listened to. Here is what I pulled out of it with a bit of help of AI for the writing. 🤖
Do you ever find yourself stuck in a mental carousel, endlessly replaying worries or past events? This is what psychologist Leon Windscheid calls **"repetitive negative thinking" (RNT)**, a common experience where your mind just spins without leading to any action or solution. Leon, drawing from various research models, identifies **four distinct types of RNT**, each with its own underlying mechanism and counter-strategy. Understanding which type resonates with you can be the first step towards breaking free from these unhelpful thought patterns.
<details>
<summary>Let's dive into the four types and their recommended approaches:</summary>
	- **The Avoider:**
		- **The Problem:** Based on the Avoidance Model of Worry, this type avoids painful mental images or unwelcome truths. You push away negative thoughts, which temporarily feels good because it removes something negative. However, this prevents emotional processing and habituation to fear, keeping the anxiety alive instead of allowing it to subside. As Leon explained, it's like staying in a "diffuse fog" on the side of a mountain, rather than climbing to the peak of your fear and letting it naturally dissipate.
		- **The Strategy:** **Confrontation**. Think the fear to its absolute end. For instance, if you worry about losing your job, fully imagine the worst possible scenario, no matter how absurd it seems. Atze Schröder shared a similar personal experience of overcoming shyness by confronting situations where he might be ridiculed, finding that direct confrontation ultimately resolved his anxiety.
	- **The Security Seeker:**
		- **The Problem:** Rooted in the Intolerance of Uncertainty Model, these individuals find uncertain situations stressful. They use worrying to "insure" themselves against negative events, meticulously planning for every option to create a false sense of control and certainty. This process, however, undermines their trust in their own ability to solve problems when they arise.
		- **The Strategy:** Implement a **fixed "worry appointment"**. Designate a specific time each day (e.g., 20 minutes every evening at 6 PM) where you allow yourself to ruminate freely. Outside of this time, actively postpone those worries. This teaches your brain that the thoughts will be addressed, but not right now, helping to regain control over when and how you engage with them.
	- **The Consistent:**
		- **The Problem:** This type is explained by the Contrast Avoidance Model. People in this category maintain a constant negative mood or effect because they are highly sensitive to emotional contrasts, especially negative ones. They prefer to stay "down" to avoid the deeper fall that might occur if they allowed themselves to experience true highs.
		- **The Strategy:** **Write down your worries on paper and perform a reality check**. This forces you to slow down the thought carousel, as writing is slower than thinking. By seeing your diffuse worries concretely on paper, you can critically evaluate their plausibility and whether they are fair to yourself, rather than getting caught in automatic mental loops.
	- **The Convinced:**
		- **The Problem:** This type stems from beliefs about one's own thinking. Individuals may hold positive beliefs about rumination (e.g., it helps me prepare) or negative beliefs (e.g., it's unhealthy and uncontrollable). Both types of beliefs can inadvertently lead to more rumination or an attempt to suppress thoughts, which often backfires.
		- **The Strategy:** **Loosen your beliefs about rumination and accept the repetitive negative thoughts**. The key is to change your relationship with these thoughts, accepting them rather than judging them or trying to fight them. Imagine stepping off the mental carousel and watching your thoughts from a distance, accepting their presence without letting them spin you out of control.
</details>
Understanding these different motivations behind repetitive negative thinking can empower you to choose more effective strategies for managing your mental well-being. While these are practical tips for everyday life, it's important to remember that if rumination significantly impacts your daily life or causes distress, seeking professional help is a crucial and effective step.
I will definitely apply these strategies on myself, as I also find myself in these traps sometimes. Of course sports help me to push the negative thoughts away and get some endorphins to push me on the positive side again, but that is only good for a certain time. I realized with this blog, that writing helped me reflect, even when just talking to my phone to record notes it helps structuring my thoughts. With the additional help of what I just learned from the podcast that could be a new super power to be more focused, more productive and could lay the path for better resolutions in all aspects of life.
**What's your thought on this? I love to hear about it - either in the comments or write me a personal message - I’m all ears.**
# #4 Inside AI 🤖 {color="gray_bg"}
### News Fatigue
Do you know that feeling that there is a lot of constant new news and although you are interested it gets you tired. I have that feeling with AI right now. In every corner you hear something new about it - some amazing things here and ground breaking news there. It is too much to follow and way too fast to try everything out.
From now on I will take a little bit of shift in gears and select topics that I can really related and that are within reach - potentially to apply these to my work or private matters.
Do not get me wrong - I will stay curious about AI but I will not follow every model and every new tool - however I am more interested in the concepts behind and how these evolve to better tools.
### ASI-ARCH and the AlphaGo Moment
I recently read about ASI-ARCH and how they used AI to build new AI - highly autonomously - future is here. Well kind of. We all have seen this coming and expected it. The really cool thing about it they all made it public and open source - no hidings or closed models. I think that is the right step also in regards of security and control over AI.
Here is the link to their repository:
<unknown url="https://app.notion.com/p/242b04fbcf958147925cf79659e0ef33#244b04fbcf9580b49418cd0542f88469" alt="external_object_instance"/>
You can also download the sources and run it yourself to find new linear attention mechanisms. I truly believe that will be the future of science and work. Human will create the basis and set the guardrails and then a bunch of AI Agents with dedicated roles will carry out the work.
### MetaGPT
Similar things I learned already exists for development. There is MetaGPT:
<unknown url="https://app.notion.com/p/242b04fbcf958147925cf79659e0ef33#244b04fbcf9580dd80bde176e6014e0d" alt="external_object_instance"/>
MetaGPT is supposed to work on SOP’s - may be something I should look into for my future work items and customer requirement - it could be beneficial to create those SOP’s and get used to it - either for working on it in a classical manner or start implementing more AI to operate on this. I believe we can learn a lot about our own way of working when digging deeper into the research where people try to teach AI how to work - weird world isn’t it?
But you could ask now - what is an SOP? 
<details>
<summary>**Here is a wrap up on SOP and how MetaGPT has build it in:**</summary>
	An **SOP**, which stands for **Standard Operating Procedure**, refers to a set of defined guidelines that outline responsibilities and establish standards for intermediate outputs within a workflow.
	In the context of MetaGPT, SOPs are a fundamental concept, embodied in the philosophy "Code = SOP(Team)". They integrate human-like workflows and procedural knowledge into AI processes to enhance output consistency and reliability.
	Here's how SOPs function within MetaGPT:
	- **Blueprints for Tasks** SOPs serve as blueprints that break down complex tasks into manageable components. Agents are then assigned these sub-tasks, and their performance is aligned with standardized outputs.
	- **Promoting Collaboration** They promote collaboration among teams by deconstructing project tasks into smaller, actionable procedures, which are then assigned to specific, specialized roles within the simulated software company.
	- **Structured Workflows** MetaGPT encodes these SOPs into prompt sequences to organize and promote multi-agent workflows, introducing structure and opportunities for refinement throughout the development process. This ensures that all agents follow a strict and streamlined workflow, and that all "handovers" (communication of intermediate results) comply with established standards.
	- **Reducing Errors** This structured approach reduces the risk of errors and inconsistencies, such as "hallucinations" that might be caused by unconstrained dialogue between Large Language Models (LLMs).
	- **Generating Structured Outputs** By adhering to SOPs, MetaGPT agents generate structured outputs, including requirement documents, design artifacts, flowcharts, and interface specifications, which significantly enhances the success rate of the target code generation.
	- **Enhancing Robustness** The integration of human-like SOPs, along with role-play expertise, structured communication, and streamlined workflows, considerably enhances the overall robustness of multi-agent systems and improves code generation quality.
</details>
# #5 Media of the week 🎶📺 {color="red_bg"}
## Podcast recommendation
These two hosts couldn’t be any different. One is a psychologist and the other a stand-up comedian. However the podcast is not fun it is dead serious and goes really deep. Both are close friends and they really take apart the topics and it is fun listening. I can highly recommend this episode. In case you do not understand German - just download the episode, let it transcribe and translate by your favorite AI.
<unknown url="https://app.notion.com/p/242b04fbcf958147925cf79659e0ef33#244b04fbcf9580a19655dc27457499fc" alt="bookmark"/>
---
### **Breaking the Habit by Linkin Park**
This week, a song that addresses the theme of breaking patterns and habits fits perfectly with the focus on the mind carousel.
**Background of the Song:** "Breaking the Habit" was released in 2003 and is part of the album "Meteora." The song deals with the struggle against addictions and compulsive behaviors, expressing the desire to break free from destructive patterns. It is characterized by its emotional depth and the combination of electronic elements and traditional rock. The song was personally significant for Chester Bennington, as it reflected his own struggles with dependencies.
**Listen to the Song:**
<unknown url="https://app.notion.com/p/242b04fbcf958147925cf79659e0ef33#244b04fbcf9580d1ba81ca6753e2b232" alt="bookmark"/>
---
### Reisen by Mia
Another song that keep circling in my ~~mind~~ ear was this one from one of my favorite German band.
<unknown url="https://app.notion.com/p/242b04fbcf958147925cf79659e0ef33#244b04fbcf9580308cd8ef68b04fb0be" alt="bookmark"/>
It has a great melody but what this song makes special is the depth of the lyrics. Wrapped into one sentence the key message is:
> Overall, "Reisen" appears to be about the experience of travel as a metaphor for personal reflection and the search for inner peace amidst the constant motion of life.
# Feedback 📣 {color="purple_bg"}
Here you can give me feedback, send ideas or just connect with me. Just leave a comment.
<embed src="https://tally.so/embed/waKjo9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&week_hidden=2025w31"></embed>
---
<database url="https://app.notion.com/p/242b04fbcf9581049c8be09c1511b699" inline="true"></database>
---
©️ Christian Czupras - 2025
