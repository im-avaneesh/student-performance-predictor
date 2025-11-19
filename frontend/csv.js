const BASE = "https://student-performance-predictor-1-kais.onrender.com";

document.getElementById("uploadBtn").addEventListener("click", async ()=>{
  const input = document.getElementById("csvFile");
  if(!input.files.length){ alert("Choose CSV"); return; }

  const fd = new FormData();
  fd.append("file", input.files[0]);

  const btn = document.getElementById("uploadBtn");
  btn.disabled = true; btn.innerText = "Processing...";

  try{
    const res = await fetch(BASE + "/predict-csv", { method:"POST", body: fd });
    const arr = await res.json();

    const tbody = document.querySelector("#resultsTable tbody");
    tbody.innerHTML = "";
    const scores = [];
    const labels = [];
    let pass=0, fail=0, exc=0;

    arr.forEach((r,i)=>{
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${r.Attendance}</td>
                      <td>${r.StudyHours}</td>
                      <td>${r.InternalMarks}</td>
                      <td>${r.Assignments}</td>
                      <td>${r.Activities}</td>
                      <td>${r.PredictedScore}</td>
                      <td><span class="badge ${r.Result.toLowerCase().includes('pass')?'low':'high'}">${r.Result}</span></td>
                      <td><span class="badge ${r.Risk.toLowerCase().includes('low')?'low':(r.Risk.toLowerCase().includes('medium')?'medium':'high')}">${r.Risk}</span></td>
                      <td>${r.Confidence}</td>`;
      tbody.appendChild(tr);

      scores.push(r.PredictedScore);
      labels.push("S"+(i+1));

      if(r.Result.toLowerCase().includes("pass")) pass++; else fail++;
      if(Number(r.PredictedScore) >= 85) exc++;
    });

    // draw summary chart
    const ctx = document.getElementById("barChart").getContext("2d");
    if(window.batchChart) window.batchChart.destroy();
    window.batchChart = new Chart(ctx, {
      type:'bar',
      data:{ labels: labels, datasets:[{ label:'Predicted Score', data: scores, backgroundColor: 'rgba(59,130,246,0.9)'}]},
      options:{ scales:{ y:{ beginAtZero:true, max:100 }}, plugins:{ legend:{display:false}}}
    });

    document.getElementById("summaryText").innerText = `Students: ${arr.length}  |  Pass: ${pass}  |  Fail: ${fail}  |  Excellent(85+): ${exc}`;

  }catch(e){
    alert("Error: "+e.message);
  }finally{
    btn.disabled = false; btn.innerText = "Upload & Predict";
  }
});
document.querySelector(".fileDrop").addEventListener("click", () => {
  document.getElementById("csvFile").click();
});

document.getElementById("csvFile").addEventListener("change", () => {
  const f = document.getElementById("csvFile").files[0];
  document.getElementById("fileName").innerText = f ? f.name : "Click to choose CSV file";
});

