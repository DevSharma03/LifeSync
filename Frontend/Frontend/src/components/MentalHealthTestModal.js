import { useState, useEffect } from "react";
import "../styles/Mind.css";

/* ================= QUESTION DATA ================= */

function q(key, question, labels) {
  return {
    key,
    question,
    mind_modal_options: labels.map((l, i) => ({
      label: l,
      value: [20, 40, 70, 100][i],
    })),
  };
}

const TESTS = {
  sentiment: {
    title: "Sentiment Analysis",
    invert: true,
    questions: [
      q("mood_balance", "How emotionally balanced did you feel today?", [
        "😞 Very unstable",
        "😐 Slightly unstable",
        "🙂 Mostly stable",
        "😌 Very stable",
      ]),
      q("negative_emotions", "How often did negative emotions arise?", [
        "😌 Rarely",
        "😐 Sometimes",
        "😟 Often",
        "😣 Almost always",
      ]),
      q("calmness", "How calm was your mind today?", [
        "😣 Not calm",
        "😐 Slightly calm",
        "🙂 Calm",
        "🧘 Very calm",
      ]),
      q("reactivity", "How reactive was your mood?", [
        "🔥 Very reactive",
        "😟 Reactive",
        "🙂 Mild",
        "😌 Stable",
      ]),
      q("optimism", "How optimistic did you feel?", [
        "😞 Hopeless",
        "😐 Neutral",
        "🙂 Hopeful",
        "🌈 Very optimistic",
      ]),
      q("drain", "How emotionally drained were you?", [
        "🔋 Empty",
        "😣 Low",
        "🙂 Fine",
        "⚡ Energized",
      ]),
      q("control", "How well did you regulate emotions?", [
        "😞 Poor",
        "😐 Average",
        "🙂 Good",
        "💪 Excellent",
      ]),
      q("swings", "How frequent were mood swings?", [
        "🔁 Constant",
        "😟 Frequent",
        "🙂 Occasional",
        "😌 Rare",
      ]),
      q("peace", "How peaceful did your mind feel?", [
        "😣 Disturbed",
        "😐 Unsettled",
        "🙂 Peaceful",
        "🧘 Very peaceful",
      ]),
      q("stability", "Overall mood stability?", [
        "😞 Very unstable",
        "😐 Mixed",
        "🙂 Stable",
        "😌 Very stable",
      ]),
    ],
  },

  depression: {
    title: "Depression Screening (PHQ-9)",
    questions: [
      q("interest", "Loss of interest in activities?", [
        "🙂 None",
        "😐 Mild",
        "😞 Significant",
        "😔 Complete",
      ]),
      q("sadness", "Feeling down or hopeless?", [
        "🙂 Rarely",
        "😐 Sometimes",
        "😞 Often",
        "😔 Almost always",
      ]),
      q("sleep", "Sleep problems?", [
        "😴 None",
        "😐 Mild",
        "😣 Frequent",
        "🚫 Severe",
      ]),
      q("energy", "Low energy levels?", [
        "⚡ Energetic",
        "🙂 Normal",
        "😐 Low",
        "😴 Exhausted",
      ]),
      q("appetite", "Changes in appetite?", [
        "🍽️ Normal",
        "😐 Slight change",
        "😞 Reduced",
        "🚫 Lost",
      ]),
      q("self_worth", "Feeling worthless?", [
        "🙂 Never",
        "😐 Sometimes",
        "😞 Often",
        "💔 Always",
      ]),
      q("focus", "Difficulty concentrating?", [
        "🎯 Focused",
        "😐 Mild",
        "😣 Often",
        "🚫 Unable",
      ]),
      q("slowness", "Feeling slowed down?", [
        "🙂 No",
        "😐 Slight",
        "😞 Often",
        "🐢 Constant",
      ]),
      q("hopeless", "Hopeless thoughts?", [
        "🙂 None",
        "😐 Rare",
        "😞 Frequent",
        "💭 Constant",
      ]),
      q("burden", "Life feels heavy?", [
        "🙂 Light",
        "😐 Manageable",
        "😞 Heavy",
        "💔 Unbearable",
      ]),
    ],
  },

  anxiety: {
    title: "Anxiety Test (GAD-7)",
    questions: [
      q("nervous", "Feeling nervous?", [
        "😌 Calm",
        "😐 Slight",
        "😟 Frequent",
        "😨 Constant",
      ]),
      q("worry_control", "Unable to stop worrying?", [
        "🙂 No",
        "😐 Sometimes",
        "😟 Often",
        "😨 Always",
      ]),
      q("excessive", "Worrying too much?", [
        "🙂 Rarely",
        "😐 Sometimes",
        "😟 Often",
        "😨 Constant",
      ]),
      q("relax", "Difficulty relaxing?", [
        "🧘 Easy",
        "😐 Mild",
        "😣 Hard",
        "🚫 Impossible",
      ]),
      q("restless", "Feeling restless?", [
        "🙂 Calm",
        "😐 Slight",
        "😟 Often",
        "😨 Constant",
      ]),
      q("irritable", "Easily irritated?", [
        "🙂 No",
        "😐 Sometimes",
        "😞 Often",
        "🔥 Always",
      ]),
      q("fear", "Fear something bad will happen?", [
        "🙂 No",
        "😐 Slight",
        "😟 Often",
        "😨 Constant",
      ]),
      q("physical", "Physical anxiety symptoms?", [
        "🙂 None",
        "😐 Mild",
        "😣 Frequent",
        "🚨 Severe",
      ]),
      q("sleep", "Anxiety affects sleep?", [
        "😴 No",
        "😐 Slight",
        "😣 Often",
        "🚫 Severe",
      ]),
      q("avoid", "Avoid situations due to fear?", [
        "🙂 Never",
        "😐 Sometimes",
        "😞 Often",
        "🚫 Always",
      ]),
    ],
  },

  stress: {
    title: "Stress & Burnout Assessment",
    questions: [
      q("overwhelmed", "Feeling overwhelmed?", [
        "🙂 Relaxed",
        "😐 Busy",
        "😣 Stressed",
        "🔥 Burned out",
      ]),
      q("mental", "Mental fatigue?", [
        "🧠 Fresh",
        "😐 Mild",
        "😣 Heavy",
        "🚫 Exhausted",
      ]),
      q("pressure", "Pressure to perform?", [
        "🙂 None",
        "😐 Some",
        "😣 High",
        "🔥 Extreme",
      ]),
      q("relax", "Unable to relax?", [
        "🧘 Easy",
        "😐 Sometimes",
        "😣 Often",
        "🚫 Never",
      ]),
      q("emotional", "Emotionally drained?", [
        "🙂 No",
        "😐 Slight",
        "😞 Often",
        "💔 Empty",
      ]),
      q("physical", "Physically tired?", [
        "💪 Energetic",
        "🙂 Normal",
        "😐 Tired",
        "😴 Exhausted",
      ]),
      q("burnout", "Feeling burned out?", [
        "🙂 No",
        "😐 Mild",
        "😞 Often",
        "🔥 Completely",
      ]),
      q("control", "Loss of control?", [
        "🙂 In control",
        "😐 Sometimes",
        "😞 Often",
        "🚫 None",
      ]),
      q("irritable", "Stress irritability?", [
        "🙂 Calm",
        "😐 Sometimes",
        "😞 Often",
        "🔥 Always",
      ]),
      q("sleep", "Stress affects sleep?", [
        "😴 No",
        "😐 Slight",
        "😣 Often",
        "🚫 Severe",
      ]),
    ],
  },

  trauma: {
    title: "Childhood Trauma (ACE)",
    questions: [
      q("unsafe", "Felt unsafe at home?", [
        "🏠 Safe",
        "😐 Rare",
        "😟 Often",
        "🚨 Constant",
      ]),
      q("neglect", "Emotionally neglected?", [
        "💚 Never",
        "😐 Sometimes",
        "😞 Often",
        "💔 Always",
      ]),
      q("verbal", "Verbal abuse?", [
        "🙂 Never",
        "😐 Rare",
        "😣 Often",
        "🚫 Constant",
      ]),
      q("physical", "Physical punishment?", [
        "🙂 Never",
        "😐 Rare",
        "😣 Often",
        "🚨 Severe",
      ]),
      q("fear", "Lived in fear?", [
        "🙂 No",
        "😐 Mild",
        "😟 Often",
        "😨 Constant",
      ]),
      q("support", "Lacked support?", [
        "🤝 Supported",
        "😐 Sometimes",
        "😞 Rare",
        "💔 Never",
      ]),
      q("violence", "Witnessed violence?", [
        "🏠 No",
        "😐 Rare",
        "😟 Often",
        "🚨 Frequent",
      ]),
      q("unwanted", "Felt unwanted?", [
        "💖 Never",
        "😐 Rare",
        "😞 Often",
        "💔 Always",
      ]),
      q("trigger", "Triggered by memories?", [
        "😌 No",
        "😐 Slight",
        "😣 Often",
        "🔥 Strong",
      ]),
      q("impact", "Affects adult life?", [
        "🙂 No",
        "😐 Mild",
        "😟 Moderate",
        "🚨 Severe",
      ]),
    ],
  },
};

/* ================= COMPONENT ================= */

export default function MentalHealthTestModal({ open, testKey, onClose }) {
  const test = testKey ? TESTS[testKey] : null;

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  /* Reset when opened */
  useEffect(() => {
    if (open) {
      setIndex(0);
      setAnswers([]);
      setScore(null);
    }
  }, [open, testKey]);

  if (!open) return null;

  const answer = (value) => {
    const next = [...answers, value];

    if (index < test.questions.length - 1) {
      setAnswers(next);
      setIndex(index + 1);
    } else {
      const avg = Math.round(next.reduce((a, b) => a + b, 0) / next.length);
      setScore(test.invert ? 100 - avg : avg);
    }
  };

  return (
    <div className="mind_modal_overlay">
      <div className="mind_modal_container">
        <h3>{test.title}</h3>

        {score === null ? (
          <>
            <p>
              Question {index + 1} / {test.questions.length}
            </p>

            <p className="mind_modal_question">
              {test.questions[index].question}
            </p>

            <div className="mind_modal_options">
              {test.questions[index].mind_modal_options.map((o, i) => (
                <button key={i} onClick={() => answer(o.value)}>
                  {o.label}
                </button>
              ))}
            </div>

            <button
              className="mind_btn mind_btn_secondary"
              onClick={onClose}
            >
              Exit
            </button>
          </>
        ) : (
          <>
            <h2>Your Score</h2>
            <div className="mind_modal_score">{score}%</div>

            <button className="mind_btn" onClick={onClose}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}
