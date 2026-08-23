---
layout: default
title: "2025w35 - 10 Miles Entitlement"
---

# #1 Personal ✒️ {color="green_bg"}
## Personal Note
Hey reader - welcome back. Yes - I know again a day late - but I have excuses 😉. Well but let’s put that aside.. You might also think now that he is getting sloppy with publishing the blog how about the language learning? Ha - there I can tell you I’m still on the winning side and today I reached a 240 day streak - not far away from getting a full year.
But I am doing more French lessons than Swedish actually - this has a reason which I can not tell about yet. So I am constantly learning 3 languages (English, French and Swedish - math is not a language so I will not put it on the list - but it is some fun side lessons on some days.)
This week you will read a bit more about Business Central again and next week there will be some Business Central content as well. Lucky you.
**Enjoy reading and don’t forget to leave some feedback.**
# #2 Tech 💻 {color="blue_bg"}
## **Entitlements, Permissions, and My AppSource Rollercoaster 🎢**
## **The Week That Made My Head Spin**
This week was a wild ride—**entitlements, permissions, AppSource**, and a whole lot of learning. I finally feel like I’m starting to wrap my head around how all these pieces fit together for our Business Central app. Spoiler: it’s not as straightforward as I thought, but it’s also kind of fascinating once you dig in.
## **What Are Entitlements, Anyway?**
Thanks to a tip from **Stefan Maron** (shoutout to his BC coding stream!), I discovered that you can set a **security group as an entitlement**. That means users in that group don’t need a separate license—they’re covered by the entitlement itself. Secret Helper!<br>I immediately put this to the test. Since I now have admin access to our Azure and M365, I uploaded a new version of our app to the AppSource with this security group setup. The best part? You can **test entitlements in a sandbox or dev environment**—no need to push everything to AppSource right away.
### **The Hierarchy: Entitlements vs. Permissions**
**Here’s the breakdown:**
- **Entitlements** are the base layer. They define which objects (tables, pages, etc.) a user can access. Think of it like the old Business Central license model: if an object isn’t in the entitlement, the user can’t touch it.
- **Permissions** build on top of entitlements. Even if an object is included in the entitlement, the permission set determines what the user can actually *do* with it—read, write, modify, insert, or delete.<br>**Example:** If you grant a table “read” access in the entitlement, users with that entitlement can only read the table—no matter what additional permissions you stack on top. To allow writes or modifications, you need to include those permissions in the entitlement.
- **The Learning Curve: Indirect Permissions and Testing**<br>We’re still figuring out the nuances, especially around **indirect permissions**. For instance, if data is written through a code unit or accessed via a page, the entitlement needs to cover those scenarios too.<br>One cool trick: we set up a **non-public license** for our demo tenants. It’s free for us and lets us test entitlements and permissions one-to-one, just like a real user would experience it.
- **The AppSource Error: A Work in Progress**<br>Of course, not everything went smoothly. After making some changes to the app, I hit an error in the AppSource publication. Next step: diving into the **telemetry data** to diagnose the issue. I’ll keep you posted on how that goes—stay tuned for updates!
**<br>Your Turn: What’s Your Experience?**<br>Have you worked with entitlements and permissions in Business Central or AppSource? Any tips, tricks, or war stories to share? Drop a comment—I’d love to hear how others are navigating this space!
# #3 Sports, Food & Health 🏋️🚴🥦 {color="orange_bg"}
## **Finding My Pace: Lessons from My First 10-Mile Race**
### **Introduction:**
It had been a while since I lined up for a race, and I wasn’t entirely sure what to expect. The excitement of the crowd, the rush of adrenaline, and the familiar pre-race jitters all came flooding back as I stood at the starting line. I knew I wasn’t as prepared as much as I could have been—my nutrition and hydration weren’t perfect, and my training had been inconsistent—but I was determined to give it my all.
### **The Race Experience:**
The gun went off, and I found myself swept up in the energy of the moment. I started faster than I should have, carried along by the crowd and the thrill of competition. But as the miles ticked by, I realized I needed to find my rhythm. I adjusted my pace, focused on my breathing, and settled into a groove that felt sustainable.<br>The race wasn’t easy. There were moments when my legs felt heavy, and I questioned whether I had pushed too hard too soon. But I reminded myself that every step was a chance to learn and improve. The view of the nature - especially the coast line - the smell of the see and last but not least the spectators kept me going, and I found myself smiling as I crossed the finish line.
### **Reflections and Lessons Learned:** 
Finishing 59th out of 150 participants was a satisfying result, but the real victory was in the lessons I took away. I realized how much my performance is influenced by factors beyond just physical training—proper nutrition, hydration, and pacing are just as important. I also learned the value of listening to my body and trusting my instincts.
### **Looking Ahead:**
This race was a wake-up call. I’m now more motivated than ever to refine my approach. My next goal? A half marathon under two hours. I’ve already started planning my training, focusing on consistency, and paying closer attention to my nutrition and hydration. I’m also looking forward to upcoming competitions, where I can put these lessons into practice.
### **Conclusion:**
Every race is a journey, and this one was no different. It reminded me that progress isn’t always linear, but every step forward—no matter how small—is worth celebrating. I’m excited to see where this journey takes me next…
# #4 Inside AI 🤖 {color="gray_bg"}
 — no real learnigs this week that are worth sharing - so summer break 🌅 —
# #5 Media of the week 🎶📺 {color="red_bg"}
Like mentioned in the tech article this video helped a lot and gave good insights in the entitlement and permission thingy.
<unknown url="https://app.notion.com/p/25eb04fbcf95814bba30f9524ce77cc5#261b04fbcf958096b3bef5cb096f6481" alt="bookmark"/>
---
Coincidence? A friend asked me a week ago if I would join in next year for a devils loop race - it is a 6.66km round course and you need to run this every hour on the hour and get as many rounds in as you can - until only one is able to finish the last round. This will be the winner. One night I woke up early and couldn’t get to sleep anymore and the YouTube algorithm suggested me this video. Very inspirational - and totally unbelievable what was achieved. Must watch.
<unknown url="https://app.notion.com/p/25eb04fbcf95814bba30f9524ce77cc5#261b04fbcf9580b386a8cbcbd1ea7ffb" alt="bookmark"/>
# Feedback 📣 {color="purple_bg"}
Here you can give me feedback, send ideas or just connect with me. Just leave a comment.
<embed src="https://tally.so/embed/waKjo9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&week_hidden=2025w35"></embed>
---
<database url="https://app.notion.com/p/25eb04fbcf958124890ac38ddb991fcc" inline="true"></database>
---
©️ Christian Czupras - 2025
