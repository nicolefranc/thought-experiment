import React, { useState } from 'react';
import logo from './logo.svg';
import './index.css';
import './App.css';
import data from './analysis.json';

function App() {
  const [s1, setS1] = useState(null);
  const [s2, setS2] = useState(null);
  const [superior, setSuperior] = useState(null);
  const [s3, setS3] = useState(null); 
  const [id, setId] = useState(null);

  

  const getData = (id) => {
    switch(id) {
      case "0010":
        return data["0010"];
      case "0011":
        return data["0011"];
      case "0000":
        return data["0000"];
      case "0001":
        return data["0001"];
      case "1110":
        return data["1110"];
      case "1111":
        return data["1111"];
      case "1100":
        return data["1100"];
      case "1101":
        return data["1101"];
      case "0100":
        return data["0100"];
      case "0101":
        return data["0101"];
      case "0110":
        return data["0110"];
      case "0111":
        return data["0111"];
      case "1000":
        return data["1000"];
      case "1001":
        return data["1001"];
      case "1010":
        return data["1010"];
      case "1011":
        return data["1011"];
    }
  }

  // if (s1, s2, superior, s3 !== null) 
  //   setId(s1.toString().concat(s2.toString()).concat(superior.toString()).concat(s3.toString()));

  console.log("s1: " + s1);
  console.log("s2: " + s2);
  console.log("superior: " + superior);
  console.log("s3: " + s3);
  console.log("id: " + id);


  return (
    <div className="App flex justify-center">
      <div className="max-w-screen-lg px-10">
        <section id="intro">

        </section>
        {/* Scenario 1 */}
        <section id="scenario1" className="px-5 py-10 bg-gray-200 min-h-screen flex flex-col justify-center">
          <div>
            <h1 className="font-bold text-xl tracking-wide">Scenario 1</h1>
            <p className="text-lg">
              The person you love most got into a serious accident. They arrived in the hospital alive, awake and receptive of everything around them. However, as a result of the accident, they can no longer communicate by any means at all. The doctor says that treating them will cause so much financial burden and the likelihood of the treatment to be successful is very low. The doctor suggests to hasten your loved one’s death through medical intervention as their quality of life will never be the same. However, you don’t know what your loved one would prefer.
            </p>
          </div>

          <div id="scenario1-choices">
            <div className="py-10 flex items-start justify-evenly">
              <button className={`choices ${s1 === 0 && "selected"}`}
                onClick={() => setS1(0)}>
                Do nothing and hope for the best.</button>
              <button className={`choices ${s1 === 1 && "selected"}`}
                onClick={() => setS1(1)}>
                Expedite their death through medical means.</button>
            </div>
          </div>
        </section>

        {/* Scenario 2 */}
        <section id="scenario2" className="px-5 py-10 bg-gray-300 min-h-screen flex flex-col justify-center">
          <div>
            <h1 className="font-bold text-xl tracking-wide">Scenario 2</h1>
            <p className="text-lg">
              Your beloved pet got into an accident. You brought it to the vet. The veterinarian tells you that treating your pet will cause so much financial burden and the likelihood of the treatment to be successful is very low. The veterinarian suggests to hasten your pet’s death through medical intervention as their quality of life will never be the same.
            </p>
          </div>

          <div id="scenario2-choices">
            <div className="btn-container flex-col md:flex-row">
              <button className={`choices ${s2 === 0 && "selected"}`}
                onClick={() => setS2(0)}>
                Do nothing and hope for the best.</button>
              <button className={`choices ${s2 === 1 && "selected"}`}
                onClick={() => setS2(1)}>
               Expedite their death through medical means.</button>
            </div>
          </div>
        </section>
        

        {/* Superiority Qn */}
        <section id="superiority-qn" className="px-5 py-10 bg-gray-400 min-h-screen flex flex-col justify-center">
          <div>
            <h1 className="font-bold text-xl tracking-wide">Superiority</h1>
            <p className="text-lg">
              Do you think humans are superior over other beings such as animals, giving us power over them?
            </p>
          </div>

          <div id="superiority-choices">
            <div className="py-10 flex items-start justify-evenly">
              <button className={`choices ${superior === 0 && "selected"}`}
                onClick={() => setSuperior(0)}>
               Yes, humans are superior.</button>
              <button className={`choices ${superior === 1 && "selected"}`}
                onClick={() => setSuperior(1)}>
               No, humans are not superior.</button>
            </div>
          </div>
        </section>

        {/* Scenario 3 */}
        <section id="scenario3" className="px-5 py-10 bg-gray-500 min-h-screen flex flex-col justify-center">
          <div>
            <h1 className="font-bold text-xl tracking-wide">Scenario 3</h1>
            <p className="text-lg">
              It is the year 2075. The world suffers from overpopulation. Resources have become scarce; no longer enough to sustain the entire population. You are the leader of your small village. The government can only spare a very limited amount of food that is obviously not enough to feed your whole village. As such, you are left with this impossible decision:
            </p>
          </div>

          <div id="scenario3-choices">
            <div className="py-10 flex items-start justify-evenly">
              <button className={`choices ${s3 === 0 && "selected"}`}
                  onClick={() => setS3(0)}>
                Make do with what you have<br/>and continue to ration.</button>
              <button className={`choices ${s3 === 1 && "selected"}`}
                  onClick={() => setS3(1)}>
                Eliminate a few of your villagers<br/>to increase ration.</button>
            </div>
          </div>
        </section>

        {(s1 !== null && s2 !== null && superior !== null && s3 !== null) &&
          (<section id="final-analysis" className="px-5 py-10 bg-gray-500 min-h-screen flex flex-col justify-center text-left">
            {/* Conclusion */}
            <div id="conclusion" className="py-10">
              <div>
                <h1 className="font-bold text-xl tracking-wide">Conclusion</h1>
                <p className="text-lg">
                  As you may have realised, this activity tries to explore the morality of animal euthanasia and whether animal life is as important as human life. The scenarios and questions are specifically crafted to indirectly figure out your moral status regarding the subjects above.
                </p>
                <br/>
                <p className="text-lg">
                  This activity has determined you should think that:
                </p>
                <ul className="pl-4 text-lg">
                  <li>&mdash;&nbsp;Animal euthanasia is&nbsp;
                    <span className="underline">{getData(s1.toString()+s2.toString()+superior.toString()+s3.toString()).isJustified}</span>
                    .
                  </li>
                  <li>&mdash;&nbsp;Animal and human lives&nbsp; 
                    <span className="underline">{getData(s1.toString()+s2.toString()+superior.toString()+s3.toString()).isEqual}</span>
                    &nbsp;seen as equivalent.
                  </li>
                </ul>
              </div>
            </div>

            {/* Analysis */}
            <div id="analysis" className="py-10">
              <div>
                <h1 className="font-bold text-xl tracking-wide">Explanation</h1>
                <p className="text-lg">
                  The first and second scenario aims to identify two things:<br/>
                  &nbsp;&nbsp;(1) Will you decide for the Being to continue living despite the fact that the Being will die eventually?<br/>
                  &nbsp;&nbsp;(2) Do you hold both lives to the same level of regard?
                  <br/><br/>
                  The question of superior beings then identifies whether you think humans have the moral responsibility over other animals and thus, have deciding power over them and their lives. 
                  <br/><br/>
                  In the last scenario, what is being explored is the extent to which you find it morally permissible to expedite death. Translating the scenario to the morality of animal euthanasia, the village in the scenario is an underfunded animal shelter with too many animals (villagers) to care for. These shelters are usually left to decide on euthanizing the animals.
                </p>
                <br/>
                <p className="text-lg">
                  Now analysing your response:<br/>
                  {console.log(getData(s1.toString()+s2.toString()+superior.toString()+s3.toString()).analysis)}
                  {getData(s1.toString()+s2.toString()+superior.toString()+s3.toString()).analysis}
                </p>
              </div>
            </div>

          </section>)
        }
      </div>
    </div>
  );

}

export default App;
