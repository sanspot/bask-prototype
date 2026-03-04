import { useState } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-v4xzoqb2di";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28.8px] relative shrink-0 text-[#111827] text-[24px] w-full">Choose your plan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Select the strength and duration that fits your lifestyle</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#121212] text-[14px] top-[-0.5px] whitespace-nowrap">Choose Dosage</p>
    </div>
  );
}

function Dot1() {
  return <div className="bg-[#2a71e5] rounded-[9999px] shrink-0 size-[10px]" data-name="Dot" />;
}

function Dot() {
  return (
    <div className="content-stretch flex h-[10px] items-center justify-center relative shrink-0 w-full" data-name="Dot">
      <Dot1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">Recommended</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">Standard</p>
      <div className="bg-[#2a71e5] h-[22px] relative rounded-[9999px] shrink-0 w-[108px]" data-name="Badges">
        <div aria-hidden="true" className="absolute border border-[#2a71e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[9px] py-[5px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">25mg (2 tablet daily)- For first time users</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[21px] min-h-px min-w-px not-italic relative text-[14px]" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#121212] whitespace-nowrap">Strong</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#5d5d5d] w-[min-content] text-left">50mg (1 tablet daily) - When lower doses do not provide sufficient relief</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">Extra Strength</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] min-w-full relative shrink-0 text-[#4b5563] text-[12px] w-[min-content] text-left">80mg (1 tablet daily) - When lower doses do not provide sufficient relief</p>
    </div>
  );
}

function DosageOptions({ selectedDosage, onSelect }: { selectedDosage: string; onSelect: (dosage: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <button 
        onClick={() => onSelect('standard')}
        className={`w-[358px] content-stretch flex gap-[8px] items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0 cursor-pointer transition-all ${
          selectedDosage === 'standard' ? 'bg-[#e2f3ff]' : 'bg-white'
        }`}
        data-name="Radio/Base Component"
      >
        <div aria-hidden="true" className={`absolute ${selectedDosage === 'standard' ? 'border-2 border-[#2a71e5]' : 'border border-[#e4e4e4]'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        <div className={`content-stretch flex flex-col items-start pb-[2px] pt-[5px] px-[2px] relative rounded-[9999px] shrink-0 size-[20px] ${selectedDosage === 'standard' ? 'bg-white' : ''}`} data-name="Radio/ Base UI">
          <div aria-hidden="true" className={`absolute border-2 ${selectedDosage === 'standard' ? 'border-[#2a71e5]' : 'border-[#5d5d5d]'} border-solid inset-0 pointer-events-none rounded-[9999px]`} />
          {selectedDosage === 'standard' && <Dot />}
        </div>
        <Container2 />
      </button>

      <button 
        onClick={() => onSelect('strong')}
        className={`w-[358px] content-stretch flex gap-[8px] items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0 cursor-pointer transition-all ${
          selectedDosage === 'strong' ? 'bg-[#e2f3ff]' : 'bg-white'
        }`}
        data-name="Radio/Base Component"
      >
        <div aria-hidden="true" className={`absolute ${selectedDosage === 'strong' ? 'border-2 border-[#2a71e5]' : 'border border-[#e4e4e4]'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        <div className={`relative rounded-[9999px] shrink-0 size-[20px] ${selectedDosage === 'strong' ? 'bg-white flex flex-col items-start pb-[2px] pt-[5px] px-[2px]' : ''}`} data-name="Radio/ Base UI">
          <div aria-hidden="true" className={`absolute border-2 ${selectedDosage === 'strong' ? 'border-[#2a71e5]' : 'border-[#5d5d5d]'} border-solid inset-0 pointer-events-none rounded-[9999px]`} />
          {selectedDosage === 'strong' && <Dot />}
        </div>
        <Container4 />
      </button>

      <button 
        onClick={() => onSelect('extra')}
        className={`w-[358px] content-stretch flex gap-[8px] items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0 cursor-pointer transition-all ${
          selectedDosage === 'extra' ? 'bg-[#e2f3ff]' : 'bg-white'
        }`}
        data-name="Radio/Base Component"
      >
        <div aria-hidden="true" className={`absolute ${selectedDosage === 'extra' ? 'border-2 border-[#2a71e5]' : 'border border-[#e4e4e4]'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        <div className={`relative rounded-[9999px] shrink-0 size-[20px] ${selectedDosage === 'extra' ? 'bg-white flex flex-col items-start pb-[2px] pt-[5px] px-[2px]' : ''}`} data-name="Radio/ Base UI">
          <div aria-hidden="true" className={`absolute border-2 ${selectedDosage === 'extra' ? 'border-[#2a71e5]' : 'border-[#5d5d5d]'} border-solid inset-0 pointer-events-none rounded-[9999px]`} />
          {selectedDosage === 'extra' && <Dot />}
        </div>
        <Container5 />
      </button>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#121212] text-[14px] top-[-0.5px] whitespace-nowrap">Choose Supply Duration</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#121212] text-[12px] text-center">Save 20%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">3 Month Supply</p>
      <div className="bg-[#b5feb6] h-[22px] relative rounded-[9999px] shrink-0 w-[89px]" data-name="Badges">
        <div aria-hidden="true" className="absolute border border-[#00921b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[9px] py-[5px] relative size-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center not-italic relative shrink-0 text-[#121212] w-full whitespace-nowrap" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[18px]">$108.00</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[21px] line-through relative shrink-0 text-[14px]">$135.00</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[314px]" data-name="Container">
      <Container8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">Repeats every 3 months, cancel anytime</p>
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full whitespace-nowrap" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[#121212] text-[18px]">$45.00</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#5d5d5d] text-[14px]">/month</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#121212] text-[14px] w-full text-left">Monthly Supply</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full text-left">Repeats every months, cancel anytime</p>
      <Container11 />
    </div>
  );
}

function SupplyOptions({ selectedSupply, onSelect }: { selectedSupply: string; onSelect: (supply: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <button 
        onClick={() => onSelect('3month')}
        className={`w-[358px] content-stretch flex gap-[8px] items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0 cursor-pointer transition-all ${
          selectedSupply === '3month' ? 'bg-[#e2f3ff]' : 'bg-white'
        }`}
        data-name="Radio/Base Component"
      >
        <div aria-hidden="true" className={`absolute ${selectedSupply === '3month' ? 'border-2 border-[#2a71e5]' : 'border border-[#e4e4e4]'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        <div className={`content-stretch flex flex-col items-start pb-[2px] pt-[5px] px-[2px] relative rounded-[9999px] shrink-0 size-[20px] ${selectedSupply === '3month' ? 'bg-white' : ''}`} data-name="Radio/ Base UI">
          <div aria-hidden="true" className={`absolute border-2 ${selectedSupply === '3month' ? 'border-[#2a71e5]' : 'border-[#5d5d5d]'} border-solid inset-0 pointer-events-none rounded-[9999px]`} />
          {selectedSupply === '3month' && <Dot />}
        </div>
        <Container7 />
      </button>

      <button 
        onClick={() => onSelect('monthly')}
        className={`w-[358px] content-stretch flex gap-[8px] items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0 cursor-pointer transition-all ${
          selectedSupply === 'monthly' ? 'bg-[#e2f3ff]' : 'bg-white'
        }`}
        data-name="Radio/Base Component"
      >
        <div aria-hidden="true" className={`absolute ${selectedSupply === 'monthly' ? 'border-2 border-[#2a71e5]' : 'border border-[#e4e4e4]'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        <div className={`relative rounded-[9999px] shrink-0 size-[20px] ${selectedSupply === 'monthly' ? 'bg-white flex flex-col items-start pb-[2px] pt-[5px] px-[2px]' : ''}`} data-name="Radio/ Base UI">
          <div aria-hidden="true" className={`absolute border-2 ${selectedSupply === 'monthly' ? 'border-[#2a71e5]' : 'border-[#5d5d5d]'} border-solid inset-0 pointer-events-none rounded-[9999px]`} />
          {selectedSupply === 'monthly' && <Dot />}
        </div>
        <Container10 />
      </button>
    </div>
  );
}

function Content({ selectedDosage, selectedSupply, onSelectDosage, onSelectSupply }: any) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-start left-0 pt-[24px] px-[16px] top-[148px] w-[393px] overflow-y-auto pb-[200px]" data-name="Content" style={{ maxHeight: 'calc(100vh - 148px)' }}>
      <Header />
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[358px]">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <Label />
          <DosageOptions selectedDosage={selectedDosage} onSelect={onSelectDosage} />
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <Label1 />
          <SupplyOptions selectedSupply={selectedSupply} onSelect={onSelectSupply} />
        </div>
      </div>
    </div>
  );
}

function ButtonStateRow() {
  return (
    <div className="content-stretch flex items-start relative size-[20px]" data-name="ButtonStateRow">
      <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-white content-stretch flex gap-[16px] h-[44px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer" data-name="Button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ButtonStateRow />
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#121212] text-[16px] text-center whitespace-nowrap">Back</p>
    </button>
  );
}

function Container12({ onBack }: { onBack: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[54px] items-center min-h-px min-w-px relative" data-name="Container">
      <Button onClick={onBack} />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#121212] text-[16px] text-center w-[84px]">Checkout</p>
    </div>
  );
}

function StepCount() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between leading-[16.8px] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Step count">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#121212]">YOUR CART</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d5d5d]">Step 1 of 4</p>
    </div>
  );
}

function StepBar() {
  return (
    <div className="content-stretch flex gap-[4px] h-[4px] items-center relative shrink-0 w-full" data-name="Step bar">
      <div className="bg-[#2a71e5] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
      <div className="bg-[#f2f2f2] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
      <div className="bg-[#f2f2f2] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
      <div className="bg-[#f2f2f2] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[9999px]" data-name=".Stepper/Base elements/Bars" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <StepCount />
      <StepBar />
    </div>
  );
}

function NavStepper({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[393px]" data-name="Nav+Stepper">
      <div className="bg-white content-stretch flex flex-col h-[76px] items-start justify-between relative shrink-0 w-full" data-name="Nav/Top Nav">
        <Container12 onBack={onBack} />
        <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-name="Divider">
          <div className="size-full" />
        </div>
      </div>
      <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Stepper">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function KeyboardArrowDown24DpE3E3E3Fill1Wght400Grad0Opsz({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`relative shrink-0 size-[24px] transition-transform ${isOpen ? 'rotate-180' : ''}`} data-name="keyboard_arrow_down_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Drawer({ isOpen, onToggle, onContinue, selectedSupply, selectedDosage }: any) {
  // Calculate price based on supply duration
  const getPriceInfo = () => {
    if (selectedSupply === '3month') {
      return {
        total: '$108.00',
        description: '3 Month Supply',
        subtotal: '$108.00',
        shipping: 'Free'
      };
    } else {
      return {
        total: '$45.00',
        description: 'Monthly Supply',
        subtotal: '$45.00',
        shipping: 'Free'
      };
    }
  };

  const priceInfo = getPriceInfo();

  // Get dosage display name
  const getDosageName = () => {
    if (selectedDosage === 'standard') return 'Standard (25mg)';
    if (selectedDosage === 'strong') return 'Strong (50mg)';
    return 'Extra Strength (80mg)';
  };

  return (
    <div 
      className="fixed left-1/2 -translate-x-1/2 w-[393px] bg-white transition-all duration-300 ease-in-out" 
      data-name="Drawer" 
      style={{ 
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        bottom: 0,
        maxHeight: isOpen ? '70vh' : 'auto'
      }}
    >
      <div className="content-stretch flex flex-col items-start p-[16px]" style={{ gap: isOpen ? '32px' : '16px' }}>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <button onClick={onToggle} className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer" data-name="Container">
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">Sidenafil</p>
                  <KeyboardArrowDown24DpE3E3E3Fill1Wght400Grad0Opsz isOpen={isOpen} />
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] whitespace-nowrap">{getDosageName()}, {priceInfo.description}</p>
              </div>
            </div>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#121212] text-[20px] text-right whitespace-nowrap">{priceInfo.total}</p>
          </button>

          {isOpen && (
            <>
              <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-name="Divider">
                <div className="size-full" />
              </div>
              
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full animate-in fade-in slide-in-from-bottom-4 duration-300" data-name="Content">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Product name + category">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[31.2px] not-italic relative shrink-0 text-[#121212] text-[24px] whitespace-nowrap">Sildenafil</p>
                  <div className="content-stretch flex h-[22px] items-center justify-center px-[9px] py-[5px] relative rounded-[9999px] shrink-0 w-[108px]" data-name="Badges">
                    <div aria-hidden="true" className="absolute border border-[#121212] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
                        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#121212] text-[12px] text-center">Prescription</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Effective, FDA-approved treatment for erectile dysfunction. Results typically begin within 30-60 minutes and last up to 4 hours</p>
              </div>
              
              <div className="bg-[#f8f8f8] relative rounded-[8px] shrink-0 w-full" data-name="Alert">
                <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex flex-col gap-[10px] items-start not-italic p-[17px] relative text-[#121212] w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[16px] tracking-[-0.4px] w-full">Medical Review Included</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full">Your selection will be reviewed by a licensed physician, free of charge.</p>
                </div>
              </div>
            </>
          )}
        </div>

        <button onClick={onContinue} className="bg-[#2a71e5] h-[44px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#1e5bbf] transition-colors" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Continue to Shipping</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function ChoosePlan() {
  const navigate = useNavigate();
  const [selectedDosage, setSelectedDosage] = useState('standard');
  const [selectedSupply, setSelectedSupply] = useState('3month');
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
      <div className="bg-white relative w-[393px] h-screen overflow-hidden shadow-2xl" data-name="Choose Your Plan - HealthConnect">
        <Content
          selectedDosage={selectedDosage}
          selectedSupply={selectedSupply}
          onSelectDosage={setSelectedDosage}
          onSelectSupply={setSelectedSupply}
        />
        <NavStepper onBack={() => navigate(-1)} />
        <Drawer
          isOpen={drawerOpen}
          onToggle={() => setDrawerOpen(!drawerOpen)}
          onContinue={() => navigate('/shipping')}
          selectedSupply={selectedSupply}
          selectedDosage={selectedDosage}
        />
      </div>
    </div>
  );
}