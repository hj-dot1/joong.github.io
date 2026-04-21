import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const FadeRight = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const FadeLeft = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isRevealed, setIsRevealed] = useState(false);

  // Prevent scrolling when not revealed
  useEffect(() => {
    if (!isRevealed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isRevealed]);

  return (
    <div className="font-sans text-[#333] bg-white overflow-x-hidden">
      {/* Intro Animation */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111] text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl md:text-4xl font-light tracking-wide mb-12 text-center leading-relaxed"
            >
              "보이지 않는 구조가<br/><span className="font-medium">가장 큰 차이</span>를 만듭니다."
            </motion.h1>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              onClick={() => setIsRevealed(true)}
              className="px-8 py-3 border border-white/30 rounded-none hover:bg-white hover:text-[#111] transition-all tracking-widest text-sm uppercase"
            >
              Enter
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: isRevealed ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative"
      >
        {/* Nav */}
        <nav className="absolute w-full z-50 px-8 py-8 flex justify-between items-center text-white">
          <div className="text-xl font-medium tracking-[0.2em] uppercase">Heejoong Kim</div>
          <div className="hidden md:flex space-x-12 text-xs font-light tracking-widest uppercase">
            <a href="#about" className="hover:opacity-70 transition">About Us</a>
            <a href="#project" className="hover:opacity-70 transition">Project</a>
            <a href="#contact" className="hover:opacity-70 transition">Contact</a>
            <a href="#qna" className="hover:opacity-70 transition">QnA</a>
          </div>
        </nav>

        {/* Hero */}
        <header className="relative h-screen flex items-center overflow-hidden bg-[#222]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-50" 
              alt="Background" 
            />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between mt-20">
            <div className="text-white md:w-1/2">
              <FadeUp>
                <h1 className="text-5xl md:text-6xl font-light mb-6 leading-[1.2] tracking-tight">
                  We Provide<br/>the Essential Value
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-sm md:text-base font-light opacity-80 leading-relaxed tracking-wide">
                  We Add Value to Your Project<br/>
                  We will put in precious value and structure in planning
                </p>
              </FadeUp>
            </div>
            {/* Removed Broken Image Card Box */}
          </div>
        </header>

        {/* About */}
        <section id="about" className="py-32 px-8 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative h-[600px] w-full">
              <FadeUp className="absolute left-0 top-0 w-[60%] h-[80%] z-10">
                <img 
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover shadow-sm" 
                  alt="About 1" 
                />
              </FadeUp>
              <FadeUp delay={0.2} className="absolute right-0 bottom-10 w-[55%] h-[45%] z-20">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover shadow-xl border-4 border-white" 
                  alt="About 2" 
                />
              </FadeUp>
            </div>
            <div className="md:w-1/2 flex flex-col items-end text-right">
              <FadeRight>
                <h3 className="text-2xl tracking-[0.4em] mb-8 uppercase font-light text-[#111]">About us :</h3>
                <p className="text-[#888] leading-loose mb-10 max-w-md font-light text-sm">
                  단순한 아이디어의 나열이 아닌, 실행 가능한 시스템을 만드는 데 강점이 있습니다. 
                  사용자의 경험을 분석하고, 조직이 나아갈 명확한 방향을 제시하는 것을 목표로 합니다.
                  보이지 않는 구조를 설계하여 가장 큰 차이를 만들어냅니다.
                </p>
                <button className="px-8 py-3 bg-[#7A7369] text-white text-xs tracking-widest uppercase hover:bg-[#5C564D] transition-colors">
                  read more
                </button>
              </FadeRight>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="project" className="py-32 px-8 bg-white">
          <div className="max-w-6xl mx-auto border-t border-gray-100 pt-32">
            <FadeUp className="text-center mb-16">
              <h3 className="text-2xl tracking-[0.4em] mb-4 uppercase font-light text-[#111]">Our Project</h3>
              <p className="text-[#888] text-sm mb-12 font-light">We makes solution in your space</p>
              <div className="flex justify-center space-x-8 text-xs tracking-widest text-[#999] uppercase">
                <button className="text-[#111] border-b border-[#111] pb-1">All</button>
                <button className="hover:text-[#111] transition pb-1">Strategy</button>
                <button className="hover:text-[#111] transition pb-1">System</button>
                <button className="hover:text-[#111] transition pb-1">Branding</button>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FadeUp delay={0.1}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden h-[450px] mb-4 bg-gray-50">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                      alt="Project 1" 
                    />
                  </div>
                  <h4 className="text-sm font-medium tracking-wide text-[#111]">창의융합대학 사업 기획</h4>
                  <p className="text-xs text-[#888] mt-1">Branding / Identity</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden h-[350px] mb-4 bg-gray-50">
                    <img 
                      src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                      alt="Project 2" 
                    />
                  </div>
                  <h4 className="text-sm font-medium tracking-wide text-[#111]">냥동이 운영</h4>
                  <p className="text-xs text-[#888] mt-1">System / Process</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden h-[500px] mb-4 bg-gray-50">
                    <img 
                      src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                      alt="Project 3" 
                    />
                  </div>
                  <h4 className="text-sm font-medium tracking-wide text-[#111]">교내 행사 기획</h4>
                  <p className="text-xs text-[#888] mt-1">System / UX</p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
        
        {/* Footer / Contact */}
        <footer id="contact" className="py-24 bg-[#FAFAFA] text-center px-8">
          <FadeUp>
            <h3 className="text-xl tracking-[0.3em] mb-6 uppercase font-light text-[#111]">Contact</h3>
            <p className="text-[#888] mb-10 font-light text-sm">함께 가치 있는 프로젝트를 만들어갈 파트너십을 환영합니다.</p>
            <a href="mailto:wer08066@naver.com" className="text-lg font-light hover:text-[#7A7369] transition text-[#111]">wer08066@naver.com</a>
          </FadeUp>
          <div className="mt-20 text-xs text-[#999] tracking-widest uppercase">
            © 2025 HEEJOONG KIM. All Rights Reserved.
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
