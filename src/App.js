import React, { useState } from 'react';

function App() {
  let [problem, cProblem] = useState('')
  let [solution, cSolution] = useState('')
  let [results, cResults] = useState('')

  return (
    <div className="mx-4">
      <h1 className="mt-4 font-bold text-4xl text-center">Narrative Builder</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-3">

        <div className="mb-4">
          <h3 className="text-3xl">Problem</h3>
          <h4 className="text-xl">Find the real pain, dramatic and emotional</h4>
          <ul className="list-disc">
            <li>What would have happened if you hadn’t solved the problem?</li>
            <li>How much would that have cost?</li>
            <li>What was the business impact of doing nothing?</li>
            <li>What would that mean for your job? For others?</li>
            <li>Why was what you did worth doing?</li>
          </ul>
        </div>
        <div className="col-span-2 mb-4 ml-2">
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="7"
          value={problem}
          onChange={e => cProblem(e.target.value)}
          placeholder="2-3 sentences about the problem you were faced with and why it had to be solved."
        />
            <p className="text-gray-500">Words: {problem.split(' ').length} | 
            Seconds: {Math.floor(problem.split(' ').length / 150 * 60)} - {Math.floor(problem.split(' ').length / 100 * 60)} (Target: 20)</p>
          </div>

          <div className="mb-4">
            <h3 className="text-3xl">Solution</h3>
            <h4 className="text-xl">Adding Emotion and Drama</h4>
            <ul className="list-disc">
              <li>What did you do?</li>
              <li>That no one else could have done?</li>
              <li>What did you try that didn’t work, on your way to a successful solution?</li>
            </ul>
          </div>
          <div className="col-span-2 mb-4 ml-2">
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="7"
            value={solution}
            onChange={e => cSolution(e.target.value)}
            placeholder="In the solution you want to talk about what you, ideally that only you could do."
          />
            <p className="text-gray-500">Words: {solution.split(' ').length} | 
            Seconds: {Math.floor(solution.split(' ').length / 150 * 60)} - {Math.floor(solution.split(' ').length / 100 * 60)} (Target: 50)</p>
            </div>

            <div className="mb-4">
              <h3 className="text-3xl">Results</h3>
              <h4 className="text-xl">Dramatic and Transformational</h4>
              <ul className="list-disc">
                <li>Did you get recognition for this?</li>
                <li>Did it make your boss look better? Help him/her save face?</li>
                <li>Did you get a raise or a promotion?</li>
                <li>Did it change your reputation in the company? Did you become “the expert?”</li>
                <li>Most quantitative results and business results are NOT dramatic on their own</li>
                <li>Exceptions: Making something 10x better or completely eliminating a problem</li>
              </ul>
    </div>
    <div className="col-span-2 mb-4 ml-2">
      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="7"
      value={results}
      onChange={e => cResults(e.target.value)}
      placeholder="“Pay off” all the challenges in the problem. Don’t mention it in the problem if you didn’t have an impact on it with your solution."
    />
            <p className="text-gray-500">Words: {results.split(' ').length} | 
            Seconds: {Math.floor(results.split(' ').length / 150 * 60)} - {Math.floor(results.split(' ').length / 100 * 60)} (Target: 20)</p>
      </div>


    </div>

      <div className="container mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-xl">
        <p className="mb-2">{problem}</p>
        <p className="mb-2">{solution}</p>
        <p className="mb-2">{results}</p>
      </div>
    <span className="text-gray-500 text-xs ">
      {/* made with &lt;3 by <a href="https://tamaserdos.com">Tamas Erdos</a> */}
    </span>
    </div>
  );
}


export default App
