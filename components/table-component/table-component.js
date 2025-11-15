new gridjs.Grid({
  columns: ["Term/Phrase", "Acronym"],
  data: [
    ["Retrograde Intrarenal Surgery paired with Flexible and Navigable Suction Ureteral Access Sheath", "RIRS FANS"],
    ["Percutaneous Nephrolithotomy", "PCNL"],
    ["Extracorporeal shock-wave lithotripsy ","ESWL"], 
    ["Direct In Suction Scope", "DISS"], 
    ["Stone Free Rate", "SFR"]
  ],
}).render(document.getElementById("Acronyms"));
 
new gridjs.Grid({
  columns: ["No.", "Key Insights", "Overall Comprehension"],
  data: [
    [
      "1",
      "The removal of fragments using the fragmenting technique through the suction system is currently a tedious process, especially because of the repetitive back and forth arm motions required.",
      "The repetitive forward and backward arm motion required in the non-invasive RIRS FANS procedure contributes to surgeon arm fatigue."
    ],
    [
      "2",
      "Improvements in the process can lead to removal of larger stones with a scope.",
      "Each cycle retrieves only a single fragment, from the ~50 fragments produced after lasering a single kidney stone under 20mm."
    ],
    [
      "3",
      "If the retrieval is faster, I don’t see why we cannot tackle stones that are 3, 4, 5 cm.",
      "This reduces the quantity of fragments collected within the limited surgical duration and slows down fragment retrieval."
    ],
    [
      "4",
      "Fragment doesn't follow the scope all the time, may fall off and the surgeon needs to go and chase it.",
      "Overall, this affects the stone-free rate at the end of surgery. Addressing this could push the boundaries of RIRS FANS significantly."
    ]
  ]
}).render(document.getElementById("Insights"));

new gridjs.Grid({
  columns: ["Technology", "Strengths","Weakness","Able to address kidney stones >20mm?","Able to achieve a 90% SFR after a single session?","Can the retrieval of fragments be performed without arm motions by the surgeon?"],
  data: [
    ["ESWL", "Non-invasive procedure, as it only involves the generation of powerful waves.Relatively quick and painless process.","Chances of successfully fragmenting the stones are not high.", "No","No","Yes"],
    ["PCNL", "Effectively removes kidney stones >20mm in size.","Highly invasive and costly surgical procedure. Involves extended hospital stay for post operative care. Incidence of sepsis, infection is high, excessive bleeding.","Yes","Yes","No"],
    ["Basket","Lack of sheath required makes it suitable for patients with ureters of smaller diameter.","Surgeons are limited to retrieving a single fragment at a time. May cause damage to the ureter.","No","Yes","No"], 
    ["Dusting", "Allows the stone dust particles to exit the kidney naturally. Generally shorter operative time [12]. ", "Only applicable for stones with a lower Hounsfield density shown on pre-operative CT scan as they are more amenable for dusting [13]. Requires the surgeon to evaluate the residual stone fragments to ensure that they are small enough to fall out naturally [13].", "No","Yes","Yes" ], 
    ["DISS", "Dual channel allows for synchronous irrigation and suction. Achieves close monitoring of intrarenal pressure [14].","Performance may be inconsistent when equipped to other devices (eg. scope size/suction power), resulting in low adoption.","No","Yes","No"]
  ],
}).render(document.getElementById("Existing Solutions"));


new gridjs.Grid({
  columns: ["No.", "Category","Criteria","Rationale"],
  data: [
    ["1", "Efficacy", "Achieve 90% SFR for stones larger than 20mm within a 90-minute operative time.","Extend the abilities currently achieved by RIRS FANS which is the preferred non-invasive method by surgeons."],
    ["2", "Efficacy","Effective within a single surgery.","Caregivers, patients and surgeons prefer if the stones are addressed within a single surgery as it would mean less appointments and resources can be directed elsewhere. "],
    ["3","Cost","Costs less than S$5000.","The average cost for PCNL is around S$5000 in Public Hospitals, hence the team decides to benchmark against this value. "], 
    ["4","Safety","Does not damage the kidney","Although the RIRS FANS is a relatively safe procedure, the involvement of existing technology as part of the procedure like lasering and irrigation increases the chances of damaging the kidney."], 
  ],
}).render(document.getElementById("Must Have Criteria"));


new gridjs.Grid({
  columns: ["Insights", "Need Statement","Requirement/Metric","Metric Value (Measuring Unit)"],
  data: [
    ["Stone fragments are currently retrieved out by a single piece for every cycle, which consumes a lot of time.", "The innovation retrieves larger volumes of fragments per cycle.","Volume of fragments retrieved per cycle.","millimetre cube (mm3)"],
    ["Stone fragments are currently retrieved out by a single piece for every cycle, which consumes a lot of time.", "The innovation quickens the retrieval process.","Time taken to evacuate fragments per cycle.","Seconds (s)"],
    ["Retrieving 1-2mm fragments is highly inefficient as these fragments will exit naturally.","The innovation targets the retrieval of fragments greater than 2mm.","Size","Millimetre (mm)"], 
    ["Scope falls out frequently after pulling out with fragments, and requires the surgeon to push the scope back in bit by bit slowly. ", "The innovation can be deployed quickly. ","Time","Seconds"]
  ],
}).render(document.getElementById("Design Specifications"));


new gridjs.Grid({
  columns: ["Functional Components", "Functional Requirements and Explanation"],
  data: [
    ["The innovation is able to capture large volumes of fragments.", "The innovation can be deployed over a large surface area within the kidney to capture multiple fragments per cycle. "],
    ["The innovation is able to reduce time spent on extracting fragments. ", "The innovation can shorten the travelling distance the surgeon’s arm takes per fragment. (Total arm distance divided by Total fragments retrieved per cycle)"],
    ["The innovation does not fall out easily when it is being withdrawn out with the fragment.","The innovation does not require its entire length to be fully withdrawn out to move the fragment out of the body. "], 
  ],
}).render(document.getElementById("Functional Components and Functional Requirements"));


new gridjs.Grid({
  columns: ["No.", "Needs Criteria","Concept 1","Concept 2","Concept 3", "Concept 4", "Concept 5"],
  data: [
    ["1", "Achieve a 90% SFR for the evacuation of stones larger than 20mm", "1", "1", "1", "1", "2"],
    ["2", "Remove Fragments within a 90 minute operative time", "1", "1", "1", "1", "2"],
    ["3","Costs less than S$5000", "1", "1", "1", "0.8", "0"], 
    ["4", "Does not damage the kidney", "2", "2", "1", "2", "0.5"], 
    ["5", "Can integrate into RIRS FANS", "1.5", "2", "1", "1.5", "0.7"], 
    ["Average", "Score:", "1.30", "1.40", "1.00", "1.26", "1.04"]
  ],
}).render(document.getElementById("Concept Screening against Needs Criteria"));


new gridjs.Grid({
  columns: ["No.", "Area for consideration","Concept 1","Concept 2","Concept 3", "Concept 4", "Concept 5"],
  data: [
    ["1", "IP", "1", "1", "2", "2", "2"],
    ["2", "Regulatory", "2", "2", "1", "2", "0"],
    ["3","Business Model/Payment", "1", "1", "0.8", "1", "1.6"], 
    ["4", "Technical Feasibility", "2", "2", "0.9", "1.5", "1"], 
    ["5", "Needs Criteria", "1.30", "1.40", "1.00", "1.26", "1.04"], 
    ["Average", "Score:", "1.46", "1.48", "1.14", "1.55", "1.03"]
  ],
}).render(document.getElementById("Pugh Matrix"));



class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
