const nextButton = document.getElementById("next-button");
const storyContainer = document.getElementById("story");
const titleContainer = document.getElementById("story-title");

const stories = [
    { name: "John Doe", story: "I struggled with anxiety for years without even realizing it. I always thought it was normal to feel nervous or overwhelmed, but it wasn’t until I couldn’t breathe properly during a panic attack that I knew something was wrong. I started seeing a therapist, and it completely changed my life. Therapy, along with regular meditation, has helped me regain control of my life, and I’m no longer afraid to seek help when needed." },
    { name: "Jane Smith", story: "For most of my life, I kept my struggles with depression to myself. I feared judgment and didn't want to burden anyone. But after reaching rock bottom, I realized that I couldn't do it alone anymore. Opening up to a friend about my feelings was the first step toward healing. I started therapy and began taking small steps toward recovery. It's been a journey, but I’m stronger than ever now." },
    { name: "Michael Johnson", story: "Living with OCD has been a challenge, but it also taught me resilience. I didn’t fully understand what was happening until I sought professional help. Cognitive Behavioral Therapy (CBT) was a game-changer. I learned coping mechanisms that help me navigate my thoughts, and although I still have tough days, I now feel empowered to manage my condition." },
    { name: "Emily Clark", story: "I never thought I’d struggle with post-traumatic stress disorder (PTSD), but after going through a traumatic event, my life was turned upside down. I felt constantly anxious and on edge. Slowly, with the help of a support group and a therapist who specialized in trauma, I learned to process my feelings. It’s not easy, but I now understand that healing is a process, and it's okay to ask for help." },
    { name: "Sophia Williams", story: "During the pandemic, I found myself feeling isolated and overwhelmed by everything happening in the world. I realized that I wasn’t taking care of myself emotionally. I reached out for professional help, and it made all the difference. Talking to someone who understood me and my struggles helped me regain my sense of self-worth and taught me how to cope with the challenges of life." },
    { name: "Lucas Walker", story: "As a teenager, I struggled with body image issues and low self-esteem. I was constantly comparing myself to others and felt inadequate. It wasn’t until I started attending group therapy that I learned to appreciate my body and began to understand the importance of self-love. It's been an ongoing process, but I’m finally learning to be kinder to myself." },
    { name: "Lily Green", story: "After losing a loved one, I struggled with grief that felt unmanageable. I couldn’t find peace, and I felt like my world was falling apart. Through grief counseling and connecting with others who had experienced similar losses, I learned how to cope. It's a journey I continue, but I know that it’s okay to grieve and that healing takes time." },
    { name: "David Miller", story: "Dealing with substance abuse was one of the toughest things I've ever faced. I didn't realize how much it was impacting my life until it started affecting my relationships and my work. Attending a rehabilitation program was a life-changer. I’ve been sober for over a year now, and while it’s still challenging at times, I feel more in control of my life and my choices." },
    { name: "Olivia Brown", story: "I’ve always been someone who likes to help others, but I never realized how much I was neglecting my own mental health until I burnt out. I was constantly putting everyone else’s needs before my own. Through therapy and mindfulness practices, I’ve learned how to balance helping others while also prioritizing myself. Self-care is not selfish, it’s necessary." },
    { name: "James Carter", story: "I struggled with social anxiety for years, avoiding social situations because I feared being judged. But through gradual exposure therapy, I’ve learned to push myself outside of my comfort zone. It hasn't been easy, but I’m now able to enjoy social interactions and no longer feel overwhelmed in public settings." },
    { name: "Ava Roberts", story: "I dealt with severe burnout in my early twenties due to working long hours without taking breaks. I ignored the warning signs until I hit a breaking point. A friend encouraged me to take some time off, and I started journaling and practicing mindfulness. That period of self-reflection helped me realize the importance of rest and balance in my life." },
    { name: "Ethan Adams", story: "I was diagnosed with bipolar disorder in my late twenties. At first, it was hard to accept, but with the right treatment plan and support system, I began to understand my condition. Medication, therapy, and lifestyle changes have helped me manage my symptoms and lead a fulfilling life." },
    { name: "Isabella Taylor", story: "After facing a divorce, I found myself feeling lost and disconnected from who I was. It wasn’t until I sought therapy that I realized how much my self-worth was tied to my relationships. Rebuilding my confidence and understanding that I am enough on my own has been the most empowering journey." },
    { name: "Mason Harris", story: "Having ADHD has always made it difficult to focus, but I didn’t seek help until I reached adulthood. After starting therapy and learning coping mechanisms, I began to see progress. I now understand how to manage my symptoms and have found ways to thrive in my personal and professional life." },
    { name: "Chloe Scott", story: "I never considered myself a perfectionist, but after struggling with constant stress in my career, I realized I had high expectations for myself. It was only after seeking help that I learned to set healthy boundaries and redefine what success meant to me. Now, I celebrate progress, not perfection." },
    { name: "Liam King", story: "Growing up, I didn't talk about my feelings much. It wasn’t until I entered adulthood that I started to realize the importance of emotional expression. Therapy has helped me open up, both to myself and to others. I feel more connected to my emotions and able to communicate my needs clearly." },
    { name: "Amelia Garcia", story: "I spent years in an unhealthy relationship and didn’t realize how emotionally drained I was until I broke up. Therapy helped me process the trauma and rediscover who I was outside of that relationship. Now, I prioritize my own well-being and recognize the importance of boundaries." },
    { name: "Oliver Martinez", story: "After experiencing a sudden job loss, I fell into a depression. It felt like the end of the world. But after seeking therapy, I learned to reframe my perspective. I realized that change could be an opportunity for growth, and now I’m exploring new career paths with a much healthier mindset." },
    { name: "Grace Rodriguez", story: "I’ve always been a people-pleaser, but after years of putting others before myself, I realized I was losing who I truly was. Therapy helped me realize the importance of saying no and focusing on what makes me happy. Now, I prioritize my own needs and practice self-compassion." },
    { name: "Evelyn Phillips", story: "After years of feeling like I had no control over my emotions, I decided to seek therapy. Learning to manage my anxiety and stress has been one of the most empowering things I've ever done. I now approach challenges with a clearer mind and more confidence." },
    { name: "Jack Wilson", story: "I’ve been in recovery for substance use disorder for over three years. When I first sought help, I wasn’t sure if I could make it through. But with the support of a rehab center and therapy, I’ve built a life I’m proud of. The journey hasn’t been easy, but it’s been worth it." },
    { name: "Scarlett Harris", story: "For many years, I struggled with imposter syndrome at work. I always doubted myself and felt like I didn’t belong. It wasn’t until I sought counseling that I learned how to recognize my strengths and build my confidence. Now, I feel empowered to take on new challenges." },
    { name: "Sebastian Adams", story: "Growing up with a family that didn’t talk about mental health made it difficult for me to understand my emotions. When I went to college, I faced extreme stress and realized I needed help. Therapy helped me process everything, and now I know how to manage stress effectively." },
    { name: "Zoe Carter", story: "I experienced extreme burnout from my career and felt like I was drowning. Through therapy, I learned the importance of balance and setting healthy boundaries. I’m now in a much better mental space and have found new ways to deal with stress." },
    { name: "Liam Reed", story: "After years of struggling with grief from the loss of a family member, I decided to seek professional help. Therapy allowed me to process my grief, and I’ve since learned to cope with the sadness in a healthier way. It’s a difficult process, but I’m moving forward." },
    { name: "Mia Evans", story: "I spent many years struggling with low self-esteem. I often felt like I wasn’t enough. Therapy helped me understand the roots of my feelings, and I’ve slowly started to rebuild my self-worth. I now celebrate my achievements and no longer let self-doubt hold me back." },
    { name: "Samuel Johnson", story: "Dealing with anxiety and panic attacks was something I never thought I could overcome. With the help of therapy and medication, I’ve learned how to manage my anxiety and prevent panic attacks from controlling my life." },
    { name: "Chloe Harris", story: "After years of battling depression, I decided to seek help. Therapy gave me the tools I needed to understand and manage my emotions. It's been a difficult journey, but I now feel stronger and more confident in myself." },
    { name: "Isaac Foster", story: "I struggled with anger issues for much of my life. It wasn’t until I sought therapy that I understood how deep-rooted my anger was. With the help of a therapist, I’ve learned to manage my emotions and communicate better with those around me." },
    { name: "Madeline Wood", story: "After years of feeling disconnected from my emotions, I sought help. Therapy helped me explore the root causes of my emotional numbness. I’m now learning to reconnect with myself and experience life more fully." },
    { name: "Caleb Green", story: "I struggled with addiction for years and felt lost. Therapy and rehabilitation gave me a chance to change my life. I’ve been sober for over a year now, and I’m rebuilding relationships that were once broken." },
    { name: "Nora Wilson", story: "When I went through a traumatic event, I didn’t know how to cope. Therapy helped me process what happened, and now I’m on a path toward healing. It’s not easy, but I’m learning that I’m stronger than I thought." },
    { name: "Eva Scott", story: "I’ve spent years battling feelings of unworthiness. Therapy helped me understand that my self-worth isn’t dependent on others’ opinions. I’m slowly learning to love and accept myself." },
    { name: "Wyatt Brown", story: "I went through a difficult breakup that left me heartbroken. Through therapy, I’ve learned how to heal and move on. I’ve discovered that I’m capable of finding happiness within myself, and I’m now ready for a new chapter." },
    { name: "Avery Miller", story: "After years of suppressing my emotions, I finally reached out for help. Therapy has helped me express my feelings and live a more authentic life. I’m learning to embrace my emotions and be true to myself." },
    { name: "Harper Clark", story: "I struggled with obsessive thoughts for most of my life, but it wasn’t until I sought therapy that I understood the impact it had on my mental well-being. Cognitive Behavioral Therapy (CBT) has been incredibly helpful in managing my OCD." },
    { name: "Jordan Allen", story: "I faced depression and loneliness for years without realizing how deeply it was affecting me. Once I began therapy, I learned to recognize the signs of depression and started building a support system. Today, I’m in a much healthier place." },
    { name: "Ruby Davis", story: "Living with chronic illness often leaves me feeling physically and emotionally drained. Therapy has helped me find peace and acceptance in the midst of my illness. I’ve learned how to manage my emotions, and that has made all the difference." }
];

let shuffledStories = [];
let currentStoryIndex = 0;

// Shuffle the stories array using Fisher-Yates shuffle algorithm
function shuffleStories() {
    shuffledStories = [...stories]; // Copy original array to avoid mutating it directly
    for (let i = shuffledStories.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledStories[i], shuffledStories[j]] = [shuffledStories[j], shuffledStories[i]]; // Swap elements
    }
}

// Function to show the current story
function showStory(index) {
    const currentStory = shuffledStories[index];
    titleContainer.textContent = currentStory.name; // Display the name of the person
    storyContainer.textContent = currentStory.story; // Display the story
}

// Event listener for Next button
nextButton.addEventListener("click", () => {
    currentStoryIndex++;
    if (currentStoryIndex >= shuffledStories.length) {
        currentStoryIndex = 0; // Reset to the first story after reaching the end
    }
    showStory(currentStoryIndex);
});

// Initialize by shuffling and showing the first story
shuffleStories();
showStory(currentStoryIndex);
