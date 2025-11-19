// endpoint base
const BASE = "https://student-performance-predictor-1-kais.onrender.com";

const predictBtn = document.getElementById("predictBtn");
const scoreVal = document.getElementById("scoreVal");
const scoreText = document.getElementById("scoreText");
const resultBadge = document.getElementById("resultBadge");
const riskBadge = document.getElementById("riskBadge");
const confFill = document.getElementById("confFill");
const confVal = document.getElementById("confVal");

let miniChart;
function drawMini(pred){
  const ctx = document.getElementById("miniChart").getContext("2d");
  if(miniChart) miniChart.destroy();
  miniChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels:['Predicted','Max'],
      datasets:[{
        label:'Score',
        data:[pred,100],
        backgroundColor:[ 'rgba(59,130,246,0.9)', 'rgba(99,179,255,0.3)']
      }]
    },
    options:{indexAxis:'y',scales:{x:{max:100}},plugins:{legend:{display:false}}}
  });
}

predictBtn.addEventListener("click", async ()=>{
  const data = {
    Attendance: Number(document.getElementById("attendance").value || 0),
    StudyHours: Number(document.getElementById("studyHours").value || 0),
    InternalMarks: Number(document.getElementById("internalMarks").value || 0),
    Assignments: Number(document.getElementById("assignments").value || 0),
    Activities: Number(document.getElementById("activities").value || 0)
  };

  // basic validation
  if(data.InternalMarks < 0 || data.InternalMarks > 50){ alert("Internal marks must be 0-50"); return;}
  try{
    predictBtn.disabled = true;
    predictBtn.innerText = "Predicting..."
    const res = await fetch(BASE + "/predict", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(data)
    });
    const json = await res.json();

    const score = Number(json.PredictedScore.toFixed(2));
    scoreVal.innerText = score;
    scoreText.innerText = getVerdictText(score);
    setBadge(resultBadge, json.Result);
    setRisk(riskBadge, json.Risk);
    setConfidence(json.Confidence);

    drawMini(score);
  }catch(e){
    alert("Error: "+e.message);
  }finally{
    predictBtn.disabled = false;
    predictBtn.innerText = "Predict";
  }
});

function getVerdictText(s){
  if(s>=85) return "Excellent performance";
  if(s>=70) return "Good performance";
  if(s>=50) return "Passable";
  return "At risk — needs improvement";
}
function setBadge(el, txt){
  el.innerText = txt;
  el.className = "badge";
  if(txt.toLowerCase().includes("pass")) el.classList.add("low");
  else el.classList.add("high");
}
function setRisk(el, txt){
  el.innerText = txt;
  el.className = "badge";
  if(txt.toLowerCase().includes("low")) el.classList.add("low");
  else if(txt.toLowerCase().includes("medium")) el.classList.add("medium");
  else el.classList.add("high");
}
function setConfidence(v){
  confVal.innerText = v;
  const pct = Math.min(100, Math.max(0, v));
  confFill.style.width = pct + "%";
}

