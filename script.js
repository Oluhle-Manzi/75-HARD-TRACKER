  // Application state
        let currentDay = 1;
        let progress = {};
        let startDate = new Date().toISOString().split('T')[0];

        // Motivational quotes
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

        // Task definitions
        const tasks = [
            { id: 'workout1', label: '45min Workout #1', icon: '💪', color: '#3498db' },
            { id: 'workout2', label: '45min Outdoor Workout', icon: '🏃', color: '#2ecc71' },
            { id: 'diet', label: 'Follow Diet (No Cheats/Alcohol)', icon: '🎯', color: '#e74c3c' },
            { id: 'water', label: 'Drink 1 Gallon Water', icon: '💧', color: '#00bcd4' },
            { id: 'reading', label: 'Read 10 Pages Non-Fiction', icon: '📚', color: '#9b59b6' },
            { id: 'photo', label: 'Take Progress Photo', icon: '📸', color: '#f39c12' }
        ];

        // Helper functions
        function getCurrentQuote() {
            return motivationalQuotes[(currentDay - 1) % motivationalQuotes.length];
        }

        function isDayComplete(day) {
            return tasks.every(task => progress[day]?.[task.id]);
        }

        function getCompletedDays() {
            let completed = 0;
            for (let i = 1; i <= currentDay; i++) {
                if (isDayComplete(i)) completed++;
            }
            return completed;
        }

        function getEndDate() {
            const start = new Date(startDate);
            const end = new Date(start);
            end.setDate(start.getDate() + 74);
            return end.toLocaleDateString();
        }

        function updateUI() {
            // Update progress stats
            const completedDays = getCompletedDays();
            const progressPercent = Math.round((completedDays / 75) * 100);

            document.getElementById('current-day').textContent = currentDay;
            document.getElementById('completed-days').textContent = completedDays;
            document.getElementById('progress-percent').textContent = progressPercent + '%';
            document.getElementById('finish-date').textContent = getEndDate();
            document.getElementById('progress-text').textContent = `${completedDays}/75 days`;
            document.getElementById('progress-fill').style.width = progressPercent + '%';

            // Update quote
            document.getElementById('quote-day').textContent = `Day ${currentDay} Motivation`;
            document.getElementById('daily-quote').textContent = getCurrentQuote();

            // Update day title
            document.getElementById('day-title').textContent = `Day ${currentDay} Tasks`;

            // Update tasks
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
                    <div class="task-icon">${task.icon}</div>
                    <div class="task-label">${task.label}</div>
                `;

                tasksContainer.appendChild(taskElement);
            });

            // Update day status
            const dayStatusElement = document.getElementById('day-status');
            if (isDayComplete(currentDay)) {
                dayStatusElement.textContent = '✅ Day Complete!';
                dayStatusElement.className = 'day-status day-complete';
            } else {
                dayStatusElement.textContent = '⏱️ In Progress';
                dayStatusElement.className = 'day-status day-incomplete';
            }

            // Update navigation buttons
            document.getElementById('prev-day').disabled = currentDay === 1;
            document.getElementById('next-day').disabled = currentDay === 75;
        }

        function toggleTask(day, taskId) {
            if (!progress[day]) {
                progress[day] = {};
            }
            
            progress[day][taskId] = !progress[day][taskId];
            
            // Check if any previous days are now incomplete and auto-reset
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

        function resetChallenge() {
            progress = {};
            currentDay = 1;
            startDate = new Date().toISOString().split('T')[0];
            document.getElementById('start-date').value = startDate;
            updateUI();
        }

        // Event listeners
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

        document.getElementById('start-date').addEventListener('change', (e) => {
            startDate = e.target.value;
            updateUI();
        });

        // Initialize the app
        document.getElementById('start-date').value = startDate;
        updateUI();


        if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(function(reg) {
      console.log('Service Worker registered with scope:', reg.scope);
    }).catch(function(err) {
      console.error('Service Worker registration failed:', err);
    });
}
