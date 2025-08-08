      
        let currentDay = 1;
        let progress = {};
        let startDate = new Date().toISOString().split('T')[0];
        let currentSection = 'dashboard';

       
        const motivationalQuotes = [
            "Discipline is the bridge between goals and accomplishment.",
            "Your only limit is your mind. Push through the resistance.",
            "Champions are made when nobody's watching.",
            "The pain you feel today will be the strength you feel tomorrow.",
            "Success isn't given. It's earned in the gym, on the field, in every quiet moment when you choose to push harder.",
            "Mental toughness is not an accident. It's a choice.",
            "You are not just building your body, you're building your character.",
            "Every day is a new opportunity to become stronger than yesterday.",
            "Consistency beats perfection every single time.",
            "The hardest part of any journey is taking the first step. You're already here.",
            "Your future self is watching. Make them proud.",
            "Discipline weighs ounces, regret weighs tons.",
            "It's not about being perfect. It's about being committed.",
            "Winners don't quit when it gets hard. They dig deeper.",
            "Your body can stand almost anything. It's your mind you have to convince.",
            "Every small victory builds the foundation for something greater.",
            "Comfort is the enemy of greatness. Embrace the discomfort.",
            "You're not just changing your body, you're rewiring your brain.",
            "The magic happens outside your comfort zone.",
            "Strength doesn't come from what you can do. It comes from overcoming what you thought you couldn't.",
            "Today's accomplishments were yesterday's impossibilities.",
            "Your only competition is who you were yesterday.",
            "Success is the sum of small efforts repeated day in and day out.",
            "The difference between ordinary and extraordinary is that little 'extra'.",
            "You don't have to be great to get started, but you have to get started to be great.",
            "Mental strength is built through adversity, not comfort.",
            "Every rep, every page, every drop of water is building the new you.",
            "The journey of a thousand miles begins with a single step. Keep stepping.",
            "Your commitment to the process will determine your progress.",
            "Excellence is not a skill, it's an attitude.",
            "You are exactly where you need to be to become who you want to be.",
            "Discipline is doing what needs to be done, even when you don't feel like it.",
            "The strongest people are forged in fires of adversity.",
            "Your dreams are on the other side of your discipline.",
            "Every day you don't quit is a day you win.",
            "The only way to make a dream come true is to wake up and work.",
            "Success is not for the chosen few, it's for the few who choose.",
            "You are building something that will last long after these 75 days.",
            "The pain of discipline weighs ounces, but the pain of regret weighs tons.",
            "Your determination today creates your destiny tomorrow.",
            "Small daily improvements lead to stunning long-term results.",
            "The best time to plant a tree was 20 years ago. The second best time is now.",
            "You don't have to see the whole staircase, just take the first step.",
            "Champions aren't made in comfort zones.",
            "Every challenge you face is an opportunity to discover your strength.",
            "The road to success is dotted with many tempting parking spaces. Keep driving.",
            "You are not a victim of your circumstances, you are a product of your decisions.",
            "Consistency is the mother of mastery.",
            "Your potential is endless. Your excuses are worthless.",
            "The only impossible journey is the one you never begin.",
            "Success is not about being the best. It's about being better than you were yesterday.",
            "Your mindset determines your reality. Choose strength.",
            "The comeback is always stronger than the setback.",
            "You are writing your success story one day at a time.",
            "Discipline is the foundation upon which all success is built.",
            "Your future self will thank you for the discipline you show today.",
            "Every day is a chance to rewrite your story.",
            "The harder you work, the luckier you get.",
            "You are capable of amazing things. Today is proof.",
            "Success is a series of small wins compounded over time.",
            "Your strength is not measured by what you can lift, but by what you can endure.",
            "The only person you are destined to become is the person you decide to be.",
            "Excellence is not a destination, it's a way of traveling.",
            "You are exactly where you need to be to become who you're meant to be.",
            "Every sunrise is a new opportunity to get stronger.",
            "The difference between who you are and who you want to be is what you do.",
            "Your commitment to excellence is your signature in this world.",
            "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            "You are not here to be average. You are here to be awesome.",
            "The only way to fail is to quit. Everything else is just practice.",
            "Your transformation begins with your dedication to the process.",
            "Champions train, losers complain. Which one are you?",
            "Every step forward is a step toward achieving something bigger and better.",
            "The pain of discipline is temporary, but the pain of regret lasts forever.",
            "You are building mental armor that will protect you for life.",
            "Success is not about perfection, it's about progression.",
            "You've got this. You've always had this. Now prove it."
        ];

       
        const tasks = [
            { id: 'workout1', label: '45min Workout #1', icon: '💪' },
            { id: 'workout2', label: '45min Outdoor Workout', icon: '🏃' },
            { id: 'diet', label: 'Follow Diet (No Cheats/Alcohol)', icon: '🎯' },
            { id: 'water', label: 'Drink 1 Gallon Water', icon: '💧' },
            { id: 'reading', label: 'Read 10 Pages Non-Fiction', icon: '📚' },
            { id: 'photo', label: 'Take Progress Photo', icon: '📸' }
        ];

       
        function getCurrentQuote() {
            return motivationalQuotes[(currentDay - 1) % motivationalQuotes.length];
        }

        function isDayComplete(day) {
            return tasks.every(task => progress[day]?.[task.id]);
        }

        function getCompletedDays() {
            let completed = 0;
            for (let i = 1; i <= Math.min(currentDay, 75); i++) {
                if (isDayComplete(i)) completed++;
            }
            return completed;
        }

        function getTasksCompletedForDay(day) {
            if (!progress[day]) return 0;
            return tasks.filter(task => progress[day][task.id]).length;
        }

        function getEndDate() {
            const start = new Date(startDate);
            const end = new Date(start);
            end.setDate(start.getDate() + 74);
            return end.toLocaleDateString();
        }

       
        function showSection(sectionName) {
        
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
        
            document.querySelectorAll('.menu-item').forEach(item => {
                item.classList.remove('active');
            });
            
            
            document.getElementById(sectionName).classList.add('active');
            
         
            event.target.classList.add('active');
            
            currentSection = sectionName;
            updateUI();
        }

        function createWeeklyRings() {
            const container = document.getElementById('weekly-rings');
            container.innerHTML = '';
            
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const startOfWeek = new Date(startDate);
            startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
            
            for (let week = 0; week < 11; week++) {
                for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
                    const dayNumber = week * 7 + dayOfWeek + 1;
                    if (dayNumber > 75) break;
                    
                    const tasksCompleted = getTasksCompletedForDay(dayNumber);
                    const progressPercentage = (tasksCompleted / 6) * 100;
                    const circumference = 2 * Math.PI * 45;
                    const strokeDasharray = (progressPercentage / 100) * circumference;
                    
                    const ringDiv = document.createElement('div');
                    ringDiv.className = 'day-ring';
                    ringDiv.onclick = () => {
                        currentDay = dayNumber;
                        showSection('tasks');
                    };
                    
                    ringDiv.innerHTML = `
                        <svg class="ring-svg">
                            <circle class="ring-bg" cx="60" cy="60" r="45"></circle>
                            <circle class="ring-progress" cx="60" cy="60" r="45" 
                                    stroke-dasharray="${strokeDasharray} ${circumference}"
                                    stroke="${isDayComplete(dayNumber) ? '#4CAF50' : (dayNumber === currentDay ? '#2196F3' : '#FF9800')}">
                            </circle>
                        </svg>
                        <div class="ring-center">
                            <div class="ring-day">${daysOfWeek[dayOfWeek]}</div>
                            <div class="ring-tasks">${tasksCompleted}/6</div>
                        </div>
                    `;
                    
                    container.appendChild(ringDiv);
                }
            }
        }

    
        function createCalendar() {
            const calendarGrid = document.querySelector('.calendar-grid');
            const existingDays = calendarGrid.querySelectorAll('.calendar-day');
            existingDays.forEach(day => day.remove());
            
            for (let day = 1; day <= 75; day++) {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'calendar-day';
                dayDiv.textContent = day;
                dayDiv.onclick = () => {
                    currentDay = day;
                    showSection('tasks');
                };
                
                if (day === currentDay) {
                    dayDiv.classList.add('current');
                } else if (day < currentDay) {
                    if (isDayComplete(day)) {
                        dayDiv.classList.add('completed');
                    } else {
                        dayDiv.classList.add('incomplete');
                    }
                } else {
                    dayDiv.classList.add('future');
                }
                
                calendarGrid.appendChild(dayDiv);
            }
        }

        function toggleTask(day, taskId) {
            if (!progress[day]) {
                progress[day] = {};
            }
            
            progress[day][taskId] = !progress[day][taskId];
            
            
            for (let i = 1; i < day; i++) {
                if (!isDayComplete(i)) {
                    setTimeout(() => {
                        alert(`❌ Challenge Reset! Day ${i} was incomplete. Starting over from Day 1.`);
                        resetChallenge();
                    }, 100);
                    return;
                }
            }
            
            updateUI();
        }

        async function login() {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const res = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", data.token);
                window.location.href = "index.html";
            } else {
                document.getElementById("login-error").innerText = data.error || "Login failed";
            }
        }

        function updateUI() {
            const completedDays = getCompletedDays();
            const progressPercent = Math.round((completedDays / 75) * 100);
            const currentDayTasks = getTasksCompletedForDay(currentDay);
            
           
            document.getElementById('menu-day').textContent = currentDay;
            document.getElementById('menu-progress').textContent = progressPercent + '%';
      
            if (currentSection === 'dashboard' || currentSection === 'tasks') {
                document.getElementById('current-day-number').textContent = currentDay;
                document.getElementById('dashboard-day').textContent = currentDay;
                document.getElementById('dashboard-completed').textContent = currentDayTasks;
                document.getElementById('dashboard-remaining').textContent = 6 - currentDayTasks;
                document.getElementById('dashboard-quote').textContent = getCurrentQuote();
                document.getElementById('tasks-day-number').textContent = currentDay;
                document.getElementById('tasks-quote').textContent = getCurrentQuote();
                
                createWeeklyRings();
            }
            
            if (currentSection === 'progress') {
                document.getElementById('progress-current').textContent = currentDay;
                document.getElementById('progress-completed').textContent = completedDays;
                document.getElementById('progress-percentage').textContent = progressPercent + '%';
                document.getElementById('progress-finish').textContent = getEndDate();
                document.getElementById('progress-text').textContent = `${completedDays}/75 days`;
                document.getElementById('main-progress-fill').style.width = progressPercent + '%';
            }
            
        
            if (currentSection === 'calendar') {
                createCalendar();
            }
            
           
            if (currentSection === 'tasks') {
                const tasksContainer = document.getElementById('tasks-container');
                tasksContainer.innerHTML = '';

                tasks.forEach(task => {
                    const isCompleted = progress[currentDay]?.[task.id];
                    const taskElement = document.createElement('div');
                    taskElement.className = `task-item ${isCompleted ? 'completed' : ''}`;
                    taskElement.onclick = () => toggleTask(currentDay, task.id);

                    taskElement.innerHTML = `
                        <div class="task-checkbox">
                            ${isCompleted ? '✓' : ''}
                        </div>
                        <div style="font-size: 1.2rem;">${task.icon}</div>
                        <div class="task-label">${task.label}</div>
                    `;

                    tasksContainer.appendChild(taskElement);
                });

             
                const dayStatusElement = document.getElementById('day-status');
                if (isDayComplete(currentDay)) {
                    dayStatusElement.textContent = '✅ Day Complete!';
                    dayStatusElement.style.background = '#d5f4e6';
                    dayStatusElement.style.color = '#27ae60';
                } else {
                    dayStatusElement.textContent = '⏱️ In Progress';
                    dayStatusElement.style.background = '#fef9e7';
                    dayStatusElement.style.color = '#f39c12';
                }

                
                document.getElementById('prev-day').disabled = currentDay === 1;
                document.getElementById('next-day').disabled = currentDay === 75;
            }
        }

        function resetChallenge() {
            progress = {};
            currentDay = 1;
            startDate = new Date().toISOString().split('T')[0];
            updateUI();
        }

     
        document.getElementById('prev-day').addEventListener('click', () => {
            if (currentDay > 1) {
                currentDay--;
                updateUI();
            }
        });

        document.getElementById('next-day').addEventListener('click', () => {
            if (currentDay < 75) {
                currentDay++;
                updateUI();
            }
        });

        document.getElementById('reset-btn').addEventListener('click', () => {
            if (confirm('Are you sure you want to reset the entire challenge? This cannot be undone!')) {
                resetChallenge();
            }
        });

        document.getElementById('year').textContent = new Date().getFullYear();

        const express = require("express");
        const mongoose = require("mongoose");
        const bcrypt = require("bcryptjs");
        const jwt = require("jsonwebtoken");
        const cors = require("cors");

        const app = express();
        app.use(cors());
        app.use(express.json());

        mongoose.connect("mongodb://localhost:27017/fitnessApp", {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });

        const userSchema = new mongoose.Schema({
        email: String,
        password: String
        });

        const User = mongoose.model("User", userSchema);

     
        app.post("/signup", async (req, res) => {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.json({ message: "User created" });
        });

      
        app.post("/login", async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });
        res.json({ token });
        });

      
        app.get("/dashboard", (req, res) => {
        const token = req.headers["authorization"];
        if (!token) return res.status(403).json({ error: "No token provided" });

        jwt.verify(token, "SECRET_KEY", (err, decoded) => {
        if (err) return res.status(401).json({ error: "Invalid token" });
        res.json({ message: "Welcome to your dashboard!" });
    });
});

fetch("http://localhost:5000/dashboard", {
  headers: { "Authorization": localStorage.getItem("token") }
});


app.listen(5000, () => console.log("Server running on http://localhost:5000"));


        
        updateUI();

        const manifest = {
            name: "75 Hard Challenge Tracker",
            short_name: "75 Hard",
            description: "Track your 75 Hard Challenge progress",
            start_url: "/",
            display: "standalone",
            background_color: "#667eea",
            theme_color: "#667eea",
            icons: [
                {
                    src: "1.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: "1.png",
                    sizes: "512x512",
                    type: "image/png"
                }
            ]
        };
