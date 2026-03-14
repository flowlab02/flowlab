/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  PenTool, 
  Layout, 
  TrendingUp, 
  ShoppingBag, 
  Layers, 
  Maximize, 
  Zap,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORKS', href: '#works' },
    { name: 'SERVICES', href: '#strengths' },
    { name: 'PROCESS', href: '#process' },
    { name: 'PRODUCT', href: '#product' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-brand-line bg-brand-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-tighter">FLOW LAB</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-xs font-medium tracking-widest hover:text-brand-muted transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-brand-bg border-b border-brand-line px-6 py-8 flex flex-col space-y-6"
        >
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, number }: { title: string, subtitle?: string, number?: string }) => (
  <div className="mb-16">
    {number && <span className="font-mono text-xs opacity-40 mb-2 block">{number}</span>}
    <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-4 uppercase">{title}</h2>
    {subtitle && <p className="text-brand-muted max-w-xl text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 border border-brand-line hover:border-brand-ink transition-colors group">
    <Icon className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity" size={32} />
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-brand-muted text-sm leading-relaxed">{description}</p>
  </div>
);

const ProductCard = ({ title, features, isPopular }: { title: string, features: string[], isPopular?: boolean }) => (
  <div className={cn(
    "p-10 border flex flex-col h-full transition-all duration-500",
    isPopular ? "border-brand-ink bg-white/5" : "border-brand-line"
  )}>
    <div className="mb-8">
      <h3 className="text-2xl font-medium mb-2 uppercase tracking-tight">{title}</h3>
    </div>
    <ul className="space-y-4 mb-12 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex items-start text-sm text-brand-muted">
          <CheckCircle2 size={16} className="mr-3 mt-0.5 flex-shrink-0 text-brand-ink" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a 
      href="#contact"
      className={cn(
        "w-full py-4 text-xs font-bold tracking-widest uppercase transition-all text-center",
        isPopular ? "bg-brand-ink text-brand-bg hover:opacity-90" : "border border-brand-ink hover:bg-brand-ink hover:text-brand-bg"
      )}
    >
      상담 신청하기
    </a>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 z-0">
          <iframe 
            src='https://my.spline.design/aidatamodelinteraction-VU2eE1PPyffa7YfAd0FV3DdF/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="opacity-100"
          ></iframe>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <SectionHeader 
            number="01"
            title="ABOUT US" 
            subtitle="Flow Lab은 단순한 웹사이트 제작을 넘어, 브랜드의 가치를 시각화하고 실질적인 매출 증대로 이어지는 디지털 경험을 설계합니다."
          />
          <div className="space-y-8 text-brand-muted leading-relaxed">
            <p>
              우리는 디자인의 힘을 믿습니다. 하지만 디자인만으로는 부족합니다. 
              사용자의 흐름(Flow)을 이해하고, 비즈니스 목표에 도달할 수 있는 최적의 경로를 설계하는 것이 우리의 핵심 역량입니다.
            </p>
            <p>
              Flow Lab은 기획부터 디자인, 개발, 그리고 런칭 후 운영까지 
              모든 과정에서 고객사와 긴밀하게 소통하며 최고의 결과물을 만들어냅니다.
            </p>
          </div>
        </div>
      </section>

      {/* Hooking Section (Moved here) */}
      <section className="py-32 bg-brand-bg overflow-hidden border-t border-brand-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-12 md:p-20 border border-brand-line bg-white/[0.02] max-w-4xl w-full text-center"
            >
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-ink/40" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-ink/40" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-ink/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-ink/40" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-8 block">Digital Manifesto</span>
                <h2 className="text-1xl md:text-4xl font-light tracking-tighter mb-8 leading-tight">
                  웹사이트는 더 이상 명함이 아닙니다.
                </h2>
                <div className="w-12 h-px bg-brand-line mx-auto mb-8" />
                <p className="text-xl md:text-2xl text-brand-muted font-light leading-relaxed">
                  브랜드의 매출을 만드는 <br className="md:hidden" />
                  <span className="text-brand-ink font-medium">가장 강력한 영업 채널</span>입니다.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-light tracking-tight">고객은 검색하고, 비교하고, 판단합니다.</h3>
                <p className="text-brand-muted leading-relaxed">그리고 그 모든 과정은 웹사이트에서 이루어집니다. 문제는 대부분의 웹사이트가 그저 존재만 할 뿐, 아무것도 만들어내지 못한다는 것입니다.</p>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-sm tracking-widest uppercase opacity-40">혹시 이런 경험이 있으신가요?</h4>
                <div className="grid grid-cols-1 gap-4 relative">
                  {[
                    "홈페이지는 있지만 문의가 거의 없다",
                    "브랜드는 괜찮은데 웹사이트가 그 가치를 못 보여준다",
                    "방문자는 있는데 전환이 일어나지 않는다",
                    "디자인은 예쁘지만 비즈니스에는 도움이 안 된다"
                  ].map((text, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay: i * 0.1 
                      }}
                      viewport={{ once: true }}
                      className="p-6 border border-brand-line bg-white/5 flex items-center space-x-4 hover:bg-white/10 transition-colors cursor-default"
                    >
                      <div className="w-2 h-2 bg-brand-ink rounded-full" />
                      <span className="text-lg font-light">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-brand-ink/5 blur-3xl rounded-full"></div>
              <div className="relative p-12 border border-brand-line bg-brand-bg space-y-8">
                <div className="inline-block px-4 py-1 border border-brand-ink text-[10px] tracking-widest uppercase">Solution</div>
                <h3 className="text-4xl font-light tracking-tighter leading-tight">Flow Lab은 <br /> 다르게 만듭니다.</h3>
                <p className="text-brand-muted">단순히 웹사이트를 디자인하지 않습니다. <br /> <span className="text-brand-ink font-medium">브랜드 → 사용자 경험 → 전환 구조</span> <br /> 이 세 가지를 기반으로 고객이 행동하게 만드는 웹사이트를 설계합니다.</p>
                
                <div className="pt-8 border-t border-brand-line space-y-4">
                  <p className="text-xs tracking-widest uppercase opacity-40">우리는 다음을 고민합니다</p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center space-x-3">
                      <Zap size={14} className="text-brand-ink" />
                      <span>방문자는 왜 이 브랜드를 선택해야 하는가</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Zap size={14} className="text-brand-ink" />
                      <span>어떤 흐름에서 문의와 구매가 발생하는가</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Zap size={14} className="text-brand-ink" />
                      <span>브랜드의 가치를 어떻게 시각적으로 전달할 것인가</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="02"
            title="OUR STRENGTHS" 
            subtitle="Flow Lab과 함께라면 웹사이트 제작이 더 이상 고민이 아닙니다. 압도적인 혜택과 퀄리티를 경험하세요."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-line border border-brand-line">
            <FeatureCard 
              icon={Globe}
              title="도메인 & 호스팅 1년 무료"
              description="초기 비용 부담을 덜어드리기 위해 도메인과 고성능 호스팅을 1년간 무료로 제공합니다."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="독립형 (소유권 완전 이전)"
              description="임대형이 아닌 독립형 제작으로, 사이트의 모든 소유권과 데이터를 고객님께 완전 이전해 드립니다."
            />
            <FeatureCard 
              icon={PenTool}
              title="무료 기획 서비스"
              description="전문 기획자가 비즈니스 모델을 분석하여 최적의 메뉴 구조와 콘텐츠 배치를 무료로 설계해 드립니다."
            />
            <FeatureCard 
              icon={Layout}
              title="탁월한 디자인"
              description="트렌디하고 감각적인 디자인으로 브랜드의 프리미엄 이미지를 구축합니다."
            />
            <FeatureCard 
              icon={Layers}
              title="디자인 시안 제공"
              description="제작 전 디자인 시안을 미리 확인하고 피드백을 반영하여 만족도 높은 결과물을 보장합니다."
            />
            <FeatureCard 
              icon={TrendingUp}
              title="매출 중심 사이트 제작"
              description="단순한 정보 전달을 넘어 전환율을 높이는 UI/UX 설계로 실제 매출 증대에 기여합니다."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="works" className="py-32 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <SectionHeader 
            number="03"
            title="PORTFOLIO" 
            subtitle="Flow Lab의 감각적인 포트폴리오를 확인해 보세요."
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {/* Second Portfolio Image (Collage 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full overflow-hidden rounded-lg border border-white/10"
          >
            <img 
              src="https://raw.githubusercontent.com/flowlab02/flowlab/refs/heads/img/2.png" 
              alt="Portfolio Collage 2" 
              className="w-full h-[400px] md:h-[600px] lg:h-auto object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Decorative Flowing Shapes */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-ink/20 to-transparent -translate-y-1/2 z-0"></div>
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-0 w-64 h-64 bg-brand-ink/5 rounded-full blur-3xl -translate-y-1/2 z-0"
        ></motion.div>

        <SectionHeader 
          number="04"
          title="PROCESS" 
          subtitle="체계적이고 투명한 제작 과정을 통해 신뢰할 수 있는 파트너가 되어 드립니다."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {[
            { 
              step: '01', 
              title: 'Consultation', 
              subtitle: '상담 및 분석',
              desc: '고객의 비즈니스 모델을 심층 분석하고, 웹사이트를 통해 달성하고자 하는 핵심 목표를 설정합니다. 경쟁사 분석과 타겟 오디언스 정의가 포함됩니다.' 
            },
            { 
              step: '02', 
              title: 'Planning', 
              subtitle: '전략적 기획',
              desc: '사용자 경험(UX)을 최우선으로 고려한 사이트 맵과 와이어프레임을 설계합니다. 매출 전환을 유도하는 콘텐츠 배치와 흐름을 확정합니다.' 
            },
            { 
              step: '03', 
              title: 'Design', 
              subtitle: '크리에이티브 디자인',
              desc: '브랜드의 아이덴티티를 극대화하는 감각적인 비주얼 가이드를 제안합니다. 최신 트렌드를 반영한 고퀄리티 시안을 통해 브랜드 가치를 높입니다.' 
            },
            { 
              step: '04', 
              title: 'Development', 
              subtitle: '안정적 구축',
              desc: '모든 기기에서 완벽하게 작동하는 반응형 웹을 구현합니다. 검색엔진 최적화(SEO)와 빠른 로딩 속도를 보장하는 최적의 코딩을 진행합니다.' 
            },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-8xl font-light opacity-5 mb-6 group-hover:opacity-10 transition-opacity">{item.step}</div>
              <div className="mb-4">
                <h3 className="text-xl font-medium uppercase tracking-tight">{item.title}</h3>
                <span className="text-xs text-brand-muted font-light">{item.subtitle}</span>
              </div>
              <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
              {i < 3 && <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 opacity-20 -translate-y-1/2" size={20} />}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="05"
            title="PRODUCT" 
            subtitle="비즈니스 규모와 목적에 맞는 합리적인 상품 구성을 제안합니다."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              title="기본형"
              features={[
                "랜딩페이지형 (1페이지)",
                "반응형 웹사이트",
                "기본 SEO 최적화",
                "도메인/호스팅 1년 무료",
                "제작 기간: 1주일"
              ]}
            />
            <ProductCard 
              title="확장형"
              isPopular
              features={[
                "브랜드 사이트 (5페이지 내외)",
                "반응형 웹사이트",
                "고급 애니메이션 효과",
                "관리자 페이지 제공",
                "도메인/호스팅 1년 무료",
                "제작 기간: 2-3주일"
              ]}
            />
            <ProductCard 
              title="고급형"
              features={[
                "맞춤형 기능 구현",
                "다국어 지원 가능",
                "고급 보안 설정",
                "유지보수 가이드 제공",
                "도메인/호스팅 1년 무료",
                "제작 기간: 4주일 이상"
              ]}
            />
            <ProductCard 
              title="쇼핑몰"
              features={[
                "결제 시스템 연동",
                "상품/주문 관리 시스템",
                "회원 관리 기능",
                "쿠폰/적립금 시스템",
                "도메인/호스팅 1년 무료",
                "제작 기간: 5주일 이상"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeader 
              number="06"
              title="CONTACT" 
              subtitle="새로운 프로젝트를 시작할 준비가 되셨나요? Flow Lab이 당신의 아이디어를 현실로 만들어 드립니다."
            />
            <div className="space-y-8 mt-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 border border-brand-line flex items-center justify-center">
                  <Mail size={20} className="opacity-60" />
                </div>
                <div>
                  <div className="text-xs opacity-40 uppercase tracking-widest">Email</div>
                  <div className="text-lg">flowlab02@naver.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 border border-brand-line flex items-center justify-center">
                  <Phone size={20} className="opacity-60" />
                </div>
                <div>
                  <div className="text-xs opacity-40 uppercase tracking-widest">Phone</div>
                  <div className="text-lg">010-7963-8202</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 border border-brand-line flex items-center justify-center">
                  <MapPin size={20} className="opacity-60" />
                </div>
                <div>
                  <div className="text-xs opacity-40 uppercase tracking-widest">Office</div>
                  <div className="text-lg">서울시 강남구 테헤란로 70길 12, 402-795A(대치동, H타워)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-10 border border-brand-line">
            <h3 className="text-2xl font-light mb-8 uppercase tracking-tight">상담 신청하기</h3>
            <form 
              action="https://formspree.io/f/maqpjokq" 
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest opacity-40 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-brand-line py-2 focus:border-brand-ink outline-none transition-colors" 
                    placeholder="성함" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest opacity-40 mb-2">Phone</label>
                  <input 
                    type="text" 
                    name="phone"
                    required
                    className="w-full bg-transparent border-b border-brand-line py-2 focus:border-brand-ink outline-none transition-colors" 
                    placeholder="연락처" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest opacity-40 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-brand-line py-2 focus:border-brand-ink outline-none transition-colors" 
                  placeholder="이메일 주소" 
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest opacity-40 mb-2">Message</label>
                <textarea 
                  name="message"
                  rows={4} 
                  className="w-full bg-transparent border-b border-brand-line py-2 focus:border-brand-ink outline-none transition-colors resize-none" 
                  placeholder="문의 내용을 남겨주세요"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-brand-ink text-brand-bg text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity mt-4"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-brand-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="text-3xl font-bold tracking-tighter mb-8 md:mb-0">FLOW LAB</div>
            <div className="flex space-x-6">
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Instagram size={20} /></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Facebook size={20} /></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Twitter size={20} /></a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-xs tracking-widest opacity-40 mb-12">
            <div>
              <div className="mb-4 font-bold">CONTACT</div>
              <div>010-7963-8202</div>
              <div>flowlab02@naver.com</div>
            </div>
            <div>
              <div className="mb-4 font-bold">ADDRESS</div>
              <div>서울시 강남구 테헤란로 70길 12</div>
              <div>402-795A(대치동, H타워)</div>
            </div>
            <div>
              <div className="mb-4 font-bold">BUSINESS</div>
              <div>사업자등록번호: 587-15-02606</div>
              <div>대표: 이지원</div>
            </div>
            <div>
              <div className="mb-4 font-bold">LEGAL</div>
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
            </div>
          </div>
          <div className="text-[10px] tracking-[0.2em] opacity-20 uppercase">
            Copyright © Flow Lab. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
