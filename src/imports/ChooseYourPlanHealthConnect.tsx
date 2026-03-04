import svgPaths from "./svg-v4xzoqb2di";

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
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#5d5d5d] w-[min-content]">50mg (1 tablet daily) - When lower doses do not provide sufficient relief</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">Extra Strength</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] min-w-full relative shrink-0 text-[#4b5563] text-[12px] w-[min-content]">80mg (1 tablet daily) - When lower doses do not provide sufficient relief</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="bg-[#e2f3ff] content-stretch flex gap-[8px] items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0 w-[358px]" data-name="Radio/Base Component">
        <div aria-hidden="true" className="absolute border-2 border-[#2a71e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-white content-stretch flex flex-col items-start pb-[2px] pt-[5px] px-[2px] relative rounded-[9999px] shrink-0 size-[20px]" data-name="Radio/ Base UI">
          <div aria-hidden="true" className="absolute border-2 border-[#2a71e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          <Dot />
        </div>
        <Container2 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0 w-[358px]" data-name="Radio/Base Component">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="relative rounded-[9999px] shrink-0 size-[20px]" data-name="Radio/ Base UI">
          <div aria-hidden="true" className="absolute border-2 border-[#5d5d5d] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        </div>
        <Container4 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0 w-[358px]" data-name="Radio/Base Component">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="relative rounded-[9999px] shrink-0 size-[20px]" data-name="Radio/ Base UI">
          <div aria-hidden="true" className="absolute border-2 border-[#5d5d5d] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        </div>
        <Container5 />
      </div>
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

function Dot3() {
  return <div className="bg-[#2a71e5] rounded-[9999px] shrink-0 size-[10px]" data-name="Dot" />;
}

function Dot2() {
  return (
    <div className="content-stretch flex h-[10px] items-center justify-center relative shrink-0 w-full" data-name="Dot">
      <Dot3 />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#121212] text-[14px] w-full">Monthly Supply</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Repeats every months, cancel anytime</p>
      <Container11 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="bg-[#e2f3ff] content-stretch flex gap-[8px] items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0 w-[358px]" data-name="Radio/Base Component">
        <div aria-hidden="true" className="absolute border-2 border-[#2a71e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-white content-stretch flex flex-col items-start pb-[2px] pt-[5px] px-[2px] relative rounded-[9999px] shrink-0 size-[20px]" data-name="Radio/ Base UI">
          <div aria-hidden="true" className="absolute border-2 border-[#2a71e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          <Dot2 />
        </div>
        <Container7 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-start px-[8px] py-[16px] relative rounded-[8px] shrink-0 w-[358px]" data-name="Radio/Base Component">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="relative rounded-[9999px] shrink-0 size-[20px]" data-name="Radio/ Base UI">
          <div aria-hidden="true" className="absolute border-2 border-[#5d5d5d] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        </div>
        <Container10 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[358px]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Radio Button/Group">
        <Label />
        <Container1 />
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Radio Button/Group">
        <Label1 />
        <Container6 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-start left-0 pt-[24px] px-[16px] top-[148px] w-[393px]" data-name="Content">
      <Header />
      <Container />
    </div>
  );
}

function ButtonStateRow() {
  return (
    <div className="content-stretch flex items-start relative size-[20px]" data-name="ButtonStateRow">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#121212] text-[20px] text-center whitespace-nowrap">arrow_forward</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] h-[44px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ButtonStateRow />
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#121212] text-[16px] text-center whitespace-nowrap">Back</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[54px] items-center min-h-px min-w-px relative" data-name="Container">
      <Button />
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

function NavStepper() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[393px]" data-name="Nav+Stepper">
      <div className="bg-white content-stretch flex flex-col h-[76px] items-start justify-between relative shrink-0 w-full" data-name="Nav/Top Nav">
        <Container12 />
        <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-name="Divider">
          <div className="size-full" />
        </div>
      </div>
      <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Stepper">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start justify-between px-[16px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function KeyboardArrowDown24DpE3E3E3Fill1Wght400Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">Sidenafil</p>
      <KeyboardArrowDown24DpE3E3E3Fill1Wght400Grad0Opsz />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative">
        <Container15 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] whitespace-nowrap">Standard (50mg), 3 Month Supply</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#121212] text-[20px] text-right whitespace-nowrap">$108.00</p>
    </div>
  );
}

export default function ChooseYourPlanHealthConnect() {
  return (
    <div className="bg-white relative size-full" data-name="Choose Your Plan - HealthConnect">
      <Content />
      <NavStepper />
      <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col gap-[16px] items-start left-1/2 p-[16px] w-[393px]" data-name="Drawer">
        <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
        <Container14 />
        <div className="bg-[#2a71e5] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Continue to Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}