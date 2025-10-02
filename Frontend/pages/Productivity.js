import React from 'react';
import '../styles/Productivity.css';

// --- Reusable Sub-Components ---

// A single row in the To-Do table
const TaskRow = ({ task, priority, time, isChecked }) => (
    <tr>
        <td>{task}</td>
        <td><span className={`priority-badge ${priority.toLowerCase()}`}>{priority}</span></td>
        <td>{time}</td>
        <td><input type="checkbox" defaultChecked={isChecked} /></td>
    </tr>
);

// The entire To-Do List table
const TodoTable = ({ tasks }) => (
    <div className="table-container">
        <table className="todo-table">
            <thead>
                <tr>
                    <th className="task-col">Task</th>
                    <th className="priority-col">Priority</th>
                    <th className="time-col">Time Spent</th>
                    <th className="routine-col">Routine</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <TaskRow key={index} {...task} />
                ))}
            </tbody>
        </table>
    </div>
);

// The bar chart for the Focus Levels card
const BarChart = ({ data }) => (
    <div className="bar-chart">
        {data.map((item, index) => (
            <div key={index} className="bar-chart-item">
                <div className="bar" style={{ height: item.value }}></div>
                <p className="label">{item.label}</p>
            </div>
        ))}
    </div>
);

// The line chart SVG
const LineChart = () => (
    <div className="line-chart">
        <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#line-chart-gradient)"></path>
            <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#637588" strokeWidth="3" strokeLinecap="round"></path>
            <defs><linearGradient id="line-chart-gradient" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse"><stop stopColor="#f0f2f4"></stop><stop offset="1" stopColor="#f0f2f4" stopOpacity="0"></stop></linearGradient></defs>
        </svg>
        <div className="line-chart-labels">
            <p>Week 1</p><p>Week 2</p><p>Week 3</p><p>Week 4</p>
        </div>
    </div>
);

// Card for the "Distraction Insights" section
const InsightCard = ({ title, value, period, change, changeType, children }) => (
    <div className="insight-card">
        <p className="insight-title">{title}</p>
        <p className="insight-value">{value}</p>
        <div className="insight-period">
            <p>{period}</p>
            <p className={`insight-change ${changeType}`}>{change}</p>
        </div>
        {children}
    </div>
);

// Card for AI sections
const InfoCard = ({ title, description, buttonText, imageUrl }) => (
    <div className="info-card">
        <div className="info-card-content">
            <div className="info-card-text">
                <p className="info-card-title">{title}</p>
                <p className="info-card-description">{description}</p>
            </div>
            <button className="btn">{buttonText}</button>
        </div>
        <div className="info-card-image" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
    </div>
);

export default function Productivity() {
    const tasks = [
        { task: "Review project proposal", priority: "High", time: "2 hours", isChecked: false },
        { task: "Prepare presentation slides", priority: "Medium", time: "1 hour", isChecked: true },
        { task: "Respond to emails", priority: "Low", time: "30 minutes", isChecked: false },
        { task: "Schedule team meeting", priority: "Medium", time: "15 minutes", isChecked: false },
        { task: "Update client report", priority: "High", time: "1.5 hours", isChecked: false },
    ];
    
    const focusData = [
        { label: "Mon", value: "20%" }, { label: "Tue", value: "90%" }, { label: "Wed", value: "100%" },
        { label: "Thu", value: "100%" }, { label: "Fri", value: "50%" }, { label: "Sat", value: "100%" },
        { label: "Sun", value: "40%" }
    ];

    return (
        <div className="dashboard-container">
            <main className="main-content" style={{margin:"0px 70px"}}>
                <div className="page-header">
                    <h1 className="main-title">Dashboard</h1>
                    <p className="sub-title">Welcome back, Sarah! Here's your daily overview.</p>
                </div>

                <section>
                    <h2 className="section-title">To-Do List</h2>
                    <TodoTable tasks={tasks} />
                </section>

                <section>
                    <h2 className="section-title">Distraction Insights</h2>
                    <div className="insights-grid">
                        <InsightCard title="Focus Levels" value="85%" period="Last 7 Days" change="+5%" changeType="positive">
                            <BarChart data={focusData} />
                        </InsightCard>
                        <InsightCard title="Productivity Gaps" value="20%" period="Last 30 Days" change="-10%" changeType="negative">
                            <LineChart />
                        </InsightCard>
                    </div>
                </section>

                <section>
                    <h2 className="section-title">AI Goal Setter</h2>
                    <InfoCard
                        title="Refine Your Goals"
                        description="Let our AI assistant help you create and refine your goals for better productivity."
                        buttonText="Start"
                        imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
                    />
                </section>
                
                <section>
                    <h2 className="section-title">Mental Energy Tracker</h2>
                     <div className="progress-bar-card">
                        <div className="progress-bar-header">
                           <p className="progress-bar-label">Energy Level</p>
                           <p>75%</p>
                        </div>
                        <div className="progress-bar-background">
                            <div className="progress-bar-foreground" style={{ width: `75%` }}></div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="section-title">Learning & Growth AI Recommendations</h2>
                     <InfoCard
                        title="Skill-Building Suggestions"
                        description="Discover personalized skill-building suggestions to enhance your personal growth."
                        buttonText="Explore"
                        imageUrl="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
                    />
                </section>
            </main>
        </div>
    );
}