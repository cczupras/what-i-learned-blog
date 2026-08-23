---
layout: default
title: "2025w51 - Restart"
---

# #1 Personal ✒️ {color="green_bg"}
## Personal Note
Long time no see. Yes, it has been a while since Week 41. If you are reading this, you might have wondered where the weekly updates went. To be honest, this blog became a bit stressful. Between personal obligations and work projects, it was simply not possible to deliver the content I wanted to deliver.
I have a certain standard for the quality that I publish in this blog. I realized I really underestimated how much work a blog actually is—especially when you run out of fresh ideas and refuse to just repeat yourself. I didn't want to write just for the sake of writing; I wanted to grow.
So, is the blog dead? Definitely not. But I am using this "Restart" in Week 51 to pave the way for 2026. I plan to build it a little differently next year. Maybe less content, smaller blocks, or specific individual things rather than a forced structure. Let’s see what new ideas and workflow automations the calm days will bring.
For the upcoming holidays, my plan is simple: recharge, brainstorm new content ideas, and maybe even experiment with some creative writing.
**Enjoy reading and don’t forget to leave some feedback.**
# #2 Tech 💻 {color="blue_bg"}
## Awesome Copilot MCP Server
### Finding Better Copilot Customizations with the Awesome Copilot MCP Server
I love GitHub Copilot, but finding the right chat modes, instructions, prompts, and agents can feel like a treasure hunt. Microsoft’s new Awesome Copilot MCP Server turns that discovery process into a smooth chat experience—search, compare, and save customizations right from Copilot Chat.
### What It Is (and Why It’s Useful)
- Discovery in chat: Browse the community-curated catalog from VS Code. You never have to leave this tool again, that is what I really like about vscode, the GitHub Copilot integration and fine selected MCP Servers.
- One-click install or config: Add the server fast, then search by keyword.
- Save locally: Write selected items into `.github/` so your team shares standards.
## Read how I got it to work without Docker Desktop… {toggle="true"}
	### WSL2 on Windows (manual install + HTTP mode)
	I run the awesome-copilot MCP Server with WSL2 (Ubuntu) and connect from Windows/VS Code over HTTP.
	1) Install WSL2 manually
	- Follow Microsoft’s guide: [https://learn.microsoft.com/de-de/windows/wsl/install-manual](https://learn.microsoft.com/de-de/windows/wsl/install-manual)
	- Verify:
	```powershell
wsl.exe --status
wsl.exe -l -v
	```
	2) Build the Awesome Copilot MCP container inside Ubuntu
	```bash
# In Ubuntu (WSL)
cd ~
git clone https://aka.ms/awesome-copilot/mcp  # resolves to the GitHub repo
cd mcp-dotnet-samples-main
docker build -f Dockerfile.awesome-copilot -t awesome-copilot:latest .
	```
	Tip: If you prefer not to build, you can use the published image:
	```bash
docker pull ghcr.io/microsoft/mcp-dotnet-samples/awesome-copilot:latest
	```
	3) Run the server in HTTP mode and expose it to Windows
	```bash
docker run -i --rm -p 8080:8080 awesome-copilot:latest --http
	```
	Binding to localhost lets Windows reach [http://localhost:8080](http://localhost:8080) while keeping it local-only.
	4) Point Copilot to the HTTP server
	Add an HTTP entry in your Copilot MCP configuration:
	```json
{
  "servers": {
    "awesome-copilot": {
      "type": "http",
      "url": "http://localhost:8080/mcp"
    }
  }
}
	```
	Use the repo’s “HTTP mode” docs for the exact port and keys for your client version.
	5) Quick checks
	```powershell
# From Windows
curl http://localhost:8080/mcp
	```
	If no response: confirm the port mapping, container logs, and that the server is running in HTTP mode.
	### Using It in Copilot Chat
	- Trigger the helper:
	```javascript
/mcp.awesome-copilot.get_search_prompt
	```
	- Enter a keyword (e.g., “product requirement”).
	- Copilot returns a neat table showing what’s in the catalog vs. what’s already in your repo.
	- To save one, reply with its filename (e.g., [`se-technical-writer.agent.md`](http://se-technical-writer.agent.md)). It’s written under `.github/...` in your repo.
	### What Stood Out
	- Fast compare view of options.
	- Team-ready: committed customizations in `.github/`.
	- Tight loop: search → decide → save in seconds.
	### Tips and Gotchas
	- No Docker Desktop required if you build/run inside WSL2 and connect over HTTP.
	- If using Rancher Desktop, set the container engine to dockerd.
	- Commit saved items so your team benefits immediately.
	### References
	- Announcement: [https://developer.microsoft.com/blog/announcing-awesome-copilot-mcp-server](https://developer.microsoft.com/blog/announcing-awesome-copilot-mcp-server)
	- Awesome Copilot catalog: [https://aka.ms/awesome-copilot](https://aka.ms/awesome-copilot)
	- MCP server repo/overview: [https://aka.ms/awesome-copilot/mcp](https://aka.ms/awesome-copilot/mcp)
	- VS Code chat modes: [https://code.visualstudio.com/docs/copilot/chat/chat-modes](https://code.visualstudio.com/docs/copilot/chat/chat-modes)
# #3 Sports, Food & Health 🏋️🚴🥦 {color="orange_bg"}
## Training Status
I just came of a 30-minutes Air Bike Garage Session - no high intensity just a bit movement to get sweaty at around \~250 watts. Luckily the Air Bike is not just legs but you can also use your arms to get the fan moving.
This little session with a little stretching in the cooldown was a very welcoming movement this day on the next day of the traditional “12 Days of Christmas” WOD in my home CrossFit Box. This year the workout had a well selected movement pattern and balanced strength portion. It has been a while since I have done a traditional CrossFit workout as I am currently focusing on biking for next years tour to Paris. I can already see the improvements. Longer rides are not that challenging anymore and I am quite happy with the endurance of my legs.
Still it will be a long way to go because consecutive long days on the bike is a totally different story than riding 100k once in a while.
My next distance goal is to get a 130k in one day which means with an average speed of \~23km/hour this will have me around 5 and a half hours sitting on the bike. Most likely this will not happen in 2025 as I am running out of days where I have this amount of time.
Next event is the Silvester run in a village nearby where it will be around 11k in cold wheater and with [Team Rynkeby Flensburg](https://www.team-rynkeby.de/die-teams/team-rynkeby-flensburg) we will have a little booth there to raise awareness for our charity project.
Overall I am quite happy with my fitness at the moment - endurance is good - strength could be better but I will start working a bit more on this. (now that I the new roof of our house is finished and I have cleaned up the garage there is space again to use my garage gym. 💪)
**What does your training look like right now and do you have a focus area? Let me know in the comments.**
# #4 Inside AI 🤖 {color="gray_bg"}
<columns>
	<column ratio="12.5">
		<empty-block/>
		![](https://prod-files-secure.s3.us-west-2.amazonaws.com/8ea9ff09-7c46-4257-8f8b-6dbe53d5cdb7/690149a7-61bd-4548-af4b-0e69aaf18f67/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFR555O%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T065621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCynAN3fQ5w2vU4da0fINbkOLjK1y6ynR9O7UjriNQb6AIhAKTfdmyC9frA5EwEWqpTlDIqbPdGQ4%2Btw0tAO%2BExA2yIKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi1oc8yTSZJr9OynIq3AP2JF7O7B5oVCaTfHC%2Be3%2FZ0lBTMuBSosSfWZPeIC%2ByCSdjcpW21Acng3eaxns%2BMJ4lyiaeQjea5oB%2FkEx%2FNtQjYpfBDPQVwhgovSZR25Lf6b5NKWTTa8h9QukeLRv%2FZj8gF1rM0%2BUERxzVegA%2FOLsfbBNSjBc%2B4l3fHQBJiJpRzG6h%2FaWfV64TlIgHnWgVnc0Ze49C3iDi4asICGiy%2BlUPAkS10Uuj%2B%2Fw%2B%2FsV0b4LCOJFGUhAxbMkgFGjibxfsduI6yvpVK6t9WjiUOWM9Z5mGj%2BXx3I9DXUBEpz85HzZRhR0lkgw60Unse4350kA63ihJu%2FDow3DLkbXyRAxU6QqfR6aNYfBUsI0nZpRWt%2FSRoYcFPXS%2Fx7ZMjPWaEMf3VSs6a8yxoGwPEWZz2j4bIZvjgRm69asYTZYCp%2Fslk68Vy6OTM%2FYy7AE6YI%2B6Whd23nijczl7RsuD8OzW6rA5DrqJm41i%2BVe3Ps2ISoi8UQskyE7%2BKoKOV%2Bmzhk6s5XmRQCdwCYyT0N8QPK0CO7NzHEXxPirnVZ1%2BajNj1GZ3tK21LR4LPSqXRB9RQ7JDXMUwp2CHQ%2FeGgHvMYW3aReVVHtsP7AzZ2MTMpymUMzj26h58md35o9ucHld809KRGTDztKnUBjqkAfuJhLQJ8m6gS5QCBYKOxfB4rqhnu9OWCJYBS%2FPL3idTVk6nc4na%2BkK%2Bk86jNEe%2F%2BPefZVidAjv%2FKPwKigcvQwy%2Bdf67IIJQrzW0GGyDZYda4zKtABbDSEKDt65ykOmsKIRzxmtjUpRudlkPGqT%2B5MvKZXxOmDclk9YE%2FiyVwzWu3BdEN34qZmHQfCRPhCKD5mCSIpgL%2BiupsCc36iZ0goI4hZCt&X-Amz-Signature=31e7bdfca54978647dbdafc481d40850cf68d7df6934ac0c82cb487cdf6f997a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	</column>
	<column ratio="87.5">
		<empty-block/>
		## A new star is born 
	</column>
</columns>
### Google Antigravity
Well how should I start this section? Normally I do not get hyped about new IDE’s when they have a slogan like AI first or AI build in…
This time is different - this tool is just different. All modern IDE’s seem to have the same UI Framework as vscode - and do not get me wrong - I love vscode and its power with the extension. Nowadays it gets even better every month with the GitHub Copliot integration, MCP Server and more and more AI capabilities. I have potentially not even used more that 5-10% of the features of vscode, I am still exploring - but lets leave vscode for now and get back to Antigravity.
I have watched some AIE sessions on YouTube and one of it was presented by the guy who did this introduction video:
<unknown url="https://app.notion.com/p/2ceb04fbcf95817299b8c4ac626c6b0a#2d2b04fbcf95800bbd61c53c0f29a732" alt="bookmark"/>
That session got me curious - Antigravity is not just a code editor with a chat - it has also an Agent Manager in a separate window. Furthermore there is a feature I have not seen anywhere else which is browser integration. Which does not mean Antigravity in integrated into the browser; no it is the other way round. The browser is integrated with Antigravity. Basically when the agent needs to verify if a feature has been implemented correctly it starts the browser (of course it is chrome) in a special mode, reads the DOM (domain object model - of course Google knows how to do that) and then controls the browser, clicks links, inserts texts, etc… and the coolest thing about it is that it makes screenshots and a recording and adds this to an asset of the chat called “walkthrough”.
### What did I do with that new star
Two things - I needed two projects to test the run in parallel feature.
1. I let Antigravity redesign my own personal website - which was not too hard because the landing page had just my name an email written on it. Within minutes I got a brand new look, 2 languages and a pretty nice background. Check it out and tell me what you think
	[Christian Czupras - Softwareentwickler](https://www.czupras.de)
	Another benefit was that I wanted to automate the website deployment. So first I created a repo for my new website in GitHub and then added an action whenever there was a commit to `main` . What can I say, building a simple website which also looks pretty neat has never been so easy. And after each step Antigravity - or better the Agent that has implemented the featured I asked it to commits and pushes the changes automatically - of course with a nice commit message. Seconds later the changes are live. Impressive.
	Sure if I ask to implement a feature and I am not sure about the outcome I can tell the Agent to ask for confirmation and it let me review the changes - either by a screenshot of the changes, a video or a local representation of the website.
2. A new web app which runs locally and stores some data. I am building a time tracking tool. Just because I needed an idea which could be useful. During workdays I often switch between many tasks and of course I have to record all of my time in our time tracking system.<br>It does its job but I wanted something more convenient and modern. With automatic calculations, reports, a timer and a nice UI.
	So why not use Antigravity and start building. And what can I say - I’m quite impressed. During a walk outside I recorded the requirements with my mobile and send the transcript to Notion, then exported the page and gave it antigravity so it can make an implementation plan.
	This worked quite ok - not all details of the requirement went into the Task and Implementation Plan. But for a fast shoot this was ok. I could have given a bit more love to the prompt - may be next time with one of the engineers of the awesome-copilot repo - now that I have the MCP server running for it.
### Final thoughts
Although it also uses the vscode framework as IDE it looks totally different because they have stripped it quite down. The Agent Manager once you get used to it with the inbox and many projects running in parallel is awesome. Already loving it - CTRL + E let’s you switch between Editor and Manager seamlessly. You can open many workspaces, each of them has its own editor but there is only one Agent Manager which controls all of the Agents in one window.
It is stilly early and the tool is evolving. I still need to figure out the right way to add MCP servers and potentially switch the extension store. But for my private side projects this is the go to tool which I will use. The browser integration is killer - check it out in the video above and other video on what you will be able to do with it. Just a hint: mark an area with the mouse on the screenshot and comment what should be changed → the agent will do it for you. So cool
**Have you also tried Google Antigravity - what do you think of it?** 
# #5 Media of the week 🎶📺 {color="red_bg"}
## Drei Meter Feldweg — "Gib niemals auf" (Never Give Up)
### Why this pick
A restart anthem: direct, upbeat, and exactly the kind of energy that fits this week’s theme. “Gib niemals auf” brings the momentum you need when you let go of the old and lean into the new.
### About the band
Drei Meter Feldweg is a North German punk rock band known for high‑energy shows, catchy choruses, and lyrics that blend humor, heart, and a clear stance.
### About the song
"Gib niemals auf" is a straight‑ahead motivational track: driving guitars, a big sing‑along chorus, and a message that encourages you to shake off setbacks and keep moving.
### Listen
<unknown url="https://app.notion.com/p/2ceb04fbcf95817299b8c4ac626c6b0a#2d2b04fbcf9580b78b1ef7a831cadde0" alt="bookmark"/>
### My personal story with this song
I have been to a punk rock concert in November and after the concert we have been sitting in the lobby of the hotel to finish the day with a cold beer. Some other groups and people from the concert happend to be there too and some got in touch with our group. There was one guy from south Germany who told us about a festival which sounded pretty nice - but the he was wondering that I did not know one of his favorite bands: “Drei Meter Feldweg”.
<columns>
	<column ratio="62.5">
		Well as you know me I always like good music and I am open to new stuff all the time - so if you have a recommendation → I’m all ears 👂
		So I was listening to a lot of German punk rock songs after the concert and I wonder why I have not done that before more often? I really like that kind of music and it is even easier to understand the lyrics… 
		Well so after I listend to some of this bands songs there is clearly on favorite which also triggered some emotions. One hook line in the lyrics reminded me so much of our old lady dog which we had to let go some time ago. 
		And while tinkering with the new Google Gemini 3 Pro I had the idea to create a phone background with her and a relation to the song. 
		What can I say - the AI nailed it - I loved going for long walks in the wood with her - especially during my back injury with a herniated disc. But see yourself to the right.
	</column>
	<column ratio="37.5">
		![](https://prod-files-secure.s3.us-west-2.amazonaws.com/8ea9ff09-7c46-4257-8f8b-6dbe53d5cdb7/6cfc2dd0-c77c-495a-b59b-33e381567c28/Socke_Licht_Wald.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFR555O%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T065621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCynAN3fQ5w2vU4da0fINbkOLjK1y6ynR9O7UjriNQb6AIhAKTfdmyC9frA5EwEWqpTlDIqbPdGQ4%2Btw0tAO%2BExA2yIKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi1oc8yTSZJr9OynIq3AP2JF7O7B5oVCaTfHC%2Be3%2FZ0lBTMuBSosSfWZPeIC%2ByCSdjcpW21Acng3eaxns%2BMJ4lyiaeQjea5oB%2FkEx%2FNtQjYpfBDPQVwhgovSZR25Lf6b5NKWTTa8h9QukeLRv%2FZj8gF1rM0%2BUERxzVegA%2FOLsfbBNSjBc%2B4l3fHQBJiJpRzG6h%2FaWfV64TlIgHnWgVnc0Ze49C3iDi4asICGiy%2BlUPAkS10Uuj%2B%2Fw%2B%2FsV0b4LCOJFGUhAxbMkgFGjibxfsduI6yvpVK6t9WjiUOWM9Z5mGj%2BXx3I9DXUBEpz85HzZRhR0lkgw60Unse4350kA63ihJu%2FDow3DLkbXyRAxU6QqfR6aNYfBUsI0nZpRWt%2FSRoYcFPXS%2Fx7ZMjPWaEMf3VSs6a8yxoGwPEWZz2j4bIZvjgRm69asYTZYCp%2Fslk68Vy6OTM%2FYy7AE6YI%2B6Whd23nijczl7RsuD8OzW6rA5DrqJm41i%2BVe3Ps2ISoi8UQskyE7%2BKoKOV%2Bmzhk6s5XmRQCdwCYyT0N8QPK0CO7NzHEXxPirnVZ1%2BajNj1GZ3tK21LR4LPSqXRB9RQ7JDXMUwp2CHQ%2FeGgHvMYW3aReVVHtsP7AzZ2MTMpymUMzj26h58md35o9ucHld809KRGTDztKnUBjqkAfuJhLQJ8m6gS5QCBYKOxfB4rqhnu9OWCJYBS%2FPL3idTVk6nc4na%2BkK%2Bk86jNEe%2F%2BPefZVidAjv%2FKPwKigcvQwy%2Bdf67IIJQrzW0GGyDZYda4zKtABbDSEKDt65ykOmsKIRzxmtjUpRudlkPGqT%2B5MvKZXxOmDclk9YE%2FiyVwzWu3BdEN34qZmHQfCRPhCKD5mCSIpgL%2BiupsCc36iZ0goI4hZCt&X-Amz-Signature=9fab8e752ba9d91f460eee6d5b6dcc85694f9dbc6c717958e3c50a8e06cf575b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	</column>
</columns>
# Feedback 📣 {color="purple_bg"}
Here you can give me feedback, send ideas or just connect with me. Just leave a comment.
<embed src="https://tally.so/embed/waKjo9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&week_hidden=2025w51"></embed>
---
<database url="https://app.notion.com/p/2ceb04fbcf9581b285dded360465154a" inline="true"></database>
---
©️ Christian Czupras - 2025
