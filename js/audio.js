// Array of audio files
const audioFiles = [
    'Guided Mindfulness Meditation.mp3',
    '10 Minute Guided Meditation for Positive Energy, Peace & Light.mp3',
    'Guided_Meditation_For_Reprogramming_Your_Mind.mp3',
    'Breathe_With_Me_â___Nervous_System_Regulation_&_Healing.mp3',
    'Good_Things_Are_Happening_to_Me___Morning_AffirmationNew_Year_Reflection_Guided_Meditation_Journaling_Transform_Your_Lifes.mp3',
    'ANYTHING_You_Wish_Will_Happen_-_A_Powerful_Message_from_Sadhguru.mp3',
    'Guided_Meditation_for_Anxiety_&_Stress.mp3',
    '10_Minute_Guided_Meditation_for_Positivity,_Gratitude_&_Joy_â_¨_Raise_Your_Vibration.mp3',
    'The_Powerful_Release_of_Letting_Go!__Guided_Meditation.mp3',
    'The_Powerful_Release_of_Letting_Go!__Guided_Meditation.mp3',
    'Sound_Bath_Guided_Meditation___Sound_Healing_&_Deep_Relaxation.mp3',
    'Guided_Meditation_for_Courage_&_Confidence_ð____15_min.mp3',
    '15_Minute_Meditation_for_Intuition,_Confidence,_Inner_Strength___30_Day_Meditation_Challenge.mp3',
    '5_Minute_Meditation_for_Relaxation_&_Positive_Energy___30_Day_Meditation_Challenge.mp3',
    'Powerful_Guided_Meditation_for_Healing_&_Letting_Go.mp3',
    'New_Year_Reflection_Guided_Meditation_Journaling_Transform_Your_Life.mp3'
];

// Track the current index
let currentIndex = 0;

// Get audio elements
const audioPlayer = document.getElementById('audio-player');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Function to load and play audio
function loadAndPlayAudio() {
    audioPlayer.src = "audio/" + audioFiles[currentIndex];
    audioPlayer.load();
    audioPlayer.play();
}

// Initial load
loadAndPlayAudio();

// Play next audio
nextButton.addEventListener('click', function () {
    if (currentIndex < audioFiles.length - 1) {
        currentIndex++;
        loadAndPlayAudio();
    }
    updateButtonState();
});

// Play previous audio
prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        loadAndPlayAudio();
    }
    updateButtonState();
});

// Disable buttons at start/end of playlist
function updateButtonState() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === audioFiles.length - 1;
}

// Ensure autoplay works after loading
audioPlayer.onloadeddata = function () {
    audioPlayer.play();
};

// Update button state initially
updateButtonState();
