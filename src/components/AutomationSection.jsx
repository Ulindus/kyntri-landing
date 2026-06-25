
import robot from "../assets/agentic-robot.png";

import {
  CheckCircle2,
  Brain,
  Zap,
  Code2,
  RefreshCw,
  BarChart3,
} from "lucide-react";

function AgenticAI() {
  return (
    <section className="relative py-32 bg-[#020817] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">

        {/* LEFT */}
        <div>
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-6">
            Agentic AI Platform
          </p>

          <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Workflows That
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Think For
            </span>
            <br />
            Themselves
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-xl mb-10">
            Most automation just fires triggers. Kyntri's agentic platform
            deploys AI agents that understand context, choose the next best
            action, and execute across your existing tools — then learn from
            every run.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-cyan-400" />
              <span>Analyze data automatically</span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-cyan-400" />
              <span>Make smart decisions</span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-cyan-400" />
              <span>Execute workflows instantly</span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-cyan-400" />
              <span>Continuously improve results</span>
            </div>
          </div>

          <div className="flex gap-5 mt-12">
            <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-white">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-xl border border-white/10 hover:border-cyan-500/50 transition">
              Watch Demo
            </button>
          </div>
        </div>
        

        {/* RIGHT */}
        <div className="relative h-[720px] w-full max-w-[650px] mx-auto flex items-center justify-center overflow-visible">

          {/* Glow */}
          <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 blur-[220px] rounded-full animate-pulse" />
          <div className="absolute w-[450px] h-[450px] bg-cyan-400/10 blur-[120px] rounded-full animate-ping" />

          {/* Workflow SVG */}
         <svg
  className="absolute inset-0 w-full h-full z-5 pointer-events-none"
  viewBox="0 0 700 700"
>
  {/* Analyzing */}
{/* Analyzing */}
<path
  d="M350 120 Q350 220 350 350"
  className="workflow-line"
/>

{/* Planning */}
<path
  d="M540 170 Q470 240 350 350"
  className="workflow-line"
/>

{/* Insights */}
<path
  d="M180 340 Q260 330 350 350"
  className="workflow-line"
/>

{/* Decision */}
<path
  d="M540 430 Q450 390 350 350"
  className="workflow-line"
/>

{/* Executing */}
<path
  d="M220 560 Q280 460 350 350"
  className="workflow-line"
/>

{/* Learning */}
<path
  d="M500 590 Q430 500 350 350"
  className="workflow-line"
/>
</svg>
 {/* Analyzing -> Robot */}



          {/* Background Text */}
          <div className="absolute top-4 right-10 text-cyan-500/10 text-[140px] font-bold">
            AI
          </div>

          <div className="absolute bottom-12 right-8 text-cyan-500/10 text-[80px]">
            {"{}"}
          </div>

          <div className="absolute left-2 top-[45%] text-cyan-500/10 text-[70px]">
            {"</>"}
          </div>

          <div className="absolute bottom-24 left-8 text-cyan-500/10 text-[70px]">
            ML
          </div>

          {/* Cards */}

          <div className="absolute top-[12%] left-[28%] -translate-x-1/2 ai-card glass-card z-30">
            <Brain size={20} className="text-cyan-400" />
            <div>
              <h4>Analyzing</h4>
              <p>Processing Data</p>
            </div>
          </div>

          <div className="absolute top-[12%] left-[75%] ai-card glass-card z-30">
            <Code2 size={20} className="text-cyan-400" />
            <div>
              <h4>Planning</h4>
              <p>Generating Strategy</p>
            </div>
          </div>

          <div className="absolute top-[42%] left-[2%] ai-card glass-card z-30">
            <BarChart3 size={20} className="text-cyan-400" />
            <div>
              <h4>Insights</h4>
              <p>Pattern Detection</p>
            </div>
          </div>

          <div className="absolute top-[55%] left-[92%] ai-card glass-card z-30">
            <CheckCircle2 size={20} className="text-green-400" />
            <div>
              <h4>Decision</h4>
              <p>Approved</p>
            </div>
          </div>

          <div className="absolute bottom-[10%] left-[8%] ai-card glass-card z-30">
            <Zap size={20} className="text-yellow-400" />
            <div>
              <h4>Executing</h4>
              <p>Running Workflow</p>
            </div>
          </div>

          <div className="absolute bottom-[8%] right-[8%] ai-card glass-card z-30">
            <RefreshCw size={20} className="text-cyan-400" />
            <div>
              <h4>Learning</h4>
              <p>Improving Results</p>
            </div>
          </div>


          {/* Robot */}
          <img
            src={robot}
            alt="AI Robot"
            className="
              w-[420px]
              lg:w-[480px]
              xl:w-[520px]
              relative
              z-20
              object-contain
              animate-float
              drop-shadow-[0_0_120px_rgba(0,255,255,0.4)]
            "
          />
        </div>
        {/* AI Models Strip */}
<div className="lg:col-span-2 mt-20">
  <div className="border border-white/10 rounded-xl bg-white/[0.02] px-5 py-4">
    
    <p className="text-center text-[10px] tracking-[5px] uppercase text-gray-500 mb-3">
      Model Agnostic — The Right Model For Each Task
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      {["OpenAI", "Anthropic", "Gemini", "Perplexity"].map((model) => (
        <div
          key={model}
          className="
            px-4 py-1
            rounded-xl
            border border-cyan-500/20
            bg-cyan-500/5
            hover:bg-cyan-500/10
            hover:border-cyan-500/40
            transition-all
            duration-300
            text-white
            font-medium
          "
        >
          {model}
        </div>
      ))}
    </div>

  </div>
</div>
      </div>
    </section>
    
  );
  
}

export default AgenticAI;

