// Step 1: Store 150 quizzes
const quizData = [
    // Add 150 quiz objects here
    // Example:
    {
        question: "What is a common symptom of depression?",
        options: ["Increased energy", "Persistent sadness", "Overconfidence", "Excessive happiness"],
        correctAnswer: "Persistent sadness"
    },
    {
        question: "Which of the following is a self-care activity?",
        options: ["Ignoring your feelings", "Meditation", "Overworking", "Skipping meals"],
        correctAnswer: "Meditation"
    },
    {
        question: "What does 'self-compassion' mean?",
        options: ["Being harsh on yourself", "Treating yourself with kindness", "Ignoring your needs", "Comparing yourself to others"],
        correctAnswer: "Treating yourself with kindness"
    },
    {
        question: "How can you help someone struggling with mental health?",
        options: ["Judge them", "Listen without judgment", "Avoid them", "Tell them to 'get over it'"],
        correctAnswer: "Listen without judgment"
    },
    {
        question: "What is a common symptom of anxiety?",
        options: ["Calmness", "Excessive worry", "Lack of emotion", "Overconfidence"],
        correctAnswer: "Excessive worry"
    },
    {
        question: "Which activity can help reduce stress?",
        options: ["Avoiding sleep", "Regular exercise", "Binge eating", "Ignoring problems"],
        correctAnswer: "Regular exercise"
    },
    {
        question: "What is mindfulness?",
        options: ["Living in the past", "Being present in the moment", "Ignoring emotions", "Always planning ahead"],
        correctAnswer: "Being present in the moment"
    },
    {
        question: "Which of these is a healthy coping strategy?",
        options: ["Bottling up emotions", "Talking to a friend", "Avoiding social interactions", "Self-isolation"],
        correctAnswer: "Talking to a friend"
    },
    {
        question: "What is a potential effect of chronic stress?",
        options: ["Improved memory", "Increased risk of heart disease", "Stronger immune system", "More energy"],
        correctAnswer: "Increased risk of heart disease"
    },
    {
        question: "What is a common symptom of burnout?",
        options: ["Feeling refreshed", "Chronic fatigue", "Increased motivation", "Excitement for work"],
        correctAnswer: "Chronic fatigue"
    },
    {
        question: "Which of the following can improve mental health?",
        options: ["Sleeping less than 4 hours", "Engaging in hobbies", "Constantly working", "Avoiding physical activity"],
        correctAnswer: "Engaging in hobbies"
    },
    {
        question: "What is one way to practice gratitude?",
        options: ["Focusing on what you lack", "Writing a gratitude journal", "Comparing yourself to others", "Ignoring positive experiences"],
        "correctAnswer": "Writing a gratitude journal"
    },
    {
        question: "How does deep breathing help mental health?",
        options: ["Increases stress", "Promotes relaxation", "Causes anxiety", "Prevents sleep"],
        correctAnswer: "Promotes relaxation"
    },
    {
        question: "What is an example of emotional self-care?",
        options: ["Suppressing emotions", "Acknowledging feelings", "Ignoring problems", "Criticizing yourself"],
        correctAnswer: "Acknowledging feelings"
    },
    {
        question: "What is an example of emotional self-care?",
        options: ["Suppressing emotions", "Acknowledging feelings", "Ignoring problems", "Criticizing yourself"],
        correctAnswer: "Acknowledging feelings"
    },
    {
        question: "Which activity can help reduce stress?",
        options: ["Overworking", "Mindfulness meditation", "Avoiding sleep", "Skipping meals"],
        correctAnswer: "Mindfulness meditation"
    },
    {
        question: "What is a common symptom of anxiety?",
        options: ["Excessive happiness", "Rapid heartbeat", "Increased energy", "Improved focus"],
        correctAnswer: "Rapid heartbeat"
    },
    {
        question: "What does 'self-compassion' mean?",
        options: ["Being harsh on yourself", "Treating yourself with kindness", "Ignoring your needs", "Comparing yourself to others"],
        correctAnswer: "Treating yourself with kindness"
    },
    {
        question: "How can you support someone with mental health issues?",
        options: ["Judge them", "Listen without judgment", "Avoid them", "Tell them to 'get over it'"],
        correctAnswer: "Listen without judgment"
    },
    {
        question: "What is a healthy way to cope with stress?",
        options: ["Binge eating", "Exercising regularly", "Ignoring the problem", "Isolating yourself"],
        correctAnswer: "Exercising regularly"
    },
    {
        question: "What is mindfulness?",
        options: ["Ignoring your feelings", "Focusing on the present moment", "Overthinking the future", "Avoiding relaxation"],
        correctAnswer: "Focusing on the present moment"
    },
    {
        question: "What is a sign of burnout?",
        options: ["High energy levels", "Feeling exhausted all the time", "Increased motivation", "Improved focus"],
        correctAnswer: "Feeling exhausted all the time"
    },
    {
        question: "What is a common symptom of depression?",
        options: ["Increased energy", "Persistent sadness", "Overconfidence", "Excessive happiness"],
        correctAnswer: "Persistent sadness"
    },
    {
        question: "What is an example of a self-care activity?",
        options: ["Ignoring your feelings", "Meditation", "Overworking", "Skipping meals"],
        correctAnswer: "Meditation"
    },
    {
        question: "What is a healthy way to express anger?",
        options: ["Yelling at others", "Suppressing your feelings", "Using 'I' statements", "Blaming others"],
        correctAnswer: "Using 'I' statements"
    },
    {
        question: "What is a common cause of stress?",
        options: ["Healthy relationships", "Work pressure", "Regular exercise", "Adequate sleep"],
        correctAnswer: "Work pressure"
    },
    {
        question: "What is a benefit of journaling?",
        options: ["Increased stress", "Improved emotional clarity", "Ignoring your feelings", "Avoiding self-reflection"],
        correctAnswer: "Improved emotional clarity"
    },
    {
        question: "What is a sign of good mental health?",
        options: ["Feeling overwhelmed all the time", "Having a balanced life", "Ignoring your emotions", "Avoiding social interactions"],
        correctAnswer: "Having a balanced life"
    },
    {
        question: "What is a healthy sleep habit?",
        options: ["Staying up late", "Getting 7-9 hours of sleep", "Skipping sleep", "Using phones before bed"],
        correctAnswer: "Getting 7-9 hours of sleep"
    },
    {
        question: "What is a way to practice gratitude?",
        options: ["Focusing on negative thoughts", "Writing down things you're thankful for", "Ignoring positive experiences", "Comparing yourself to others"],
        correctAnswer: "Writing down things you're thankful for"
    },
    {
        question: "What is a common symptom of PTSD?",
        options: ["Feeling relaxed", "Flashbacks", "Increased energy", "Improved focus"],
        correctAnswer: "Flashbacks"
    },
    {
        question: "What is a healthy way to handle failure?",
        options: ["Blaming others", "Learning from the experience", "Giving up", "Ignoring the situation"],
        correctAnswer: "Learning from the experience"
    },
    {
        question: "What is a sign of emotional exhaustion?",
        options: ["High motivation", "Feeling drained", "Increased energy", "Improved focus"],
        correctAnswer: "Feeling drained"
    },
    {
        question: "What is a way to improve self-esteem?",
        options: ["Criticizing yourself", "Practicing self-compassion", "Ignoring your achievements", "Comparing yourself to others"],
        correctAnswer: "Practicing self-compassion"
    },
    {
        question: "What is a healthy way to manage time?",
        options: ["Procrastinating", "Setting priorities", "Ignoring deadlines", "Overcommitting"],
        correctAnswer: "Setting priorities"
    },
    {
        question: "What is a common symptom of social anxiety?",
        options: ["Enjoying social events", "Fear of social situations", "Overconfidence", "Excessive happiness"],
        correctAnswer: "Fear of social situations"
    },
    {
        question: "What is a way to practice self-care?",
        options: ["Ignoring your needs", "Taking breaks", "Overworking", "Skipping meals"],
        correctAnswer: "Taking breaks"
    },
    {
        question: "What is a sign of healthy boundaries?",
        options: ["Saying yes to everything", "Respecting your limits", "Ignoring your feelings", "Overcommitting"],
        correctAnswer: "Respecting your limits"
    },
    {
        question: "What is a way to reduce anxiety?",
        options: ["Avoiding deep breathing", "Practicing mindfulness", "Overthinking", "Ignoring your feelings"],
        correctAnswer: "Practicing mindfulness"
    },
    {
        question: "What is a common symptom of ADHD?",
        options: ["Hyperfocus", "Lack of energy", "Improved focus", "Feeling relaxed"],
        correctAnswer: "Hyperfocus"
    },
    {
        question: "What is a healthy way to handle criticism?",
        options: ["Taking it personally", "Learning from feedback", "Ignoring it", "Reacting defensively"],
        correctAnswer: "Learning from feedback"
    },
    {
        question: "What is a way to improve focus?",
        options: ["Multitasking", "Practicing mindfulness", "Overworking", "Skipping breaks"],
        correctAnswer: "Practicing mindfulness"
    },
    {
        question: "What is a sign of emotional intelligence?",
        options: ["Ignoring others' feelings", "Understanding your emotions", "Reacting impulsively", "Avoiding self-reflection"],
        correctAnswer: "Understanding your emotions"
    },
    {
        question: "What is a way to build resilience?",
        options: ["Avoiding challenges", "Learning from setbacks", "Giving up easily", "Ignoring problems"],
        correctAnswer: "Learning from setbacks"
    },
    {
        question: "What is a healthy way to handle negative thoughts?",
        options: ["Ignoring them", "Challenging and reframing them", "Overthinking", "Suppressing them"],
        correctAnswer: "Challenging and reframing them"
    },
    {
        question: "What is a way to practice self-kindness?",
        options: ["Criticizing yourself", "Treating yourself like a friend", "Ignoring your needs", "Comparing yourself to others"],
        correctAnswer: "Treating yourself like a friend"
    },
    {
        question: "What is a common symptom of chronic stress?",
        options: ["Feeling relaxed", "Headaches and fatigue", "Increased energy", "Improved focus"],
        correctAnswer: "Headaches and fatigue"
    },
    {
        question: "What is a way to improve emotional awareness?",
        options: ["Ignoring your feelings", "Journaling about your emotions", "Suppressing emotions", "Avoiding self-reflection"],
        correctAnswer: "Journaling about your emotions"
    },
    {
        question: "What is a healthy way to handle disappointment?",
        options: ["Blaming others", "Acknowledging your feelings", "Ignoring the situation", "Reacting impulsively"],
        correctAnswer: "Acknowledging your feelings"
    },
    {
        question: "What is a sign of healthy self-care?",
        options: ["Ignoring your needs", "Prioritizing your well-being", "Overworking", "Skipping meals"],
        correctAnswer: "Prioritizing your well-being"
    },
    {
        question: "What is a way to reduce feelings of loneliness?",
        options: ["Isolating yourself", "Connecting with others", "Ignoring your emotions", "Avoiding social interactions"],
        correctAnswer: "Connecting with others"
    },
    {
        question: "What is a common symptom of burnout?",
        options: ["High motivation", "Feeling emotionally drained", "Increased energy", "Improved focus"],
        correctAnswer: "Feeling emotionally drained"
    },
    {
        question: "What is a healthy way to handle envy?",
        options: ["Acting on it", "Reflecting on your feelings", "Ignoring it", "Blaming others"],
        correctAnswer: "Reflecting on your feelings"
    },
    {
        question: "What is a way to practice self-acceptance?",
        options: ["Criticizing yourself", "Embracing your strengths and weaknesses", "Ignoring your achievements", "Comparing yourself to others"],
        correctAnswer: "Embracing your strengths and weaknesses"
    },
    {
        question: "What is a sign of healthy emotional expression?",
        options: ["Suppressing emotions", "Communicating your feelings clearly", "Ignoring your feelings", "Reacting impulsively"],
        correctAnswer: "Communicating your feelings clearly"
    },
    {
        question: "What is a way to improve mental clarity?",
        options: ["Overthinking", "Practicing mindfulness", "Ignoring your thoughts", "Avoiding self-reflection"],
        correctAnswer: "Practicing mindfulness"
    },
    {
        question: "What is a common symptom of imposter syndrome?",
        options: ["Feeling confident", "Doubting your abilities", "Increased energy", "Improved focus"],
        correctAnswer: "Doubting your abilities"
    },
    {
        question: "What is a healthy way to handle rejection?",
        options: ["Taking it personally", "Learning from the experience", "Blaming others", "Avoiding future opportunities"],
        correctAnswer: "Learning from the experience"
    },
    {
        question: "What is a way to practice gratitude daily?",
        options: ["Focusing on negative thoughts", "Writing down three things you're thankful for", "Ignoring positive experiences", "Comparing yourself to others"],
        correctAnswer: "Writing down three things you're thankful for"
    },
    {
        question: "What is a sign of healthy self-esteem?",
        options: ["Constantly seeking validation", "Accepting yourself as you are", "Ignoring your achievements", "Comparing yourself to others"],
        correctAnswer: "Accepting yourself as you are"
    },
    {
        question: "What is a way to reduce procrastination?",
        options: ["Avoiding tasks", "Breaking tasks into smaller steps", "Overcommitting", "Ignoring deadlines"],
        correctAnswer: "Breaking tasks into smaller steps"
    },
    {
        question: "What is a common symptom of panic disorder?",
        options: ["Feeling relaxed", "Sudden panic attacks", "Increased energy", "Improved focus"],
        correctAnswer: "Sudden panic attacks"
    },
    {
        question: "What is a healthy way to handle jealousy?",
        options: ["Acting on it", "Reflecting on your feelings", "Ignoring it", "Blaming others"],
        correctAnswer: "Reflecting on your feelings"
    },
    {
        question: "What is a way to improve emotional resilience?",
        options: ["Avoiding challenges", "Learning from setbacks", "Giving up easily", "Ignoring problems"],
        correctAnswer: "Learning from setbacks"
    },
    {
        question: "What is a sign of healthy boundaries in relationships?",
        options: ["Saying yes to everything", "Respecting your limits", "Ignoring your feelings", "Overcommitting"],
        correctAnswer: "Respecting your limits"
    },
    {
        question: "What is a way to practice mindfulness?",
        options: ["Multitasking", "Focusing on the present moment", "Overthinking", "Ignoring your feelings"],
        correctAnswer: "Focusing on the present moment"
    },
    {
        question: "What is a common symptom of seasonal affective disorder (SAD)?",
        options: ["Feeling energized", "Low mood during specific seasons", "Improved focus", "Increased motivation"],
        correctAnswer: "Low mood during specific seasons"
    },
    {
        question: "What is a healthy way to handle criticism at work?",
        options: ["Taking it personally", "Learning from feedback", "Ignoring it", "Reacting defensively"],
        correctAnswer: "Learning from feedback"
    },
    {
        question: "What is a way to improve focus and productivity?",
        options: ["Multitasking", "Taking regular breaks", "Overworking", "Skipping meals"],
        correctAnswer: "Taking regular breaks"
    },
    {
        question: "What is a sign of emotional intelligence?",
        options: ["Ignoring others' feelings", "Understanding your emotions", "Reacting impulsively", "Avoiding self-reflection"],
        correctAnswer: "Understanding your emotions"
    },
    {
        question: "What is a way to build resilience?",
        options: ["Avoiding challenges", "Learning from setbacks", "Giving up easily", "Ignoring problems"],
        correctAnswer: "Learning from setbacks"
    },
    {
        question: "What is a healthy way to handle stress at work?",
        options: ["Overworking", "Taking breaks", "Ignoring the problem", "Blaming others"],
        correctAnswer: "Taking breaks"
    },
    {
        question: "What is a common symptom of generalized anxiety disorder (GAD)?",
        options: ["Feeling relaxed", "Excessive worry", "Increased energy", "Improved focus"],
        correctAnswer: "Excessive worry"
    },
    {
        question: "What is a way to practice self-compassion?",
        options: ["Being harsh on yourself", "Treating yourself with kindness", "Ignoring your needs", "Comparing yourself to others"],
        correctAnswer: "Treating yourself with kindness"
    },
    {
        question: "What is a healthy way to handle failure?",
        options: ["Blaming others", "Learning from the experience", "Giving up", "Ignoring the situation"],
        correctAnswer: "Learning from the experience"
    },
    {
        question: "What is a sign of emotional exhaustion?",
        options: ["High motivation", "Feeling drained", "Increased energy", "Improved focus"],
        correctAnswer: "Feeling drained"
    },
    {
        question: "What is a way to improve self-esteem?",
        options: ["Criticizing yourself", "Practicing self-compassion", "Ignoring your achievements", "Comparing yourself to others"],
        correctAnswer: "Practicing self-compassion"
    },
    {
        question: "What is a healthy way to manage time?",
        options: ["Procrastinating", "Setting priorities", "Ignoring deadlines", "Overcommitting"],
        correctAnswer: "Setting priorities"
    },
    {
        question: "What is a common symptom of social anxiety?",
        options: ["Enjoying social events", "Fear of social situations", "Overconfidence", "Excessive happiness"],
        correctAnswer: "Fear of social situations"
    },
    {
        question: "What is a way to practice self-care?",
        options: ["Ignoring your needs", "Taking breaks", "Overworking", "Skipping meals"],
        correctAnswer: "Taking breaks"
    },
    {
        question: "What is a sign of healthy boundaries?",
        options: ["Saying yes to everything", "Respecting your limits", "Ignoring your feelings", "Overcommitting"],
        correctAnswer: "Respecting your limits"
    },
    {
        question: "What is a way to reduce anxiety?",
        options: ["Avoiding deep breathing", "Practicing mindfulness", "Overthinking", "Ignoring your feelings"],
        correctAnswer: "Practicing mindfulness"
    },
    {
        question: "What is a common symptom of ADHD?",
        options: ["Hyperfocus", "Lack of energy", "Improved focus", "Feeling relaxed"],
        correctAnswer: "Hyperfocus"
    },
    {
        question: "What is a healthy way to handle criticism?",
        options: ["Taking it personally", "Learning from feedback", "Ignoring it", "Reacting defensively"],
        correctAnswer: "Learning from feedback"
    },
    {
        question: "What is a way to improve focus?",
        options: ["Multitasking", "Practicing mindfulness", "Overworking", "Skipping breaks"],
        correctAnswer: "Practicing mindfulness"
    },
    // Add 146 more quizzes...
];

// Step 2: Randomly select 20 quizzes
function getRandomQuizzes(quizzes, count) {
    const shuffled = quizzes.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, count); // Select the first `count` quizzes
}

const selectedQuizzes = getRandomQuizzes(quizData, 20);

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');
const progressBar = document.getElementById('progress');

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function loadQuestion() {
    const currentQuestion = selectedQuizzes[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    // Shuffle the options before displaying them
    const shuffledOptions = shuffleArray(currentQuestion.options);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectAnswer(option));
        optionsContainer.appendChild(button);
    });

    // Disable the "Next" button initially
    nextButton.disabled = true;
    // Update progress bar
    progressBar.style.width = `${((currentQuestionIndex + 1) / selectedQuizzes.length) * 100}%`;
}

function selectAnswer(selectedOption) {
    const currentQuestion = selectedQuizzes[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    // Disable all options after selection
    const optionButtons = document.querySelectorAll('.option');
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.correctAnswer) {
            button.style.backgroundColor = '#4caf50'; // Green for correct answer
        } else if (button.textContent === selectedOption) {
            button.style.backgroundColor = '#f44336'; // Red for incorrect answer
        }
    });

    nextButton.style.display = 'block';
    // Enable the "Next" button after selecting an answer
    nextButton.disabled = false;
}

const music = document.getElementById("background-music");
const playButton = document.getElementById("play-music");
const pauseButton = document.getElementById("pause-music");
const musicSection = document.getElementById("music-section"); // Music section
const celebrationSection = document.getElementById("celebration");

function showResult() {
    questionElement.textContent = '';
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
    resultContainer.classList.remove('hidden');
    resultText.textContent = `Congratulation!\nYou scored ${score} out of ${selectedQuizzes.length}!`;
    // Hide the music section when quiz is completed
    musicSection.style.display = "none";

    // Stop and reset the music when quiz is completed
    music.pause();
    music.currentTime = 0;
    // Show the celebration animation after a short delay
    setTimeout(showCelebration, 1000); // Show animation after 1 second
}

// Function to show the celebration animation when quiz is completed
function showCelebration() {
    celebrationSection.classList.remove("hidden"); // Show celebration animation
    // resultContainer.classList.add("hidden"); // Hide result section

}

// Function to restart the quiz and show the music section again
restartButton.addEventListener("click", function() {
    resultContainer.classList.add("hidden"); // Hide the result section

    // Show the music section again when restarting
    musicSection.style.display = "block";

    // Reset any music state if needed (optional)
    const toggleMusicCheckbox = document.getElementById("toggle-music");
    toggleMusicCheckbox.checked = false; // Uncheck the checkbox when restarting
});

// Play button functionality
playButton.addEventListener("click", () => {
    music.play();
    playButton.style.display = "none"; // Hide play button
    pauseButton.style.display = "inline-block"; // Show pause button
});

// Pause button functionality
pauseButton.addEventListener("click", () => {
    music.pause();
    playButton.style.display = "inline-block"; // Show play button
    pauseButton.style.display = "none"; // Hide pause button
});

function restartQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    progressBar.style.width = '0%';

    // Select new random quizzes
    const newSelectedQuizzes = getRandomQuizzes(quizData, 20);
    selectedQuizzes.length = 0; // Clear the existing quizzes
    selectedQuizzes.push(...newSelectedQuizzes); // Add new quizzes

    // Load the first question
    loadQuestion();
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuizzes.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', restartQuiz);

// Load the first question when the page loads
loadQuestion();