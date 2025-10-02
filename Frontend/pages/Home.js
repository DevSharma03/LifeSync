import '../styles/Home.css'; // Specific styles for this component

// Reusable card component for the "Key Areas" section.
const KeyAreaCard = ({ title, description, imageUrl }) => (
  <div className="key-area-card">
    <div className="card-content">
      <div className="card-text">
        <p className="card-title">{title}</p>
        <p className="card-description">{description}</p>
      </div>
      <button className="btn">View Details</button>
    </div>
    <div className="card-image" style={{ backgroundImage: `url("${imageUrl}")` }}></div>
  </div>
);

// The main dashboard content component.
export default function DashboardContent() {
  const keyAreas = [
    { title: "Health Score", description: "Physical well-being and fitness", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr6lSgFelQeQ1Bx6pOKhhJguf2Dqo2o6lwHww5lu18QXBG0YTAEzgu41Ts23GfV8P63v7Sw2EGRQKIRgcxJZE-UOI1jFnjZKYxewSsI1P-VkX1O3CFrnr3SEGwWzvG4TZU-R5_2fz7Jorlyx58c5KK_5Vwh6Eg4OaczGb0cykx4poDrgnMYCRqySK_AtsMPqNBgT-xDjxq3nQbspCJNpn7XEaIZkDGR1r8iCkKreTeyJlhF0g5rDkEWwUcDFTiNjs_SqzeAfEIDbg" },
    { title: "Finance Score", description: "Financial stability and planning", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuArUw2BJlUccxlNSppUvDetvh_3EmQV4MhJL-3THHjN31jEPYpcZ63BwPPiaUC5d9gNH6f4lnq-LrtyTg14n2iWEjWF4EE1YyJmF6tOErNwqD-ExQnv9jgFyE1L6LHaqXvHWr9PfGpQDJ0iF4rcuY_dz6GvIou7qDt5T1dSoQDkttb1Ik7VQ-qIDgGBKYkBPtXtmyh3gQvKYpv6T2gYO6mk2M5jni91seLf5bq2_GuSroKCvkNIIzxG9P_GrSLEWL3kYC5GQZCL6K4" },
    { title: "Productivity Score", description: "Task completion and efficiency", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAVTXwijfICUqqpieLGwgGx8SNulMukzAfn7QrZKE0ZnjRw1eMUUUv6GYuU4m6Y4KgRVnMlMSIpjZwx3YWu1Bc2LD3Fs0n238F8zBvv41sOqhoZcG2W7s3nEQlh-ToQWIIn3f0eigqbke0akIgW2yrhtDOPdP014y6GcyU1--1ZJ3UDrQ87wzjXYp_6vogJybrXQH2tAsX0flkXLpwsHy2LqOiAMTn02aBOzkKOWA6Y06SD9v3aTOv2LsRAwpBaxvFj_i7I9j9J28" },
    { title: "Mind (Emotional) Score", description: "Emotional well-being and mindfulness", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvAmWhKakUAPU8tH4qbyYnAb9jp7E13DCOA_LGcIZcq1mqjUtwi6QefULmR4LoIdEGtI6WThG5GG40BMYtgT6ZonkzfNJh1pDvdB7s00ii4Fv-bAO1S5u999g6w0GYsn53BKF5rtbrwxugNnOZsz1l57QSUzbqd0GAfnyPoETvBFksUstXLTtrgUTgPqM6eddY7YYVAzaCrxZpJJBhthTwXqpdpg7GQAKYTmI3mkddwVfFUjX2cZ4yKsdlffkqBLFi_zPI603f6hg" }
  ];

  return (
    <div className="content-area">
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">Overall Life Balance</h1>
          
          <div className="score-progress-wrapper">
            <div className="score-progress-labels">
              <p>Overall Score</p>
              <p>75%</p>
            </div>
            <div className="progress-bar-background">
              <div className="progress-bar-foreground" style={{ width: '75%' }}></div>
            </div>
            <p className="score-status">Good</p>
          </div>

          <h2 className="section-title">Key Areas</h2>
          <div className="card-list">
            {keyAreas.map((area, index) => (
              <KeyAreaCard key={index} title={area.title} description={area.description} imageUrl={area.imageUrl} />
            ))}
          </div>

          <h2 className="section-title">Future Projection</h2>
          <div className="projection-card-wrapper">
            <div className="projection-card">
              <p className="projection-label">Overall Score Projection</p>
              <p className="projection-value">80%</p>
              <div className="projection-timeline">
                <p>Next 3 Months</p>
                <p className="projection-change">+5%</p>
              </div>
              <div className="chart-container">
                <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_1131_5935)"></path>
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#637588" strokeWidth="3" strokeLinecap="round"></path>
                  <defs>
                    <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f0f2f4"></stop>
                      <stop offset="1" stopColor="#f0f2f4" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="chart-labels">
                  <p>Jan</p>
                  <p>Feb</p>
                  <p>Mar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}