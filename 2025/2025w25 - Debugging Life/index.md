---
layout: default
title: "2025w25 - Debugging Life"
---

# #1 Personal ✒️ {color="green_bg"}
## Personal Note
Hello readers, welcome back to this week's blog. This week, I am looking back and reflecting the practical application of time blockers for dedicated focus periods - like in the last blog I talked about having more time for lab and experiments - this week I mixed it a bit with the worktime as a starting point.
These structured allocations of time have been beneficial, allowing for a more profound engagement with the details of tasks. It has facilitated a deeper analysis of specific topics, which aligns with my commitment to continuously gather and share knowledge. For instance, I have found that allocating focus blocks in my calendar can be particularly helpful for tasks like progressing on app development projects, or managing emails effectively. This approach supports the kind of detailed research and learning that underpins my personal knowledge management efforts, where I aim to refine and enhance my understanding of various subjects.
Furthermore, these focused periods provided time to experiment with new technology. I continued to explore various AI tools, which is an area I have been actively investigating. This included exploring Copilot within VSCode for code development, where I've observed its potential to save time. Additionally, I had a chance to explore page scripting, which was a big topic at the recent BC TechDays conference. This more systematic approach to managing my time appears to also support a good mood. After these blocks I felt to have had enough time to finish a task, to tick of a todo box. I think this should become a habit to sit down Monday morning, see what task are urgent for the week and block dedicated time for it. I will try this week and let you know about how it went.
As you can see in the header I have been to a concert this week. I took 2 days off to enjoy Linkin Park in concert in Hannover - luckily a fellow and his wife from the school days lives near Hannover and we had the chance to sleep at their house. It was also nice to see both of them after so many years. It was a nice shift in work-life balance which most likely will not happen too often. Again it gave me some impulses on reflecting about life - basically like debugging - pun intended.
<callout icon="/icons/robot_gray.svg" color="gray_bg">
	some parts have been wrapped up with the help of NotebookLM (just trying to save writing time)
</callout>
<empty-block/>
**Enjoy reading and don’t forget to leave some feedback.**
# #2 Tech 💻 {color="blue_bg"}
## Page Scripting
During the BC TechDays “Page Scripting” was a topic in 2 sessions I attended. One was the Opening Keynote where Vincent Nicolas from Microsoft showed which features will be added to Page Scripting in the near future. Quite useful for automated testing, error reporting and eventually documentation. The second session presented by Luc van Vugt and Tine Starič was about testing and how it could be improved with Page Scripting.
I have heard of Page Scripting before but did not invest time to try it out. That has changed this week…
But let me first explain what Page Scripting is - or better I will let [centralq.ai](http://centralq.ai) explain:
> Page Scripting is a feature in Microsoft Dynamics 365 Business Central that allows users to record their interactions with the user interface (UI) and replay those actions later. This tool is particularly useful for automating user acceptance testing, training, and data entry tasks.
The output of the recordings is a downloadable YAML file basically describing each step of the user interaction.
Why is this so powerful? Well, first of all you can save the file (and with that all your use cases) and upload it later to replay the flow again and again. It is also possible with the help of a script to automate these runs so that a lot of scripts can be executed and the outcome could be documented.
So the customer can click through a lot of test scenarios while recording, save those and use them in regression tests at any point in time. No need to use a ton of time to document the test cases - that can potentially get done by using the YAML file and some AI magic.
So there is tons of ideas not only in my mind how to make use of this powerful (not so new) tool that I have neglected so far but what have I used it for this week?
In one of my focus blocks that I blocked this week I wanted to deeply analyze a potential bug in a customizing we had shipped. To reproduce the issue I needed to create some invoices and also payments to see the different behaviors when changing configuration in the test system, eventually also when implementing a fix. To do that it is a lot of clicks in the UI and a bit of typing. I thought this is a perfect use case to try Page Scripting and its current capabilities.
So I recorded both processes individually, first the creation of the invoice and second the payment processing. I have saved both files into my project folder to save those for later. Then whenever I wanted to try something new, I just uploaded the scripts and let them run to create a new testcase for me without further interaction. That worked great - I was even able to get some random numbers for an external Invoice number (you can use fx functions for variable inputs).
It is even possible to debug while a page script is running - another cool option - just create your test cases start the debugger and let it run to the error or a breakpoint you want to investigate.
This was a big time saver for me in the end and within my time block I learned to use Page Scripting and solved the issue to the degree where I have influence - also got some more insights in a 3rd party extension where I need to follow up for some improvement suggestions.
To wrap it up - **Page Scripting is a powerful tool everybody should use.**
You should show it to your customers, to your consultants and your developers. All of them will benefit. For example if now something needs to be changed in the process I was looking at, I could describe it for another developer and also pass on the YAML files so the other developer knows exactly how to test and reproduce the process flow (either by trying the script in replay or just looking into the file content). It means a lot of time saving for both of us - no detailed description from my side what to click and insert and no searching from the other developer for the right actions.
If you want to get deeper into the topic, here is a brilliant webinar to get started:
<unknown url="https://app.notion.com/p/219b04fbcf95809893d8e3be0bc14151#21ab04fbcf9580d086d9ed13b4843f43" alt="bookmark"/>
# #3 Sports, Food & Health 🏋️🚴🥦 {color="orange_bg"}
<callout icon="/icons/robot_gray.svg" color="gray_bg">
	I tried something new here. While walking the dog I recorded audio - that’s not new - but the I used [claude.ai](http://claude.ai) gave it the transcript and a link to my blog and asked for a nice summary in form of a blog article - here is the reviewed result
</callout>
## Sports, Body & Food: Summer Training and Reality Checks
To be honest, this section is somehow the most difficult for me when writing this blog. I always get to this point and think, hmm, what have I learned about sports, body, food this week? And then I come to the conclusion that actually not much new, because I have dealt with these topics a lot in earlier times, long before this blog, and I am not really looking for or getting that much new input. Nevertheless, let me know in the comments if you would like more recipes—I'm happy to accommodate you.
### Summer Grilling and Plant-Based Simplicity
Recently, as I've mentioned before, we often use ready-made meals—good ready-made meals that we can enhance a bit and still have a delicious and healthy meal. Right now it's summer time, so we often grill. Since I am vegan, I use substitute products that are tasty, along with plenty of vegetables like corn on the cob and zucchini, which always belong on the grill.
Maybe I'll try a sweet potato next—I definitely need to test that again to see how it works and if it tastes good. There's something satisfying about finding new ways to make plant-based grilling both simple and delicious.
### Back on the Bike: Discovering a Marathon Route
I was able to do a bit more sports this week because I finally had the time. I finally got back on the bike and put together a little marathon route—marathon because it's 42 kilometers, and you can ride it in under two hours. Plus you get to see a bit of scenery; it's varied and engaging.
It's a very nice route that I will definitely keep and maybe expand. There's something therapeutic about cycling that combines fitness with exploration, and having a go-to route makes it easier to stay consistent.
### CrossFit Reality Check: Humbled by Synchronized Burpees
On Saturday, I signed up for the team workout at the CrossFit box, and my partner was significantly fitter than I was—really pushed me to my limits, you could say. There were synchronized burpees in the workout, a lot of synchronized burpees, almost 100 of them. The whole workout lasted 35 minutes, and it really took a toll on me.
Especially because he handled the burpees easily and was super fast in terms of pace. I had trouble keeping up and was close to my redline, which was extremely challenging. It was once again a tough workout, but my Garmin says it contributed to an increase in VO2max. So anything that leads to improvement is wonderful.
I have learned that I am not as fit as I thought, at least not for such intense workouts. I definitely need to work on that. It's humbling moments like these that remind me why I value the process of continuous improvement—both in fitness and in life.
### The Mobility Wake-Up Call
What I also noticed is that I need to work on my mobility. That will now be a goal that I will try to integrate more again. And I need to start my push-ups again. Maybe I'll start by creating a small push-up mobility plan.
Here's my approach: In the push-up challenge, I do a set of push-ups—right now, it's about 20 per set. Then there's a 2-minute break. During those 2 minutes, it's a good time to maybe work on my hip mobility. That might be a nice change, and then I've done something for my upper body within a quarter of an hour, but also for the hip in terms of mobility.
### The Week Ahead: A Simple Protocol
I will make it a point to try this week to stick to this protocol every other day. And I will report back on how it goes.
Sometimes the best approaches are the simplest ones—combining strength work with mobility, using rest periods productively, and being consistent rather than perfect. It's about finding sustainable ways to improve while acknowledging where I currently stand.
---
*What are your go-to strategies for combining different fitness goals? Have you had similar reality checks that changed your training approach? Let me know in the comments.*
# #4 Inside AI 🤖 {color="gray_bg"}
<callout icon="/icons/robot_gray.svg" color="gray_bg">
	I tried something new here. While walking the dog I recorded audio - that’s not new - but the I used [claude.ai](http://claude.ai) gave it the transcript and a link to my blog and asked for a nice summary in form of a blog article - here is the reviewed result
</callout>
## AI Agents and the Art of Precise Instructions: Diving Deeper Under the Hood
### The Bold Challenge of Writing About AI in 2025
It is quite bold to write a book about AI these days. In these times where new developments emerge daily, new technologies are released, and the pace of innovation is so rapid that a book can hardly keep up. Nevertheless, some authors at IBM have come together and published a book that will soon be available in print format.
Currently, there's a free PDF download available . The book deals with artificial intelligence as a whole, examining what it means for companies, what implementation means for businesses, and explores all technologies while looking at future possibilities and taking a peek under the hood.
I've just started reading it, and it reads very well—written with a bit of humor at times. It's a style that I really appreciate, even in technical books. It's not stiff and rigid; you actually enjoy reading it. It's not dull, and you develop a good reading flow. So I highly recommend it.
<unknown url="https://app.notion.com/p/219b04fbcf95809893d8e3be0bc14151#21ab04fbcf95806cbbfbecdfec7db79e" alt="bookmark"/>
### Going Deeper: Understanding AI Agents
I usually dedicate this section of the blog to delving deeper into AI technology, and I hope this book will provide me with even more insights and glimpses under the hood. What I'd particularly like to illuminate are **agents**—how do they actually work? What's the difference between entering a few different prompts and how an agent really operates? What's the automation behind it, and what is the core of an agent?
For me, understanding something deeply means I can use it better. This applies to many things in my experience. When I grasp how things work fundamentally, I also know how to leverage them more effectively. So in one of the next blogs, I'll write more about agents and share what I've learned about how they function.
### First Experiments with Microsoft Copilot Agents
Two agents have just been released in Microsoft Copilot: the **Researcher** and the **Analyst**. I briefly experimented with both, though I probably haven't fully utilized their strengths yet. I made attempts to complete a dataset and tested which of the two agents could help me better. Unfortunately, the result wasn't very satisfactory, but I think it was mainly due to my use case and prompting approach.
This brings us back to a fundamental topic: **providing precise instructions also helps artificial intelligence**. The better the data is structured and the clearer and more precise the requirements are formulated, the better my counterpart—whether it's AI, an agent, or a chatbot—can respond.
### The Universal Principle of Clear Communication
The same principle applies in team environments. Whether I'm interacting with a team member and assigning tasks, the outcome will naturally align more with my expectations the better and more precisely I formulate these tasks. This will be one of the key differentiators in the future—those who can describe things well, express precisely what they want, and write clear instructions will ultimately be able to engage their teams more effectively.
And that team can consist mainly of people, but it can also largely consist of agents who take on parts of the tasks, such as:
- Writing documentation
- Creating automated tests
- Preparing code blocks
- Conducting thorough code reviews (not just focusing on syntax, but also on coherence and consistency)
### The Future Workflow: Human-AI Collaboration
This is the kind of work I envision being delegated to agents, while development leads review the output to ensure everything is done correctly. Consultants would review AI-generated documentation before it's ultimately sent to clients. All of this can improve workflow efficiency and enhance quality.
The key insight here is that we're not replacing human expertise—we're augmenting it. The human oversight remains crucial for context, judgment, and final quality assurance, while AI handles the heavy lifting of initial drafts, analysis, and systematic tasks.
### Looking Ahead
In upcoming posts, I'll dive deeper into my experiments with these agents and share practical insights about how to structure prompts and tasks for better AI collaboration. The intersection of clear communication skills and AI capability is becoming increasingly important, and I'm excited to explore this further.
---
*Have you experimented with AI agents in your work? What challenges have you encountered with instruction clarity? I'd love to hear about your experiences in the comments.*
# #5 Song of the week 🎶 {color="red_bg"}
## Architects - "Animals"
**About the Artist:**<br>Architects is a British metalcore band from Brighton, England, formed in 2004. Known for their intense and powerful sound, the band has become a significant force in the metalcore genre. Architects are celebrated for their intricate guitar work, powerful vocals, and emotionally charged lyrics. The band has released several critically acclaimed albums and has built a strong international following, known for their dynamic live performances and deep connection with their fans.
**Background of the Song:**<br>"Animals" was released in 2020 as part of their album "For Those That Wish To Exist." The song explores themes of environmental destruction and human impact on the planet, reflecting the band's concern for ecological issues. It is characterized by its heavy riffs, intense vocals, and a compelling message that resonates with listeners, making it a standout track in their discography.
**Listen to the Song:**
<unknown url="https://app.notion.com/p/219b04fbcf95809893d8e3be0bc14151#219b04fbcf958044b1acd2d348626b31" alt="bookmark"/>
<empty-block/>
**My Personal Story with This Song:**<br>I was attending the Linkin Park concert in Hannover and the Architects have been one of the support bands. They heated up the audience quite well. I like some of their songs so I have been listening to some the last week and this one I quite like.
However the concert was really really great. They had so much fun on the stage and that was transferred to the audience. Emily’s voice is killer live, Mike was delivering on the rap parts, Colin hammered the drums, Joe seemed to be a bit ill, wearing a mask but still performed at his best creating the unique Linking Park sound. Dave rocked the bass as usual and Alex was fire on the guitar. Definitely one of the concerts I will remember forever.
# Feedback 📣 {color="purple_bg"}
Here you can give me feedback, send ideas or just connect with me. Just leave a comment.
<embed src="https://tally.so/embed/waKjo9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&week_hidden=2025w25"></embed>
---
<database url="https://app.notion.com/p/219b04fbcf95800d86b3f1054e26af11" inline="true"></database>
---
©️ Christian Czupras - 2025
