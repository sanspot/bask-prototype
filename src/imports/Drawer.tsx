import svgPaths from "./svg-d746ehqi7z";

function KeyboardArrowDown24DpE3E3E3Fill1Wght400Grad0Opsz() {
  return (
    <div className="relative size-[24px]" data-name="keyboard_arrow_down_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">Sidenafil</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <KeyboardArrowDown24DpE3E3E3Fill1Wght400Grad0Opsz />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative">
        <Container1 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#5d5d5d] text-[12px] whitespace-nowrap">Standard (50mg), 3 Month Supply</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#121212] text-[20px] text-right whitespace-nowrap">$108.00</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#121212] text-[12px] text-center">Prescription</p>
      </div>
    </div>
  );
}

function ProductNameCategory() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Product name + category">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[31.2px] not-italic relative shrink-0 text-[#121212] text-[24px] whitespace-nowrap">Sildenafil</p>
      <div className="content-stretch flex h-[22px] items-center justify-center px-[9px] py-[5px] relative rounded-[9999px] shrink-0 w-[108px]" data-name="Badges">
        <div aria-hidden="true" className="absolute border border-[#121212] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <Content1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <ProductNameCategory />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#5d5d5d] text-[14px] w-full">Effective, FDA-approved treatment for erectile dysfunction. Results typically begin within 30-60 minutes and last up to 4 hours</p>
    </div>
  );
}

function Alert() {
  return (
    <div className="bg-[#f8f8f8] relative rounded-[8px] shrink-0 w-full" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start not-italic p-[17px] relative text-[#121212] w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[16px] tracking-[-0.4px] w-full">Medical Review Included</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full">Your selection will be reviewed by a licensed physician, free of charge.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Container />
      <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-name="Divider">
        <div className="size-full" />
      </div>
      <Content />
      <Alert />
    </div>
  );
}

export default function Drawer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[16px] relative rounded-[24px] size-full" data-name="Drawer">
      <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none rounded-[24px]" />
      <Frame1 />
      <div className="bg-[#2a71e5] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Continue to Shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
}