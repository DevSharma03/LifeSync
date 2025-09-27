import React from 'react';
import '../styles/Health.css';

// --- Icon Component ---
const RobotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path></svg>;

// --- Reusable Sub-Components ---

const StatCard = ({ label, value }) => (
  <div className="stat-card">
    <p className="stat-label">{label}</p>
    <p className="stat-value">{value}</p>
  </div>
);

const ProgressBar = ({ label, value, unit, percentage }) => (
  <div className="progress-bar-container">
    <div className="progress-bar-header">
      <p className="progress-bar-label">{label}</p>
    </div>
    <div className="progress-bar-background">
      <div className="progress-bar-foreground" style={{ width: `${percentage}%` }}></div>
    </div>
    <p className="progress-bar-value">{value} {unit}</p>
  </div>
);

const InfoCard = ({ title, description, imageUrl }) => (
  <div className="info-card">
    <div className="info-card-text">
      <p className="info-card-title">{title}</p>
      <p className="info-card-description">{description}</p>
    </div>
    <div className="info-card-image" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
  </div>
);

const TrendChart = ({ title, value, timePeriod, change, changeType }) => (
    <div className="trend-chart-card">
        <p className="trend-chart-title">{title}</p>
        <p className="trend-chart-value">{value}</p>
        <div className="trend-chart-period">
            <p>{timePeriod}</p>
            <p className={`trend-chart-change ${changeType}`}>{change}</p>
        </div>
        <div className="chart-area">
            <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_1131_5935)"></path>
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#637588" strokeWidth="3" strokeLinecap="round"></path>
                <defs><linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f2f4"></stop><stop offset="1" stopColor="#f0f2f4" stopOpacity="0"></stop></linearGradient></defs>
            </svg>
            <div className="chart-labels">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => <p key={day}>{day}</p>)}
            </div>
        </div>
    </div>
);

// --- Main Health Content Component ---

export default function Health() {
  return (
    <div className="health-content-container">
      <main className="main-content" style={{margin:"0px 50px"}}>
        <h1 className="main-title">My Health & Wellness</h1>

        <button className="fab">
          <RobotIcon />
        </button>

        <section>
          <h2 className="section-title">Activity & Movement</h2>
          <div className="stat-card-grid">
            <StatCard label="Steps" value="8,250" />
            <StatCard label="Calories Burned" value="350" />
            <StatCard label="Distance" value="4.2 km" />
          </div>
          <ProgressBar label="Daily Activity Goal" value="7,500" unit="steps" percentage={75} />
        </section>
        
        <section>
          <h2 className="section-title">Sedentary Alerts</h2>
          <InfoCard 
            title="Stretch Reminder" 
            description="You've been inactive for 2+ hours. Take a quick break to stretch and refresh." 
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDooJubGZKA7XhQMc1S5Er5vpYDECL-DXVZdnIYfxPYYSprVz_XzNvbWsiw3jiZC2H0tvMhCPrmO-fDWitPy-9G7YcuhEIJLwXwPBvQsO_ZwG7Wgh9IY5pAuPDKikvn_kb8yavVIpp9-RqYzcJ5x1aohE8Zynr3fSanMpQk3Pb_n8nUAMmtissI0eraXLr0r3QUmQuyrunuYWnLGhbpo5q42TaXSTC8sp9tkzfTRmsAa4GTHAd8m6OfrC3GFDLnI_L21LMtD9-S3V8" 
          />
        </section>

        <section>
            <h2 className="section-title">Sleep Tracking</h2>
            <div className="stat-card-grid-single">
                <StatCard label="Daily Average Sleep" value="7h 45m" />
            </div>
            <div className="trend-chart-wrapper">
                <TrendChart 
                    title="Sleep Trends" 
                    value="7h 30m" 
                    timePeriod="Last 7 Days" 
                    change="+15%" 
                    changeType="positive"
                />
            </div>
        </section>

        <section>
            <h2 className="section-title">Nutrition & Hydration</h2>
            <InfoCard 
                title="Daily Meal Planner" 
                description="Personalized meal plan based on your weight and height."
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAVPrY54445GdGhaXNc4egdxW60LivrvgK2AqkJK3xEcAZcf4rQAWdeii5wdBFnMnbTKaOkpCmo6-TaXvnnHPPdyubv-YCHdh2mHnrIE0xzj37N27wWBNOTJ_4PRucg-5W_dIGUb7G0KNii-ANMxChN39-RYZN4vmd3e0nQiBN-ABE_8-JevQj9x_SWXDF5orOCq3cDfdhsXzsvdqBPgTjvazkwhVT8SV5owuQVp1GpY4cBaT2hNHYGEr7yZq7nU3pv9ijvZmUYjdE" 
            />
            <ProgressBar label="Hydration" value="6/10" unit="glasses" percentage={60} />
        </section>

        <section>
            <h2 className="section-title">Menstrual Cycle Tracking</h2>
            <InfoCard 
                title="Cycle Overview" 
                description="Track your cycle, symptoms, and predictions."
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDa57zgiyDrbnGzUB4qNuGbLyC1JhETAeyQcbNhrp_-3T1hnPnrgF6iQmYtgGdpg9aB8rGox9kWF9xBlL-T9izeDEcDAA86G1XbRIatV-S95w_AJqH9_6zuidTBeDt6u98Q2rU6mdfzXhlHHGQuTco2doyMhYohIRH9806-An8nKryho8j-b9f0t9vzEVAtWcfDreItNUJK-V5BBNG4s24dcwREzAvZbT796cc7Zffb7zn1oGBmOMD8qWv1uJmeMa-2loD2HLyKLPA" 
            />
        </section>

      </main>
    </div>
  );
}
