import React from 'react';
import '../styles/Mind.css';

// --- Icon Component ---
const ChatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path></svg>;

// --- Reusable Sub-Components ---

const InfoSection = ({ title, description, imageUrl }) => (
    <div className="info-section">
        <div className="info-section-image" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
        <div className="info-section-text">
            <p className="info-section-title">{title}</p>
            <p className="info-section-description">{description}</p>
        </div>
    </div>
);

const FeatureCard = ({ title, description, imageUrl }) => (
    <div className="feature-card">
        <div className="feature-card-image" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
        <div className="feature-card-content">
            <div className="feature-card-text">
                <p className="feature-card-title">{title}</p>
                <p className="feature-card-description">{description}</p>
            </div>
            <button className="btn">Start Quiz</button>
        </div>
    </div>
);

// --- Main Mood Detection Content Component ---

export default function MoodDetectionContent() {

    const emotionalPlans = [
        { title: "Meditation", description: "Guided sessions to find peace and reduce stress.", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSpF5doGNx9R-tYbKFRK44YGqKYysTxKKjwK1A8IHuwgWOYTAPVjALbrtiz2e8tsrbUU_ygUHTiwuqS9b7fSuTFEaCkvtboP_7Tv6gM3Rgi1LiHObtJMPZ1VZZFlbaH1TRGiTKjU4UwLHnfQ36V0SCEr714f-BzseF9n2HXcU884r1v2SeS2VYJVdTKrvW0CQtf2ooI1J5-V4Zqchrb4VZBP2SIx2N4OENuZ0tE0fMc27pFEalaVxPlUmf8QoDDa2YgV8wUrEWYTc" },
        { title: "Breathing Exercises", description: "Regulate your emotions with simple breathing techniques.", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHWB9hgs-kc4qLAMgerUqjYti2sa7PPYW9CoDsdgl8D8OYlBodGSQVB2FZCShebVYwjW2Dq-t-a9oziWDAKvGx1OsnnNNmc7RZS8R_RNI9oGCbDGCTsMpdf2KAWLtyrhJXOHQrbifUDMt50QVUITZGNQ4iYcVd_72WYKbCzGrH7aYyqjH8S2u0bCl-4iGnXy3ifixl7L5r1Su0NtYpL0VzpnOB8R2xSqOZBZrssMz-n24gyG5ZmORiEHqCltYRZ-n_S5kinsEeZRY" },
        { title: "Gratitude Journaling", description: "Cultivate positivity by reflecting on the good in your life.", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMGegoY-gwZ-srMBjeV56sRNVONEXbtUGvbH-galfXFHQWeRtlZ0-gc3_lXlPZa_g259AVW7wG3Dcifq1Sudhnrjpo50BZQf2hmlMeo4ci-n1RQRXJaFjZF04d8CBGkHE2ulC8Pg5ewK_vGB4lcOSUodN1B__kRCQ-fr5AAMINR8Nm0EzctoUlPB_9Um-CIsUUo1qrMS0nCPAToDUnr5xdz2glAezC77lTiAKZXgBRmlzc8BlQZ7o_51rxSrj_LV2suKGhtFen3O4" },
        { title: "Mood-Based Sleep", description: "Improve sleep quality with routines designed for your state.", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYbjrqb6sHQPc6GuhL3zV10sF5OANLbOpo-8_fwvkyt1UaNCHUM2r0LX1BUf32gd1oePsipaQneb_MbazeKoKj6gXnOhfjv4OMjmN_npfJBF6xi1JhopzmoUuBy7Ul8c8eLVX6JNxRTlrfo876TE9eX3lQKVVNZT5h4i-ypmp4aOqfeHKpZfxi5wr8xW8Pyt22jpIZW1Q6HPDFPu-PjBb-H-ugGmS7hDMClLchvAZ8Qk-b2aLqLA2UfMWtVErLV1VPW6UaAs_LU7s" }
    ];

    const moodQuizzes = [
        { title: "Depression Screening (PHQ-9)", description: "A standard tool to help screen for signs of depression.", imageUrl: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=800&auto=format&fit=crop" },
        { title: "Childhood Trauma (ACE)", description: "Understand the potential impact of Adverse Childhood Experiences.", imageUrl: "https://images.unsplash.com/photo-1596701126233-9aef245d6249?q=80&w=800&auto=format&fit=crop" },
        { title: "Anxiety Test (GAD-7)", description: "Assess the severity of anxiety symptoms with this screening quiz.", imageUrl: "https://images.unsplash.com/photo-1585028599426-6534ce4e73f3?q=80&w=800&auto=format&fit=crop" },
        { title: "Stress & Burnout Assessment", description: "Identify your current stress levels and risk of burnout.", imageUrl: "https://images.unsplash.com/photo-1544733422-261e538c1a63?q=80&w=800&auto=format&fit=crop" },
    ];

    return (
        <div className="mood-content-container">
            <main className="main-content" style={{margin:"0px 70px"}}>
                <h1 className="main-title">Mood Detection</h1>

                <section>
                    <h2 className="section-title">Daily Emotional Insights</h2>
                    <InfoSection
                        title="Sentiment Analysis"
                        description="Understand your daily emotional trends with our sentiment analysis. Track your mood patterns and identify triggers to improve your emotional well-being."
                        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB4bWPyWrKgCVRAnvc9zMifM2YAGOUa8M_GAHO7ELB8bCc-C_Jsc9qYowZ63sFD1A0oePDenqY2REX8C1y29ThJ6FuTzI6IoW10EbqqNITnJJ-6OXF4FbUOay4GjRSGG4bGa3XNpFYp8I5f2QeUMDoKLPZq-Eoyn1wwIaGhOK_9y9h10LW33BfjVkY46Eq_VSG_uK6rvyFBwptfVLkMQbT_5qCBwsDwGpZ4YANG-HgN1Quc-vcrv2ZIQwbsHkdrTRpxY-LCUb0n6Qw"
                    />
                </section>

                <section>
                    <h2 className="section-title">Personalized Emotional Plans</h2>
                    <div className="feature-card-list">
                        {emotionalPlans.map((plan, index) => (
                            <FeatureCard key={index} {...plan} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="section-title">Mood Quizzes</h2>
                    <div className="feature-card-list">
                        {moodQuizzes.map((quiz, index) => (
                            <FeatureCard key={index} {...quiz} />
                        ))}
                    </div>
                    <p className="disclaimer-text">
                        <strong>Disclaimer:</strong> These quizzes are for informational purposes only and are not a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                </section>
                
                <section>
                    <h2 className="section-title">AI Support</h2>
                    <InfoSection
                        title="Interactive Chatbot"
                        description="Get personal guidance and support with our interactive chatbot, designed to help you navigate relationships and peer pressure."
                        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAXiRL_22rYIH3jeyNNpzYtWBikjApMiqpyWhsJhNsKR0W-RuM_etUrHo_idI-veyEA9LV2K4Umdo0_34QoTR5i0xuoe8aXGWyAfof0EX9jQGmKSHkmqwKjx37sr0Ve4CZSP5SAvsSASox9uEmwAN0CoNl9n3FNpUV0tqWWm690CYV5BWflE96FMLithM6PrsOa15CpeFfU3ZgSORhBP9bzHY3t9Q-eOluXbvWF65eMaEmTHlnSvz0jOvDGQ12wIPn42jMidGP3uH8"
                    />
                </section>
            </main>
            
            <button className="fab">
                <ChatIcon />
            </button>
        </div>
    );
}