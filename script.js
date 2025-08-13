const classCards = document.querySelectorAll('.class-card');
const modal = document.getElementById('roadmap-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-btn');

const roadmapData = {
'Class 6': `
<strong>🚀 Welcome to Class 6 – The Start of a Bigger Journey!</strong><br><br>

Class 6 is more than just “next class after 5th.”  
It’s your entry into middle school — where you begin exploring subjects deeply, discovering new interests, and slowly understanding what makes you unique.  
This is your launchpad. 🚀<br><br>

You might still be adjusting to bigger books and longer timetables — but don’t worry, you’re also unlocking a bigger brain and bolder dreams!<br><br>

<strong>🔍 Why Class 6 Matters:</strong><br><br>

<ul>
  <li>📖 Subjects like Science, Math, and English now go beyond basics</li>
  <li>🧠 You start learning “how to think,” not just “what to learn”</li>
  <li>🎨 You get to try creative skills like art, music, or basic design</li>
  <li>💬 It’s the best time to build strong habits — reading, focus, curiosity</li>
</ul><br>

<strong>🌱 Discover What You Enjoy!</strong><br><br>

Class 6 is the year to try different things. You don’t have to be perfect — you just have to be curious.<br><br>

Do you like asking “why” behind everything?  
Maybe science is your zone.  
Do you enjoy telling stories or drawing pictures?  
That’s your creative spark!  
Enjoy games and solving puzzles? That’s logical thinking! <br><br>

Your interests are like treasure maps — follow them, and they’ll show you where you shine. <br><br>

<strong>🌍 National Level Opportunities:</strong><br><br>

<ul>
  <li>🔢 SOF Olympiads – NSO (Science), IMO (Math), IEO (English)</li>
  <li>📚 CBSE Reading Challenge</li>
  <li>🖋️ Story Writing, Poem, or Drawing Contests (school & state-level)</li>
  <li>🧠 Mental Math or Quiz Competitions</li>
</ul><br>

<strong>🌐 International Exposure (You Can Try Too!):</strong><br><br>

<ul>
  <li>🚀 NASA Art or Space-themed Drawing Contests</li>
  <li>🎙️ Goi Peace Essay Contest (Japan)</li>
  <li>🎮 Online Coding Platforms – Code.org, Scratch, Tynker</li>
  <li>📷 Art and Creativity Competitions (global level)</li>
</ul><br>

Participating in just one contest can build your confidence massively. Winning is optional — learning is guaranteed. 🎯<br><br>

<strong>💡 Skills You Can Start Building Now:</strong><br><br>

<ul>
  <li>💻 Basic typing or computer literacy</li>
  <li>🎨 Try creating posters or art using apps like Canva (with help)</li>
  <li>📚 Read short books, stories, or comics – reading builds imagination</li>
  <li>🧘 Learn to sit calmly and focus — even 10 mins helps</li>
  <li>📓 Keep a fun journal – write what you did, learned, or enjoyed daily</li>
</ul><br>

<strong>📅 Mini-Roadmap for Class 6 Progress:</strong><br><br>

<ul>
  <li>🔍 Apr–June: Explore your interests, try 1 small contest</li>
  <li>🛠️ July–Sep: Build 1 new skill (typing, storytelling, drawing)</li>
  <li>📖 Oct–Dec: Join school activities or team projects</li>
  <li>🚀 Jan–Mar: Reflect on what you loved doing this year and go deeper</li>
</ul><br>

<strong>🎓 And Yes – You Can Dream Big From Now!</strong><br><br>

MIT, NASA, IAS, IIT — these aren’t just fancy names.  
They’re places where students who started early — just like you — built skills step by step.  
You don’t have to do everything right now.  
But even one good habit today can take you closer to a big dream later.<br><br>

Start by being the best version of yourself — curious, kind, and ready to learn. <br><br>

<strong>💬 A Final Note Just for You:</strong><br><br>

No pressure to be perfect.  
You are just beginning — and beginnings are full of magic.  
Ask questions. Try new things. Don’t fear mistakes.  
You’re already on the right path. <br><br>

<strong>~Best Wishes – From Me (AspiroPath)</strong><br><br>

"Your journey has just begun.  
And if you keep moving with curiosity and courage,  
You’ll reach places beyond your imagination.  
The future is yours — go explore it!" ❤️
`,

 'Class 7': `
<strong>🎓 Welcome to Class 7 – The Foundation Builder!</strong><br><br>

Class 7 is an exciting chapter.  
You’re more confident than before, your mind is sharper, and curiosity is starting to grow wings.  
It’s the year to explore your skills, try new things, and prepare yourself for even bigger opportunities ahead! 💡<br><br>

You may not realize it yet, but this is the perfect time to discover what you’re good at — and what you might love doing in the future.<br><br>

<strong>📌 What Makes Class 7 So Special?</strong><br><br>

<ul>
  <li>📖 You begin understanding topics more logically and clearly</li>
  <li>🧠 Memory power + understanding = perfect mix for skill development</li>
  <li>🎯 It’s a great stage to try new interests — art, science, writing, coding</li>
  <li>🌱 The habits you start now will help you in Class 8 and beyond</li>
</ul><br>

<strong>🎯 Let’s Explore Your Interests</strong><br><br>

Start asking yourself questions like:<br>
“Do I enjoy building or designing?”  
“Do I like explaining things to others?”  
“Am I more creative or analytical?”<br><br>

These small thoughts can give you big clues about your future path.  
Whether you become a scientist, teacher, artist, pilot, or entrepreneur —  
Everything begins with curiosity. <br><br>

<strong>🌍 National Opportunities You Can Try:</strong><br><br>

<ul>
  <li>🔢 SOF Olympiads – NSO, IMO, NCO, IEO</li>
  <li>📚 CBSE Story Writing / Reading Challenge</li>
  <li>🧠 Aryabhata Ganit Challenge (Math)</li>
  <li>🎨 Art & Essay competitions (school level and above)</li>
</ul><br>

<strong>🌐 International Exposure You Can Explore:</strong><br><br>

<ul>
  <li>🚀 NASA Drawing or Design contests</li>
  <li>📝 International Essay Writing Challenges</li>
  <li>🎮 Code.org & Scratch Coding contests</li>
  <li>📸 Environmental or Art Competitions globally</li>
</ul>

👉 Participation is more important than prizes — just showing up is growth.<br><br>

<strong>💪 Skills to Focus on in Class 7:</strong><br><br>

<ul>
  <li>💻 Start learning touch typing or beginner coding (Scratch / Blockly)</li>
  <li>🎨 Use design tools like Canva or explore storytelling tools</li>
  <li>📖 Build a strong reading habit — newspapers, storybooks, articles</li>
  <li>🗣️ Practice speaking clearly and confidently in class activities</li>
  <li>🧘 Learn focus methods — Pomodoro, journaling, 10-min meditations</li>
</ul><br>

<strong>📅 A Mini-Roadmap For Class 7 Progress:</strong><br><br>

<ul>
  <li>🔍 Apr–June: Try one Olympiad or school contest</li>
  <li>📚 July–Sep: Build a habit (reading, coding, drawing etc.)</li>
  <li>🎯 Oct–Dec: Join a group project or school activity team</li>
  <li>🚀 Jan–Mar: Choose 1 thing you love and go deep into it</li>
</ul><br>

<strong>🎓 Planting Big Dreams Starts Here!</strong><br><br>

Even if you’re not thinking about careers yet — this is the perfect age to explore.  
Ever thought about becoming an inventor, an author, a space scientist, a wildlife expert, or a designer?<br><br>

You don’t need to decide now — but you can start tasting different ideas.  
Start a small science project, write your own short story, make a model, teach a younger sibling — it all counts!<br><br>

The top students of tomorrow are the explorers of today. 🚀<br><br>

<strong>💬 Honest Advice:</strong><br><br>

You don’t need to be perfect. You just need to be curious.  
Don’t worry if you fail or make mistakes — that’s exactly how learning works.  
Keep trying, keep discovering — and most importantly, keep enjoying the journey.<br><br>

<strong>~Best Wishes – From Me (AspiroPath)</strong><br><br>

"Your future doesn’t start after school — it starts with the little things you try today.  
Every small effort you make is a brick in the path you're building.  
So stay bold, stay curious, and keep moving forward. You're doing great."  ❤️
`, 

 'Class 8': `
<strong>🚀 Welcome to Class 8 – The Explorer Stage!</strong><br><br>

Class 8 is like standing on a hilltop — you’ve climbed a little, and now you can see different exciting paths ahead.  
You’re not a little kid anymore, but not fully into board years either.  
This is the *perfect* time to explore, build confidence, and start figuring out what excites you! 😎<br><br>

Let’s walk through it like a friendly mentor who’s here to guide you — clearly, smartly, and without pressure.<br><br>

<strong>📌 Why Class 8 is More Important Than You Think:</strong><br><br>

<ul>
  <li>🧠 You now understand topics deeply — time to sharpen your thinking</li>
  <li>🎯 You can start discovering your interests — science, stories, logic, design?</li>
  <li>📖 It builds the base for Class 9 & 10 level thinking</li>
  <li>💬 You're growing emotionally — new questions, ideas, and confidence</li>
</ul><br>

<strong>🌱 Let’s Talk Dreams!</strong><br><br>

Not sure what to become? That’s completely okay.  
But this is the right time to ask yourself:  
 Do I enjoy designing things?  
 Do I love solving how-stuff-works puzzles?  
 Am I creative or logical?  
 Do I love storytelling or speaking confidently?<br><br>

Once you get curious, doors will start opening. Trust the process.<br><br>

<strong>🌍 Awesome National Opportunities:</strong><br><br>

<ul>
  <li>🔢 SOF Olympiads – NSO, IMO, IEO</li>
  <li>🧠 Aryabhata Ganit Challenge (Math)</li>
  <li>📖 CBSE Reading Challenge, Expression Series</li>
  <li>🗣️ Debates, Essay contests, Quiz competitions</li>
</ul><br>

<strong>🌐 International Contests You Can Try:</strong><br><br>

<ul>
  <li>🚀 NASA Space Art / Design contests</li>
  <li>🎙️ International Essay / Peace contests (like Goi Peace Japan)</li>
  <li>🎮 Google Code-in / Junior Hackathons</li>
  <li>🎥 Young Filmmaker / Art Competitions</li>
</ul>

 <em>It's not about winning — it's about exploring, learning, and enjoying the journey.</em><br><br>

<strong>🛠️ Skills to Build in Class 8 (Your Superpowers!):</strong><br><br>

<ul>
  <li>💻 Start basic coding – Scratch, Code.org, Tynker</li>
  <li>📚 Read daily – even 15 mins makes a big difference</li>
  <li>🎨 Learn tools like Canva, CapCut – design, videos, creativity</li>
  <li>🧘 Try Pomodoro – 25 mins study + 5 min break = better focus</li>
  <li>📝 Keep a small journal or blog to track your thoughts and growth</li>
</ul><br>

<strong>🏁 Mini Roadmap – Month-wise Focus:</strong><br><br>

<ul>
  <li>📖 Apr–June: Explore Olympiads, interests, fun learning habits</li>
  <li>🧠 July–Sep: Try new tools, take part in a contest or team project</li>
  <li>🎯 Oct–Dec: Focus on curiosity + 1 achievement (essay, quiz, video etc.)</li>
  <li>🚀 Jan–Mar: Strengthen weak areas + plan for Class 9 vision</li>
</ul><br>

<strong>🎓 Seeds of Big Dreams – MIT, IIT, IAS, NASA?</strong><br><br>

Absolutely possible.  
Class 8 is the best time to plant big dreams without pressure.  
Start small — that’s how greatness always begins.<br><br>

<ul>
  <li>📚 Read stories of real-world scientists, leaders & innovators</li>
  <li>💡 Build or solve something around you – even a small app or poster counts</li>
  <li>📹 Share your thoughts – a blog, podcast, or school speech</li>
  <li>🌱 Help others – tutoring juniors, eco-club, volunteering</li>
</ul>

Top colleges and future careers want to see creativity, effort, and self-awareness —  
Class 8 is a powerful place to start showing that.<br><br>

<strong>💬 Real Talk:</strong><br><br>

It’s okay to be confused. You don’t need all the answers right now.  
Class 8 isn’t about pressure — it’s about playful growth.  
Try things. Fail. Learn.  
Every effort you make now is like a seed — and trust me, it’ll grow into something amazing.<br><br>

<strong>~Best Wishes – From Me (AspiroPath)</strong><br><br>

"Big dreams don’t need big age — they need small daily actions.  
You already have the spark.  
Now it’s time to light it up." 🔥<br><br>

Keep learning, keep growing. Your path is just beginning. 🚀  
`,

  'Class 9': `
<strong>📣 Hey Rockstar!</strong><br><br>

So you’ve stepped into Class 9? Welcome to the real game!   
This isn’t just another “next class.” This is the warm-up to the real world.  
It’s where teachers start saying “board aa raha hai”, relatives start asking “beta, science loge ya commerce?”, and friends start acting like toppers overnight. 😅<br><br>

But listen carefully: <strong>Class 9 is not just about marks... it’s about momentum.</strong><br>
You don’t need to be perfect — but you do need to start. Start becoming curious, consistent, and a little more conscious about your future.<br><br>

Still figuring out where to go? Don’t worry. <strong>I’m here to walk beside you — like an elder brother who’s been through it all.</strong><br><br>

<strong>🧠 What Makes Class 9 So Special?</strong><br><br>

This is your <em>“shift” year</em> — where things level up:
<ul>
  <li>Your textbooks get heavier 📚</li>
  <li>Teachers start expecting “maturity” 🤓</li>
  <li>You begin to notice what subjects make your brain dance … and which ones feel like a horror movie!</li>
</ul>

This is the year to start observing your own interests seriously:
<ul>
  <li>Love writing? You’ve got a voice.</li>
  <li>Love experiments? You're a natural scientist.</li>
  <li>Love explaining concepts? Teacher or speaker energy.</li>
  <li>Love numbers? Future finance ninja alert!</li>
</ul>

<strong>Don’t wait to be told what you're good at — explore, fail, learn, repeat.</strong><br><br>

<strong>🚀 Real Opportunities (Your Stage is Waiting)</strong><br><br>

Ab sirf school ke marks ki baat nahi. Bahar duniya hai jo tumhara talent chah rahi hai.<br><br>

<strong>🇮🇳 National Level:</strong>
<ul>
  <li>🎓 <strong>NTSE:</strong> Crack this and you’re officially a brainiac with scholarship support!</li>
  <li>🧠 <strong>Olympiads:</strong> Science, Maths, Astronomy – pick your weapon and go!</li>
  <li>💡 <strong>ATL Innovation Challenges:</strong> Build gadgets, apps, prototypes — feel like Iron Man? Start here.</li>
  <li>🎤 <strong>MUNs, Debates, CBSE Expression Series:</strong> Perfect for the loud & proud thinkers 💬</li>
  <li>🎨 <strong>Poster, Film, Art Contests:</strong> For those who say more with colours than words.</li>
</ul>

<strong>🌍 International Level:</strong>
<ul>
  <li>🚀 <strong>NASA Artemis Challenge:</strong> Yes, NASA. No kidding.</li>
  <li>📝 <strong>Goi Peace Essay (Japan):</strong> Share your thoughts with the world</li>
  <li>🎥 <strong>Breakthrough Junior Challenge:</strong> Explain a science topic in a 2-minute video and win BIG</li>
  <li>🌐 <strong>World of 8 Billion Video Contest:</strong> Create something meaningful, make a global impact</li>
</ul>

💡 <em>Pro tip:</em> Don’t wait to be “ready”. Apply, participate, learn. The experience matters more than the prize. Every time you try, you level up. 🎯<br><br>

<strong>⚙️ Skills You Must Start Building NOW!</strong><br><br>

Let’s be real — no matter what you wanna become, these skills are non-negotiable in 2025 and beyond:
<ul>
  <li>💻 <strong>Basic Coding:</strong> Start with Python or JavaScript – build logic</li>
  <li>🎨 <strong>Design Sense:</strong> Use Canva, Figma – presentation is power</li>
  <li>🎤 <strong>Public Speaking:</strong> Stage or camera, your voice matters</li>
  <li>📊 <strong>Financial Basics:</strong> Saving, budgeting, even basic investing</li>
  <li>🧠 <strong>Thinking Skills:</strong> Why? How? What if? — start asking more</li>
  <li>⏳ <strong>Time Management:</strong> Stop scrolling, start building!</li>
</ul><br>

<strong>🎯 Career Clarity – No Pressure, Only Exploration</strong><br><br>

Forget “What do you want to become?”  
Ask: <strong>“What kind of problems do I enjoy solving?”</strong>  
That’s how careers are born. Let’s decode a few routes:<br><br>

<em>🧪 If you love curiosity, labs, discoveries:</em><br>
➤ Researcher, Doctor, Biotech Expert, Chemist, Scientist<br><br>

<em>💻 If you love screens, games, tech:</em><br>
➤ Software Developer, Game Designer, Ethical Hacker, AI Engineer<br><br>

<em>🎨 If you sketch, design or imagine visuals:</em><br>
➤ Architect, Interior Designer, Graphic/UX Designer, Animator<br><br>

<em>🎤 If you love to speak, lead, express:</em><br>
➤ Lawyer, Public Speaker, Politician, Content Creator<br><br>

<em>💼 If you're curious about money, brands, markets:</em><br>
➤ Entrepreneur, Chartered Accountant, Marketer, Stock Analyst<br><br>

 Every interest has a future — <strong>IF</strong> you explore it early.<br><br>

<strong>📚 Entrance Exams – Jo Jaanna Zaroori Hai</strong><br><br>

Tere sapne jitne bade hon, un tak pahunchne ka raasta bhi clear hona chahiye. Abhi se thoda thoda samajh le — kaunsa career kis exam se start hota hai:<br><br>

<ul>
  <li>🩺 <strong>Doctor / Medical:</strong> NEET (National Eligibility cum Entrance Test)</li>
  <li>🛠️ <strong>Engineering / Tech Fields:</strong> JEE (Main & Advanced), BITSAT</li>
  <li>⚖️ <strong>Law / Legal Studies:</strong> CLAT (Common Law Admission Test)</li>
  <li>📈 <strong>Commerce / Business / Finance:</strong> CUET (for B.Com), CA Foundation, CS Foundation</li>
  <li>🧠 <strong>Psychology / Humanities:</strong> CUET, university entrance (like DU, Ashoka, Christ)</li>
  <li>🎨 <strong>Design / Fashion:</strong> NID, NIFT, UCEED, CEED</li>
  <li>🎥 <strong>Mass Comm / Journalism:</strong> CUET, IIMC Entrance (after Class 12)</li>
  <li>🏛️ <strong>Civil Services (UPSC):</strong> Degree ke baad hota hai, par abhi se NCERT padho toh base strong hoga</li>
</ul>

📌 <em>Abhi yaad rakhna mushkil lagega, but just knowing these names gives you power. Jab waqt aayega, tu ready rahega.</em><br><br>

<strong>🧭 Your Personalized Roadmap</strong><br><br>

<ul>
  <li>📝 Keep a "Mind Dump Journal" — thoughts, doubts, questions, dreams</li>
  <li>📚 Read one inspiring bio this year — someone who built from zero</li>
  <li>🎯 Monthly 1 challenge — new course, new topic, new habit</li>
  <li>📺 Watch: Shark Tank, Discovery, TED Talks, real stories</li>
  <li>🤝 Talk to real professionals — even family, neighbors count!</li>
</ul><br>

Your growth doesn’t depend on your school.  
It depends on your effort. Start small — one skill, one book, one step at a time. 💪<br><br>

<strong>💬 Final Words – From Sameer Bhaiya</strong><br><br>

Look, I’ve been where you are. I know it’s confusing.  
Everyone’s running in different directions, and you're stuck in the middle wondering,<br>
“Am I enough?”<br>
“What if I don’t know what I want?”<br>
“What if I fail?”<br><br>

Let me tell you this — <strong>you’re not behind, you’re just beginning.</strong><br>
Most people fake clarity. You’re doing better just by being real.<br><br>

🧩 The best part? You don’t need to have all answers right now.  
You just need to start asking the right questions.<br><br>

And no matter what happens — <strong>don’t stop moving forward.</strong>  
I’m proud of you already — for reading this, for caring about your future, for trying.  
You’ve already taken the first step — and I’m right here, walking with you.<br><br>

<em>– Your digital mentor, Sameer Bhaiya</em><br><br>

<strong>~Best Wishes – From Me (AspiroPath)</strong><br><br>

“Jab tak tum khud pe bharosa rakhte ho,<br>
duniya ki koi bhi dikkat tumhara rasta nahi rok sakti.<br>
Chahe tum kahin se bhi shuru karo,<br>
tum kahin bhi pahunch sakte ho — bas rukna mat.<br><br>

I'm with you. Always.” ❤️  
`,

  'Class 10': `
<strong>🎓 Welcome to Class 10, Champ!</strong><br><br>

This is not just another academic year — this is the turning point.  
People will call it a “board class”, but let me tell you something real...<br><br>

<strong>This is YOUR class — the one where you discover what you're made of.</strong><br>
It’s the year where stress and opportunity walk together.  
Where pressure from relatives gets louder, but so can your inner voice — if you let it speak.<br><br>

As your big bro/mentor/friend, let’s walk through this together, step by step. You’ve got this. 💪<br><br>

<strong>📌 Why Class 10 Is A Big Deal (But Not A Scary One)</strong><br><br>

<ul>
  <li>📚 First public board exam — yes, it feels big, but it's manageable.</li>
  <li>🧭 The year where you’ll choose your stream — Science, Commerce, Arts?</li>
  <li>💡 You’ll start getting clarity (or confusion!) about your career. That’s okay.</li>
  <li>⏱️ You’ll learn time management like never before.</li>
</ul>

<strong>The truth?</strong> Everyone is scared. Everyone feels lost at some point.  
But the winners aren’t the ones who have all the answers — they’re the ones who keep moving despite the questions.<br><br>

<strong>🌍 Your Stream = Your Direction (But Not Your Destiny)</strong><br><br>

Let’s break it down:

<ul>
  <li>🔬 <strong>Science:</strong> For those who love experiments, logic, numbers, space, or medicine.</li>
  <li>💰 <strong>Commerce:</strong> For minds that love business, money, strategy, and systems.</li>
  <li>🎭 <strong>Arts/Humanities:</strong> For those who think deep, write well, observe society, or express themselves.</li>
</ul>

There is no “easy” or “hard” stream — there’s only the **right stream for YOU**.  
Choose interest over popularity. Passion > Pressure. <br><br>

<strong>🎯 Career Paths & Matching Entrance Exams</strong><br><br>

Once you know your interest, start knowing the exams linked to it.  
It’s early, but awareness is power. Check this out:

<ul>
  <li>🩺 <strong>Doctor:</strong> NEET (Biology stream)</li>
  <li>💻 <strong>Engineer:</strong> JEE Main + Advanced, BITSAT (Maths stream)</li>
  <li>⚖️ <strong>Lawyer:</strong> CLAT (any stream after 12th)</li>
  <li>📈 <strong>CA / Finance / Business:</strong> CUET, CA Foundation (Commerce stream)</li>
  <li>🎨 <strong>Designer / Artist:</strong> NID, NIFT, UCEED, CEED (Arts/Any stream)</li>
  <li>🎥 <strong>Media / Journalism:</strong> CUET, IIMC, university entrance (Arts/Any)</li>
  <li>🏛️ <strong>Civil Services:</strong> UPSC (degree ke baad, but base starts now — NCERT!)</li>
</ul>

<em>Note:</em> No exam is “impossible” — preparation starts with small daily effort.  
Even just understanding the paths puts you ahead of 90% students. 🧠<br><br>

<strong>🚀 National & International Opportunities</strong><br><br>

Your board year doesn’t mean only textbooks. Parallel growth = real growth.

<strong>🇮🇳 India-Level:</strong>
<ul>
  <li>🔍 NTSE (last chance — Class 10 only!)</li>
  <li>📖 CBSE Expression Series</li>
  <li>💡 Inspire Awards – Science/Innovation Projects</li>
  <li>🎙️ MUNs, Essay Competitions, Debates</li>
</ul>

<strong>🌐 International-Level:</strong>
<ul>
  <li>🧪 Breakthrough Junior Challenge (science explainers)</li>
  <li>📝 Goi Peace Essay, NASA Contests</li>
  <li>🌍 International Youth Art / Film Contests</li>
</ul>

🌱 <em>Don’t just chase ranks. Build a profile.</em> Explore your talent and show it off!<br><br>

<strong>🔧 Skills You Must Build in Class 10</strong><br><br>

<ul>
  <li>📱 Digital Productivity – Not just scrolling, but tools like Notion, Google Sheets</li>
  <li>💻 Learn to Code – Start with logic, even HTML/CSS/JavaScript</li>
  <li>🎤 Speak Confidently – Join stage events, YouTube, or even just record yourself</li>
  <li>🧠 Learn How to Learn – Memory tricks, Pomodoro, active recall</li>
  <li>📈 Start Understanding Career Options – Talk to real people, watch real journeys</li>
</ul>

This is the year to not just “study harder” — but also “learn smarter”.<br><br>

<strong>🧭 Your Mini-Roadmap For Class 10</strong><br><br>

<ul>
  <li>📖 Jan – Mar: Board preparation in full focus, revise & test</li>
  <li>📃 Apr – May: Explore career paths, take career quizzes, talk to mentors</li>
  <li>🌐 June – Aug: Learn one digital skill – coding, design, video editing</li>
  <li>🎯 Sep – Dec: Practice time management, explore Olympiads & contests</li>
</ul>

Every month should help you get a little clearer, a little stronger. No wasted months this year. 💯<br><br>

<strong>💬 From Sameer Bhaiya – Heartfelt Advice</strong><br><br>

Look, I know log bolte hain “Class 10 sabse important hoti hai.”  
But main yeh bolta hoon — <strong>Class 10 is just your first real test of self-discipline.</strong>  
Tension lena band kar, action lena start kar.<br><br>

This is YOUR year to shine. Don’t let marks define you.  
Let your consistency, effort, and growth define you.<br><br>

Agar tera goal clear nahi hai, no problem.  
Tera direction clear ho jaye — woh kaafi hai.  
Ek skill chune, ek habit bana, ek cheez seekhne ka iraada rakh — aur duniya badlegi. 🌍<br><br>

<em>– Always cheering for you,  
Sameer Bhaiya </em><br><br>

<strong>🎁 Best Wishes – From Me (AspiroPath)</strong><br><br>

“Kamyabi unhi ko milti hai  
jo raat mein sapne nahi,  
sapnon ke liye jagte hain.  
Tu ruk mat — kyunki tu bana hi bada karne ke liye hai.” 🚀  
<br><br>Always with you! ❤️
`,


'Class 11': `
<strong>🎯 Welcome to Class 11 – Your Launchpad to the Future!</strong><br><br>

This isn’t just a “next class.” It’s where the real game begins.  
Class 11 is your runway — and whether you fly to IIT, AIIMS, NDA, CA, Harvard, or even build your own startup — this is where your flight plan is written. <br><br>

It’s also where reality hits a bit harder:<br>
✔️ Syllabus is bigger<br>
✔️ Competition is real<br>
✔️ Time slips faster<br><br>

But don’t panic — <strong>panic never builds futures, preparation does.</strong>  
So breathe in, and let’s take this journey together — calmly, smartly, and like a boss. 😎<br><br>

<strong>📚 What Makes Class 11 So Crucial?</strong><br><br>

<ul>
  <li>🧠 It's the foundation for most entrance exams (JEE, NEET, CUET, SAT, etc.)</li>
  <li>🧭 Your stream decides your next few years — choose interest over pressure</li>
  <li>🚀 Your career vision begins to get serious — no more “let’s see…”</li>
  <li>📈 Skills, habits, and routines built now = success multiplier</li>
</ul><br>

<strong>🔬 Science / 💼 Commerce / 🎭 Humanities – Choose Wisely</strong><br><br>

It’s not about “kaun sa stream tough hai?”  
It’s about: <strong>“What kind of problems do I love solving?”</strong><br><br>

<ul>
  <li> <strong>Science:</strong> Ideal for medicine, engineering, research, IT, environment, data science, etc.</li>
  <li> <strong>Commerce:</strong> Great for CA, CS, stock markets, startups, finance, business management</li>
  <li> <strong>Humanities:</strong> Perfect for law, psychology, civil services, journalism, social change, art, literature</li>
</ul><br>

There is no “easy” or “less valuable” stream — <strong>only the right fit.</strong><br><br>

<strong>🎯 Career Options + Entrance Exams – Start Mapping</strong><br><br>

<ul>
  <li>🩺 <strong>Doctor:</strong> NEET (Biology stream)</li>
  <li>💻 <strong>Engineer / Tech:</strong> JEE Main & Advanced, BITSAT</li>
  <li>⚖️ <strong>Law:</strong> CLAT (any stream after 12th)</li>
  <li>📈 <strong>Commerce:</strong> CA Foundation, CUET, CS Foundation</li>
  <li>🧠 <strong>Psychology / Social Sciences:</strong> CUET, college-specific exams</li>
  <li>🎨 <strong>Design & Art:</strong> NID, NIFT, UCEED, CEED</li>
  <li>🎥 <strong>Media / Communication:</strong> CUET, university entrances</li>
  <li>🏛️ <strong>Civil Services (UPSC):</strong> Degree ke baad, but NCERT base starts now!</li>
</ul><br>

💡 <em>Note:</em> Choose your path slowly but confidently. Read, talk, explore.<br><br>

<strong>🌍 Dreaming Big? Let’s Talk MIT, Harvard, Stanford, Oxford...</strong><br><br>

Yes, Indian students CAN make it to the world’s top universities.  
But these colleges don’t just want toppers — they want <strong>leaders, thinkers, creators, and doers.</strong><br><br>

<strong>Here’s what they look for:</strong>
<ul>
  <li>📊 Strong academics (but not 100% perfect!)</li>
  <li>🚀 Olympiads / national level achievements</li>
  <li>💡 Projects, research, innovation (like science fair, coding app, article writing)</li>
  <li>🌱 Community work, leadership, social impact</li>
  <li>📝 Personal essays that show your story, struggle, and spark</li>
  <li>🎯 SAT / ACT / TOEFL (depending on the country)</li>
</ul>

You don’t need to be rich or from a big city — just curious, consistent, and bold.<br><br>

<strong> Build Your Global Profile:</strong>
<ul>
  <li>🌐 Take part in international contests – NASA, Google Science Fair, Breakthrough Challenge</li>
  <li>📃 Write blogs or articles on Medium / school magazine</li>
  <li>💻 Start a coding project, YouTube channel, podcast, NGO – anything that shows passion</li>
  <li>📚 Read beyond textbooks – biographies, business, science, psychology, anything that excites you!</li>
</ul><br>

<strong>🧠 Must-Have Skills in Class 11:</strong><br><br>

<ul>
  <li>📅 Time Management – learn to balance boards + competition + personal life</li>
  <li>💻 Tech Skills – coding, design, Excel, AI tools, research skills</li>
  <li>🎤 Communication – written + verbal. Express like a leader!</li>
  <li>🧘‍♂️ Focus – meditation, deep work, less distractions</li>
  <li>📈 Strategic Learning – don’t just study, LEARN how to learn</li>
</ul><br>

<strong>📆 Mini-Roadmap For Class 11:</strong><br><br>

<ul>
  <li>🔍 Apr – May: Career exploration, stream confirmation</li>
  <li>📖 June – Sept: Build habits, start light prep for entrances</li>
  <li>🌐 Oct – Dec: Start profile building – Olympiads, contests, projects</li>
  <li>🚀 Jan – Mar: Reflect, revise, gear up for Class 12 goals</li>
</ul><br>

Every 90 days, reflect on what you’ve learned — and what still scares you.<br><br>

<strong>💬 From Sameer Bhaiya – Real Talk</strong><br><br>

I won’t lie — Class 11 is tough. But tough doesn’t mean impossible.  
It just means: <strong>more discipline, more courage, and more self-trust.</strong><br><br>

Don’t let pressure break you — let it build you.  
Forget competition — focus on <em>your own graph</em>.  
Every chapter you read, every doubt you clear, every video you watch — it all adds up.<br><br>

And listen — duniya mein koi bhi bada insaan ek hi cheez se bana hai:  
<strong>Unbreakable effort.</strong><br><br>

<em>– With you always,  
Sameer Bhaiya ❤️</em><br><br>

<strong>~Best Wishes – From Me (AspiroPath)</strong><br><br>

“Tum MIT jaa sakte ho. Tum IAS ban sakte ho. Tum duniya badal sakte ho.  
Bas ek rule yaad rakhna:  
<em>Stop doubting. Start doing.</em>” 🚀<br><br>

You’ve got it in you — I believe it.  
`,

'Class 12': `
<strong>🎓 Welcome to Class 12 – The Final Lap!</strong><br><br>

This is it.  
The year you’ve been hearing about since Class 6...  
The one that decides your stream, your exam, your college — and sometimes, even your sleep schedule! 😅<br><br>

But let me tell you something real: <strong>Class 12 doesn’t define you — YOU define Class 12.</strong><br>
Yes, there’s pressure. Yes, there’s competition.  
But you’re not just here to survive it — you’re here to rise above it. <br><br>

Let’s break it all down like a friend, not a textbook. Ready?  
Let’s go! 🚀<br><br>

<strong>📌 What Makes Class 12 So Important?</strong><br><br>

<ul>
  <li>📝 Board exams + competitive entrances = double tension</li>
  <li>🎯 This is the year you finalize your career direction</li>
  <li>📚 Colleges, scholarships, foreign universities — decisions start now</li>
  <li>📈 Habits, confidence & self-image — all change this year</li>
</ul>

But guess what?  
<strong>It’s also your biggest opportunity year. And you’re not alone.</strong><br><br>

<strong>🔍 Stream-wise Guidance</strong><br><br>

<ul>
  <li>🔬 <strong>Science:</strong> Physics/Chemistry/Bio or Maths is your battlefield — whether you aim for JEE, NEET, or CUET</li>
  <li>💰 <strong>Commerce:</strong> Accounts, Business, Eco + CUET, CA Foundation, CS Foundation, or BBA entrances</li>
  <li>🎭 <strong>Humanities:</strong> Psychology, Pol. Science, Sociology — perfect for law, civil services, CUET, and beyond</li>
</ul>

💡 Choose what matches your strengths, not society’s hype.<br><br>

<strong>📚 Key Entrance Exams – You Should Know:</strong><br><br>

<ul>
  <li>🧪 <strong>JEE:</strong> For Engineering, B.Tech, IITs, NITs</li>
  <li>🩺 <strong>NEET:</strong> For MBBS, BDS, Medical/AYUSH courses</li>
  <li>⚖️ <strong>CLAT:</strong> For top law universities like NLU</li>
  <li>📈 <strong>CA Foundation:</strong> First step to become a Chartered Accountant</li>
  <li>🧠 <strong>CUET:</strong> For central universities like DU, BHU, JNU etc.</li>
  <li>🎨 <strong>NID/NIFT/UCEED:</strong> For design, fashion, creativity-based careers</li>
  <li>🌐 <strong>SAT/ACT:</strong> For foreign colleges (along with TOEFL/IELTS)</li>
</ul>

📌 Tip: Don’t try to master everything. Choose your exam & strategy, and commit like a warrior.<br><br>

<strong>🌍 What If You’re Dreaming BIG? Like MIT, Harvard, Oxford?</strong><br><br>

Yes, it’s possible. And no, it’s not just for rich kids from metro cities.  
Students from India — small towns, rural schools — have made it to MIT, Harvard, Stanford.  
But here’s the truth: <strong>These universities don’t want robots. They want real people with real spark.</strong><br><br>

<strong>Top universities look for:</strong>

<ul>
  <li>📊 Academic consistency (not always perfect marks, but effort & growth)</li>
  <li>💡 Projects, research, innovation — build something, solve a problem</li>
  <li>🧪 Olympiads, competitions, achievements — even school-level counts!</li>
  <li>🌱 Social impact – NGOs, environment, teaching others, community work</li>
  <li>📝 Personal story – a powerful essay that shows your WHY</li>
  <li>🌐 Entrance exams – SAT/ACT + TOEFL/IELTS</li>
</ul>

<strong>But beware:</strong>  
They expect you to take initiative.  
They won’t spoon-feed.  
So if you really want it — start doing something now that makes your story UNIQUE. 🌟<br><br>

<strong>📈 National & International Opportunities (Even Now!)</strong><br><br>

<ul>
  <li>🎓 INSPIRE Scholarship (for Science students)</li>
  <li>🚀 Breakthrough Junior Challenge</li>
  <li>📃 CBSE Expression Series, Essay Contests</li>
  <li>🗣️ Model United Nations (MUN), Debates, Public Speaking</li>
  <li>💻 Start a project — app, blog, YouTube, local solution</li>
</ul>

Your marks may get you into a college.  
But your skills and profile will make you stand out in life. <br><br>

<strong>⚙️ Skills You Can’t Ignore in Class 12:</strong><br><br>

<ul>
  <li>📅 Time Management – make a study plan and actually follow it</li>
  <li>🧠 Focus Mastery – digital detox, Pomodoro, deep work hours</li>
  <li>🎤 Communication – write well, speak better</li>
  <li>💻 Digital Fluency – Excel, presentations, basic coding</li>
  <li>🌐 Research Skills – for entrance prep & future projects</li>
</ul><br>

<strong>📆 Monthly Plan – 4 Phases to Master Class 12:</strong><br><br>

<ul>
  <li>📖 Apr–June: Syllabus understanding, strategy set, career vision</li>
  <li>⚔️ July–Oct: Peak preparation — practice tests, consistency, concept clarity</li>
  <li>🎯 Nov–Jan: Final board revision + mock papers + entrance crash courses</li>
  <li>🛫 Feb–Mar: Mindset work, relax + focus, give your best, prepare for college apps/interviews</li>
</ul><br>

<strong>💬 From Sameer Bhaiya – Truth Bomb Time:</strong><br><br>

This is not just a board year.  
This is the year you’ll learn to fight fear.  
To face yourself.  
To ask, “What do I really want?”  
And to take the first REAL step toward it. <br><br>

People will expect a lot from you.  
But only YOU can decide what you’re chasing — and why.  
So don’t just chase ranks.  
Chase **purpose + preparation**.<br><br>

And remember:  
<em>You’re not late. You’re not behind. You’re not small.  
You’re just getting started — and that’s powerful.</em> ❤️<br><br>

<em>– Forever with you,  
Sameer Bhaiya 💪</em><br><br>

<strong>~Best Wishes – From Me (AspiroPath)
</strong><br><br>

“Tu sirf exam nahi de raha, tu apni kahani likh raha hai.  
Jo mehnat tu aaj karega, woh kal teri duniya banayegi.  
Rukna nahi. Jhukna nahi.  
Aage badh — tu bana hi hai bada karne ke liye.” 
`,
};

classCards.forEach(card => {
  card.addEventListener('click', () => {
    const className = card.textContent;
    modalTitle.textContent = `${className} Roadmap`;
    modalText.innerHTML = roadmapData[className] || `Roadmap for ${className} coming soon!`;
    modal.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});